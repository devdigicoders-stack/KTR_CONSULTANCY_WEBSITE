import React, { useState, useRef } from 'react';

const PropertyValuationForm = ({ selectedServiceProp, formRefProp }) => {
  const localFormRef = useRef(null);
  const formRef = formRefProp || localFormRef;

  const [formData, setFormData] = useState({
    serviceType: selectedServiceProp || 'Property Valuation for Income Tax',
    name: '',
    mobile: '',
    email: '',
    pan: '',
    propertyAddress: '',
    transactionValue: '',
    transactionDate: '',
    transactionType: 'Buyer (Purchased)',
    notes: '',
    consent: true
  });

  const [deedFile, setDeedFile] = useState(null);
  const [deedFileName, setDeedFileName] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [apiError, setApiError] = useState('');

  // Handle Input Changes
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

  // Handle File Upload
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setFormErrors(prev => ({ ...prev, deedFile: 'File size must be under 10MB.' }));
        return;
      }
      setDeedFile(file);
      setDeedFileName(file.name);
      setFormErrors(prev => ({ ...prev, deedFile: '' }));
    }
  };

  const handleRemoveFile = () => {
    setDeedFile(null);
    setDeedFileName('');
  };

  // Form Validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full Name is required.';
    
    if (!formData.mobile.trim()) {
      errors.mobile = 'Mobile Number is required.';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      errors.mobile = 'Enter a valid 10-digit mobile number.';
    }

    if (formData.pan && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan)) {
      errors.pan = 'Enter a valid 10-character PAN (e.g. ABCDE1234F).';
    }

    if (!formData.consent) {
      errors.consent = 'You must agree to the terms and privacy policy.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    if (!validateForm()) {
      const firstError = Object.keys(formErrors)[0];
      const el = document.getElementById(`field-${firstError}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);

    try {
      const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const fd = new FormData();
      fd.append('serviceType', formData.serviceType);
      fd.append('name', formData.name);
      fd.append('mobile', formData.mobile);
      fd.append('email', formData.email || '');
      fd.append('pan', formData.pan || '');
      fd.append('propertyAddress', formData.propertyAddress || '');
      fd.append('transactionValue', formData.transactionValue || '');
      fd.append('transactionDate', formData.transactionDate || '');
      fd.append('transactionType', formData.transactionType);
      fd.append('notes', formData.notes || '');

      if (deedFile) {
        fd.append('deedDocument', deedFile);
      }

      const res = await fetch(`${BACKEND_URL}/property-valuation-tds/submit`, {
        method: 'POST',
        body: fd
      });

      const result = await res.json();

      if (result.success) {
        setSubmittedData({
          applicationId: result.data?.applicationId || `KTR-PVT-${Date.now().toString().slice(-6)}`,
          ...formData,
          deedFileName
        });

        // Scroll to success screen
        setTimeout(() => {
          formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else {
        throw new Error(result.message || 'Failed to submit details. Please try again.');
      }
    } catch (err) {
      setApiError(err.message || 'An error occurred while submitting. Please check your network connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="valuation-tds-form" className="bg-white py-12 lg:py-16 font-sans relative" ref={formRef}>
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Success View */}
        {submittedData ? (
          <div className="bg-white border-2 border-[#de9e48] rounded-3xl p-8 md:p-12 shadow-2xl text-center max-w-3xl mx-auto animate-fade-in">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-sm">
              ✓
            </div>

            <span className="bg-[#de9e48]/15 text-[#020d1c] font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-3 inline-block border border-[#de9e48]/30">
              Application Registered Successfully
            </span>

            <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#020d1c] mb-3">
              Thank You, {submittedData.name}!
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              Your application for <strong>{submittedData.serviceType}</strong> has been received. Our dedicated property tax & valuation specialist will review your transaction details and contact you shortly with the exact roadmap and fee estimate.
            </p>

            {/* Reference Box */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left mb-8 max-w-xl mx-auto space-y-2.5 text-xs text-gray-700">
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="font-semibold text-gray-500">Reference ID:</span>
                <span className="font-mono font-bold text-[#de9e48] text-sm">{submittedData.applicationId}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-500">Service:</span>
                <span className="font-bold text-[#020d1c]">{submittedData.serviceType}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-500">Mobile:</span>
                <span className="font-bold text-[#020d1c]">+91 {submittedData.mobile}</span>
              </div>
              {submittedData.transactionValue && (
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-500">Transaction Value:</span>
                  <span className="font-bold text-[#020d1c]">₹{submittedData.transactionValue}</span>
                </div>
              )}
              {submittedData.deedFileName && (
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-500">Attached Document:</span>
                  <span className="font-medium text-emerald-700">{submittedData.deedFileName}</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/919918699696?text=Hi%20KTR%20Consultants%2C%20I%20have%20submitted%20Property%20Valuation%20%2F%20TDS%20Application%20Reference%20ID%3A%20${submittedData.applicationId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <span>Connect on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setSubmittedData(null);
                  setFormData({
                    serviceType: 'Property Valuation for Income Tax',
                    name: '',
                    mobile: '',
                    email: '',
                    pan: '',
                    propertyAddress: '',
                    transactionValue: '',
                    transactionDate: '',
                    transactionType: 'Buyer (Purchased)',
                    notes: '',
                    consent: true
                  });
                  setDeedFile(null);
                  setDeedFileName('');
                }}
                className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          /* Main Application Form Container */
          <div className="bg-white border border-gray-200/90 rounded-3xl shadow-xl overflow-hidden">
            
            {/* Header Strip */}
            <div className="bg-[#020d1c] text-white p-6 sm:p-8 relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[#de9e48] text-xs font-black uppercase tracking-wider mb-1 block">
                    📋 Online Application Form
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-serif">
                    Property Valuation & TDS Request
                  </h2>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1">
                    Fill in your transaction details below for quick verification & fee confirmation.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15 text-xs text-amber-300 font-semibold self-start sm:self-auto flex items-center gap-1.5">
                  <span>💰 Charges confirmed after document review</span>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-10 space-y-8">
              
              {apiError && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-xs font-medium flex items-center gap-2">
                  <span className="text-base">⚠️</span>
                  <span>{apiError}</span>
                </div>
              )}

              {/* 1. Service Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-3">
                  1. Select Required Service <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'Property Valuation for Income Tax', label: 'Property Valuation', sub: 'For Income Tax, FMV & Capital Gains' },
                    { id: 'Property TDS Filing (Form 26QB)', label: 'Property TDS Filing', sub: 'Sec 194-IA, Challan & Form 16B' },
                    { id: 'Both Valuation & TDS Services', label: 'Both Valuation & TDS', sub: 'Complete end-to-end tax compliance' }
                  ].map((service) => {
                    const isSelected = formData.serviceType === service.id;
                    return (
                      <div
                        key={service.id}
                        onClick={() => setFormData(prev => ({ ...prev, serviceType: service.id }))}
                        className={`p-4 rounded-2xl cursor-pointer transition-all border-2 ${
                          isSelected
                            ? 'border-[#de9e48] bg-[#fdf9f2] shadow-sm ring-2 ring-[#de9e48]/20'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <input
                            type="radio"
                            name="serviceType"
                            checked={isSelected}
                            onChange={() => setFormData(prev => ({ ...prev, serviceType: service.id }))}
                            className="w-4 h-4 text-[#de9e48] focus:ring-[#de9e48] accent-[#de9e48] cursor-pointer"
                          />
                          <span className="font-bold text-xs sm:text-sm text-[#020d1c]">{service.label}</span>
                        </div>
                        <p className="text-[11px] text-gray-500 pl-6 leading-snug">{service.sub}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 2. Applicant Contact Details */}
              <div>
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-3">
                  2. Applicant Contact Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Name */}
                  <div id="field-name">
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Ramesh Kumar Verma"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border ${
                        formErrors.name ? 'border-red-500 bg-red-50/30' : 'border-gray-300 focus:border-[#de9e48]'
                      } focus:outline-none focus:ring-1 focus:ring-[#de9e48] transition-all`}
                    />
                    {formErrors.name && <p className="text-[11px] text-red-600 mt-1">{formErrors.name}</p>}
                  </div>

                  {/* Mobile */}
                  <div id="field-mobile">
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-xs bg-gray-100 text-gray-600 border border-r-0 border-gray-300 rounded-l-xl">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="9876543210"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-r-xl border ${
                          formErrors.mobile ? 'border-red-500 bg-red-50/30' : 'border-gray-300 focus:border-[#de9e48]'
                        } focus:outline-none focus:ring-1 focus:ring-[#de9e48] transition-all`}
                      />
                    </div>
                    {formErrors.mobile && <p className="text-[11px] text-red-600 mt-1">{formErrors.mobile}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ramesh@gmail.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:border-[#de9e48] focus:outline-none focus:ring-1 focus:ring-[#de9e48] transition-all"
                    />
                  </div>

                  {/* PAN */}
                  <div id="field-pan">
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      PAN Number <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="pan"
                      value={formData.pan}
                      onChange={handleInputChange}
                      placeholder="ABCDE1234F"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm uppercase tracking-wider rounded-xl border ${
                        formErrors.pan ? 'border-red-500 bg-red-50/30' : 'border-gray-300 focus:border-[#de9e48]'
                      } focus:outline-none focus:ring-1 focus:ring-[#de9e48] transition-all`}
                    />
                    {formErrors.pan && <p className="text-[11px] text-red-600 mt-1">{formErrors.pan}</p>}
                  </div>
                </div>
              </div>

              {/* 3. Property & Transaction Details */}
              <div>
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-3">
                  3. Property & Transaction Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  {/* Transaction Type */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Transaction Role
                    </label>
                    <select
                      name="transactionType"
                      value={formData.transactionType}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:border-[#de9e48] focus:outline-none focus:ring-1 focus:ring-[#de9e48] bg-white transition-all"
                    >
                      <option value="Buyer (Purchased)">Buyer (Purchased Property)</option>
                      <option value="Seller (Sold)">Seller (Sold Property)</option>
                      <option value="Planning to Buy">Planning to Buy</option>
                      <option value="Planning to Sell">Planning to Sell</option>
                      <option value="Other">Other / Dispute / Audit</option>
                    </select>
                  </div>

                  {/* Transaction Value */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Transaction / Agreement Value (₹)
                    </label>
                    <input
                      type="text"
                      name="transactionValue"
                      value={formData.transactionValue}
                      onChange={handleInputChange}
                      placeholder="e.g. 65,00,000"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:border-[#de9e48] focus:outline-none focus:ring-1 focus:ring-[#de9e48] transition-all"
                    />
                  </div>

                  {/* Transaction Date */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Date of Transaction / Registry
                    </label>
                    <input
                      type="date"
                      name="transactionDate"
                      value={formData.transactionDate}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:border-[#de9e48] focus:outline-none focus:ring-1 focus:ring-[#de9e48] transition-all"
                    />
                  </div>
                </div>

                {/* Property Address */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Property Address / Location Details
                  </label>
                  <input
                    type="text"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleInputChange}
                    placeholder="e.g. Plot No 42, Gomti Nagar Extension, Lucknow, UP"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:border-[#de9e48] focus:outline-none focus:ring-1 focus:ring-[#de9e48] transition-all"
                  />
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Additional Notes / Requirements <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows="2"
                    placeholder="Provide any specific instructions, Income Tax notice details, or questions..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:border-[#de9e48] focus:outline-none focus:ring-1 focus:ring-[#de9e48] transition-all"
                  ></textarea>
                </div>
              </div>

              {/* 4. Document Attachment (Deed / Registry) */}
              <div>
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                  4. Attach Property Deed / Registry Copy <span className="text-gray-400 font-normal">(Optional for initial inquiry)</span>
                </label>
                <p className="text-xs text-gray-500 mb-3">
                  Upload Purchase/Sale Deed, Registry copy, or Agreement to help us evaluate the exact requirements faster.
                </p>

                {deedFileName ? (
                  <div className="flex items-center justify-between bg-emerald-50 border border-emerald-300 p-3.5 rounded-xl text-xs">
                    <div className="flex items-center gap-2 text-emerald-800 font-medium">
                      <span>📄</span>
                      <span className="truncate max-w-xs sm:max-w-md">{deedFileName}</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="text-red-500 hover:text-red-700 font-bold px-2 py-1"
                    >
                      Remove ✕
                    </button>
                  </div>
                ) : (
                  <div className="relative border-2 border-dashed border-gray-300 hover:border-[#de9e48] rounded-2xl p-6 text-center transition-colors bg-gray-50/50">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center">
                      <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span className="text-xs font-bold text-[#020d1c]">
                        Click to upload or drag & drop Deed / Registry file
                      </span>
                      <span className="text-[11px] text-gray-500 mt-0.5">
                        PDF, JPG, PNG, DOC (Max size: 10MB)
                      </span>
                    </div>
                  </div>
                )}
                {formErrors.deedFile && <p className="text-[11px] text-red-600 mt-1">{formErrors.deedFile}</p>}
              </div>

              {/* 5. Charges Notice & Important Disclaimer */}
              <div className="space-y-4 pt-2">
                {/* Charges Card */}
                <div className="bg-[#fdf9f2] border border-[#de9e48]/40 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">💰</span>
                  <div className="text-xs text-gray-800 leading-relaxed">
                    <strong className="text-[#020d1c] block text-sm font-bold mb-0.5">Transparent Charges Policy:</strong>
                    <span>Charges will be confirmed after reviewing the transaction details and required documents. No upfront payment is required to submit your initial inquiry.</span>
                  </div>
                </div>

                {/* Statutory Disclaimer */}
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">⚠️</span>
                  <div className="text-[11.5px] text-gray-600 leading-relaxed">
                    <strong className="text-gray-800 block text-xs font-bold mb-0.5">Important Statutory Disclaimer:</strong>
                    <span>Applicability of valuation/TDS and the exact requirements depend on the nature and details of the property transaction and applicable rules. KTR Consultants facilitates and coordinates the process. Where a valuation report is required, the final valuation is determined by the concerned qualified/authorized valuer.</span>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#de9e48] focus:ring-[#de9e48] accent-[#de9e48] rounded mt-0.5 cursor-pointer"
                  />
                  <label className="text-xs text-gray-600">
                    I confirm that the details provided are accurate and authorize KTR Consultants to contact me for coordination.
                  </label>
                </div>
                {formErrors.consent && <p className="text-[11px] text-red-600">{formErrors.consent}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-gray-100">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#de9e48] hover:bg-[#c98e41] disabled:opacity-70 text-[#020d1c] font-black text-sm px-10 py-4 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(222,158,72,0.39)] hover:shadow-[0_6px_20px_rgba(222,158,72,0.25)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#020d1c] border-t-transparent rounded-full animate-spin"></span>
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Details for Review</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
};

export default PropertyValuationForm;
