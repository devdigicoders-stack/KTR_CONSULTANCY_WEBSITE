import React, { useState, useEffect } from 'react';

const isBusinessService = (title = '') => {
  const lower = title.toLowerCase();
  return (
    lower.includes('business') ||
    lower.includes('msme') ||
    lower.includes('mudra') ||
    lower.includes('cc / od') ||
    lower.includes('working capital') ||
    lower.includes('project') ||
    lower.includes('term loan')
  );
};

const QuickLoanApplyModal = ({ isOpen, onClose, service }) => {
  const serviceTitle = typeof service === 'string' ? service : (service?.title || 'Loan Service');
  const isBusiness = isBusinessService(serviceTitle);

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    loanAmount: '',
    propertyAddress: '',
    employmentType: 'Salaried'
  });

  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState('');

  // Lock body scroll and reset errors
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

  // Handle ESC key press
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

    if (!formData.loanAmount.trim()) {
      setError('Please enter your required loan amount.');
      return;
    }

    if (!isBusiness && !formData.employmentType) {
      setError('Please select your employment type.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

      const payload = {
        serviceType: serviceTitle,
        fullName: formData.fullName.trim(),
        mobile: formData.mobile.trim(),
        email: formData.email.trim(),
        loanAmount: formData.loanAmount.trim(),
        purpose: serviceTitle,
        employmentType: isBusiness ? 'Business / Self-Employed' : formData.employmentType,
        propertyAddress: formData.propertyAddress.trim(),
        source: 'Homepage Loan Services Grid'
      };

      const response = await fetch(`${BACKEND_URL}/applications/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setSubmittedData(result.data);
      } else {
        setError(result.message || 'Failed to submit application. Please try again.');
      }
    } catch (err) {
      console.error('Loan submission error:', err);
      setError('Unable to connect to the server. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

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
          <div className="absolute top-0 right-0 w-64 h-32 bg-[#de9e48]/10 blur-3xl pointer-events-none"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none"
            title="Close modal"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#de9e48] animate-pulse"></span>
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#de9e48]">
              {serviceTitle}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white leading-snug">
            Apply for {serviceTitle}
          </h3>
          <p className="text-gray-300 text-xs sm:text-[13px] mt-1.5 leading-relaxed">
            Submit your basic details and our finance specialists will structure the best loan options for you.
          </p>
        </div>

        {/* Body Content */}
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
                Application Received
              </span>

              <h4 className="text-xl sm:text-2xl font-black text-[#020d1c] mb-2 font-serif">
                Thank You, {submittedData.fullName}!
              </h4>

              <p className="text-gray-600 text-xs sm:text-sm max-w-md mx-auto mb-6 leading-relaxed">
                Your application for <strong className="text-[#020d1c]">{serviceTitle}</strong> has been logged. Our loan advisor will get in touch on <strong className="text-[#020d1c]">+91 {submittedData.mobile}</strong> shortly.
              </p>

              {/* Reference ID Box */}
              <div className="bg-[#fcfbf9] border border-[#e8d5b7] rounded-xl p-4 max-w-sm mx-auto mb-6 text-left shadow-xs">
                <div className="flex items-center justify-between border-b border-[#e8d5b7]/60 pb-2 mb-2">
                  <span className="text-[11px] font-bold text-gray-500 uppercase">Reference ID</span>
                  <span className="text-xs font-black text-[#020d1c] font-mono tracking-wider bg-[#de9e48]/15 px-2 py-0.5 rounded border border-[#de9e48]/30">
                    {submittedData.applicationId}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Loan Amount</p>
                    <p className="font-bold text-[#020d1c]">₹ {submittedData.loanAmount}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Service</p>
                    <p className="font-bold text-[#020d1c] truncate">{serviceTitle}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={onClose}
                  className="bg-[#020d1c] hover:bg-[#0b1d38] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-lg transition-colors shadow-sm"
                >
                  Done
                </button>
                <button
                  onClick={() => {
                    setSubmittedData(null);
                    setFormData({
                      fullName: '',
                      mobile: '',
                      email: '',
                      loanAmount: '',
                      propertyAddress: '',
                      employmentType: 'Salaried'
                    });
                  }}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
                >
                  Submit Another
                </button>
              </div>
            </div>
          ) : (
            /* ===== Application Form ===== */
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              {/* Row 1: Full Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-[13px] font-bold text-[#020d1c] mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Kumar"
                    required
                    className="w-full h-11 px-3.5 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#de9e48] focus:ring-2 focus:ring-[#de9e48]/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-[13px] font-bold text-[#020d1c] mb-1.5">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex h-11 border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#de9e48] focus-within:ring-2 focus-within:ring-[#de9e48]/10 transition-all">
                    <span className="bg-gray-50 border-r border-gray-200 px-3 text-xs sm:text-sm font-bold text-gray-600 flex items-center">
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
                      className="flex-1 px-3.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email ID (Optional) & Loan Amount */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-[13px] font-bold text-[#020d1c] mb-1.5">
                    Email ID <span className="text-gray-400 font-normal text-xs">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. ramesh@example.com"
                    className="w-full h-11 px-3.5 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#de9e48] focus:ring-2 focus:ring-[#de9e48]/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-[13px] font-bold text-[#020d1c] mb-1.5">
                    Required Loan Amount <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xs sm:text-sm">
                      ₹
                    </span>
                    <input
                      type="text"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleChange}
                      placeholder="e.g. 25,00,000 or 25 Lakhs"
                      required
                      className="w-full h-11 pl-8 pr-3.5 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#de9e48] focus:ring-2 focus:ring-[#de9e48]/10 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Employment Type (Conditional - Only for Home/Property/LAP Loans) */}
              {!isBusiness && (
                <div>
                  <label className="block text-xs sm:text-[13px] font-bold text-[#020d1c] mb-1.5">
                    Employed Type <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleChange}
                      required
                      className="w-full h-11 px-3.5 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-700 bg-white focus:outline-none focus:border-[#de9e48] focus:ring-2 focus:ring-[#de9e48]/10 appearance-none transition-all"
                    >
                      <option value="Salaried">Salaried (Private / Govt)</option>
                      <option value="Self-Employed (Business / Trader)">Self-Employed (Business / Trader)</option>
                      <option value="Self-Employed Professional">Self-Employed Professional (Doctor/CA/Lawyer)</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Row 4: Property Location (Address) */}
              <div>
                <label className="block text-xs sm:text-[13px] font-bold text-[#020d1c] mb-1.5">
                  Property Location (Address) <span className="text-gray-400 font-normal text-xs">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleChange}
                  placeholder="e.g. Society name, locality, or city"
                  className="w-full h-11 px-3.5 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#de9e48] focus:ring-2 focus:ring-[#de9e48]/10 transition-all"
                />
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-gray-500 text-[11px] sm:text-xs">
                  <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>100% Confidential • Official Banking Partners</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto min-w-[190px] h-12 bg-[#de9e48] hover:bg-[#c98e41] disabled:opacity-50 text-[#020d1c] font-black text-xs sm:text-sm px-6 rounded-xl transition-all shadow-[0_4px_14px_rgba(222,158,72,0.35)] hover:shadow-lg flex items-center justify-center gap-2 active:scale-98"
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
                      <span>Submit Application</span>
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

export default QuickLoanApplyModal;
