import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CompanyInvoiceModal from '../components/CompanyInvoiceModal';
import { processRazorpayPayment } from '../services/razorpay';
import { 
  Building2, 
  Users, 
  ShieldCheck, 
  Clock, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Plus, 
  Trash2, 
  ChevronDown, 
  Award, 
  TrendingUp, 
  Briefcase, 
  HelpCircle, 
  CheckCircle2, 
  PhoneCall, 
  MessageCircle 
} from 'lucide-react';

const COMPANY_TYPES = [
  'Private Limited (Pvt Ltd)',
  'Limited Liability Partnership (LLP)',
  'Partnership Firm',
  'Sole Proprietorship',
  'Public Limited (Ltd)',
  'One Person Company (OPC)',
  'Trust / Society / NGO',
  'Other Commercial Entity'
];

const CompanyCibilReport = () => {
  const formTopRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    companyName: '',
    companyType: 'Private Limited (Pvt Ltd)',
    companyPan: '',
    doi: '',
    companyAddress: '',
    pinCode: '',
    mobile: '',
    email: '',
    consent: true
  });

  // Dynamic Multi-Directors State (Starts with 1 Director)
  const [directors, setDirectors] = useState([
    { name: '', dob: '', pan: '' }
  ]);

  const [formErrors, setFormErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccessData, setPaymentSuccessData] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  // Pricing constants
  const BASE_PRICE = 1500;
  const GST_AMOUNT = 270; // 18%
  const TOTAL_AMOUNT = 1770;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle Form Change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'companyPan') {
      setFormData(prev => ({ ...prev, companyPan: value.toUpperCase().slice(0, 10) }));
    } else if (name === 'mobile') {
      const digits = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, mobile: digits }));
    } else if (name === 'pinCode') {
      const digits = value.replace(/\D/g, '').slice(0, 6);
      setFormData(prev => ({ ...prev, pinCode: digits }));
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

  // Director handlers
  const handleAddDirector = () => {
    setDirectors(prev => [...prev, { name: '', dob: '', pan: '' }]);
  };

  const handleRemoveDirector = (indexToRemove) => {
    if (directors.length <= 1) return;
    setDirectors(prev => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleDirectorChange = (index, field, value) => {
    setDirectors(prev => {
      const updated = [...prev];
      if (field === 'pan') {
        updated[index][field] = value.toUpperCase().slice(0, 10);
      } else {
        updated[index][field] = value;
      }
      return updated;
    });

    const errorKey = `director_${index}_${field}`;
    if (formErrors[errorKey]) {
      setFormErrors(prev => ({ ...prev, [errorKey]: '' }));
    }
  };

  // Form Validation
  const validateForm = () => {
    const errors = {};
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.companyName.trim()) {
      errors.companyName = 'Company / Business Name is required';
    }

    if (!formData.companyPan.trim()) {
      errors.companyPan = 'Company PAN is required';
    } else if (!panRegex.test(formData.companyPan.trim())) {
      errors.companyPan = 'Invalid PAN format (e.g. AABCK1234F)';
    }

    if (!formData.doi) {
      errors.doi = 'Date of Incorporation is required';
    }

    if (!formData.companyAddress.trim()) {
      errors.companyAddress = 'Company address is required';
    }

    if (!formData.pinCode.trim() || formData.pinCode.length !== 6) {
      errors.pinCode = 'Valid 6-digit PIN code required';
    }

    if (!formData.mobile.trim()) {
      errors.mobile = 'WhatsApp mobile number is required';
    } else if (formData.mobile.length !== 10) {
      errors.mobile = 'Enter valid 10-digit WhatsApp number';
    }

    if (!formData.email.trim()) {
      errors.email = 'Official email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Enter a valid email address';
    }

    if (!formData.consent) {
      errors.consent = 'You must authorize KTR Consultants to query the bureau';
    }

    // Validate Directors
    directors.forEach((dir, idx) => {
      if (!dir.name.trim()) {
        errors[`director_${idx}_name`] = `Director #${idx + 1} Name is required`;
      }
      if (!dir.dob) {
        errors[`director_${idx}_dob`] = `Director #${idx + 1} DOB is required`;
      }
      if (!dir.pan.trim()) {
        errors[`director_${idx}_pan`] = `Director #${idx + 1} PAN is required`;
      } else if (!panRegex.test(dir.pan.trim())) {
        errors[`director_${idx}_pan`] = `Invalid PAN format`;
      }
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Helper to save report to backend
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
      console.error("Failed to save company CMR to backend:", err);
      return null;
    }
  };

  // Handle Payment Flow
  const handleStartPayment = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      if (formTopRef.current) {
        formTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    setApiError(null);

    try {
      // 1. Launch Razorpay Checkout
      const paymentResult = await processRazorpayPayment({
        amountInRupees: TOTAL_AMOUNT,
        bureauName: 'TransUnion Company CIBIL (CMR)',
        customerName: formData.companyName,
        customerMobile: formData.mobile,
        customerPan: formData.companyPan
      });

      // 2. Build Success & Invoice Payload
      const invoiceNumber = `KTR/CMR/${new Date().getFullYear()}/${Math.floor(10000 + Math.random() * 90000)}`;
      const currentDate = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

      const fullReportData = {
        reportType: 'company_cmr',
        companyName: formData.companyName,
        companyType: formData.companyType,
        companyPan: formData.companyPan,
        doi: formData.doi,
        companyAddress: formData.companyAddress,
        pinCode: formData.pinCode,
        name: formData.companyName,
        mobile: formData.mobile,
        email: formData.email,
        pan: formData.companyPan,
        directors: directors,
        bureau: 'Company CMR (TransUnion CIBIL)',
        paymentId: paymentResult.paymentId,
        invoiceNumber,
        date: currentDate,
        pricing: {
          basePrice: BASE_PRICE,
          gstAmount: GST_AMOUNT,
          totalPayable: TOTAL_AMOUNT
        },
        status: 'pending_fulfillment',
        message: 'Order received. Official CMR report is in progress and will be delivered via WhatsApp & Email within 45 to 90 minutes.'
      };

      // 3. Save to backend database
      await saveReportToBackend(fullReportData);

      // 4. Update UI State
      setPaymentSuccessData(fullReportData);
      if (formTopRef.current) {
        formTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } catch (err) {
      console.error('Payment Error:', err);
      if (err.message && !err.message.includes('cancelled')) {
        setApiError(err.message || 'Payment could not be completed. Please try again.');
      }
    }
  };

  const handleResetForm = () => {
    setPaymentSuccessData(null);
    setFormData({
      companyName: '',
      companyType: 'Private Limited (Pvt Ltd)',
      companyPan: '',
      doi: '',
      companyAddress: '',
      pinCode: '',
      mobile: '',
      email: '',
      consent: true
    });
    setDirectors([{ name: '', dob: '', pan: '' }]);
    setFormErrors({});
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <SEO 
        title="Company CIBIL Report (CMR) & CIBIL Rank Check | KTR Consultants"
        description="Get official TransUnion Company CIBIL Report (CMR) with CIBIL Rank (1 to 10) for Pvt Ltd, LLP, Partnership firms and MSMEs. Fast delivery in 45-90 minutes on WhatsApp & Email."
        keywords="company cibil report, cmr report, cibil rank 1 to 10, company credit score, business cibil report lucknow, ktr consultants cmr"
        canonicalUrl="https://www.ktrconsultants.in/company-cibil-report"
      />

      {/* Hero Header Section */}
      <section className="bg-[#020d1c] text-white pt-10 pb-16 md:pt-14 md:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#de9e48]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#de9e48]/15 border border-[#de9e48]/40 px-3.5 py-1.5 rounded-full mb-4">
              <Building2 className="w-4 h-4 text-[#de9e48]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#de9e48]">
                Commercial Credit Bureau Advisory
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif leading-tight text-white mb-4">
              Official Company CIBIL Report <br />
              <span className="text-[#de9e48]">(CMR) & CIBIL Rank Verification</span>
            </h1>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              Check your company’s commercial credit health, active bank limits (Cash Credit, Overdraft, Term Loans), director cross-guarantees, and official TransUnion CIBIL Rank (Rank 1 to 10).
            </p>

            {/* Top Highlight Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
              <div className="bg-white/10 border border-white/20 px-3.5 py-2 rounded-xl flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#de9e48]" />
                <span>Delivery: 45 - 90 Minutes via WhatsApp & Email</span>
              </div>
              <div className="bg-white/10 border border-white/20 px-3.5 py-2 rounded-xl flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#de9e48]" />
                <span>GST Tax Invoice Provided</span>
              </div>
              <div className="bg-[#de9e48] text-[#020d1c] font-black px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow">
                <span>Fee: ₹1,500 + 18% GST (₹1,770)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container: Form Section & Details */}
      <div ref={formTopRef} className="max-w-[1400px] mx-auto px-4 lg:px-8 py-10 md:py-14">
        
        {/* If Order Confirmed / Paid */}
        {paymentSuccessData ? (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-9 shadow-xl border-2 border-[#de9e48]/40 animate-fadeIn text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
              <CheckCircle className="w-9 h-9" />
            </div>

            <span className="inline-block bg-green-950/10 text-green-700 border border-green-300 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider mb-2">
              ✓ Payment Verified & Order Confirmed
            </span>

            <h2 className="text-2xl font-bold text-[#020d1c] mb-2">
              Company CMR Request Placed!
            </h2>

            <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
              Thank you for choosing KTR Consultants. Your official TransUnion CIBIL Company Credit Report (CMR) has been initiated.
            </p>

            {/* Delivery Guarantee Highlight Box */}
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-50 to-amber-500/10 border border-[#de9e48]/60 p-4 rounded-2xl mb-6 text-left space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <Clock className="w-5 h-5 text-[#de9e48] flex-shrink-0 animate-spin-slow" />
                <span>Delivery Guarantee Timeline: 45 to 90 Minutes</span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed pl-7">
                Your full official PDF report with CIBIL Rank (1 to 10) and complete bank facilities track record will be dispatched directly to:
              </p>
              <div className="pl-7 pt-1 flex flex-wrap gap-4 text-xs font-bold text-[#020d1c]">
                <span>📱 WhatsApp: <strong className="text-green-700 font-mono">+91 {paymentSuccessData.mobile}</strong></span>
                <span>✉️ Email: <strong className="text-blue-700 font-mono">{paymentSuccessData.email}</strong></span>
              </div>
            </div>

            {/* Meta Details Card */}
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 text-xs space-y-2 mb-6 text-left">
              <div className="flex justify-between py-1 border-b border-gray-200/60">
                <span className="text-gray-500">Company Name:</span>
                <span className="font-bold text-[#020d1c]">{paymentSuccessData.companyName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-200/60">
                <span className="text-gray-500">Company PAN:</span>
                <span className="font-mono font-bold text-[#020d1c]">{paymentSuccessData.companyPan}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-200/60">
                <span className="text-gray-500">Payment ID:</span>
                <span className="font-mono text-green-700 font-bold">{paymentSuccessData.paymentId}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-200/60">
                <span className="text-gray-500">Invoice Number:</span>
                <span className="font-mono font-bold text-[#de9e48]">{paymentSuccessData.invoiceNumber}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Amount Paid (Inc. 18% GST):</span>
                <span className="font-bold text-[#020d1c]">₹{TOTAL_AMOUNT} (₹1,500 + ₹270 GST)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setShowInvoiceModal(true)}
                className="w-full h-12 bg-[#020d1c] hover:bg-[#071933] text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 border border-[#de9e48]/50 shadow-md cursor-pointer active:scale-98"
              >
                <FileText className="w-4 h-4 text-[#de9e48]" />
                <span>View / Download Official Tax Invoice</span>
              </button>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/919918699696?text=Hi%20KTR%20Consultants%2C%20I%20have%20ordered%20Company%20CIBIL%20CMR%20for%20${encodeURIComponent(paymentSuccessData.companyName)}%20(Payment%20ID%3A%20${paymentSuccessData.paymentId}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-11 bg-[#25D366] hover:bg-[#1eb757] text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Updates</span>
                </a>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="flex-1 h-11 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs rounded-xl transition-all"
                >
                  Apply Another Company
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Main Application Form Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-[#020d1c]">
                    Company CMR Application Form
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Fill in your company and director details to order TransUnion CIBIL CMR.
                  </p>
                </div>
                <span className="bg-[#de9e48]/15 text-[#020d1c] font-black text-xs px-3 py-1 rounded-full border border-[#de9e48]/30">
                  ₹1,500 + GST
                </span>
              </div>

              {apiError && (
                <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{apiError}</span>
                </div>
              )}

              <form onSubmit={handleStartPayment} className="space-y-6">
                
                {/* 1. Company Information */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-[#020d1c] text-[#de9e48] text-xs font-bold flex items-center justify-center">1</span>
                    <h3 className="text-sm font-bold text-[#020d1c] uppercase tracking-wider">
                      Company / Business Details
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company Name */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Company / Business Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="e.g. Acme Industries Private Limited"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#de9e48] transition-all ${
                          formErrors.companyName ? 'border-red-400 bg-red-50/40' : 'border-gray-300 bg-white'
                        }`}
                      />
                      {formErrors.companyName && <p className="text-[11px] text-red-500 mt-1">{formErrors.companyName}</p>}
                    </div>

                    {/* Company Type */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Company Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="companyType"
                        value={formData.companyType}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#de9e48] transition-all cursor-pointer"
                      >
                        {COMPANY_TYPES.map((type, idx) => (
                          <option key={idx} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    {/* Company PAN */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Company PAN <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyPan"
                        value={formData.companyPan}
                        onChange={handleInputChange}
                        maxLength={10}
                        placeholder="e.g. AABCK1234F"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm uppercase font-mono text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#de9e48] transition-all ${
                          formErrors.companyPan ? 'border-red-400 bg-red-50/40' : 'border-gray-300 bg-white'
                        }`}
                      />
                      {formErrors.companyPan && <p className="text-[11px] text-red-500 mt-1">{formErrors.companyPan}</p>}
                    </div>

                    {/* DOI (Date of Incorporation) */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Date of Incorporation (DOI) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="doi"
                        value={formData.doi}
                        onChange={handleInputChange}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#de9e48] transition-all ${
                          formErrors.doi ? 'border-red-400 bg-red-50/40' : 'border-gray-300 bg-white'
                        }`}
                      />
                      {formErrors.doi && <p className="text-[11px] text-red-500 mt-1">{formErrors.doi}</p>}
                    </div>

                    {/* PIN Code */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Registered PIN Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleInputChange}
                        maxLength={6}
                        placeholder="6 digits PIN"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#de9e48] transition-all ${
                          formErrors.pinCode ? 'border-red-400 bg-red-50/40' : 'border-gray-300 bg-white'
                        }`}
                      />
                      {formErrors.pinCode && <p className="text-[11px] text-red-500 mt-1">{formErrors.pinCode}</p>}
                    </div>

                    {/* Company Address */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Registered Office Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="companyAddress"
                        value={formData.companyAddress}
                        onChange={handleInputChange}
                        rows={2}
                        placeholder="Full registered address as per MCA / GST / Firm records"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#de9e48] transition-all ${
                          formErrors.companyAddress ? 'border-red-400 bg-red-50/40' : 'border-gray-300 bg-white'
                        }`}
                      />
                      {formErrors.companyAddress && <p className="text-[11px] text-red-500 mt-1">{formErrors.companyAddress}</p>}
                    </div>
                  </div>
                </div>

                {/* 2. Mandatory Delivery Contact Details */}
                <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#020d1c] text-[#de9e48] text-xs font-bold flex items-center justify-center">2</span>
                    <h3 className="text-sm font-bold text-[#020d1c] uppercase tracking-wider">
                      Report Delivery Destination (Mandatory)
                    </h3>
                  </div>
                  <p className="text-[11.5px] text-gray-600 mb-3.5">
                    Your official CMR report will be generated and delivered to these details within <strong>45 to 90 minutes</strong>.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* WhatsApp Mobile */}
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1">
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 font-semibold text-xs">
                          +91
                        </span>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          maxLength={10}
                          placeholder="10-digit WhatsApp number"
                          className={`w-full pl-11 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#de9e48] transition-all ${
                            formErrors.mobile ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
                          }`}
                        />
                      </div>
                      {formErrors.mobile && <p className="text-[11px] text-red-500 mt-1">{formErrors.mobile}</p>}
                    </div>

                    {/* Email ID */}
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-1">
                        Official Email ID <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="official@yourcompany.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#de9e48] transition-all ${
                          formErrors.email ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
                        }`}
                      />
                      {formErrors.email && <p className="text-[11px] text-red-500 mt-1">{formErrors.email}</p>}
                    </div>
                  </div>
                </div>

                {/* 3. Directors / Partners / Proprietors Dynamic Section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#020d1c] text-[#de9e48] text-xs font-bold flex items-center justify-center">3</span>
                      <h3 className="text-sm font-bold text-[#020d1c] uppercase tracking-wider">
                        Directors / Partners Details
                      </h3>
                    </div>
                    <span className="text-[11px] text-gray-500">
                      ({directors.length} Added)
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3.5 leading-relaxed">
                    Enter details for all primary Directors / Partners / Proprietors. The bureau links commercial facilities to director cross-guarantees.
                  </p>

                  <div className="space-y-3.5">
                    {directors.map((director, idx) => (
                      <div 
                        key={idx} 
                        className="bg-gray-50/80 border border-gray-200 p-4 rounded-2xl relative transition-all"
                      >
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="text-xs font-extrabold text-[#020d1c] uppercase tracking-wide">
                            Director / Partner #{idx + 1}
                          </span>
                          {directors.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveDirector(idx)}
                              className="text-red-500 hover:text-red-700 text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Remove</span>
                            </button>
                          )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {/* Name */}
                          <div>
                            <label className="block text-[11px] font-bold text-gray-600 mb-1">
                              Full Name (as per PAN) <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={director.name}
                              onChange={(e) => handleDirectorChange(idx, 'name', e.target.value)}
                              placeholder="Director Name"
                              className={`w-full px-3 py-2 rounded-lg border text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#de9e48] ${
                                formErrors[`director_${idx}_name`] ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
                              }`}
                            />
                            {formErrors[`director_${idx}_name`] && (
                              <p className="text-[10px] text-red-500 mt-0.5">{formErrors[`director_${idx}_name`]}</p>
                            )}
                          </div>

                          {/* DOB */}
                          <div>
                            <label className="block text-[11px] font-bold text-gray-600 mb-1">
                              Date of Birth (DOB) <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="date"
                              value={director.dob}
                              onChange={(e) => handleDirectorChange(idx, 'dob', e.target.value)}
                              className={`w-full px-3 py-2 rounded-lg border text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#de9e48] ${
                                formErrors[`director_${idx}_dob`] ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
                              }`}
                            />
                            {formErrors[`director_${idx}_dob`] && (
                              <p className="text-[10px] text-red-500 mt-0.5">{formErrors[`director_${idx}_dob`]}</p>
                            )}
                          </div>

                          {/* Individual PAN */}
                          <div>
                            <label className="block text-[11px] font-bold text-gray-600 mb-1">
                              PAN Number <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={director.pan}
                              onChange={(e) => handleDirectorChange(idx, 'pan', e.target.value)}
                              maxLength={10}
                              placeholder="e.g. ABCDE1234F"
                              className={`w-full px-3 py-2 rounded-lg border text-xs uppercase font-mono text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#de9e48] ${
                                formErrors[`director_${idx}_pan`] ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
                              }`}
                            />
                            {formErrors[`director_${idx}_pan`] && (
                              <p className="text-[10px] text-red-500 mt-0.5">{formErrors[`director_${idx}_pan`]}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Add Director Button */}
                    <button
                      type="button"
                      onClick={handleAddDirector}
                      className="w-full py-2.5 px-4 border-2 border-dashed border-[#de9e48] hover:border-[#c98e41] text-[#020d1c] hover:bg-[#de9e48]/10 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Plus className="w-4 h-4 text-[#de9e48]" />
                      <span>+ Add Another Director / Partner</span>
                    </button>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-gray-600">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-0.5 w-4 h-4 text-[#de9e48] rounded border-gray-300 focus:ring-[#de9e48] accent-[#de9e48]"
                    />
                    <span>
                      I hereby confirm that I am an authorized signatory / representative of the company and authorize KTR Consultants to query and retrieve the official Company Credit Report (CMR) from TransUnion CIBIL.
                    </span>
                  </label>
                  {formErrors.consent && <p className="text-[11px] text-red-500 mt-1">{formErrors.consent}</p>}
                </div>

                {/* Submit & Razorpay Trigger Button */}
                <div className="pt-2 border-t border-gray-100">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-black text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-lg hover:shadow-[#de9e48]/30 transition-all flex items-center justify-between cursor-pointer active:scale-98"
                  >
                    <span>Proceed to Pay & Request CMR Report</span>
                    <div className="flex items-center gap-2 bg-[#020d1c] text-white px-3 py-1 rounded-xl text-xs sm:text-sm font-bold">
                      <span>₹{TOTAL_AMOUNT}</span>
                      <span className="text-[10px] text-gray-300 font-normal">Inc. GST</span>
                    </div>
                  </button>
                  <p className="text-center text-[11px] text-gray-500 mt-2">
                    🔒 Secured via Razorpay (UPI, Credit/Debit Cards, NetBanking). Official Tax Invoice available immediately upon payment.
                  </p>
                </div>

              </form>
            </div>

            {/* Right Column: Pricing & Process Overview (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Pricing Summary Card */}
              <div className="bg-[#020d1c] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-gray-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#de9e48]/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                  <div>
                    <span className="text-[10.5px] font-bold text-[#de9e48] uppercase tracking-wider">
                      Commercial Tariff
                    </span>
                    <h3 className="text-lg font-bold text-white">Fee Breakdown</h3>
                  </div>
                  <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-700/80 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                    TransUnion CMR
                  </span>
                </div>

                <div className="py-4 space-y-2.5 text-xs text-gray-300 border-b border-gray-800">
                  <div className="flex justify-between">
                    <span>Company CIBIL Report (CMR):</span>
                    <span className="font-mono font-semibold text-white">₹{BASE_PRICE}.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CIBIL Rank (1-10) Assessment:</span>
                    <span className="text-emerald-400 font-bold">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Multi-Director Exposure Scan:</span>
                    <span className="text-emerald-400 font-bold">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST (+18% CGST 9% + SGST 9%):</span>
                    <span className="font-mono font-semibold text-white">₹{GST_AMOUNT}.00</span>
                  </div>
                </div>

                <div className="pt-4 flex items-baseline justify-between">
                  <span className="text-sm font-bold text-gray-200">Total Payable:</span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-[#de9e48]">₹{TOTAL_AMOUNT}</span>
                    <span className="block text-[10px] text-gray-400">All Taxes Included</span>
                  </div>
                </div>

                <div className="mt-5 p-3 bg-white/5 border border-white/10 rounded-xl text-[11px] text-gray-300 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#de9e48]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Turnaround Time: 45 to 90 Minutes</span>
                  </div>
                  <p className="leading-snug">
                    Full official CMR PDF report delivered to your registered WhatsApp and email.
                  </p>
                </div>
              </div>

              {/* What You Get Box */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-gray-200 space-y-3.5">
                <h3 className="text-sm font-bold text-[#020d1c] uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#de9e48]" />
                  <span>What’s Inside the Company CMR?</span>
                </h3>

                <ul className="space-y-2.5 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>CIBIL Rank (Rank 1 to 10)</strong>: Direct commercial rating determining loan eligibility & interest rates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Bank Credit Facilities</strong>: Cash Credit (CC), Overdraft (OD), Term Loans, Letter of Credit (LC), and Bank Guarantees (BG).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Overdue & NPA History</strong>: Detailed repayment history and any default records.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Director & Guarantor Exposure</strong>: Personal guarantees linked to company debts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Suit-Filed & Willful Defaulter Checks</strong>: Complete verification for commercial tenders & contracts.</span>
                  </li>
                </ul>
              </div>

              {/* Need Assistance / Support Card */}
              <div className="bg-gradient-to-br from-[#0c1a2e] to-[#020d1c] text-white p-6 rounded-3xl border border-[#de9e48]/30 shadow-md">
                <h4 className="text-sm font-bold mb-1 flex items-center gap-2">
                  <span>Questions regarding Company CMR?</span>
                </h4>
                <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                  Speak directly with our senior commercial credit advisory team for guidance on corporate credit rectification and loan enhancement.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+919918699696"
                    className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-3.5 py-2 rounded-xl border border-gray-700 transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#de9e48]" />
                    <span>+91 99186 99696</span>
                  </a>
                  <a
                    href="https://wa.me/919918699696?text=Hi%20KTR%20Consultants%2C%20I%20need%20assistance%20with%20Company%20CIBIL%20CMR."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] font-bold text-xs px-3.5 py-2 rounded-xl border border-[#25D366]/40 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>

      {/* Educational Section: Why Company CIBIL is Important */}
      <section className="bg-white py-14 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#de9e48] text-xs font-bold uppercase tracking-wider">
              Essential Commercial Intelligence
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#020d1c] mt-1">
              Why is Company CIBIL (CMR) Crucial for Your Business?
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Unlike individual CIBIL scores (ranging 300 to 900), commercial credit profiles are rated using <strong>CIBIL Rank (Rank 1 to 10)</strong>. Here is why every enterprise must monitor their CMR.
            </p>
          </div>

          {/* 4 Feature Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200/80 hover:border-[#de9e48]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#020d1c] text-[#de9e48] flex items-center justify-center font-bold mb-3 shadow">
                🏦
              </div>
              <h3 className="font-bold text-[#020d1c] text-sm mb-1.5">
                Bank Loans & CC/OD Limits
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Banks scrutinize the CMR before sanctioning or renewing Working Capital, Cash Credit limits, and Term Loans. A high rank guarantees faster sanction.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200/80 hover:border-[#de9e48]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#020d1c] text-[#de9e48] flex items-center justify-center font-bold mb-3 shadow">
                📑
              </div>
              <h3 className="font-bold text-[#020d1c] text-sm mb-1.5">
                Govt Tenders & Contracts
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                PSUs and large corporations require CMR and Willful Defaulter clearance reports during technical bid evaluations to ensure project execution stability.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200/80 hover:border-[#de9e48]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#020d1c] text-[#de9e48] flex items-center justify-center font-bold mb-3 shadow">
                🤝
              </div>
              <h3 className="font-bold text-[#020d1c] text-sm mb-1.5">
                Vendor & Supplier Credit
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Raw material suppliers and enterprise partners evaluate your CMR to grant 30, 60, or 90 days of unsecured trade credit without security deposit.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200/80 hover:border-[#de9e48]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#020d1c] text-[#de9e48] flex items-center justify-center font-bold mb-3 shadow">
                🔍
              </div>
              <h3 className="font-bold text-[#020d1c] text-sm mb-1.5">
                Director Exposure Audit
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Identifies erroneous loans, old settled accounts, and personal guarantees linked to directors before applying for fresh debt.
              </p>
            </div>
          </div>

          {/* CIBIL Rank Spectrum Scale (Rank 1 to 10 Explained) */}
          <div className="bg-gradient-to-br from-[#020d1c] to-[#071933] text-white p-6 sm:p-8 rounded-3xl border border-[#de9e48]/40 mb-12 shadow-xl">
            <div className="max-w-2xl mb-6">
              <span className="text-[#de9e48] text-xs font-bold uppercase tracking-wider">
                Scoring Mechanics
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-1">
                Understanding TransUnion CIBIL Rank (1 to 10)
              </h3>
              <p className="text-xs text-gray-300 mt-1.5">
                Unlike personal CIBIL (where higher numbers are better), in Company CMR, a <strong>lower rank indicates superior creditworthiness</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-emerald-950/40 border border-emerald-500/40 p-4 rounded-2xl">
                <span className="bg-emerald-500 text-black font-black text-xs px-2 py-0.5 rounded uppercase">
                  Rank 1 to 4: Prime Standing
                </span>
                <p className="text-white font-bold text-sm mt-2 mb-1">Lowest Risk of Default</p>
                <p className="text-gray-300 leading-relaxed">
                  Best credit standing. Commercial banks offer competitive interest rates, relaxed margin money, and quick loan sanction.
                </p>
              </div>

              <div className="bg-amber-950/40 border border-amber-500/40 p-4 rounded-2xl">
                <span className="bg-amber-400 text-black font-black text-xs px-2 py-0.5 rounded uppercase">
                  Rank 5 to 7: Moderate Risk
                </span>
                <p className="text-white font-bold text-sm mt-2 mb-1">Acceptable Credit Profile</p>
                <p className="text-gray-300 leading-relaxed">
                  Loans are approved with standard interest rates. Lenders may ask for additional collateral or personal director guarantees.
                </p>
              </div>

              <div className="bg-red-950/40 border border-red-500/40 p-4 rounded-2xl">
                <span className="bg-red-500 text-white font-black text-xs px-2 py-0.5 rounded uppercase">
                  Rank 8 to 10: High Risk
                </span>
                <p className="text-white font-bold text-sm mt-2 mb-1">Critical Default Probability</p>
                <p className="text-gray-300 leading-relaxed">
                  High chance of bank loan rejection, cancellation of credit lines, and tender disqualification. Immediate credit rectification required.
                </p>
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold font-serif text-[#020d1c] mb-5 text-center">
              Frequently Asked Questions (Company CMR)
            </h3>
            
            <div className="space-y-3 text-xs">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
                <h4 className="font-bold text-[#020d1c] text-sm mb-1">
                  How long will it take to receive the CMR Report?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Your CMR report will be thoroughly compiled and delivered directly to your authorized WhatsApp number and email within <strong>45 to 90 minutes</strong> during business hours.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
                <h4 className="font-bold text-[#020d1c] text-sm mb-1">
                  Why are Director / Partner details needed?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Under TransUnion CIBIL guidelines, commercial entities (Pvt Ltd, LLP, Partnership) have credit exposures linked to the personal guarantees and credit history of their primary directors and promoters.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
                <h4 className="font-bold text-[#020d1c] text-sm mb-1">
                  Will I receive an official GST Tax Invoice?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Yes, immediately upon payment via Razorpay, you can view, print, and download an official computer-generated GST Tax Invoice featuring SAC Code 998311 for your company’s accounting records.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Official Tax Invoice Modal */}
      <CompanyInvoiceModal
        isOpen={showInvoiceModal}
        onClose={() => setShowInvoiceModal(false)}
        reportData={paymentSuccessData}
      />
    </div>
  );
};

export default CompanyCibilReport;
