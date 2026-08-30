import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { processRazorpayPayment } from '../services/razorpay';

const FakeLoanSection = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pan: '',
    lenderName: '',
    disputedAmount: '',
    accountNumber: '',
    notes: '',
    neverAuthorizedConsent: false,
    assessmentFeeConsent: false
  });

  const [panFile, setPanFile] = useState(null);
  const [panFileName, setPanFileName] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [submittedCase, setSubmittedCase] = useState(null);

  // File Upload Handler
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setFormErrors(prev => ({ ...prev, panFile: 'File size must be under 5MB.' }));
        return;
      }
      setPanFile(file);
      setPanFileName(file.name);
      setFormErrors(prev => ({ ...prev, panFile: '' }));
    }
  };

  const handleRemoveFile = () => {
    setPanFile(null);
    setPanFileName('');
  };

  // Form Field Change Handler
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
  };

  // Validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full Name is required.';
    
    if (!formData.mobile.trim()) {
      errors.mobile = 'Mobile Number is required.';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      errors.mobile = 'Enter a valid 10-digit mobile number.';
    }

    if (!formData.pan.trim()) {
      errors.pan = 'PAN Number is required.';
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan)) {
      errors.pan = 'Enter a valid 10-digit PAN (e.g., BPWPV8659C).';
    }

    if (!panFile) {
      errors.panFile = 'Please upload a photo or PDF of your PAN Card.';
    }

    if (!formData.neverAuthorizedConsent) {
      errors.neverAuthorizedConsent = 'You must confirm that you never authorized this loan.';
    }

    if (!formData.assessmentFeeConsent) {
      errors.assessmentFeeConsent = 'You must acknowledge the ₹1,000 assessment fee terms.';
    }

    return errors;
  };

  // Handle Submit & Payment
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const firstKey = Object.keys(errors)[0];
      const el = document.getElementById(`field-${firstKey}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsProcessing(true);

    try {
      // Trigger Razorpay payment for ₹1,000 + 18% GST (₹1,180)
      const paymentResponse = await processRazorpayPayment({
        amountInRupees: 1180,
        bureauName: 'Fake Loan Assessment & Consultation (₹1,000 + GST)',
        customerName: formData.name,
        customerMobile: formData.mobile,
        customerPan: formData.pan
      });

      // After successful payment, save case to backend
      const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const fd = new FormData();
      fd.append('name', formData.name);
      fd.append('mobile', formData.mobile);
      fd.append('pan', formData.pan);
      fd.append('lenderName', formData.lenderName || '');
      fd.append('disputedAmount', formData.disputedAmount || '');
      fd.append('accountNumber', formData.accountNumber || '');
      fd.append('notes', formData.notes || '');
      fd.append('paymentId', paymentResponse.razorpay_payment_id || ('PAY_' + Date.now()));
      if (panFile) fd.append('panFile', panFile);

      const res = await fetch(`${BACKEND_URL}/cibil-cases/submit`, {
        method: 'POST',
        body: fd
      });
      const result = await res.json();

      const savedCase = result.success ? result.data : null;

      setSubmittedCase({
        caseId: savedCase?.caseId || `KTR-FLR-${Date.now().toString().slice(-6)}`,
        paymentId: paymentResponse.razorpay_payment_id || ('PAY_' + Date.now()),
        date: new Date().toLocaleDateString('en-IN', {
          day: '2-digit', month: 'short', year: 'numeric',
          hour: '2-digit', minute: '2-digit'
        }),
        ...formData,
        panFileName
      });

      // Scroll to result view
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);

    } catch (err) {
      alert(err.message || 'Payment was cancelled or failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="bg-[#fcfcfd] py-12 lg:py-18 font-sans relative overflow-hidden" ref={formRef}>
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-gray-100/80 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#de9e48]/15 text-[#de9e48] border border-[#de9e48]/30 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#de9e48] animate-pulse"></span>
            Specialized CIBIL Dispute Service
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-[#020d1c] mb-4 tracking-tight leading-tight">
            Fake / Unauthorized Loan <br className="hidden sm:block" />
            <span className="text-[#de9e48]">Removal & Assessment from CIBIL</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Is an unauthorized loan or fraudulent credit account appearing on your CIBIL report that you never availed? Submit your case for initial forensic review and dispute assessment.
          </p>
        </div>

        {/* Process Flow Overview (4 Steps) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {[
            {
              step: '01',
              title: 'Submit Case Details',
              desc: 'Provide your PAN, identity verification, and details of the suspected unauthorized loan.'
            },
            {
              step: '02',
              title: '₹1,000 + GST Fee',
              desc: 'Pay initial case evaluation fee (₹1,000 + 18% GST = ₹1,180) for forensic audit by KTR Consultants.'
            },
            {
              step: '03',
              title: 'Forensic Bureau Review',
              desc: 'Our experts cross-verify lender records, PAN issuance timelines, and loan disbursement merits.'
            },
            {
              step: '04',
              title: 'Action Plan & Timeline',
              desc: 'Receive formal eligibility outcome, expected dispute timeline, and quote for full resolution.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-sm relative group hover:border-[#de9e48]/50 transition-all">
              <span className="text-xs font-black text-[#de9e48] bg-[#de9e48]/10 px-2 py-0.5 rounded uppercase tracking-wider mb-2 inline-block">
                Step {item.step}
              </span>
              <h4 className="text-[#020d1c] font-bold text-sm mb-1.5">{item.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 2-Column Section: Guidelines & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Eligibility Rules & Disclaimers (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Eligibility Criteria Card */}
            <div className="bg-[#020d1c] text-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-800">
              <h3 className="text-lg md:text-xl font-bold font-serif mb-2 flex items-center gap-2">
                <span className="text-[#de9e48]">⚖️</span> Strict Eligibility Criteria
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-6">
                This service is strictly reserved for genuine victims of identity theft or banking clerical errors. Please review the criteria below before submitting:
              </p>

              {/* When Eligible */}
              <div className="mb-6 bg-green-950/40 border border-green-700/60 p-4 rounded-xl">
                <h4 className="text-green-400 font-bold text-xs uppercase tracking-wide mb-2.5 flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Genuinely Eligible Cases:
                </h4>
                <ul className="text-gray-200 text-xs space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Loans disbursed without your knowledge or consent (Identity Theft / Fraud).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Clerical bureau mismatch where someone else's loan is linked to your PAN.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Duplicate fake entries by predatory fintech apps or unverified lenders.</span>
                  </li>
                </ul>
              </div>

              {/* When NOT Eligible */}
              <div className="bg-red-950/40 border border-red-700/60 p-4 rounded-xl">
                <h4 className="text-red-400 font-bold text-xs uppercase tracking-wide mb-2.5 flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  NOT Eligible (Will Be Rejected):
                </h4>
                <ul className="text-gray-300 text-xs space-y-1.5">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>"I don't remember taking this loan."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>"I forgot the lender's name."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>"I took the loan but forgot to pay or defaulted."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>"I took the loan by mistake."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>"I want to hide a genuine loan to improve my CIBIL score."</span>
                  </li>
                </ul>
                <p className="text-[11px] text-gray-400 mt-2.5 pt-2 border-t border-red-900/60 italic">
                  * If a loan was genuinely availed by you, it CANNOT be removed under this service.
                </p>
              </div>
            </div>

            {/* Crucial Disclaimer Alert */}
            <div className="bg-amber-50 border-2 border-amber-200 p-5 rounded-xl">
              <div className="flex items-start gap-3">
                <span className="text-xl">⚠️</span>
                <div>
                  <h4 className="text-[#020d1c] font-bold text-xs uppercase tracking-wider mb-1">
                    Important Assessment Disclaimer
                  </h4>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    The <strong>₹1,000 + 18% GST (Total: ₹1,180) fee is strictly for Initial Case Consultation & Technical Assessment</strong>. Paying this fee does <strong>NOT guarantee automatic loan deletion</strong>. The fee covers forensic verification of bureau records. After review, our team informs you of your case eligibility, expected timeline, and any additional professional charges.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact / Support Box */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center justify-between shadow-sm">
              <div>
                <h5 className="text-xs font-bold text-[#020d1c]">Have Prior Questions?</h5>
                <p className="text-[11px] text-gray-500">Speak directly with our CIBIL advisory desk</p>
              </div>
              <a 
                href="https://wa.me/919918699696?text=Hi%20KTR%20Consultants%2C%20I%20have%20an%20inquiry%20regarding%20Fake%20Loan%20Removal%20Assessment." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] border border-[#25D366]/30 font-bold text-xs px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all"
              >
                WhatsApp Us
              </a>
            </div>

          </div>

          {/* Right Column: Case Intake Form / Success Receipt (7 Cols) */}
          <div className="lg:col-span-7">
            
            {submittedCase ? (
              /* Success Case Confirmation View */
              <div className="bg-white rounded-2xl border-2 border-[#de9e48] shadow-2xl p-6 md:p-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div className="text-center mb-6">
                  <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full uppercase tracking-wider">
                    Payment & Case Submitted Successfully
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-[#020d1c] mt-3 mb-1">
                    Case Reference: {submittedCase.caseId}
                  </h3>
                  <p className="text-gray-500 text-xs">
                    Submitted on {submittedCase.date} • Assessment Fee Paid: <strong>₹1,000 + 18% GST (Total: ₹1,180)</strong>
                  </p>
                </div>

                {/* Case Details Summary */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 space-y-3 text-xs mb-6">
                  <div className="flex justify-between py-1 border-b border-gray-200">
                    <span className="text-gray-500">Applicant Name:</span>
                    <span className="font-bold text-[#020d1c]">{submittedCase.name}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-200">
                    <span className="text-gray-500">Mobile Number:</span>
                    <span className="font-bold text-[#020d1c]">{submittedCase.mobile}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-200">
                    <span className="text-gray-500">PAN Number:</span>
                    <span className="font-mono font-bold text-[#020d1c]">{submittedCase.pan}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-200">
                    <span className="text-gray-500">PAN Card Uploaded:</span>
                    <span className="font-semibold text-green-700">✓ {submittedCase.panFileName || 'Attached'}</span>
                  </div>
                  {submittedCase.lenderName && (
                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-500">Disputed Lender:</span>
                      <span className="font-bold text-[#020d1c]">{submittedCase.lenderName}</span>
                    </div>
                  )}
                  {submittedCase.disputedAmount && (
                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-500">Approx Disputed Amount:</span>
                      <span className="font-bold text-[#de9e48]">₹{submittedCase.disputedAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500">Payment Reference ID:</span>
                    <span className="font-mono text-gray-700">{submittedCase.paymentId}</span>
                  </div>
                </div>

                {/* What Happens Next Guidance */}
                <div className="bg-[#020d1c] text-white p-5 rounded-xl mb-6">
                  <h4 className="text-[#de9e48] font-bold text-xs uppercase tracking-wider mb-2">
                    📋 What Happens Next?
                  </h4>
                  <ol className="text-xs text-gray-300 space-y-2 list-decimal list-inside leading-relaxed">
                    <li>Our CIBIL forensic team is reviewing your PAN profile and lender records.</li>
                    <li>Within <strong>24 to 48 business hours</strong>, our legal specialist will call you at <strong>{submittedCase.mobile}</strong>.</li>
                    <li>You will receive your <strong>Case Eligibility Report</strong>, estimated dispute timeline, and next regulatory steps.</li>
                  </ol>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/919918699696?text=Hi%20KTR%20Consultants%2C%20I%20have%20submitted%20Case%20ID%20${submittedCase.caseId}%20for%20Fake%20Loan%20Removal%20Assessment.%20My%20PAN%20is%20${submittedCase.pan}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <span>Connect on WhatsApp with Case ID</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedCase(null);
                      setFormData({
                        name: '',
                        mobile: '',
                        pan: '',
                        lenderName: '',
                        disputedAmount: '',
                        accountNumber: '',
                        notes: '',
                        neverAuthorizedConsent: false,
                        assessmentFeeConsent: false
                      });
                      setPanFile(null);
                      setPanFileName('');
                    }}
                    className="bg-gray-100 hover:bg-gray-200 text-[#020d1c] font-bold text-xs py-3 px-4 rounded-xl transition-all"
                  >
                    Submit Another Case
                  </button>
                </div>

              </div>
            ) : (
              /* Case Submission Form */
              <div className="bg-white rounded-2xl border border-gray-200/90 shadow-xl p-6 md:p-8">
                
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold font-serif text-[#020d1c]">
                      Submit Your Case for Assessment
                    </h3>
                    <p className="text-gray-500 text-xs mt-0.5">
                      Fill accurate details. Initial assessment fee: <strong className="text-[#de9e48]">₹1,000 + 18% GST (₹1,180)</strong>
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs bg-[#020d1c] text-[#de9e48] px-2.5 py-1 rounded-full font-black border border-[#de9e48]/40">
                      ₹1,000 + GST
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Row 1: Name & Mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div id="field-name" className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700 block">
                        Full Name (as per PAN) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Ramesh Kumar Verma"
                        className={`w-full h-10 px-3 text-xs border rounded-lg focus:outline-none transition-all ${
                          formErrors.name ? 'border-red-500 bg-red-50/20' : 'border-gray-300 focus:border-[#de9e48]'
                        }`}
                      />
                      {formErrors.name && <p className="text-red-500 text-[10.5px]">{formErrors.name}</p>}
                    </div>

                    <div id="field-mobile" className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700 block">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="e.g. 9876543210"
                        maxLength={10}
                        className={`w-full h-10 px-3 text-xs border rounded-lg focus:outline-none transition-all ${
                          formErrors.mobile ? 'border-red-500 bg-red-50/20' : 'border-gray-300 focus:border-[#de9e48]'
                        }`}
                      />
                      {formErrors.mobile && <p className="text-red-500 text-[10.5px]">{formErrors.mobile}</p>}
                    </div>
                  </div>

                  {/* Row 2: PAN Number & PAN Card Upload */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div id="field-pan" className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700 block">
                        PAN Card Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="pan"
                        value={formData.pan}
                        onChange={handleInputChange}
                        placeholder="BPWPV8659C"
                        maxLength={10}
                        className={`w-full h-10 px-3 text-xs border rounded-lg focus:outline-none font-mono uppercase font-bold tracking-wider transition-all ${
                          formErrors.pan ? 'border-red-500 bg-red-50/20' : 'border-gray-300 focus:border-[#de9e48]'
                        }`}
                      />
                      {formErrors.pan && <p className="text-red-500 text-[10.5px]">{formErrors.pan}</p>}
                    </div>

                    {/* PAN Card File Upload */}
                    <div id="field-panFile" className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700 block">
                        Upload PAN Card (JPG/PNG/PDF) <span className="text-red-500">*</span>
                      </label>
                      
                      {panFileName ? (
                        <div className="flex items-center justify-between h-10 px-3 bg-gray-50 border border-green-500 rounded-lg text-xs">
                          <span className="truncate max-w-[180px] text-gray-700 font-medium">📄 {panFileName}</span>
                          <button
                            type="button"
                            onClick={handleRemoveFile}
                            className="text-red-500 hover:text-red-700 text-xs font-bold"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <label className={`w-full h-10 px-3 border border-dashed rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all ${
                          formErrors.panFile ? 'border-red-500 bg-red-50/30 text-red-600' : 'border-gray-400 hover:border-[#de9e48] bg-gray-50/60 text-gray-600'
                        }`}>
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                          </svg>
                          <span className="text-xs font-medium">Choose PAN File (Max 5MB)</span>
                          <input
                            type="file"
                            accept=".jpg,.jpeg,.png,.pdf"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                      )}
                      {formErrors.panFile && <p className="text-red-500 text-[10.5px]">{formErrors.panFile}</p>}
                    </div>
                  </div>

                  {/* Section Divider: Suspected Loan Information */}
                  <div className="pt-3 pb-1 border-t border-gray-100">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                      Suspected Unauthorized Loan Details (Optional but Recommended)
                    </span>
                  </div>

                  {/* Row 3: Lender Name & Disputed Amount */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700 block">
                        Lender / Bank / NBFC Name
                      </label>
                      <input
                        type="text"
                        name="lenderName"
                        value={formData.lenderName}
                        onChange={handleInputChange}
                        placeholder="e.g. Bajaj Finance, HDFC Bank, PayTM"
                        className="w-full h-10 px-3 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-[#de9e48]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-700 block">
                        Approx Disputed Amount (₹)
                      </label>
                      <input
                        type="text"
                        name="disputedAmount"
                        value={formData.disputedAmount}
                        onChange={handleInputChange}
                        placeholder="e.g. 50,000"
                        className="w-full h-10 px-3 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-[#de9e48]"
                      />
                    </div>
                  </div>

                  {/* Row 4: Disputed Account Number & Notes */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">
                      Disputed Loan / Account Number (if known from CIBIL report)
                    </label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                      placeholder="e.g. LND-88492048291"
                      className="w-full h-10 px-3 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-[#de9e48]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">
                      Case Notes & Explanation
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Explain why you believe this loan is fake/unauthorized (e.g., I never applied for any personal loan with this NBFC; someone misused my PAN; etc.)"
                      className="w-full p-3 text-xs border border-gray-300 rounded-lg focus:outline-none focus:border-[#de9e48]"
                    ></textarea>
                  </div>

                  {/* Mandatory Checkboxes */}
                  <div className="pt-2 space-y-3 bg-gray-50/80 p-3.5 rounded-xl border border-gray-200">
                    
                    <div id="field-neverAuthorizedConsent" className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        id="neverAuthorizedConsent"
                        name="neverAuthorizedConsent"
                        checked={formData.neverAuthorizedConsent}
                        onChange={handleInputChange}
                        className="mt-0.5 w-4 h-4 text-[#de9e48] border-gray-400 rounded focus:ring-[#de9e48] accent-[#de9e48] cursor-pointer"
                      />
                      <label htmlFor="neverAuthorizedConsent" className="text-gray-700 text-[11px] leading-snug cursor-pointer font-medium">
                        <strong className="text-[#020d1c]">Solemn Declaration:</strong> I confirm that I have <strong>NEVER authorized, availed, or received funds</strong> for the disputed loan mentioned above, and believe it to be genuinely fraudulent or erroneously reported.
                      </label>
                    </div>
                    {formErrors.neverAuthorizedConsent && (
                      <p className="text-red-500 text-[10.5px] ml-6">{formErrors.neverAuthorizedConsent}</p>
                    )}

                    <div id="field-assessmentFeeConsent" className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        id="assessmentFeeConsent"
                        name="assessmentFeeConsent"
                        checked={formData.assessmentFeeConsent}
                        onChange={handleInputChange}
                        className="mt-0.5 w-4 h-4 text-[#de9e48] border-gray-400 rounded focus:ring-[#de9e48] accent-[#de9e48] cursor-pointer"
                      />
                      <label htmlFor="assessmentFeeConsent" className="text-gray-700 text-[11px] leading-snug cursor-pointer font-medium">
                        <strong className="text-[#020d1c]">Assessment Fee Acknowledgment:</strong> I understand that the <strong>₹1,000 + 18% GST (Total: ₹1,180) fee is for Initial Case Consultation & Forensic Assessment</strong> and is <strong>NOT a guarantee of automatic removal</strong>. Additional charges and timeline will be quoted post-assessment if eligible.
                      </label>
                    </div>
                    {formErrors.assessmentFeeConsent && (
                      <p className="text-red-500 text-[10.5px] ml-6">{formErrors.assessmentFeeConsent}</p>
                    )}

                  </div>

                  {/* Total Payable Summary Box */}
                  <div className="bg-[#020d1c] text-white p-4 rounded-xl border border-gray-800 space-y-1.5 text-xs">
                    <div className="flex justify-between text-gray-300">
                      <span>Initial Case Assessment Fee:</span>
                      <span className="font-semibold text-white">₹1,000</span>
                    </div>
                    <div className="flex justify-between text-gray-400 text-[11px]">
                      <span>GST (18%):</span>
                      <span>+₹180</span>
                    </div>
                    <div className="flex justify-between text-white font-bold text-sm pt-2 border-t border-gray-800 items-baseline">
                      <span>Total Payable at Checkout:</span>
                      <span className="text-2xl font-black text-[#de9e48]">₹1,180</span>
                    </div>
                  </div>

                  {/* Submit & Pay Button */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-black text-sm py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-60"
                  >
                    {isProcessing ? (
                      <>
                        <svg className="w-5 h-5 animate-spin text-[#020d1c]" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        <span>Opening Secure Payment Gateway...</span>
                      </>
                    ) : (
                      <>
                        <span>Pay ₹1,180 (₹1,000 + GST) & Submit Case</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-gray-500 mt-2">
                    🔒 256-Bit Encrypted Secure Payment via Razorpay • 100% Confidential & Secure
                  </p>

                </form>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default FakeLoanSection;
