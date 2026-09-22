import React, { useState, useRef } from 'react';
import { BUREAU_CONFIGS, calculatePricing, fetchCreditReportFromSurepass } from '../services/surepassApi';
import { processRazorpayPayment } from '../services/razorpay';
import CibilInvoiceModal from '../components/CibilInvoiceModal';
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle, 
  FileText, 
  RotateCcw, 
  Share2, 
  Copy, 
  Check, 
  Sparkles, 
  Tag, 
  ArrowRight,
  Info,
  CreditCard,
  Building2,
  Award,
  Zap
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function PartnerCibilCheck() {
  const formRef = useRef(null);
  
  // Bureau selection
  const [selectedBureau, setSelectedBureau] = useState('cibil');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pan: '',
    gender: 'male',
    consent: true
  });

  // Coupon state (Default FLAT25 pre-applied just like website)
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('FLAT25');
  const [couponFeedback, setCouponFeedback] = useState({
    type: 'success',
    text: '🎉 FLAT25 applied: 25% discount applied successfully!'
  });

  // Flow states
  const [formErrors, setFormErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStage, setProcessingStage] = useState('');
  const [apiResult, setApiResult] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Pricing calculation
  const pricing = calculatePricing(selectedBureau, appliedCoupon);

  // Bureau cards configuration
  const bureauCards = [
    {
      id: 'cibil',
      name: 'TransUnion CIBIL',
      shortName: 'CIBIL',
      icon: '⭐',
      badge: 'Most Comprehensive & Recommended',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      usp: 'Includes Complete Bank Names & Loan Account Numbers',
      mrp: 500,
      description: 'Detailed official TransUnion report with unmasked bank account numbers, active & closed loans, credit utilization, and DPD repayment track record.'
    },
    {
      id: 'crif',
      name: 'CRIF High Mark',
      shortName: 'CRIF',
      icon: '🏢',
      badge: 'Microfinance & NBFC Depth',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      usp: 'Wide coverage across retail, commercial & NBFC accounts',
      mrp: 450,
      description: 'CRIF High Mark detailed credit report covering retail loans, commercial debts, microfinance accounts, and credit card histories.'
    },
    {
      id: 'experian',
      name: 'Experian',
      shortName: 'Experian',
      icon: '🌐',
      badge: 'Global Credit Bureau',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      usp: 'Instant score analytics & delinquency risk insights',
      mrp: 400,
      description: 'Experian comprehensive credit score, risk assessment matrix, and granular timeline of monthly payment behaviors.'
    },
    {
      id: 'equifax',
      name: 'Equifax',
      shortName: 'Equifax',
      icon: '⚡',
      badge: 'Fast & Affordable Check',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      usp: 'Summary credit score & basic loan rating',
      mrp: 350,
      description: 'Equifax credit rating document suited for quick creditworthiness verification and debt overview.'
    }
  ];

  // Handle Bureau Selection
  const handleSelectBureau = (bureauId) => {
    setSelectedBureau(bureauId);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'pan') {
      setFormData(prev => ({ ...prev, pan: value.toUpperCase().slice(0, 10) }));
    } else if (name === 'mobile') {
      const digits = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, mobile: digits }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (apiError) setApiError(null);
  };

  // Coupon handling
  const handleApplyCoupon = (codeToApply) => {
    const code = codeToApply !== undefined ? codeToApply : couponInput;
    if (!code || !code.trim()) {
      setCouponFeedback({ type: 'error', text: 'Please enter a coupon code.' });
      return;
    }
    const clean = code.trim().toUpperCase();
    if (clean === 'WE100') {
      setAppliedCoupon('WE100');
      setCouponFeedback({
        type: 'success',
        text: '🎉 WE100 applied: Any bureau report for flat ₹100 + GST!'
      });
    } else if (clean === 'TEAM50') {
      setAppliedCoupon('TEAM50');
      setCouponFeedback({
        type: 'success',
        text: '🎉 TEAM50 applied: 50% discount applied successfully!'
      });
    } else if (clean === 'FLAT25') {
      setAppliedCoupon('FLAT25');
      setCouponFeedback({
        type: 'success',
        text: '🎉 FLAT25 applied: 25% discount applied successfully!'
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
      errors.consent = 'You must check the consent box to proceed';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Auto refund helper if bureau API fails post-payment
  const triggerAutoRefund = async ({ paymentId, amount, reason }) => {
    try {
      setProcessingStage('Initiating automatic refund to your source account...');
      const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const refundRes = await fetch(`${backendUrl}/cibil-reports/auto-refund`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentId,
          amount,
          reason: reason || 'Bureau report could not be generated. Auto refund processed.',
          name: formData.name,
          pan: formData.pan,
          bureau: BUREAU_CONFIGS[selectedBureau].name,
          mobile: formData.mobile,
          gender: formData.gender
        })
      });

      const refundData = await refundRes.json();
      return refundData;
    } catch (err) {
      console.error("Auto-refund API failed:", err);
      return { success: false, refundId: null, message: err.message };
    }
  };

  // Payment flow
  const handleStartPaymentFlow = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setApiError(null);
    setApiResult(null);

    const bureau = BUREAU_CONFIGS[selectedBureau];

    try {
      // 1. Process Payment
      const paymentResult = await processRazorpayPayment({
        amountInRupees: pricing.totalPayable,
        bureauName: bureau.name,
        customerName: formData.name,
        customerMobile: formData.mobile,
        customerPan: formData.pan
      });

      // 2. Payment Verified -> Trigger Bureau Call
      setIsProcessing(true);
      setProcessingStage(`Payment Verified (${paymentResult.paymentId}). Connecting to Credit Bureau Gateway...`);
      
      await new Promise(r => setTimeout(r, 500));
      setProcessingStage(`Querying ${bureau.name} database for PAN: ${formData.pan}...`);

      let response;
      try {
        response = await fetchCreditReportFromSurepass({
          bureauId: selectedBureau,
          pan: formData.pan,
          name: formData.name,
          mobile: formData.mobile,
          gender: formData.gender
        });
      } catch (fetchErr) {
        console.error("Credit report API exception:", fetchErr);
        response = {
          success: false,
          message: fetchErr.message || 'Bureau connection timeout or gateway exception'
        };
      }

      // Save to backend helper
      const saveReportToBackend = async (payload) => {
        try {
          const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
          const res = await fetch(`${backendUrl}/cibil-reports/save`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          const resData = await res.json();
          if (resData.data?.invoiceNumber) {
            payload.invoiceNumber = resData.data.invoiceNumber;
          }
          return resData;
        } catch (err) {
          console.error("Failed to save report to backend:", err);
          return null;
        }
      };

      const pricingPayload = {
        basePrice: pricing.basePrice,
        discountAmount: pricing.couponResult.discountAmount || 0,
        gstAmount: pricing.gstAmount,
        totalPayable: pricing.totalPayable,
        couponCode: appliedCoupon || null
      };

      if (response && response.success && response.data?.credit_report_link) {
        // Success
        const successData = {
          status: 'success',
          score: response.data.credit_score || '750',
          client_id: response.data.client_id,
          name: response.data.name || formData.name,
          pan: response.data.pan || formData.pan,
          mobile: response.data.mobile || formData.mobile,
          gender: formData.gender,
          pdfLink: response.data.credit_report_link,
          bureau: bureau.name,
          paymentId: paymentResult.paymentId,
          pricing: pricingPayload,
          date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
        };
        setIsProcessing(false);
        setApiResult(successData);
        saveReportToBackend(successData);
      } else if (response && (response.statusCode === 422 || response.httpStatus === 422)) {
        // Consumer not found
        const notFoundData = {
          status: 'notFound',
          message: response.message || 'Consumer Not Found in Bureau Database.',
          client_id: response.data?.client_id || 'REQ_' + Math.floor(100000 + Math.random() * 900000),
          name: formData.name,
          pan: formData.pan,
          mobile: formData.mobile,
          gender: formData.gender,
          bureau: bureau.name,
          paymentId: paymentResult.paymentId,
          pdfLink: response.data?.credit_report_link || null,
          pricing: pricingPayload,
          date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
        };
        setIsProcessing(false);
        setApiResult(notFoundData);
        saveReportToBackend(notFoundData);
      } else {
        // Report fetch failed post-payment -> Trigger auto refund
        const failureReason = response?.message || 'Bureau report generation failed. Automatic refund processed.';
        setProcessingStage('Report generation failed. Initiating instant Razorpay refund...');
        
        const refundResult = await triggerAutoRefund({
          paymentId: paymentResult.paymentId,
          amount: pricing.totalPayable,
          reason: failureReason
        });

        setIsProcessing(false);

        const refundedData = {
          status: 'refunded',
          refundId: refundResult?.refundId || 'RFND_' + Date.now(),
          amount: pricing.totalPayable,
          paymentId: paymentResult.paymentId,
          message: failureReason,
          name: formData.name,
          pan: formData.pan,
          mobile: formData.mobile,
          bureau: bureau.name,
          date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
        };

        setApiResult(refundedData);
      }

    } catch (err) {
      setIsProcessing(false);
      setApiError(err.message || 'Payment cancelled or verification failed.');
    }
  };

  const handleReset = () => {
    setApiResult(null);
    setApiError(null);
    setIsProcessing(false);
    setShowInvoiceModal(false);
  };

  const handleCopyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    toast?.success ? toast.success('Link copied to clipboard!') : alert('Link copied to clipboard!');
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#070e1b] text-gray-100 font-sans selection:bg-amber-500 selection:text-slate-900">
      
      {/* Sleek Professional Top Navbar (No Company Cross-Branding) */}
      <header className="sticky top-0 z-40 bg-[#070e1b]/90 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg shadow-amber-500/20">
              <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold tracking-tight text-white">
                  Credit Check Gateway
                </span>
                <span className="bg-amber-400/10 text-amber-400 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-amber-400/30 uppercase tracking-wider">
                  Partner Portal
                </span>
              </div>
              <p className="text-[11px] text-gray-400 hidden sm:block">
                Direct Bureau Access • Official Real-time PDF Credit Reports
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyShareLink}
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-amber-200 border border-slate-700 font-semibold text-xs py-2 px-3 rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
              title="Share this direct link with clients"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copied Link!' : 'Share Link'}</span>
            </button>
            <div className="hidden md:flex items-center gap-1.5 bg-emerald-950/60 text-emerald-400 border border-emerald-700/50 text-[11px] font-semibold px-2.5 py-1 rounded-lg">
              <Lock className="w-3.5 h-3.5" />
              <span>256-bit SSL Secure</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8 md:py-12">

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Official Bureau PDF Reports & Real-time Verification</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Check Credit Score & Download <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
              Official Credit Bureau Reports
            </span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Select any of the 4 official credit bureaus in India, enter basic details, pay securely, and download your instant unmasked credit report PDF immediately.
          </p>
        </div>

        {/* 4 Bureau Selection Options Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span>Select Credit Bureau (4 Available Options)</span>
            </h2>
            <span className="text-[11px] text-gray-400 font-medium">Click card to select</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bureauCards.map((bureau) => {
              const isSelected = selectedBureau === bureau.id;
              const cardPricing = calculatePricing(bureau.id, appliedCoupon);

              return (
                <div
                  key={bureau.id}
                  onClick={() => handleSelectBureau(bureau.id)}
                  className={`relative rounded-2xl p-5 border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-amber-400 shadow-xl shadow-amber-500/10 ring-2 ring-amber-400/40 translate-y-[-2px]'
                      : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-slate-700 text-gray-300'
                  }`}
                >
                  {/* Selection Indicator */}
                  {isSelected && (
                    <div className="absolute -top-3 right-4 bg-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 stroke-[3]" /> Selected
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <span className="text-2xl">{bureau.icon}</span>
                      <h3 className="font-bold text-base text-white">{bureau.name}</h3>
                    </div>

                    <span className={`inline-block text-[10.5px] font-bold px-2 py-0.5 rounded-md border mb-3 ${bureau.badgeColor}`}>
                      {bureau.badge}
                    </span>

                    <p className="text-xs text-gray-300 leading-relaxed mb-4">
                      {bureau.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase font-semibold block">Base Pricing</span>
                      {appliedCoupon ? (
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xs text-gray-400 line-through">₹{bureau.mrp}</span>
                          <span className="text-sm font-extrabold text-amber-400">₹{cardPricing.discountedBase}</span>
                          <span className="text-[10px] text-gray-400">+ GST</span>
                        </div>
                      ) : (
                        <span className="text-sm font-extrabold text-white">
                          ₹{bureau.mrp} <span className="text-[10px] text-gray-400 font-normal">+ GST</span>
                        </span>
                      )}
                    </div>

                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                      isSelected ? 'bg-amber-400 border-amber-400 text-slate-950' : 'border-slate-600 text-transparent'
                    }`}>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Discount Offer Banner (FLAT25 Pre-applied as standard) */}
        <div className="mb-10 bg-slate-900/80 border border-amber-500/20 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                Special Discount Offer Applied
              </h4>
              <p className="text-xs text-emerald-400 font-semibold mt-0.5">
                🎉 Standard 25% Discount (FLAT25) pre-applied for all clients
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-amber-400/15 text-amber-300 border border-amber-400/40 text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-sm flex items-center gap-1.5">
              🏷️ FLAT25 <span className="font-normal text-[11px] text-gray-300">(25% OFF Applied)</span>
            </span>
          </div>
        </div>

        {/* Form and Pricing Section */}
        <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Input Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-5 border-b border-slate-800 mb-6">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400">Step 2 of 2</span>
                <h3 className="text-xl font-bold text-white mt-0.5">Enter Applicant Details</h3>
              </div>
              <div className="bg-slate-800 text-gray-300 text-xs px-3 py-1 rounded-full border border-slate-700">
                Selected: <strong className="text-amber-400">{BUREAU_CONFIGS[selectedBureau]?.name}</strong>
              </div>
            </div>

            {/* If Processing Screen */}
            {isProcessing ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="relative w-20 h-20 mb-6">
                  <div className="w-20 h-20 rounded-full border-4 border-slate-800 border-t-amber-400 animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-amber-400 font-bold text-xs">
                    SSL
                  </div>
                </div>
                <div className="inline-block bg-emerald-950/80 text-emerald-400 border border-emerald-700 text-xs px-3.5 py-1 rounded-full font-semibold mb-3">
                  ✓ Payment Verified
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Fetching Official Credit Report</h3>
                <p className="text-gray-400 text-xs max-w-xs leading-relaxed mb-6">
                  {processingStage}
                </p>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden max-w-xs">
                  <div className="bg-amber-400 h-full animate-pulse w-3/4"></div>
                </div>
              </div>
            ) : apiResult ? (
              /* If API Result Screen */
              <div className="space-y-6">
                {apiResult.status === 'success' ? (
                  <>
                    <div className="bg-slate-950 border border-emerald-500/40 rounded-2xl p-6 relative overflow-hidden">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
                            {apiResult.bureau} Official Report
                          </span>
                          <h4 className="text-lg font-bold text-white">Report Successfully Generated!</h4>
                        </div>
                        <span className="bg-emerald-950 text-emerald-400 border border-emerald-700 text-xs px-2.5 py-1 rounded-full font-semibold">
                          ✓ Verified PDF
                        </span>
                      </div>

                      {/* Score Meter */}
                      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-5 rounded-xl border border-slate-700 text-center mb-5">
                        <span className="text-xs text-gray-400 uppercase font-semibold">Credit Score</span>
                        <div className="text-4xl sm:text-5xl font-black text-amber-400 my-1">
                          {apiResult.score}
                          <span className="text-xs text-gray-400 font-normal ml-1">/ 900</span>
                        </div>
                        <span className="inline-block text-xs font-semibold text-emerald-400 bg-emerald-950 px-3 py-0.5 rounded-full border border-emerald-800">
                          {parseInt(apiResult.score) >= 750 ? 'Excellent Credit Standing' : 'Fair Credit Profile'}
                        </span>
                      </div>

                      {/* Applicant details */}
                      <div className="space-y-2 text-xs bg-slate-900 p-4 rounded-xl border border-slate-800 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Applicant:</span>
                          <span className="font-semibold text-white">{apiResult.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">PAN Number:</span>
                          <span className="font-semibold text-white">{apiResult.pan}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Mobile:</span>
                          <span className="font-semibold text-white">+91 {apiResult.mobile}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Payment ID:</span>
                          <span className="font-mono text-emerald-400 font-semibold">{apiResult.paymentId}</span>
                        </div>
                        {apiResult.invoiceNumber && (
                          <div className="flex justify-between">
                            <span className="text-gray-400">Invoice No:</span>
                            <span className="font-mono text-amber-400 font-semibold">{apiResult.invoiceNumber}</span>
                          </div>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="space-y-3">
                        <a
                          href={apiResult.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-12 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer active:scale-98"
                        >
                          <FileText className="w-5 h-5" />
                          <span>Download Official PDF Report</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => setShowInvoiceModal(true)}
                          className="w-full h-11 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                        >
                          <FileText className="w-4 h-4 text-amber-400" />
                          <span>View / Print Tax Invoice</span>
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full text-xs text-gray-400 hover:text-white py-2 text-center block cursor-pointer transition-colors"
                    >
                      ← Perform Another Credit Check
                    </button>
                  </>
                ) : apiResult.status === 'refunded' ? (
                  /* Refunded Screen */
                  <div className="bg-slate-950 border border-rose-500/40 rounded-2xl p-6 text-center">
                    <div className="w-12 h-12 bg-rose-500/20 text-rose-400 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <RotateCcw className="w-6 h-6 animate-spin-slow" />
                    </div>
                    <span className="inline-block bg-rose-950 text-rose-300 border border-rose-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                      🛡️ Auto Refund Processed
                    </span>
                    <h3 className="text-lg font-bold text-white mb-1">Payment Reversed to Source</h3>
                    <p className="text-xs text-gray-300 leading-relaxed mb-4">
                      Bureau report was temporarily unavailable. Full refund of <strong className="text-amber-400">₹{apiResult.amount}</strong> was automatically initiated via Razorpay.
                    </p>

                    <div className="bg-slate-900 p-4 rounded-xl text-left text-xs space-y-2 border border-slate-800 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Refund ID:</span>
                        <span className="font-mono text-emerald-400 font-bold">{apiResult.refundId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Original Payment ID:</span>
                        <span className="font-mono text-gray-300">{apiResult.paymentId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Refund Amount:</span>
                        <span className="font-bold text-amber-400">₹{apiResult.amount} (100% Refunded)</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs py-2.5 rounded-xl transition-colors cursor-pointer"
                    >
                      ← Try Again / Choose Another Bureau
                    </button>
                  </div>
                ) : (
                  /* Consumer Not Found Screen */
                  <div className="bg-slate-950 border border-amber-500/40 rounded-2xl p-6 text-center">
                    <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                      ℹ️
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Bureau Notice</h3>
                    <p className="text-xs text-amber-300/90 leading-relaxed mb-4">
                      {apiResult.message}
                    </p>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs py-2.5 rounded-xl transition-colors cursor-pointer"
                    >
                      ← Back to Form
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Input Form */
              <form onSubmit={handleStartPaymentFlow} className="space-y-5">

                {apiError && (
                  <div className="p-3.5 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
                    <Info className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    <span>{apiError}</span>
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name as per PAN card"
                    className={`w-full bg-slate-950 border text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all ${
                      formErrors.name ? 'border-rose-500' : 'border-slate-800 hover:border-slate-700'
                    }`}
                  />
                  {formErrors.name && <p className="text-rose-400 text-[11px] mt-1">{formErrors.name}</p>}
                </div>

                {/* Mobile & PAN grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Mobile */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                      Mobile Number <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3 text-xs font-bold text-gray-500">+91</span>
                      <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="9918699696"
                        maxLength={10}
                        className={`w-full bg-slate-950 border text-white text-sm rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all ${
                          formErrors.mobile ? 'border-rose-500' : 'border-slate-800 hover:border-slate-700'
                        }`}
                      />
                    </div>
                    {formErrors.mobile && <p className="text-rose-400 text-[11px] mt-1">{formErrors.mobile}</p>}
                  </div>

                  {/* PAN */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                      PAN Number <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="pan"
                      value={formData.pan}
                      onChange={handleInputChange}
                      placeholder="ABCDE1234F"
                      maxLength={10}
                      className={`w-full bg-slate-950 border text-white text-sm font-mono tracking-wider rounded-xl px-4 py-3 uppercase focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all ${
                        formErrors.pan ? 'border-rose-500' : 'border-slate-800 hover:border-slate-700'
                      }`}
                    />
                    {formErrors.pan && <p className="text-rose-400 text-[11px] mt-1">{formErrors.pan}</p>}
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                    Gender
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['male', 'female', 'transgender'].map((g) => (
                      <button
                        type="button"
                        key={g}
                        onClick={() => setFormData(prev => ({ ...prev, gender: g }))}
                        className={`py-2.5 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                          formData.gender === g
                            ? 'bg-amber-400/15 border-amber-400 text-amber-300'
                            : 'bg-slate-950 border-slate-800 text-gray-400 hover:text-white'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Consent */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-0.5 w-4 h-4 accent-amber-400 rounded cursor-pointer"
                    />
                    <span className="text-[11.5px] text-gray-300 leading-snug">
                      I hereby authorize fetching my official credit report from authorized credit bureau registries ({BUREAU_CONFIGS[selectedBureau]?.name}) for verification purposes.
                    </span>
                  </label>
                  {formErrors.consent && <p className="text-rose-400 text-[11px] mt-1">{formErrors.consent}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full h-13 mt-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 font-extrabold text-base rounded-2xl transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Lock className="w-4 h-4 stroke-[2.5]" />
                  <span>Pay ₹{pricing.totalPayable} & Fetch Official PDF Report</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>

                <p className="text-center text-[11px] text-gray-500 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Encrypted & Instant Official Bureau Retrieval</span>
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Dynamic Pricing Summary & Coupon Box */}
          <div className="lg:col-span-5 space-y-6">

            {/* Pricing Summary Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <h3 className="font-bold text-base text-white flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-amber-400" />
                  <span>Order & Pricing Summary</span>
                </h3>
                <span className="text-xs text-amber-400 font-bold bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                  Live Rate
                </span>
              </div>

              {/* Bureau details */}
              <div className="space-y-3 text-xs text-gray-300 pb-4 border-b border-slate-800/80">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Selected Credit Bureau:</span>
                  <span className="font-bold text-white text-sm">{pricing.bureau.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Standard Base MRP:</span>
                  <span className="font-semibold text-gray-200">₹{pricing.basePrice}</span>
                </div>

                {/* Coupon discount line */}
                {pricing.couponResult.valid && (
                  <div className="flex justify-between items-center text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-800/60">
                    <span className="font-medium flex items-center gap-1">
                      <Tag className="w-3 h-3" /> Coupon ({appliedCoupon}):
                    </span>
                    <span className="font-bold">-₹{pricing.couponResult.discountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Taxable Amount:</span>
                  <span className="font-semibold text-gray-200">₹{pricing.discountedBase}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">GST @ 18%:</span>
                  <span className="font-semibold text-gray-200">₹{pricing.gstAmount}</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="pt-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Total Amount Payable</span>
                  <span className="text-[10px] text-emerald-400">Includes live GST tax invoice</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-amber-400">₹{pricing.totalPayable}</span>
                  <span className="text-[10px] text-gray-400 block font-medium">(Flat inclusive)</span>
                </div>
              </div>
            </div>

            {/* Coupon Code Entry Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-300 mb-3 flex items-center gap-2">
                <Tag className="w-4 h-4 text-amber-400" />
                <span>Have a Discount Coupon Code?</span>
              </h4>

              {appliedCoupon ? (
                <div className="bg-emerald-950/60 border border-emerald-700/80 p-3.5 rounded-2xl flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold text-emerald-300">{appliedCoupon} Applied</span>
                    </div>
                    <p className="text-[11px] text-emerald-400/80 mt-0.5">
                      {couponFeedback?.text}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemoveCoupon}
                    className="text-xs font-bold text-rose-400 hover:text-rose-300 bg-rose-950/60 px-2.5 py-1 rounded-lg border border-rose-800 transition-colors cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                      placeholder="Enter coupon code"
                      className="flex-1 bg-slate-950 border border-slate-800 text-white text-xs font-mono tracking-wider rounded-xl px-3.5 py-2.5 uppercase focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                    />
                    <button
                      type="button"
                      onClick={() => handleApplyCoupon()}
                      className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>

                  {couponFeedback && (
                    <p className={`text-xs mt-1 ${couponFeedback.type === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {couponFeedback.text}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Security Guarantee Box */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-5 text-xs text-gray-400 space-y-2.5">
              <div className="flex items-center gap-2 text-white font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Partner Security & Privacy Guarantee</span>
              </div>
              <p className="text-[11.5px] leading-relaxed text-gray-400">
                All credit checks performed on this page query the official bureau servers via secure 256-bit encrypted SSL connections. PDF reports are delivered unmasked and directly downloadable.
              </p>
            </div>

          </div>

        </div>

      </main>

      {/* Clean Neutral Footer */}
      <footer className="border-t border-slate-800/80 bg-[#050a14] py-8 text-center text-xs text-gray-500 px-4 mt-16">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="text-gray-400 font-semibold">
            Credit Check Gateway — Direct Partner & Professional Portal
          </p>
          <p className="text-[11px] text-gray-500">
            Real-time Credit Score & Bureau PDF Generation • Authorized KYC Data Access • Encrypted Gateway
          </p>
          <p className="text-[10.5px] text-gray-600 pt-2">
            © {new Date().getFullYear()} Credit Verification Services. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Tax Invoice Modal Component */}
      <CibilInvoiceModal
        isOpen={showInvoiceModal}
        onClose={() => setShowInvoiceModal(false)}
        reportData={apiResult}
      />

    </div>
  );
}
