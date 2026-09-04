import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const BusinessProductModal = ({ isOpen, onClose, product }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'apply'
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    loanAmount: '',
    employmentType: 'Self-Employed (Business)',
    message: ''
  });
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setActiveTab('overview');
      setSubmittedData(null);
      setError('');
      setFiles([]);
      setFormData({
        fullName: '',
        mobile: '',
        email: '',
        loanAmount: '',
        employmentType: 'Self-Employed (Business)',
        message: ''
      });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, product]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

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
        setError(`File "${f.name}" exceeds 15MB limit.`);
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
      data.append('serviceType', product.title);
      data.append('purpose', product.title);
      data.append('fullName', formData.fullName.trim());
      data.append('mobile', formData.mobile);
      if (formData.email) data.append('email', formData.email.trim());
      if (formData.loanAmount) data.append('loanAmount', formData.loanAmount.trim());
      data.append('employmentType', formData.employmentType);
      data.append('source', 'Website - Business Finance Page');
      if (formData.message) data.append('message', formData.message.trim());

      files.forEach(file => {
        data.append('documents', file);
      });

      const res = await fetch(`${BACKEND_URL}/applications/submit`, {
        method: 'POST',
        body: data
      });

      const json = await res.json();
      if (json.success) {
        setSubmittedData(json.data);
      } else {
        setError(json.message || 'Failed to submit application.');
      }
    } catch (err) {
      console.error(err);
      setError('Connection error. Please check your internet or try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Dark Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-10 my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#020d1c] text-white px-6 sm:px-8 py-5 relative border-b border-gray-800">
          <div className="absolute top-0 right-0 w-64 h-32 bg-[#de9e48]/15 blur-3xl pointer-events-none"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Close modal"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#de9e48]/20 text-[#de9e48] border border-[#de9e48]/40 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-1.5">
            <span>💼 Business Funding Solution</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
            {product.title}
          </h3>
          <p className="text-gray-300 text-xs sm:text-[13px] mt-0.5">
            {product.desc}
          </p>

          {/* Top Tabs */}
          {!submittedData && (
            <div className="flex gap-2 mt-4 pt-3 border-t border-gray-800/80">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-[#de9e48] text-[#020d1c] shadow-sm'
                    : 'bg-white/10 text-gray-300 hover:bg-white/15'
                }`}
              >
                📖 Product Info & Why KTR
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('apply')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'apply'
                    ? 'bg-[#de9e48] text-[#020d1c] shadow-sm'
                    : 'bg-white/10 text-gray-300 hover:bg-white/15'
                }`}
              >
                ⚡ Apply / Check Eligibility
              </button>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[calc(85vh-140px)] overflow-y-auto font-sans">
          
          {submittedData ? (
            /* ===== Success View ===== */
            <div className="py-2 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border-4 border-emerald-100 flex items-center justify-center mx-auto mb-3 text-emerald-500 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <span className="inline-block bg-emerald-100/80 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                Application Submitted Successfully
              </span>

              <h4 className="text-xl sm:text-2xl font-black text-[#020d1c] mb-1 font-serif">
                Thank You, {submittedData.fullName}!
              </h4>

              <p className="text-gray-600 text-xs sm:text-sm max-w-md mx-auto mb-5 leading-relaxed">
                Your funding request for <strong className="text-[#020d1c]">{submittedData.serviceType}</strong> has been received. Our business finance experts will review your details and contact you shortly.
              </p>

              {/* Reference ID Card */}
              <div className="bg-[#fcfbf9] border border-[#e8d5b7] rounded-xl p-4 max-w-md mx-auto mb-6 text-left shadow-xs space-y-2 text-xs">
                <div className="flex items-center justify-between border-b border-[#e8d5b7]/60 pb-2">
                  <span className="font-bold text-gray-500 uppercase">Application Reference ID</span>
                  <span className="font-black text-[#020d1c] font-mono tracking-wider bg-[#de9e48]/15 px-2.5 py-0.5 rounded border border-[#de9e48]/30">
                    {submittedData.applicationId}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Service:</span>
                  <span className="font-bold text-gray-800">{submittedData.serviceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Mobile:</span>
                  <span className="font-bold text-gray-800">+91 {submittedData.mobile}</span>
                </div>
                {submittedData.loanAmount && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Required Amount:</span>
                    <span className="font-bold text-gray-800">₹ {submittedData.loanAmount}</span>
                  </div>
                )}
              </div>

              {/* Next Action Buttons */}
              <div className="max-w-md mx-auto space-y-2.5">
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider text-left">
                  Recommended Next Steps:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <Link
                    to="/cibil-services"
                    className="flex items-center justify-between p-2.5 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-all group text-left"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📊</span>
                      <div>
                        <p className="text-[11px] font-bold text-blue-950">Check CIBIL</p>
                        <p className="text-[9.5px] text-gray-500">Credit Report</p>
                      </div>
                    </div>
                  </Link>

                  <a
                    href={`https://wa.me/919918699696?text=Hi%20KTR%20Consultants%2C%20I%20have%20submitted%20my%20${encodeURIComponent(product.title)}%20application.%20Reference%20ID%3A%20${submittedData.applicationId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-all group text-left"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">💬</span>
                      <div>
                        <p className="text-[11px] font-bold text-emerald-950">WhatsApp Us</p>
                        <p className="text-[9.5px] text-gray-500">Quick Reply</p>
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:9918699696"
                    className="flex items-center justify-between p-2.5 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-xl transition-all group text-left"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📞</span>
                      <div>
                        <p className="text-[11px] font-bold text-amber-950">Call Us</p>
                        <p className="text-[9.5px] text-gray-500">99186 99696</p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="w-full bg-[#020d1c] hover:bg-gray-800 text-white font-bold text-xs py-3 rounded-xl transition-colors"
                  >
                    Done & Close
                  </button>
                </div>
              </div>
            </div>
          ) : activeTab === 'overview' ? (
            /* ===== Tab 1: Comprehensive Information & Why KTR ===== */
            <div className="space-y-6 text-gray-700 text-xs sm:text-[13px] leading-relaxed">
              
              {/* Product Detailed Overview */}
              <div className="bg-[#fcfbf9] border border-[#f0e3cf] rounded-xl p-4 sm:p-5">
                <h4 className="text-xs sm:text-sm font-bold text-[#020d1c] flex items-center gap-2 mb-2 font-serif">
                  <span className="text-base">💡</span>
                  <span>About {product.title}</span>
                </h4>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {product.fullDetails || product.desc}
                </p>
                {product.keyHighlights && (
                  <div className="mt-3 pt-3 border-t border-[#f0e3cf] grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.keyHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-gray-700">
                        <span className="text-[#de9e48] font-bold">✓</span>
                        <span className="text-[11.5px]">{hl}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Eligibility & Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-2xs">
                  <h5 className="font-bold text-[#020d1c] text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span>🎯 Key Use Cases & Purpose:</span>
                  </h5>
                  <ul className="space-y-1.5 text-gray-600 text-[11.5px]">
                    {(product.useCases || [
                      "Business scaling & operational cash flow",
                      "Inventory & bulk material purchasing",
                      "Machinery upgrade & technological expansion",
                      "Overcoming liquidity hurdles during peak demand"
                    ]).map((uc, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-gray-400">•</span>
                        <span>{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-2xs">
                  <h5 className="font-bold text-[#020d1c] text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span>📋 Standard Eligibility:</span>
                  </h5>
                  <ul className="space-y-1.5 text-gray-600 text-[11.5px]">
                    <li>• Business vintage: 1 to 3+ years active</li>
                    <li>• Satisfactory banking track record & GST compliance</li>
                    <li>• Positive net worth / profit track or viable project report</li>
                    <li>• Good credit profile / clean repayment history</li>
                  </ul>
                </div>
              </div>

              {/* Why Choose KTR Consultants */}
              <div className="bg-[#020d1c] text-white rounded-xl p-5 border border-gray-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#de9e48]/10 rounded-full blur-2xl pointer-events-none"></div>
                
                <h4 className="text-xs sm:text-sm font-bold text-[#de9e48] flex items-center gap-2 mb-2 uppercase tracking-wider">
                  <span>🏆 Why Choose KTR Consultants for {product.title}?</span>
                </h4>
                
                <p className="text-gray-300 text-[12px] leading-relaxed mb-3.5">
                  Securing high-value business financing requires accurate financial presentation, CMA preparation, and multi-bank coordination. KTR Consultants acts as your comprehensive financial advisory partner:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11.5px] text-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#de9e48] text-[#020d1c] flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span>Professional CMA Data & DPR structuring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#de9e48] text-[#020d1c] flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span>Direct tie-ups with PSU, Private & NBFC lenders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#de9e48] text-[#020d1c] flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span>Lowest achievable interest rates & processing fee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#de9e48] text-[#020d1c] flex items-center justify-center font-bold text-[10px]">✓</span>
                    <span>End-to-end follow-up till sanction & disbursal</span>
                  </div>
                </div>
              </div>

              {/* CTA to Switch to Apply Tab */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-gray-500 text-[11px]">Ready to proceed or get an assessment?</span>
                <button
                  type="button"
                  onClick={() => setActiveTab('apply')}
                  className="w-full sm:w-auto bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-bold text-xs py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start Funding Request for {product.title}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

            </div>
          ) : (
            /* ===== Tab 2: Application Form ===== */
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-[13px]">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg font-medium text-xs">
                  {error}
                </div>
              )}

              {/* Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-bold text-[#020d1c] mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter applicant name"
                    required
                    className="w-full h-10 px-3.5 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#020d1c] mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex h-10 border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#de9e48] focus-within:ring-1 focus-within:ring-[#de9e48] transition-all bg-white">
                    <span className="bg-gray-50 border-r border-gray-200 px-3 flex items-center text-gray-600 font-bold text-xs">
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
                      className="flex-1 px-3 text-gray-800 placeholder-gray-400 outline-none bg-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Loan Amount */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-bold text-[#020d1c] mb-1">
                    Email ID <span className="text-gray-400 font-normal text-[11px]">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. business@example.com"
                    className="w-full h-10 px-3.5 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#020d1c] mb-1">
                    Estimated Requirement (₹) <span className="text-gray-400 font-normal text-[11px]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    placeholder="e.g. 25 Lakhs, 1 Crore"
                    className="w-full h-10 px-3.5 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-all bg-white"
                  />
                </div>
              </div>

              {/* Employment / Constitution Type */}
              <div>
                <label className="block font-bold text-[#020d1c] mb-1">
                  Business Constitution / Type
                </label>
                <select
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleChange}
                  className="w-full h-10 px-3 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-all bg-white"
                >
                  <option value="Self-Employed (Business)">Self-Employed (Proprietorship / Firm)</option>
                  <option value="Private Limited / LLP">Private Limited / LLP Company</option>
                  <option value="Self-Employed (Professional)">Self-Employed Professional (Doctor, CA, etc.)</option>
                  <option value="Salaried">Salaried (Individual)</option>
                </select>
              </div>

              {/* Documents Upload Section */}
              <div className="pt-2 border-t border-gray-100">
                <div className="mb-2">
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#020d1c] flex items-center gap-1.5">
                    <span>Already have the documents ready? Upload them now and let us get started.</span>
                    <span className="text-sm">🔒</span>
                  </h4>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                    You may upload the documents you currently have — our team will guide you if anything else is required.
                  </p>
                </div>

                {/* Helpful Checklist */}
                <div className="bg-[#fdfaf5] border border-[#f5e3cd] rounded-xl p-3 mb-3">
                  <p className="text-[11px] font-bold text-[#965a14] uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <span>📄 Basic Documents for {product.title}:</span>
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {(product.docsList || [
                      "PAN & Aadhaar Card",
                      "GST Returns (Past 12 Months)",
                      "Bank Statements (Past 12 Months)",
                      "Past 2–3 Years ITR / Financials"
                    ]).map((doc, idx) => (
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
                  <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#de9e48]/15 text-gray-500 group-hover:text-[#de9e48] flex items-center justify-center mx-auto mb-1 transition-colors shadow-2xs">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <p className="text-xs font-bold text-[#020d1c] group-hover:text-[#de9e48] transition-colors flex items-center justify-center gap-1">
                    <span>📤</span>
                    <span>Upload Your Documents</span>
                  </p>
                  <p className="text-[11px] text-gray-600 mt-0.5">
                    Upload available documents to help us review your requirement faster
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    PDF, JPG, PNG, DOC, XLS — Up to 15MB each
                  </p>
                </div>

                {/* Small trust message below upload */}
                <div className="mt-2 flex items-start gap-1.5 text-[11px] text-gray-600 bg-emerald-50/70 border border-emerald-100 rounded-lg p-2">
                  <span className="text-xs">🔐</span>
                  <p className="leading-snug">
                    <strong className="text-emerald-800 font-semibold">Secure & Confidential:</strong> Your documents are used only to assess and process your requested service.
                  </p>
                </div>

                {/* Attached Files List */}
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

              {/* Message */}
              <div>
                <label className="block font-bold text-[#020d1c] mb-1">
                  Specific Requirements or Note <span className="text-gray-400 font-normal text-[11px]">(Optional)</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Any particular bank preference, timeline or requirement notes..."
                  className="w-full p-2.5 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-all resize-none bg-white"
                />
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-gray-500 text-[11px]">
                  <svg className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>100% Confidential • Expert Advisory</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setActiveTab('overview')}
                    className="px-4 py-2.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Back to Info
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 sm:flex-none bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-black text-xs px-6 py-2.5 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-[#020d1c] border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Submit Funding Request</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};

export default BusinessProductModal;
