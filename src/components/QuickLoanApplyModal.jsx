import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Check if loan is business-focused
const isBusinessFocusedLoan = (title = '') => {
  const lower = title.toLowerCase();
  return (
    lower.includes('msme') ||
    lower.includes('business loan') ||
    lower.includes('mudra') ||
    lower.includes('cc / od') ||
    lower.includes('working capital') ||
    lower.includes('project') ||
    lower.includes('term loan') ||
    lower.includes('business loan takeover')
  );
};

// Check if loan is property-related
const isPropertyRelatedLoan = (title = '') => {
  const lower = title.toLowerCase();
  return (
    lower.includes('home loan') ||
    lower.includes('plot') ||
    lower.includes('construction') ||
    lower.includes('property') ||
    lower.includes('lap')
  );
};

const QuickLoanApplyModal = ({ isOpen, onClose, service }) => {
  const navigate = useNavigate();
  const serviceTitle = typeof service === 'string' ? service : (service?.title || 'Loan Service');
  const isBusiness = isBusinessFocusedLoan(serviceTitle);
  const isProperty = isPropertyRelatedLoan(serviceTitle);

  // Steps: 1 = Basic Details, 2 = Documents & Notes
  const [step, setStep] = useState(1);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    loanAmount: '',
    purpose: '',
    employmentType: isBusiness ? 'Business / Self-Employed' : 'Salaried',
    propertyAddress: '',
    approxPropertyValue: '',
    hasExistingLoan: 'No',
    existingEmiAmount: '',
    // Loan-specific dynamic fields
    ccOdExistingLimit: '',
    ccOdRequiredLimit: '',
    annualTurnover: '',
    projectCost: '',
    ownContribution: '',
    takeoverLender: '',
    takeoverOutstanding: '',
    requiredTopup: '',
    message: ''
  });

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [isQueryOnlySubmission, setIsQueryOnlySubmission] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);
  const contentBodyRef = useRef(null);

  // Reset and initialize when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSubmittedData(null);
      setIsQueryOnlySubmission(false);
      setError('');
      setFiles([]);
      setFormData(prev => ({
        ...prev,
        purpose: serviceTitle,
        employmentType: isBusinessFocusedLoan(serviceTitle) ? 'Business / Self-Employed' : 'Salaried'
      }));
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, serviceTitle]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobile') {
      const cleaned = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, mobile: cleaned }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (error) setError('');
  };

  const handleFileSelect = (e) => {
    const selected = Array.from(e.target.files || []);
    if (!selected.length) return;

    const valid = [];
    for (const f of selected) {
      if (f.size > 15 * 1024 * 1024) {
        setError(`File "${f.name}" exceeds 15MB size limit.`);
        return;
      }
      valid.push(f);
    }

    if (files.length + valid.length > 10) {
      setError('You can upload a maximum of 10 documents.');
      return;
    }

    setFiles(prev => [...prev, ...valid]);
    setError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  // Step 1 validation
  const validateStep1 = () => {
    if (!formData.fullName.trim()) {
      setError('Please enter your full name.');
      return false;
    }

    if (!formData.mobile || formData.mobile.length !== 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return false;
    }

    if (!formData.loanAmount.trim()) {
      setError('Please enter your required loan amount.');
      return false;
    }

    if (!isBusiness && !formData.employmentType) {
      setError('Please select your applicant profile (Salaried / Business / Professional).');
      return false;
    }

    setError('');
    return true;
  };

  // Proceed to Step 2
  const handleProceedToDocs = (e) => {
    if (e) e.preventDefault();
    if (!validateStep1()) return;
    setStep(2);
    if (contentBodyRef.current) {
      contentBodyRef.current.scrollTop = 0;
    }
  };

  // Submission handler
  const handleSubmit = async (e, isQueryOnly = false) => {
    if (e) e.preventDefault();

    if (!validateStep1()) {
      setStep(1);
      return;
    }

    try {
      setLoading(true);
      setError('');
      const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

      const data = new FormData();
      data.append('serviceType', serviceTitle);
      data.append('fullName', formData.fullName.trim());
      data.append('mobile', formData.mobile.trim());
      data.append('email', formData.email ? formData.email.trim() : '');
      data.append('loanAmount', formData.loanAmount.trim());
      data.append('purpose', formData.purpose ? formData.purpose.trim() : serviceTitle);
      data.append('employmentType', isBusiness ? 'Business / Self-Employed' : formData.employmentType);
      data.append('propertyAddress', formData.propertyAddress ? formData.propertyAddress.trim() : '');
      data.append('approxPropertyValue', formData.approxPropertyValue ? formData.approxPropertyValue.trim() : '');
      data.append('hasExistingLoan', formData.hasExistingLoan);
      data.append('existingEmiAmount', formData.hasExistingLoan === 'Yes' ? formData.existingEmiAmount.trim() : '');
      data.append('message', formData.message ? formData.message.trim() : '');
      data.append('source', isQueryOnly ? 'Loan Enquiry (Query Only)' : 'Loan Enquiry (With Basic Documents)');

      // Specific loan details JSON
      const specificLoanDetails = {
        ccOdExistingLimit: formData.ccOdExistingLimit,
        ccOdRequiredLimit: formData.ccOdRequiredLimit,
        annualTurnover: formData.annualTurnover,
        projectCost: formData.projectCost,
        ownContribution: formData.ownContribution,
        takeoverLender: formData.takeoverLender,
        takeoverOutstanding: formData.takeoverOutstanding,
        requiredTopup: formData.requiredTopup
      };
      data.append('specificLoanDetails', JSON.stringify(specificLoanDetails));

      // Append files if available
      if (!isQueryOnly && files.length > 0) {
        files.forEach((file) => {
          data.append('documents', file);
        });
      }

      const response = await fetch(`${BACKEND_URL}/applications/submit`, {
        method: 'POST',
        body: data
      });

      const result = await response.json();

      if (result.success) {
        setSubmittedData(result.data);
        setIsQueryOnlySubmission(isQueryOnly);
      } else {
        setError(result.message || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      console.error('Loan submission error:', err);
      setError('Unable to connect to the server. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmittedData(null);
    setIsQueryOnlySubmission(false);
    setStep(1);
    setFiles([]);
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      loanAmount: '',
      purpose: serviceTitle,
      employmentType: isBusiness ? 'Business / Self-Employed' : 'Salaried',
      propertyAddress: '',
      approxPropertyValue: '',
      hasExistingLoan: 'No',
      existingEmiAmount: '',
      ccOdExistingLimit: '',
      ccOdRequiredLimit: '',
      annualTurnover: '',
      projectCost: '',
      ownContribution: '',
      takeoverLender: '',
      takeoverOutstanding: '',
      requiredTopup: '',
      message: ''
    });
    setError('');
  };

  // Determine dynamic documents checklist based on profile & loan type
  const isSalaried = !isBusiness && formData.employmentType === 'Salaried';

  const getDynamicDocsChecklist = () => {
    if (isSalaried) {
      return [
        { name: "PAN Card", desc: "Core KYC proof" },
        { name: "Aadhaar Card", desc: "Identity & address proof" },
        { name: "Last 6 Months Bank Statement", desc: "Salary / savings account with salary credits" },
        { name: "Last 3 Months Salary Slips & Form 16", desc: "Income verification" },
        ...(isProperty ? [{ name: "Basic Property Document / Sale Deed / Allotment Letter", desc: "If available with you (Optional initially)" }] : []),
        ...(formData.hasExistingLoan === 'Yes' ? [{ name: "Existing Loan Statement / EMI Repayment Track", desc: "For liability assessment" }] : [])
      ];
    } else if (!isBusiness) {
      // Self-employed / Professional for property loan
      return [
        { name: "PAN Card", desc: "Applicant & co-applicant KYC" },
        { name: "Aadhaar Card", desc: "Identity & address proof" },
        { name: "Last 6–12 Months Bank Statement", desc: "Current / operative savings account" },
        { name: "Latest ITR with Computation Sheets", desc: "Past 1–2 assessment years" },
        { name: "GST Certificate / Current GST Turnover Proof", desc: "If registered under GST" },
        ...(isProperty ? [{ name: "Basic Property Document / Registry / Title Papers", desc: "If available with you (Optional initially)" }] : []),
        ...(formData.hasExistingLoan === 'Yes' ? [{ name: "Existing Loan Statement / Repayment Schedule", desc: "If applicable" }] : [])
      ];
    } else {
      // Direct Business Loans (MSME, Mudra, CC/OD, Project Finance, Term Loan, Takeover)
      return [
        { name: "PAN Card & Aadhaar Card", desc: "Promoters / Partners / Directors" },
        { name: "Last 6–12 Months Business Bank Statement", desc: "Main operative current account" },
        { name: "Latest ITR & Financials", desc: "Balance sheet, P&L, computation" },
        { name: "GST Certificate / GST Turnover Summary", desc: "If applicable" },
        ...(serviceTitle.toLowerCase().includes('project') || serviceTitle.toLowerCase().includes('term')
          ? [{ name: "Machinery / Project Cost Estimate Quotation", desc: "If available (Optional at this stage)" }]
          : []),
        ...(formData.hasExistingLoan === 'Yes' || serviceTitle.toLowerCase().includes('takeover')
          ? [{ name: "Existing Loan Sanction Letter & Statement of Account (SOA)", desc: "For takeover / liability check" }]
          : [])
      ];
    }
  };

  const dynamicDocs = getDynamicDocsChecklist();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#020d1c]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-10 my-auto">
        
        {/* Top Header */}
        <div className="bg-[#020d1c] text-white px-6 sm:px-8 py-5 sm:py-6 relative border-b border-gray-800">
          <div className="absolute top-0 right-0 w-64 h-32 bg-[#de9e48]/15 blur-3xl pointer-events-none"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
            title="Close modal"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Badge & Stepper */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="inline-flex items-center gap-2 bg-[#de9e48]/20 text-[#de9e48] border border-[#de9e48]/40 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#de9e48] animate-pulse"></span>
              <span>{serviceTitle}</span>
            </div>

            {!submittedData && (
              <div className="flex items-center gap-1.5 text-[11px] font-bold">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className={`px-2.5 py-0.5 rounded transition-colors ${
                    step === 1 
                      ? 'bg-[#de9e48] text-[#020d1c]' 
                      : 'bg-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  Step 1: Details
                </button>
                <span className="text-gray-500">→</span>
                <button
                  type="button"
                  onClick={() => {
                    if (validateStep1()) setStep(2);
                  }}
                  className={`px-2.5 py-0.5 rounded transition-colors ${
                    step === 2 
                      ? 'bg-[#de9e48] text-[#020d1c]' 
                      : 'bg-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  Step 2: Basic Docs
                </button>
              </div>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white leading-snug">
            {step === 1 ? `Loan Enquiry & Eligibility Check` : `Upload Basic Documents`}
          </h3>
          <p className="text-gray-300 text-xs sm:text-[13px] mt-1.5 leading-relaxed">
            {step === 1 
              ? 'Submit your basic loan details to discuss first or upload basic documents for faster assessment.'
              : 'Provide basic documents for preliminary evaluation. You don\'t need a full file at this stage.'}
          </p>
        </div>

        {/* Body Content */}
        <div ref={contentBodyRef} className="p-6 sm:p-8 max-h-[calc(85vh-120px)] overflow-y-auto font-sans">
          
          {submittedData ? (
            /* ==================== 8. FINAL CONFIRMATION VIEW ==================== */
            <div className="py-2 text-center space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 border-4 border-emerald-100 flex items-center justify-center mx-auto text-emerald-500 shadow-sm">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <span className="inline-block bg-emerald-100/80 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {isQueryOnlySubmission ? 'Query Logged Successfully' : 'Basic Documents Submitted'}
              </span>

              <h4 className="text-xl sm:text-2xl font-black text-[#020d1c] font-serif leading-snug">
                Your Basic Details Have Been Submitted Successfully
              </h4>

              {/* Exact Reassurance Text as Specified in Section 8 */}
              <div className="text-gray-600 text-xs sm:text-[13px] max-w-lg mx-auto leading-relaxed space-y-2 text-left bg-gray-50/80 p-4 rounded-xl border border-gray-100">
                <p>
                  <strong>Thank you for choosing KTR Consultants.</strong>
                </p>
                <p>
                  Our team will review the information and basic documents submitted by you to understand your financial profile and preliminary loan eligibility.
                </p>
                <div className="p-2.5 bg-[#fdfaf5] border border-[#f5e3cd] rounded-lg text-[#965a14] text-[11.5px] font-medium flex items-start gap-2">
                  <span className="text-[#de9e48] font-bold text-sm leading-none">ℹ</span>
                  <span>
                    This is only an initial assessment — submission of documents does not guarantee loan approval. If additional documents or information are required, our team will contact you.
                  </span>
                </div>
              </div>

              {/* Reference ID Box */}
              <div className="bg-[#fcfbf9] border border-[#e8d5b7] rounded-xl p-4 max-w-md mx-auto text-left shadow-xs space-y-2">
                <div className="flex items-center justify-between border-b border-[#e8d5b7]/60 pb-2">
                  <span className="text-[11px] font-bold text-gray-500 uppercase">Application Reference ID</span>
                  <span className="text-xs font-black text-[#020d1c] font-mono tracking-wider bg-[#de9e48]/15 px-2.5 py-0.5 rounded border border-[#de9e48]/30">
                    {submittedData.applicationId}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Applicant</p>
                    <p className="font-bold text-[#020d1c] truncate">{submittedData.fullName}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Loan Amount</p>
                    <p className="font-bold text-[#020d1c]">₹ {submittedData.loanAmount}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Service</p>
                    <p className="font-bold text-[#020d1c] truncate">{serviceTitle}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Documents</p>
                    <p className="font-bold text-[#020d1c]">
                      {submittedData.documents && submittedData.documents.length > 0
                        ? `${submittedData.documents.length} File(s) Attached`
                        : 'Query Logged (No Files)'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons in Confirmation Screen */}
              <div className="pt-2 space-y-2.5 max-w-md mx-auto">
                {isQueryOnlySubmission && (
                  /* Option for query-only client to upload basic documents now */
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedData(null);
                      setStep(2);
                    }}
                    className="w-full py-2.5 px-4 bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-black text-xs sm:text-sm rounded-xl transition-all shadow-[0_4px_14px_rgba(222,158,72,0.35)] hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>⭐ Upload Basic Documents Now for Fast Assessment</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      navigate('/cibil-services');
                    }}
                    className="w-full py-2.5 px-3 bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 text-[#020d1c] text-xs sm:text-[12.5px] font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>📊 Check Free CIBIL Score</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      navigate('/contact');
                    }}
                    className="w-full py-2.5 px-3 bg-white border border-gray-200 hover:border-[#de9e48] hover:bg-orange-50/40 text-[#020d1c] text-xs sm:text-[12.5px] font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>📞 Contact KTR Consultants</span>
                  </button>
                </div>

                <div className="pt-1">
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-xs text-gray-500 hover:text-[#020d1c] font-bold underline cursor-pointer"
                  >
                    Done & Close
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* ==================== ACTIVE FLOW (STEP 1 OR STEP 2) ==================== */
            <div>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 mb-4">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              {step === 1 ? (
                /* ==================== 1. STEP 1: BASIC LOAN DETAILS ==================== */
                <form className="space-y-4">
                  
                  {/* Full Name & Mobile Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-[#020d1c] mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        required
                        className="w-full h-10 px-3.5 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#020d1c] mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="flex h-10 border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#de9e48] focus-within:ring-1 focus-within:ring-[#de9e48] transition-all bg-white">
                        <span className="bg-gray-50 border-r border-gray-200 px-3 text-xs font-bold text-gray-600 flex items-center">
                          +91
                        </span>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="9876543210"
                          maxLength={10}
                          required
                          className="flex-1 px-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Loan Amount Required & Purpose */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-[#020d1c] mb-1">
                        Loan Amount Required <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xs sm:text-sm">
                          ₹
                        </span>
                        <input
                          type="text"
                          name="loanAmount"
                          value={formData.loanAmount}
                          onChange={handleChange}
                          placeholder="e.g. 25,00,000 or 25 Lakhs"
                          required
                          className="w-full h-10 pl-7 pr-3.5 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-all bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#020d1c] mb-1">
                        Loan Purpose <span className="text-gray-400 font-normal text-[11px]">(Auto-selected)</span>
                      </label>
                      <input
                        type="text"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        className="w-full h-10 px-3.5 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 bg-gray-50/70 focus:outline-none focus:border-[#de9e48] transition-all"
                      />
                    </div>
                  </div>

                  {/* Applicant Profile (Only for Property-related loans, NOT for direct business loans) */}
                  {!isBusiness && (
                    <div className="bg-[#fcfcfd] p-3 rounded-xl border border-gray-200/80">
                      <label className="block text-xs font-bold text-[#020d1c] mb-2">
                        Applicant Profile <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'Salaried', label: 'Salaried' },
                          { id: 'Self-Employed / Business', label: 'Self-Employed / Business' },
                          { id: 'Professional', label: 'Professional (Dr/CA/Lawyer)' }
                        ].map((profile) => (
                          <label
                            key={profile.id}
                            className={`flex flex-col items-center justify-center p-2 rounded-lg border text-center cursor-pointer transition-all ${
                              formData.employmentType === profile.id
                                ? 'bg-orange-50/80 border-[#de9e48] text-[#020d1c] font-black shadow-2xs'
                                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="employmentType"
                              value={profile.id}
                              checked={formData.employmentType === profile.id}
                              onChange={handleChange}
                              className="hidden"
                            />
                            <span className="text-[11.5px] leading-tight">{profile.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Property-Specific Fields (Address & Approx Value) */}
                  {isProperty && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-[#020d1c] mb-1">
                          Property Address / Location <span className="text-gray-400 font-normal text-[11px]">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          name="propertyAddress"
                          value={formData.propertyAddress}
                          onChange={handleChange}
                          placeholder="e.g. Society name, locality, or city"
                          className="w-full h-10 px-3.5 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-all bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#020d1c] mb-1">
                          Approximate Property Value <span className="text-gray-400 font-normal text-[11px]">(Optional)</span>
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xs sm:text-sm">
                            ₹
                          </span>
                          <input
                            type="text"
                            name="approxPropertyValue"
                            value={formData.approxPropertyValue}
                            onChange={handleChange}
                            placeholder="e.g. 50 Lakhs"
                            className="w-full h-10 pl-7 pr-3.5 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-all bg-white"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Existing Loan / EMI Section */}
                  <div className="bg-gray-50/80 p-3 rounded-xl border border-gray-200">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-[#020d1c]">
                        Do you have any existing ongoing loan / EMI?
                      </label>
                      <div className="flex items-center gap-2">
                        {['No', 'Yes'].map(opt => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, hasExistingLoan: opt }))}
                            className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                              formData.hasExistingLoan === opt
                                ? 'bg-[#020d1c] text-white shadow-xs'
                                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {formData.hasExistingLoan === 'Yes' && (
                      <div className="mt-2.5 pt-2.5 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-bold text-gray-700 mb-1">
                            Total Existing Monthly EMI Amount
                          </label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">₹</span>
                            <input
                              type="text"
                              name="existingEmiAmount"
                              value={formData.existingEmiAmount}
                              onChange={handleChange}
                              placeholder="e.g. 25,000 / month"
                              className="w-full h-9 pl-7 pr-3 border border-gray-200 rounded-lg text-xs text-gray-800 bg-white outline-none focus:border-[#de9e48]"
                            />
                          </div>
                        </div>

                        {serviceTitle.toLowerCase().includes('takeover') && (
                          <div>
                            <label className="block text-[11px] font-bold text-gray-700 mb-1">
                              Current Bank / Lender Name
                            </label>
                            <input
                              type="text"
                              name="takeoverLender"
                              value={formData.takeoverLender}
                              onChange={handleChange}
                              placeholder="e.g. HDFC / SBI / NBFC"
                              className="w-full h-9 px-3 border border-gray-200 rounded-lg text-xs text-gray-800 bg-white outline-none focus:border-[#de9e48]"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Optional Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#020d1c] mb-1">
                      Email ID <span className="text-gray-400 font-normal text-[11px]">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ramesh@example.com"
                      className="w-full h-10 px-3.5 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-all bg-white"
                    />
                  </div>

                  {/* ==================== 2. TWO CLEAR OPTIONS AT BOTTOM ==================== */}
                  <div className="pt-3 border-t border-gray-100 space-y-3.5">
                    
                    {/* OPTION 2 (Prominent Card - Motivating Document Upload) */}
                    <div className="bg-gradient-to-br from-[#fefbf6] to-[#fbf4e8] border-2 border-[#de9e48]/50 rounded-2xl p-4 shadow-sm relative overflow-hidden group">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="text-xs">⭐</span>
                        <span className="text-[11px] font-black uppercase tracking-wider text-[#965a14] bg-[#de9e48]/20 px-2 py-0.5 rounded-full border border-[#de9e48]/40">
                          Recommended for Faster Sanction
                        </span>
                      </div>

                      <h4 className="text-[13.5px] sm:text-[14.5px] font-bold text-[#020d1c] leading-snug mb-1">
                        Want a faster & more accurate eligibility assessment?
                      </h4>
                      
                      <p className="text-[11.5px] sm:text-xs text-gray-600 leading-relaxed mb-3">
                        Upload a few basic documents and let our team evaluate your preliminary profile. 
                        <strong> Don't worry — you don't need a complete file right now.</strong> Just upload what is available; we will guide you on additional documents if required.
                      </p>

                      <button
                        type="button"
                        onClick={handleProceedToDocs}
                        className="w-full h-11 bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-black text-xs sm:text-sm px-4 rounded-xl transition-all shadow-[0_4px_14px_rgba(222,158,72,0.35)] hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                      >
                        <span>PROCEED WITH BASIC DOCUMENTS</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>

                    {/* OPTION 1 (Submit Query - For clients preferring to discuss first) */}
                    <div className="bg-gray-50/90 border border-gray-200 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-left">
                        <p className="text-xs font-bold text-[#020d1c]">
                          Prefer to discuss first?
                        </p>
                        <p className="text-[11px] text-gray-500">
                          Submit your enquiry and our loan advisor will contact you to understand your requirement.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => handleSubmit(e, true)}
                        disabled={loading}
                        className="w-full sm:w-auto shrink-0 h-10 px-5 border border-gray-300 hover:border-gray-800 bg-white hover:bg-gray-100 disabled:opacity-50 text-[#020d1c] font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs active:scale-98"
                      >
                        {loading ? (
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <span>SUBMIT QUERY</span>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-1.5 text-gray-400 text-[11px] pt-0.5">
                      <svg className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>100% Confidential • Official Banking & NBFC Partners</span>
                    </div>

                  </div>

                </form>
              ) : (
                /* ==================== 3-7. STEP 2: DYNAMIC BASIC DOCUMENTS UPLOAD ==================== */
                <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4">
                  
                  {/* Compact Profile Summary Chip */}
                  <div className="bg-[#fdfaf5] border border-[#f5e3cd] rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Applicant: </span>
                      <strong className="text-[#020d1c]">{formData.fullName}</strong>
                      <span className="text-gray-400 mx-1.5">•</span>
                      <span className="text-gray-600">+91 {formData.mobile}</span>
                      <span className="text-gray-400 mx-1.5">•</span>
                      <span className="text-[#965a14] font-bold">{formData.employmentType}</span>
                    </div>
                    <div className="bg-white px-2.5 py-0.5 rounded-full border border-[#ebd0ad] text-[11.5px] font-black text-[#965a14]">
                      ₹ {formData.loanAmount}
                    </div>
                  </div>

                  {/* Reassuring Profile Specific Guidance Box (Sections 3, 4, 5) */}
                  <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3.5">
                    <p className="text-xs font-bold text-blue-900 mb-1 flex items-center gap-1.5">
                      <span>📌</span>
                      <span>
                        {isSalaried
                          ? "That's it for the initial assessment (Salaried Profile)"
                          : "You don't need to submit your complete business file right now"}
                      </span>
                    </p>
                    <p className="text-[11.5px] text-blue-800/90 leading-relaxed">
                      {isSalaried
                        ? "Please upload these basic documents. Our team will review your financial profile first and will request additional documents only if required for your case."
                        : "Start with these basic documents so our team can understand your income, banking and existing financial obligations. After the initial evaluation, we will guide you regarding additional documents."}
                    </p>
                  </div>

                  {/* Dynamic Required Checklist Display */}
                  <div className="bg-gray-50/80 border border-gray-200 rounded-xl p-3.5">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[11.5px] font-bold text-[#020d1c] uppercase tracking-wider flex items-center gap-1.5">
                        <span>📄 Basic Documents Checklist ({dynamicDocs.length}):</span>
                      </p>
                      <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200">
                        Initial Check
                      </span>
                    </div>

                    <div className="space-y-1.5 max-h-[150px] overflow-y-auto pr-1">
                      {dynamicDocs.map((doc, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11.5px] text-gray-700 bg-white p-2 rounded-lg border border-gray-100 shadow-2xs">
                          <span className="w-4 h-4 rounded-full bg-[#de9e48]/15 text-[#de9e48] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-black">
                            ✓
                          </span>
                          <div>
                            <span className="leading-tight font-bold text-[#020d1c]">{doc.name}</span>
                            {doc.desc && <span className="text-[10.5px] text-gray-400 block">{doc.desc}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 6 & 7: Property Docs Guidance & Non-Mandatory Reassurance Alert */}
                  <div className="space-y-2">
                    {isProperty && (
                      <div className="bg-[#fcf8f2] border border-[#fae5cc] rounded-lg p-2.5 text-[11px] text-[#854b0c] leading-relaxed flex items-start gap-2">
                        <span className="text-base shrink-0 leading-none">🏠</span>
                        <div>
                          <strong>Property documents: </strong>
                          Upload any basic property document currently available with you (Sale deed / Registry / Allotment letter). Our team will inform you later if additional property documents are required.
                        </div>
                      </div>
                    )}

                    <div className="bg-emerald-50/70 border border-emerald-200 rounded-lg p-2.5 text-[11px] text-emerald-800 leading-relaxed flex items-start gap-2">
                      <span className="text-base shrink-0 leading-none">💡</span>
                      <div>
                        <strong>Don't have a particular document right now? </strong>
                        No problem! Upload the documents currently available and mention it in the notes below. Our team will guide you further.
                      </div>
                    </div>
                  </div>

                  {/* Single Source Multi-File Dropzone */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-1 h-3.5 bg-[#de9e48] rounded-full"></span>
                        <h4 className="text-xs font-bold text-[#020d1c] uppercase tracking-wider">
                          Upload Available Documents
                        </h4>
                      </div>
                      <span className="text-[10.5px] bg-orange-50 text-[#de9e48] font-bold px-2 py-0.5 rounded border border-[#de9e48]/30">
                        {files.length} Selected
                      </span>
                    </div>

                    <div 
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                      className="border-2 border-dashed border-gray-300 hover:border-[#de9e48] bg-gray-50/70 hover:bg-[#fdfaf5] rounded-xl p-3.5 text-center cursor-pointer transition-all group"
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                        multiple
                        accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx,.zip"
                        className="hidden"
                      />
                      <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#de9e48]/15 text-gray-500 group-hover:text-[#de9e48] flex items-center justify-center mx-auto mb-1 transition-colors shadow-2xs">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <p className="text-xs font-bold text-[#020d1c] group-hover:text-[#de9e48] transition-colors">
                        Click to browse or drag & drop files here
                      </p>
                      <p className="text-[10.5px] text-gray-400 mt-0.5">
                        PDF, JPG, PNG, DOC, XLS (Up to 15MB each, max 10 files)
                      </p>
                    </div>

                    {/* Attached Files List */}
                    {files.length > 0 && (
                      <div className="mt-2.5 space-y-1.5">
                        <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">
                          Attached Files ({files.length}):
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[140px] overflow-y-auto pr-1">
                          {files.map((f, i) => (
                            <div 
                              key={i} 
                              className="bg-white border border-gray-200 rounded-lg p-2 flex items-center justify-between shadow-2xs"
                            >
                              <div className="flex items-center gap-2 min-w-0 pr-2">
                                <span className="text-sm">📎</span>
                                <div className="min-w-0">
                                  <p className="text-[11.5px] font-bold text-[#020d1c] truncate">{f.name}</p>
                                  <p className="text-[9.5px] text-gray-400">{formatFileSize(f.size)}</p>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(i)}
                                className="text-gray-400 hover:text-red-500 p-1 rounded transition-colors cursor-pointer"
                                title="Remove file"
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Additional Notes Textarea */}
                  <div>
                    <label className="block text-xs font-bold text-[#020d1c] mb-1">
                      Additional Notes / Pending Documents Note <span className="text-gray-400 font-normal text-[11px]">(Optional)</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={2}
                      placeholder="Mention any document currently missing, preferred tenure, or specific requirement..."
                      className="w-full p-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-all resize-none bg-white"
                    />
                  </div>

                  {/* Step 2 Bottom Navigation Actions */}
                  <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-full sm:w-auto px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5 order-2 sm:order-1"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      <span>Back to Details</span>
                    </button>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto min-w-[220px] h-11 bg-[#de9e48] hover:bg-[#c98e41] disabled:opacity-50 text-[#020d1c] font-black text-xs sm:text-sm px-6 rounded-xl transition-all shadow-[0_4px_14px_rgba(222,158,72,0.35)] hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98 order-1 sm:order-2"
                    >
                      {loading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin text-[#020d1c]" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>
                            {files.length > 0
                              ? `Submit (${files.length} Document${files.length > 1 ? 's' : ''})`
                              : 'Submit Basic Details & Documents'}
                          </span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default QuickLoanApplyModal;
