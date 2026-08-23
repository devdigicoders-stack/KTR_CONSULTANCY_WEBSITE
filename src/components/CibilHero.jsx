import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BUREAU_CONFIGS, calculatePricing, fetchCreditReportFromSurepass } from '../services/surepassApi';
import { processRazorpayPayment } from '../services/razorpay';

const CibilHero = ({
  selectedBureauProp,
  setSelectedBureauProp,
  handleBureauSelectProp,
  formRefProp,
  highlightFormProp
}) => {
  const localFormRef = useRef(null);
  const [localHighlightForm, setLocalHighlightForm] = useState(false);
  const [localSelectedBureau, setLocalSelectedBureau] = useState('cibil');

  const formRef = formRefProp || localFormRef;
  const highlightForm = highlightFormProp !== undefined ? highlightFormProp : localHighlightForm;
  const selectedBureau = selectedBureauProp || localSelectedBureau;
  const setSelectedBureau = setSelectedBureauProp || setLocalSelectedBureau;
  
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

  // Handle Bureau Card Selection & Auto-Scroll
  const handleBureauSelect = (bureauId) => {
    if (handleBureauSelectProp) {
      handleBureauSelectProp(bureauId);
    } else {
      setSelectedBureau(bureauId);
      setLocalHighlightForm(true);
      
      setTimeout(() => {
        if (formRef.current) {
          const yOffset = -25;
          const elementPosition = formRef.current.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset + yOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 60);

      setTimeout(() => {
        setLocalHighlightForm(false);
      }, 2200);
    }
  };

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
    const clean = code.trim().toUpperCase();
    if (clean === 'FLAT25') {
      setAppliedCoupon('Flat25');
      setCouponFeedback({
        type: 'success',
        text: '🎉 Flat25 applied: 25% discount applied successfully!'
      });
    } else if (clean === 'TEAM50') {
      setAppliedCoupon('Team50');
      setCouponFeedback({
        type: 'success',
        text: '🎉 TEAM50 applied: 50% discount applied successfully!'
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

      // 3. NOW trigger Bureau API
      setIsProcessing(true);
      setProcessingStage(`Payment Verified (${paymentResult.paymentId}). Connecting to Credit Bureau Gateway...`);
      
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
                      onClick={() => handleBureauSelect(bureau.id)}
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
                            onChange={() => handleBureauSelect(bureau.id)}
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
                                ₹{priceInfo.discountedBase} <span className="text-[10px] text-green-600 font-bold">({priceInfo.couponResult.discountPercent}% OFF)</span>
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

              {/* Mobile Quick Action Indicator */}
              <div className="block lg:hidden mt-4">
                <button
                  type="button"
                  onClick={() => handleBureauSelect(selectedBureau)}
                  className="w-full bg-[#020d1c] hover:bg-[#071933] text-white border border-[#de9e48]/50 font-semibold text-xs py-3 px-4 rounded-xl flex items-center justify-between shadow-md active:scale-[0.98] transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#de9e48] animate-ping"></span>
                    <span className="text-gray-200">Selected: <strong className="text-[#de9e48]">{BUREAU_CONFIGS[selectedBureau]?.name}</strong></span>
                  </div>
                  <span className="flex items-center gap-1 text-[#de9e48] font-bold text-xs bg-[#de9e48]/15 px-2.5 py-1 rounded-lg border border-[#de9e48]/30">
                    Fill Details ↓
                  </span>
                </button>
              </div>

              {/* Support & Dispute Assistance ("Write to Us") Card */}
              <div className="mt-6 bg-gradient-to-br from-[#fffdf9] to-[#fbf5eb] border border-[#e8d5b7] rounded-2xl p-4 sm:p-5 shadow-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#020d1c] text-[#de9e48] flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h4 className="text-sm font-bold text-[#020d1c]">
                        Facing Inaccuracies or Issues with Your Credit Report?
                      </h4>
                      <span className="bg-[#de9e48]/20 text-[#020d1c] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#de9e48]/40">
                        Dispute & Advisory Support
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3.5">
                      If you identify erroneous loan records, outdated overdue marks, score discrepancies, or experience report generation difficulties, submit an inquiry or reach out to our credit advisory specialists.
                    </p>
                    
                    <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
                      <Link
                        to="/fake-loan-removal"
                        className="inline-flex items-center gap-1.5 bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-black text-xs px-3.5 py-2 rounded-lg shadow-sm transition-all active:scale-95"
                      >
                        <span>⚖️ Fake Loan Removal (₹1,000 Assessment)</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 bg-[#020d1c] hover:bg-[#0b1d38] text-white font-bold text-xs px-3 py-2 rounded-lg border border-gray-700 transition-all shadow-sm active:scale-95"
                      >
                        <svg className="w-3.5 h-3.5 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Write to Us
                      </Link>

                      <a
                        href="https://wa.me/919918699696?text=Hi%20KTR%20Consultants%2C%20I%20have%20an%20inquiry%20regarding%20my%20credit%20report%20discrepancies."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-bold text-xs px-3 py-2 rounded-lg border border-[#25D366]/30 transition-all active:scale-95"
                      >
                        <svg className="w-3.5 h-3.5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                        </svg>
                        WhatsApp
                      </a>

                      <a
                        href="tel:+919918699696"
                        className="text-xs font-semibold text-gray-700 hover:text-[#de9e48] transition-colors py-1 flex items-center gap-1"
                      >
                        📞 +91 99186 99696
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Form / Result Container */}
          <div 
            ref={formRef} 
            id="cibil-form-section" 
            className="w-full lg:w-[46%] xl:w-[42%] max-w-[480px] mx-auto flex-shrink-0 relative scroll-mt-8"
          >
            
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

                    {/* Report Dispute / Issue Help Link */}
                    <div className="mt-4 p-3 bg-gray-900/90 border border-gray-800 rounded-xl text-center">
                      <p className="text-[11.5px] text-gray-300 mb-1.5">
                        Notice any inaccuracies or wish to dispute an account entry in this report?
                      </p>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1 text-[#de9e48] hover:text-yellow-300 text-xs font-bold transition-colors"
                      >
                        <span>Write to Us / Request Dispute Assistance</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>

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

                    {/* Support Help Link for 422 */}
                    <div className="mt-3 p-3 bg-gray-900/90 border border-gray-800 rounded-xl text-center">
                      <p className="text-[11.5px] text-gray-300 mb-1.5">
                        Need guidance or have questions regarding your credit profile?
                      </p>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1 text-[#de9e48] hover:text-yellow-300 text-xs font-bold transition-colors"
                      >
                        <span>Write to Us / Contact Credit Advisory →</span>
                      </Link>
                    </div>

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
              <div className={`bg-[#020d1c] rounded-2xl p-6 sm:p-7 shadow-[0_15px_50px_-10px_rgba(0,0,0,0.6)] border relative transition-all duration-500 ${
                highlightForm 
                  ? 'border-[#de9e48] ring-4 ring-[#de9e48]/40 shadow-[0_0_35px_rgba(222,158,72,0.35)] scale-[1.01]' 
                  : 'border-gray-800'
              }`}>
                
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
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-gray-300 text-xs font-medium block">
                        Have a Coupon Code?
                      </label>
                      {!appliedCoupon && (
                        <span className="text-[10.5px] text-[#de9e48] font-bold">
                          Promo Available: <strong className="bg-[#de9e48]/20 text-[#de9e48] px-1.5 py-0.5 rounded border border-[#de9e48]/40">Flat25</strong>
                        </span>
                      )}
                    </div>

                    {/* Quick 1-Click Coupon Offer Box */}
                    {!appliedCoupon && (
                      <div className="mb-2.5 bg-gradient-to-r from-[#de9e48]/15 via-[#de9e48]/10 to-transparent border border-[#de9e48]/40 rounded-lg p-2 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[11px] text-gray-200">
                          <span className="text-[#de9e48] font-bold">🏷️ 25% OFF:</span>
                          <span>Apply code <strong className="text-[#de9e48] font-black">Flat25</strong></span>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setCouponInput('Flat25');
                            handleApplyCoupon('Flat25');
                          }}
                          className="text-[10.5px] font-black bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] px-2.5 py-1 rounded transition-colors shadow-sm cursor-pointer"
                        >
                          Apply Flat25
                        </button>
                      </div>
                    )}
                    
                    {appliedCoupon ? (
                      <div className="flex items-center justify-between bg-green-950/60 border border-green-700/80 px-3 py-2 rounded-lg">
                        <div className="flex items-center gap-2">
                          <span className="text-green-400 text-xs font-bold">✓ {appliedCoupon}</span>
                          <span className="text-[11px] text-green-300 font-semibold">({pricing.couponResult.discountPercent}% Discount Applied)</span>
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
                          placeholder="Enter coupon (e.g. Flat25)"
                          className="flex-1 h-9 bg-gray-900/90 border border-gray-700 rounded-lg text-xs px-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#de9e48] uppercase font-semibold tracking-wider"
                        />
                        <button
                          type="button"
                          onClick={() => handleApplyCoupon()}
                          className="h-9 px-3.5 bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-bold text-xs rounded-lg transition-colors cursor-pointer"
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
                        <span>Coupon Discount ({pricing.couponResult.discountPercent}% OFF - {appliedCoupon}):</span>
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
                      I authorize KTR Consultants to fetch my official credit report from {BUREAU_CONFIGS[selectedBureau].name}.
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

                  {/* Write to Us prompt at bottom of form */}
                  <div className="mt-3.5 pt-3 border-t border-gray-800/80 flex items-center justify-between text-[11px] text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <span className="text-[#de9e48]">💬</span>
                      <span>Facing issues with your credit report?</span>
                    </span>
                    <Link
                      to="/contact"
                      className="text-[#de9e48] hover:text-yellow-300 font-bold hover:underline transition-colors whitespace-nowrap"
                    >
                      Write to Us →
                    </Link>
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
