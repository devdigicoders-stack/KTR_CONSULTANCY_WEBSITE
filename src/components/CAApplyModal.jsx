import React, { useState, useEffect, useRef } from 'react';

const serviceDocMap = {
  "Income Tax Return (ITR) Filing": [
    "PAN Card",
    "Aadhaar Card",
    "Previous ITR (if available)",
    "Form 16 / Salary Details (if applicable)",
    "Bank Statement (Past 6 to 12 months)",
    "Income & Investment Details"
  ],
  "GST Registration": [
    "PAN Card (Proprietor / Partners / Directors)",
    "Aadhaar Card",
    "Passport Size Photograph",
    "Business Address Proof (Electricity bill / Rent agreement)",
    "Bank Account Details / Cancelled Cheque"
  ],
  "GST Return Filing & Compliance": [
    "GSTIN Credentials",
    "Sales Invoices / Summary",
    "Purchase Invoices & Bills",
    "Bank Statements",
    "Previous GST Returns (if available)"
  ],
  "Business Registration & Setup": [
    "PAN & Aadhaar Card of Directors / Partners / Proprietor",
    "Passport Size Photographs",
    "Business Address Proof (Electricity bill / Rent agreement)",
    "Proposed Business Names & Details"
  ],
  "Financial Statements & CA Certification": [
    "Previous Financial Statements (if available)",
    "Bank Statements (Past 12 months)",
    "ITRs & GST Returns",
    "Sales, Purchase & Expense Details"
  ],
  "CMA Data & Loan Documentation": [
    "Past 2–3 Years Financial Statements & ITRs",
    "Bank Statements (Past 12 months)",
    "GST Returns (Past 12 months)",
    "Existing Loan Details & Outstanding Balance",
    "Proposed Loan Requirement"
  ],
  "Project Report / DPR": [
    "Business & Promoter Details",
    "Estimated Project Cost & Concept",
    "Machinery / Equipment Quotations (if applicable)",
    "Existing Financials & Proposed Funding"
  ],
  "Financial Projections": [
    "Existing Financial Statements & ITRs",
    "Turnover Details & Bank Statements",
    "Proposed Expansion & Investment Plan",
    "Expected Sales & Expense Projections"
  ],
  "Income / Turnover / Net Worth Certificates": [
    "PAN & Aadhaar Card",
    "Past 1–3 Years ITRs",
    "Financial Statements & Bank Statements",
    "Property / Asset Proofs (for Net Worth)"
  ],
  "Tax & GST Compliance / Notice Assistance": [
    "PAN / GSTIN Credentials",
    "Copy of Tax / GST Notice or Order Received",
    "Previous Returns & Correspondence Records"
  ],
  "Audit Services": [
    "Books of Accounts (Tally / Excel Backup)",
    "Financial Statements (Balance Sheet & P&L)",
    "Bank Statements (Complete Year)",
    "GST / TDS Return Records"
  ]
};

const CAApplyModal = ({ isOpen, onClose, service, onViewDocsClick }) => {
  const serviceTitle = typeof service === 'string' ? service : (service?.title || 'CA Service');
  const requiredDocs = serviceDocMap[serviceTitle] || [
    "PAN Card",
    "Aadhaar Card",
    "Bank Statement",
    "Supporting Financial / Business Records"
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    message: ''
  });

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  // Lock body scroll and reset state
  useEffect(() => {
    if (isOpen) {
      setSubmittedData(null);
      setError('');
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
      if (e.key === 'Escape' && isOpen) onClose();
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }

    if (!formData.mobile || formData.mobile.length !== 10) {
      setError('Please enter a valid 10-digit mobile number.');
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
      data.append('city', formData.city ? formData.city.trim() : '');
      data.append('message', formData.message ? formData.message.trim() : '');

      files.forEach((file) => {
        data.append('documents', file);
      });

      const res = await fetch(`${BACKEND_URL}/ca-quotes/submit`, {
        method: 'POST',
        body: data
      });

      const result = await res.json();

      if (result.success) {
        setSubmittedData(result.data);
      } else {
        setError(result.message || 'Failed to submit quote request. Please try again.');
      }
    } catch (err) {
      console.error('CA quote submission error:', err);
      setError('Unable to connect to server. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFiles([]);
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      city: '',
      message: ''
    });
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#020d1c]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-10 my-auto">
        
        {/* Header */}
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

          {/* Service Badge (Fixed, no need to select) */}
          <div className="inline-flex items-center gap-2 bg-[#de9e48]/20 text-[#de9e48] border border-[#de9e48]/40 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#de9e48] animate-pulse"></span>
            <span>{serviceTitle}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white leading-snug">
            Request Quote
          </h3>
          <p className="text-gray-300 text-xs sm:text-[13px] mt-1 leading-relaxed">
            Enter your basic details to get estimated fees and assistance. Documents upload is optional.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[calc(85vh-120px)] overflow-y-auto font-sans">
          
          {submittedData ? (
            /* ===== Success View ===== */
            <div className="py-4 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 border-4 border-emerald-100 flex items-center justify-center mx-auto mb-4 text-emerald-500 shadow-sm">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <span className="inline-block bg-emerald-100/80 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                Quote Request Received
              </span>

              <h4 className="text-xl sm:text-2xl font-black text-[#020d1c] mb-2 font-serif">
                Thank You, {submittedData.fullName}!
              </h4>

              <p className="text-gray-600 text-xs sm:text-sm max-w-md mx-auto mb-6 leading-relaxed">
                Your request for <strong className="text-[#020d1c]">{submittedData.serviceType}</strong> has been logged. Our CA team will contact you on <strong className="text-[#020d1c]">+91 {submittedData.mobile}</strong> shortly.
              </p>

              {/* Reference ID Card */}
              <div className="bg-[#fcfbf9] border border-[#e8d5b7] rounded-xl p-4 max-w-md mx-auto mb-6 text-left shadow-xs space-y-2">
                <div className="flex items-center justify-between border-b border-[#e8d5b7]/60 pb-2">
                  <span className="text-[11px] font-bold text-gray-500 uppercase">Quote Request ID</span>
                  <span className="text-xs font-black text-[#020d1c] font-mono tracking-wider bg-[#de9e48]/15 px-2.5 py-0.5 rounded border border-[#de9e48]/30">
                    {submittedData.quoteId}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Applicant</p>
                    <p className="font-bold text-[#020d1c] truncate">{submittedData.fullName}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Documents</p>
                    <p className="font-bold text-[#020d1c]">
                      {submittedData.documents && submittedData.documents.length > 0
                        ? `${submittedData.documents.length} File(s) Uploaded`
                        : 'Basic Details'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={onClose}
                  className="bg-[#020d1c] hover:bg-[#0b1d38] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-lg transition-colors shadow-sm cursor-pointer"
                >
                  Done
                </button>
                <button
                  onClick={resetForm}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  Submit Another
                </button>
              </div>
            </div>
          ) : (
            /* ===== Application Form ===== */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              {/* 1. Basic Details */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-3.5 bg-[#de9e48] rounded-full"></span>
                  <h4 className="text-xs font-bold text-[#020d1c] uppercase tracking-wider">
                    Basic Details
                  </h4>
                </div>

                {/* Name & Mobile (Mandatory) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#020d1c] mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full h-10 px-3.5 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-all bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#020d1c] mb-1">
                      Mobile No. <span className="text-red-500">*</span>
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
                        placeholder="10-digit mobile"
                        maxLength={10}
                        required
                        className="flex-1 px-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Email ID & City (Optional) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#020d1c] mb-1">
                      Email ID <span className="text-gray-400 font-normal text-[11px]">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@example.com"
                      className="w-full h-10 px-3.5 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-all bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#020d1c] mb-1">
                      City / Location <span className="text-gray-400 font-normal text-[11px]">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Lucknow, Noida"
                      className="w-full h-10 px-3.5 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-all bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Documents Upload Section (Optional) */}
              <div className="pt-2 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-3.5 bg-[#de9e48] rounded-full"></span>
                    <h4 className="text-xs font-bold text-[#020d1c] uppercase tracking-wider">
                      Upload Documents (Optional)
                    </h4>
                  </div>
                  <span className="text-[10.5px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200">
                    Not Mandatory
                  </span>
                </div>

                {/* Helpful Checklist of Required Documents for this Service */}
                <div className="bg-[#fdfaf5] border border-[#f5e3cd] rounded-xl p-3 mb-3">
                  <p className="text-[11px] font-bold text-[#965a14] uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <span>📄 Required Documents for {serviceTitle}:</span>
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {requiredDocs.map((doc, idx) => (
                      <span key={idx} className="bg-white px-2 py-0.5 rounded border border-[#ebd0ad] text-[11px] font-medium text-gray-700 flex items-center gap-1">
                        <span className="text-[#de9e48] font-bold">✓</span>
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dropzone File Picker */}
                <div 
                  onClick={() => fileInputRef.current && fileInputRef.current.click()}
                  className="border-2 border-dashed border-gray-300 hover:border-[#de9e48] bg-gray-50/70 hover:bg-[#fdfaf5] rounded-xl p-4 text-center cursor-pointer transition-all group"
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    multiple
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx,.zip"
                    className="hidden"
                  />
                  <div className="w-9 h-9 rounded-full bg-white group-hover:bg-[#de9e48]/15 text-gray-500 group-hover:text-[#de9e48] flex items-center justify-center mx-auto mb-1.5 transition-colors shadow-2xs">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <p className="text-xs font-bold text-[#020d1c] group-hover:text-[#de9e48] transition-colors">
                    Click to browse or drag & drop files here
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    PDF, JPG, PNG, DOC, XLS (Up to 15MB each, max 10 files)
                  </p>
                </div>

                {/* Uploaded File List */}
                {files.length > 0 && (
                  <div className="mt-3 space-y-1.5">
                    <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">
                      Attached Files ({files.length}):
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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

              {/* 3. Message / Specific Query (Optional) */}
              <div className="pt-2 border-t border-gray-100">
                <label className="block text-xs font-bold text-[#020d1c] mb-1">
                  Message or Specific Requirement <span className="text-gray-400 font-normal text-[11px]">(Optional)</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Any specific note, assessment year, or timeline requirement..."
                  className="w-full p-2.5 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-all resize-none bg-white"
                />
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-gray-500 text-[11px]">
                  <svg className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>100% Confidential • Professional CA Advisory</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto min-w-[190px] h-11 bg-[#de9e48] hover:bg-[#c98e41] disabled:opacity-50 text-[#020d1c] font-black text-xs sm:text-sm px-6 rounded-xl transition-all shadow-[0_4px_14px_rgba(222,158,72,0.35)] hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>
                        {files.length > 0
                          ? `Request Quote (${files.length} File${files.length > 1 ? 's' : ''})`
                          : 'Request Quote'}
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

      </div>
    </div>
  );
};

export default CAApplyModal;
