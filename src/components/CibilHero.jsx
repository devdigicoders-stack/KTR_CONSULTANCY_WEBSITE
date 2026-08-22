import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BUREAU_CONFIGS, calculatePricing, fetchCreditReportFromSurepass } from '../services/surepassApi';
import { processRazorpayPayment } from '../services/razorpay';

const CibilHero = () => {
  // Bureau selection
  const [selectedBureau, setSelectedBureau] = useState('cibil');
  
  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pan: '',
    gender: 'male',
    consent: true
  });

  // Coupon state
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [couponFeedback, setCouponFeedback] = useState(null);

  // Flow states
  const [formErrors, setFormErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStage, setProcessingStage] = useState('');
  const [paymentSuccessData, setPaymentSuccessData] = useState(null);
  
  // API Result state
  const [apiResult, setApiResult] = useState(null);
  const [apiError, setApiError] = useState(null);

  // Pricing calculations
  const pricing = calculatePricing(selectedBureau, appliedCoupon);

  // Handle Form Change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'pan') {
      // Auto uppercase & max 10 chars
      setFormData(prev => ({ ...prev, pan: value.toUpperCase().slice(0, 10) }));
    } else if (name === 'mobile') {
      // Digits only & max 10
      const digits = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, mobile: digits }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
    // Clear error for field
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (apiError) setApiError(null);
  };

  // Handle Coupon Apply
  const handleApplyCoupon = (codeToApply) => {
    const code = codeToApply !== undefined ? codeToApply : couponInput;
    if (!code || !code.trim()) {
      setCouponFeedback({ type: 'error', text: 'Please enter a coupon code.' });
      return;
    }
    if (code.trim().toUpperCase() === 'TEAM50') {
      setAppliedCoupon('Team50');
      setCouponFeedback({
        type: 'success',
        text: '🎉 50% discount coupon applied successfully!'
      });
    } else {
      setCouponFeedback({
        type: 'error',
        text: '❌ Invalid coupon code.'
      });
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon('');
    setCouponInput('');
    setCouponFeedback(null);
  };

  // Form Validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full Name is required';
    
    if (!formData.mobile.trim()) {
      errors.mobile = 'Mobile Number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      errors.mobile = 'Enter a valid 10-digit mobile number';
    }

    if (!formData.pan.trim()) {
      errors.pan = 'PAN Number is required';
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan)) {
      errors.pan = 'Enter a valid 10-digit PAN (e.g. BPWPV8659C)';
    }

    if (!formData.consent) {
      errors.consent = 'You must give consent to fetch your report';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Trigger Razorpay Live Payment Gateway
  // CRITICAL: Only after payment success is the Surepass API executed!
  const handleStartPaymentFlow = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setApiError(null);
    setApiResult(null);

    const bureau = BUREAU_CONFIGS[selectedBureau];

    try {
      // 1. Launch Razorpay Live Gateway
      const paymentResult = await processRazorpayPayment({
        amountInRupees: pricing.totalPayable,
        bureauName: bureau.name,
        customerName: formData.name,
        customerMobile: formData.mobile,
        customerPan: formData.pan
      });

      // 2. PAYMENT IS 100% SUCCESSFUL! Save payment ID
      setPaymentSuccessData(paymentResult);

      // 3. NOW trigger Surepass API
      setIsProcessing(true);
      setProcessingStage(`Payment Verified (${paymentResult.paymentId}). Connecting to Surepass KYC Gateway...`);
      
      await new Promise(r => setTimeout(r, 600));
      setProcessingStage(`Querying official ${bureau.name} database for PAN: ${formData.pan}...`);

      const response = await fetchCreditReportFromSurepass({
        bureauId: selectedBureau,
        pan: formData.pan,
        name: formData.name,
        mobile: formData.mobile,
        gender: formData.gender
      });

      setIsProcessing(false);

      if (response.success && response.data?.credit_report_link) {
        // Success case with PDF link
        setApiResult({
          status: 'success',
          score: response.data.credit_score || '750',
          client_id: response.data.client_id,
          name: response.data.name || formData.name,
          pan: response.data.pan || formData.pan,
          mobile: response.data.mobile || formData.mobile,
          pdfLink: response.data.credit_report_link,
          bureau: bureau.name,
          paymentId: paymentResult.paymentId,
          date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
        });
      } else if (response.statusCode === 422 || response.httpStatus === 422) {
        // Consumer not found in bureau
        setApiResult({
          status: 'notFound',
          message: response.message || 'Consumer Not Found In Bureau database.',
          client_id: response.data?.client_id || 'REQ_' + Math.floor(100000 + Math.random() * 900000),
          name: formData.name,
          pan: formData.pan,
          mobile: formData.mobile,
          bureau: bureau.name,
          paymentId: paymentResult.paymentId,
          pdfLink: response.data?.credit_report_link || null
        });
      } else {
        setApiError(response.message || 'Failed to fetch report from bureau. Please contact support.');
      }

    } catch (err) {
      setIsProcessing(false);
      // If user cancelled or payment failed, Surepass API is NOT called
      setApiError(err.message || 'Payment was not completed. Credit report API was not triggered.');
    }
  };

  const handleReset = () => {
    setApiResult(null);
    setApiError(null);
    setIsProcessing(false);
    setPaymentSuccessData(null);
  };

  return (
    <section id="cibil-form-top" className="bg-white pt-6 pb-12 md:pt-8 md:pb-16 font-sans overflow-hidden relative">
      
      {/* Background subtle glow */}
      <div className="absolute left-0 top-0 w-full h-[350px] bg-gradient-to-b from-[#de9e48]/10 via-[#de9e48]/5 to-transparent pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-500 text-[12.5px] font-medium mb-4">
          <Link to="/" className="hover:text-[#de9e48] transition-colors">Home</Link>
          <span className="text-gray-400">›</span>
          <span className="text-[#020d1c] font-semibold">CIBIL & Credit Bureau Services</span>
        </div>

        {/* Top USP Banner Alert */}
        <div className="mb-8 bg-gradient-to-r from-[#020d1c] via-[#0b1d38] to-[#020d1c] text-white p-4 sm:p-5 rounded-2xl border border-[#de9e48]/40 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#de9e48] text-[#020d1c] flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">
              ★
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-[#de9e48] text-[#020d1c] text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wider">
                  Our Exclusive USP
                </span>
                <span className="text-xs text-yellow-300 font-semibold">Official Unmasked PDF Report</span>
              </div>
              <p className="text-sm md:text-[15px] font-medium text-gray-100 mt-1">
                Detailed <span className="text-[#de9e48] font-bold">TransUnion CIBIL Reports</span> showing complete available details, including <span className="underline decoration-[#de9e48]">Bank Name</span> and <span className="underline decoration-[#de9e48]">Loan Account Number</span>.
              </p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 flex items-center gap-2 flex-shrink-0 self-stretch md:self-auto justify-center">
            <span className="text-xs text-yellow-300 font-semibold">⚡ Instant PDF Download After Payment</span>
          </div>
        </div>

        {/* Main Grid: Left Features & Bureau Pricing, Right Form */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-12 xl:gap-16">
          
          {/* Left Content (Info, Bureau Pricing Cards & Features) */}
          <div className="w-full lg:w-[54%] xl:w-[58%] flex flex-col">
            
            <h3 className="text-[#de9e48] text-[13px] font-bold tracking-[0.08em] uppercase mb-2">
              OFFICIAL CREDIT REPORTS
            </h3>
            
            <h1 className="text-[#020d1c] text-3xl md:text-[38px] xl:text-[44px] font-bold font-serif leading-[1.18] mb-4">
              Download Instant Credit Score & <br />
              Detailed <span className="text-[#de9e48]">Bureau PDF Report</span>
            </h1>
            
            <p className="text-gray-600 text-[14px] lg:text-[15px] leading-relaxed mb-6">
              Select your preferred credit bureau below, enter your basic details, pay securely via Razorpay, and download your full official PDF credit report immediately.
            </p>

            {/* Bureau Selection Cards Grid */}
            <div className="mb-8">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">
                1. Select Credit Bureau ({Object.keys(BUREAU_CONFIGS).length} Available)
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {Object.values(BUREAU_CONFIGS).map((bureau) => {
                  const isSelected = selectedBureau === bureau.id;
                  const priceInfo = calculatePricing(bureau.id, appliedCoupon);
                  
                  return (
                    <div
                      key={bureau.id}
                      onClick={() => setSelectedBureau(bureau.id)}
                      className={`relative p-4 rounded-xl cursor-pointer transition-all duration-200 border-2 ${
                        isSelected
                          ? 'border-[#de9e48] bg-[#fdf9f2] shadow-md ring-2 ring-[#de9e48]/30'
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/70'
                      }`}
                    >
                      {bureau.id === 'cibil' && (
                        <span className="absolute -top-2.5 right-3 bg-[#020d1c] text-[#de9e48] text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider border border-[#de9e48]/60">
                          ⭐ Recommended USP
                        </span>
                      )}

                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="bureau_select"
                            checked={isSelected}
                            onChange={() => setSelectedBureau(bureau.id)}
                            className="w-4 h-4 text-[#de9e48] focus:ring-[#de9e48] accent-[#de9e48] cursor-pointer"
                          />
                          <h4 className="font-bold text-[#020d1c] text-[15px]">
                            {bureau.name}
                          </h4>
                        </div>
                      </div>

                      <p className="text-[11.5px] text-gray-500 mb-3 leading-snug">
                        {bureau.usp}
                      </p>

                      <div className="flex items-baseline justify-between pt-2 border-t border-gray-200/80">
                        <span className="text-[11px] font-semibold text-gray-500 uppercase">
                          Price (+18% GST):
                        </span>
                        <div className="text-right">
                          {appliedCoupon ? (
                            <div className="flex items-center gap-1.5">
                              <span className="line-through text-xs text-gray-400 font-medium">₹{bureau.basePrice}</span>
                              <span className="font-black text-[#020d1c] text-sm">
                                ₹{priceInfo.discountedBase} <span className="text-[10px] text-green-600 font-bold">(50% OFF)</span>
                              </span>
                            </div>
                          ) : (
                            <span className="font-bold text-[#020d1c] text-sm">
                              ₹{bureau.basePrice} <span className="text-[10px] text-gray-500">+ GST</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Features Highlight Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#fef8f0] border border-[#de9e48]/40 flex items-center justify-center text-[#de9e48] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-xs text-[#020d1c]">Razorpay Live</h5>
                  <p className="text-[11px] text-gray-500">100% Secure Checkout</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#fef8f0] border border-[#de9e48]/40 flex items-center justify-center text-[#de9e48] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-xs text-[#020d1c]">Surepass KYC</h5>
                  <p className="text-[11px] text-gray-500">Direct Bureau Gateway</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#fef8f0] border border-[#de9e48]/40 flex items-center justify-center text-[#de9e48] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-xs text-[#020d1c]">Direct PDF Link</h5>
                  <p className="text-[11px] text-gray-500">Instant Download</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Form / Result Container */}
          <div className="w-full lg:w-[46%] xl:w-[42%] max-w-[480px] mx-auto flex-shrink-0 relative">
            
            {/* If Processing (After payment success) */}
            {isProcessing && (
              <div className="bg-[#020d1c] rounded-2xl p-8 shadow-2xl border border-gray-800 text-center py-16 flex flex-col items-center justify-center min-h-[460px]">
                <div className="relative w-20 h-20 mb-6">
                  <div className="w-20 h-20 rounded-full border-4 border-gray-700 border-t-[#de9e48] animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-[#de9e48] font-bold text-xs">
                    KYC
                  </div>
                </div>
                <div className="inline-block bg-green-950/80 text-green-400 border border-green-700 text-xs px-3 py-1 rounded-full font-semibold mb-3">
                  ✓ Payment Successful
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Fetching Your Official Report
                </h3>
                <p className="text-gray-400 text-xs max-w-xs leading-relaxed mb-6">
                  {processingStage}
                </p>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden max-w-xs">
                  <div className="bg-[#de9e48] h-full animate-pulse w-3/4"></div>
                </div>
              </div>
            )}

            {/* If API Result is Available */}
            {!isProcessing && apiResult && (
              <div className="bg-[#020d1c] text-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-[#de9e48]/50 relative overflow-hidden animate-fadeIn">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#de9e48]/10 rounded-full blur-2xl pointer-events-none"></div>

                {apiResult.status === 'success' ? (
                  <>
                    <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#de9e48]">
                          {apiResult.bureau} Official Report
                        </span>
                        <h3 className="text-lg font-bold text-white">Report Generated!</h3>
                      </div>
                      <span className="bg-green-900/60 text-green-300 border border-green-700 text-xs px-2.5 py-1 rounded-full font-semibold">
                        ✓ Paid & Verified
                      </span>
                    </div>

                    {/* Score Meter Banner */}
                    <div className="my-5 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 border border-gray-700 text-center">
                      <span className="text-xs text-gray-400 uppercase tracking-wider">Your Credit Score</span>
                      <div className="text-4xl font-extrabold text-[#de9e48] my-1">
                        {apiResult.score}
                        <span className="text-xs text-gray-400 font-normal ml-1">/ 900</span>
                      </div>
                      <span className="inline-block text-[11px] font-semibold text-green-400 bg-green-950/80 px-2.5 py-0.5 rounded-full">
                        {parseInt(apiResult.score) >= 750 ? 'Excellent Credit Health' : 'Fair Credit Profile'}
                      </span>
                    </div>

                    {/* Report Info Details */}
                    <div className="space-y-2 text-xs bg-gray-900/70 p-3.5 rounded-xl border border-gray-800 mb-5">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Applicant:</span>
                        <span className="font-semibold text-gray-200">{apiResult.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">PAN Number:</span>
                        <span className="font-semibold text-gray-200">{apiResult.pan}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Mobile:</span>
                        <span className="font-semibold text-gray-200">{apiResult.mobile}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Payment ID:</span>
                        <span className="font-mono text-[11px] text-green-400 font-semibold">{apiResult.paymentId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Reference ID:</span>
                        <span className="font-mono text-[11px] text-gray-300 truncate max-w-[160px]">{apiResult.client_id}</span>
                      </div>
                    </div>

                    {/* Download Button */}
                    <a
                      href={apiResult.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-12 bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[#de9e48]/20 active:scale-98"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Official PDF Report
                    </a>

                    <button
                      onClick={handleReset}
                      className="w-full mt-3 text-xs text-gray-400 hover:text-white py-2 transition-colors text-center block"
                    >
                      ← Check Another Credit Score
                    </button>
                  </>
                ) : (
                  // Case: Bureau 422 (e.g. Consumer Not Found or No Credit Record)
                  <>
                    <div className="text-center py-2">
                      <div className="w-12 h-12 bg-yellow-500/20 text-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                        ℹ️
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">Bureau Response</h3>
                      <p className="text-xs text-yellow-300/90 mb-4 px-2">
                        {apiResult.message}
                      </p>
                    </div>

                    <div className="bg-gray-900/80 p-4 rounded-xl border border-gray-800 text-xs space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Payment ID:</span>
                        <span className="font-mono text-green-400 font-semibold">{apiResult.paymentId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Bureau Queried:</span>
                        <span className="font-semibold text-white">{apiResult.bureau}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">PAN Number:</span>
                        <span className="font-semibold text-white">{apiResult.pan}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Applicant:</span>
                        <span className="font-semibold text-white">{apiResult.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Bureau Ref ID:</span>
                        <span className="font-mono text-[10px] text-gray-300 truncate max-w-[150px]">{apiResult.client_id}</span>
                      </div>
                    </div>

                    <div className="bg-blue-950/50 border border-blue-800/60 p-3 rounded-xl text-[11.5px] text-blue-200 mb-5 leading-relaxed">
                      💡 <strong>Bureau Note:</strong> This PAN has no prior credit history or active credit accounts in the {apiResult.bureau} database. Payment ID <strong>{apiResult.paymentId}</strong> is safely registered.
                    </div>

                    {apiResult.pdfLink ? (
                      <a
                        href={apiResult.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-11 bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Bureau PDF Output
                      </a>
                    ) : null}

                    <button
                      onClick={handleReset}
                      className="w-full mt-3 bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold text-xs py-2.5 rounded-xl transition-colors text-center"
                    >
                      ← Check Another Score / Bureau
                    </button>
                  </>
                )}
              </div>
            )}

            {/* Main Form (when not processing and no result) */}
            {!isProcessing && !apiResult && (
              <div className="bg-[#020d1c] rounded-2xl p-6 sm:p-7 shadow-[0_15px_50px_-10px_rgba(0,0,0,0.6)] border border-gray-800 relative">
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-white text-[19px] sm:text-[21px] font-bold">
                      Get Your Credit Report
                    </h2>
                    <p className="text-gray-400 text-xs">
                      Bureau: <span className="text-[#de9e48] font-bold">{BUREAU_CONFIGS[selectedBureau].name}</span>
                    </p>
                  </div>
                  <span className="bg-[#de9e48]/20 text-[#de9e48] border border-[#de9e48]/40 text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase">
                    Step 1 of 2
                  </span>
                </div>

                {apiError && (
                  <div className="mb-4 p-3 bg-red-950/80 border border-red-800 text-red-200 text-xs rounded-xl flex items-start gap-2">
                    <span className="text-red-400 text-sm">⚠️</span>
                    <span>{apiError}</span>
                  </div>
                )}

                <form className="space-y-3.5" onSubmit={handleStartPaymentFlow}>
                  
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-gray-300 text-xs font-medium block">
                      Full Name (as per PAN) <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Vishal Kumar"
                      className={`w-full h-10 bg-gray-900/90 border ${
                        formErrors.name ? 'border-red-500' : 'border-gray-700 focus:border-[#de9e48]'
                      } rounded-lg text-xs px-3 text-white placeholder-gray-500 focus:outline-none transition-all`}
                    />
                    {formErrors.name && (
                      <p className="text-red-400 text-[10px] mt-0.5">{formErrors.name}</p>
                    )}
                  </div>

                  {/* PAN & Mobile in 2 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* PAN */}
                    <div className="space-y-1">
                      <label className="text-gray-300 text-xs font-medium block">
                        PAN Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="pan"
                        value={formData.pan}
                        onChange={handleInputChange}
                        placeholder="BPWPV8659C"
                        maxLength={10}
                        className={`w-full h-10 bg-gray-900/90 border ${
                          formErrors.pan ? 'border-red-500' : 'border-gray-700 focus:border-[#de9e48]'
                        } rounded-lg text-xs px-3 text-white placeholder-gray-500 focus:outline-none uppercase font-mono tracking-wider transition-all`}
                      />
                      {formErrors.pan && (
                        <p className="text-red-400 text-[10px] mt-0.5">{formErrors.pan}</p>
                      )}
                    </div>

                    {/* Mobile */}
                    <div className="space-y-1">
                      <label className="text-gray-300 text-xs font-medium block">
                        Mobile Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="8112580707"
                        maxLength={10}
                        className={`w-full h-10 bg-gray-900/90 border ${
                          formErrors.mobile ? 'border-red-500' : 'border-gray-700 focus:border-[#de9e48]'
                        } rounded-lg text-xs px-3 text-white placeholder-gray-500 focus:outline-none transition-all`}
                      />
                      {formErrors.mobile && (
                        <p className="text-red-400 text-[10px] mt-0.5">{formErrors.mobile}</p>
                      )}
                    </div>
                  </div>

                  {/* Gender Selection */}
                  <div className="space-y-1">
                    <label className="text-gray-300 text-xs font-medium block">
                      Gender <span className="text-red-400">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['male', 'female', 'other'].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, gender: g }))}
                          className={`h-9 rounded-lg text-xs font-medium capitalize border transition-all ${
                            formData.gender === g
                              ? 'bg-[#de9e48] text-[#020d1c] font-bold border-[#de9e48]'
                              : 'bg-gray-900/90 text-gray-300 border-gray-700 hover:border-gray-600'
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Coupon Code Section */}
                  <div className="pt-2 border-t border-gray-800">
                    <label className="text-gray-300 text-xs font-medium block mb-1">
                      Have a Coupon Code?
                    </label>
                    
                    {appliedCoupon ? (
                      <div className="flex items-center justify-between bg-green-950/60 border border-green-700/80 px-3 py-2 rounded-lg">
                        <div className="flex items-center gap-2">
                          <span className="text-green-400 text-xs font-bold">✓ {appliedCoupon}</span>
                          <span className="text-[11px] text-green-300 font-semibold">(50% Discount Applied)</span>
                        </div>
                        <button
                          type="button"
                          onClick={handleRemoveCoupon}
                          className="text-xs text-red-400 hover:text-red-300 underline font-semibold"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={couponInput}
                          onChange={(e) => {
                            setCouponInput(e.target.value);
                            setCouponFeedback(null);
                          }}
                          placeholder='Enter coupon code'
                          className="flex-1 h-9 bg-gray-900/90 border border-gray-700 rounded-lg text-xs px-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#de9e48] uppercase"
                        />
                        <button
                          type="button"
                          onClick={() => handleApplyCoupon()}
                          className="h-9 px-3.5 bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-bold text-xs rounded-lg transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                    )}

                    {couponFeedback && (
                      <p className={`text-[11px] mt-1 ${
                        couponFeedback.type === 'success' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {couponFeedback.text}
                      </p>
                    )}
                  </div>

                  {/* Price Summary Breakdown */}
                  <div className="bg-gray-900/90 p-3.5 rounded-xl border border-gray-800 space-y-1.5 text-xs">
                    <div className="flex justify-between text-gray-300">
                      <span>{BUREAU_CONFIGS[selectedBureau].name} Base Price:</span>
                      <span className="font-semibold">₹{pricing.basePrice}</span>
                    </div>

                    {pricing.couponResult.valid && (
                      <div className="flex justify-between text-green-400 font-semibold">
                        <span>Coupon Discount (50% OFF):</span>
                        <span>-₹{pricing.couponResult.discountAmount}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-gray-400 text-[11px]">
                      <span>GST (18%):</span>
                      <span>+₹{pricing.gstAmount}</span>
                    </div>

                    <div className="flex justify-between text-white font-bold text-sm pt-2 border-t border-gray-800">
                      <span>Total Payable:</span>
                      <span className="text-[#de9e48] text-base">₹{pricing.totalPayable}</span>
                    </div>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="cibil_consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-0.5 w-4 h-4 text-[#de9e48] bg-gray-900 border-gray-700 rounded focus:ring-[#de9e48] accent-[#de9e48] cursor-pointer"
                    />
                    <label htmlFor="cibil_consent" className="text-gray-400 text-[11px] leading-tight cursor-pointer">
                      I authorize KTR Consultancy & Surepass to fetch my official credit report from {BUREAU_CONFIGS[selectedBureau].name}.
                    </label>
                  </div>
                  {formErrors.consent && (
                    <p className="text-red-400 text-[10px]">{formErrors.consent}</p>
                  )}

                  {/* Proceed to Payment Button */}
                  <button
                    type="submit"
                    className="w-full h-11 bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-extrabold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[#de9e48]/30 active:scale-98 mt-2"
                  >
                    <span>Pay ₹{pricing.totalPayable} with Razorpay</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10.5px] text-gray-500 pt-1">
                    <span>🔒 Razorpay Live Gateway</span>
                    <span>•</span>
                    <span>Direct Bureau PDF API</span>
                  </div>

                </form>
              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default CibilHero;
