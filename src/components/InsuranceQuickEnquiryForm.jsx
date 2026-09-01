import React, { useState } from 'react';

const InsuranceQuickEnquiryForm = ({
  category = 'Life Insurance',
  title = 'Quick Insurance Enquiry',
  subtitle = 'Only 4 details required to explore customized options with expert assistance.',
  showVehicleFields = false,
  showInvestmentOptions = false,
  buttonText = 'Get Insurance Assistance',
  customId = 'insurance-enquiry-form'
}) => {
  const [formData, setFormData] = useState({
    category: category,
    name: '',
    mobile: '',
    age: '',
    gender: 'male',
    vehicleNumber: '',
    notes: '',
    consent: true
  });

  const [rcFile, setRcFile] = useState(null);
  const [rcFileName, setRcFileName] = useState('');
  const [prevPolicyFile, setPrevPolicyFile] = useState(null);
  const [prevPolicyFileName, setPrevPolicyFileName] = useState('');

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [apiError, setApiError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'mobile') {
      const digits = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, mobile: digits }));
    } else if (name === 'vehicleNumber') {
      setFormData(prev => ({ ...prev, vehicleNumber: value.toUpperCase() }));
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

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full Name is required.';
    
    if (!formData.mobile.trim()) {
      errors.mobile = 'Mobile Number is required.';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      errors.mobile = 'Enter a valid 10-digit mobile number.';
    }

    if (showVehicleFields && !formData.vehicleNumber && !rcFile) {
      errors.vehicleNumber = 'Please provide Vehicle Registration Number or attach RC photo.';
    }

    if (!formData.consent) {
      errors.consent = 'You must give consent to receive assistance.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const fd = new FormData();
      fd.append('category', formData.category || category);
      fd.append('name', formData.name);
      fd.append('mobile', formData.mobile);
      fd.append('age', formData.age || '');
      fd.append('gender', formData.gender);
      fd.append('vehicleNumber', formData.vehicleNumber || '');
      fd.append('notes', formData.notes || '');

      if (rcFile) fd.append('rcDocument', rcFile);
      if (prevPolicyFile) fd.append('previousPolicyDocument', prevPolicyFile);

      const res = await fetch(`${BACKEND_URL}/insurance/submit`, {
        method: 'POST',
        body: fd
      });

      const result = await res.json();

      if (result.success) {
        setSubmittedData({
          inquiryId: result.data?.inquiryId || `KTR-INS-${Date.now().toString().slice(-6)}`,
          ...formData
        });
      } else {
        throw new Error(result.message || 'Failed to submit enquiry.');
      }
    } catch (err) {
      setApiError(err.message || 'Error connecting to server. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id={customId} className="bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden font-sans">
      
      {/* Header Banner */}
      <div className="bg-[#020d1c] text-white p-6 sm:p-7 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#de9e48]/10 rounded-full blur-2xl pointer-events-none"></div>
        <span className="text-[#de9e48] text-[11px] font-black uppercase tracking-widest mb-1 block">
          📝 Quick Enquiry & Guidance
        </span>
        <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
          {title}
        </h3>
        <p className="text-gray-300 text-xs sm:text-sm mt-1 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Success View */}
      {submittedData ? (
        <div className="p-8 text-center animate-fade-in">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
            ✓
          </div>
          <span className="bg-[#de9e48]/15 text-[#020d1c] font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block border border-[#de9e48]/30">
            Enquiry Submitted Successfully
          </span>
          <h4 className="text-xl font-bold font-serif text-[#020d1c] mb-2">
            Thank you, {submittedData.name}!
          </h4>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 max-w-md mx-auto">
            Your request for <strong>{submittedData.category}</strong> has been received (Ref: <span className="font-mono text-[#de9e48] font-bold">{submittedData.inquiryId}</span>). Our advisor will contact you shortly with personalized comparisons and policy details.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/919918699696?text=Hi%20KTR%20Consultants%2C%20I%20have%20submitted%20an%20enquiry%20for%20${encodeURIComponent(submittedData.category)}%20(Ref%3A%20${submittedData.inquiryId})`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              <span>Connect on WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setSubmittedData(null);
                setFormData({
                  category: category,
                  name: '',
                  mobile: '',
                  age: '',
                  gender: 'male',
                  vehicleNumber: '',
                  notes: '',
                  consent: true
                });
                setRcFile(null);
                setRcFileName('');
                setPrevPolicyFile(null);
                setPrevPolicyFileName('');
              }}
              className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        /* Form View */
        <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4">
          
          {apiError && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-xs font-medium">
              ⚠️ {apiError}
            </div>
          )}

          {/* Category Selector (If Investment/Retirement or multiple choices) */}
          {showInvestmentOptions && (
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Investment Solution Type
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:border-[#de9e48] focus:outline-none focus:ring-1 focus:ring-[#de9e48] bg-white"
              >
                <option value="Investment Plans">💰 Investment Plans (Goal-based & Wealth Creation)</option>
                <option value="ULIP Plans">📊 ULIP Plans (Insurance + Market-Linked)</option>
                <option value="Market-Linked Plans">📈 Market-Linked Growth Plans</option>
                <option value="Retirement & Pension Plans">👴 Retirement & Pension Solutions</option>
              </select>
            </div>
          )}

          {/* 4 Core Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. Arvind Sharma"
                className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border ${
                  formErrors.name ? 'border-red-500 bg-red-50/30' : 'border-gray-300 focus:border-[#de9e48]'
                } focus:outline-none focus:ring-1 focus:ring-[#de9e48]`}
              />
              {formErrors.name && <p className="text-[11px] text-red-600 mt-1">{formErrors.name}</p>}
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
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
                  } focus:outline-none focus:ring-1 focus:ring-[#de9e48]`}
                />
              </div>
              {formErrors.mobile && <p className="text-[11px] text-red-600 mt-1">{formErrors.mobile}</p>}
            </div>

            {/* Age */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Age (Years)
              </label>
              <input
                type="number"
                name="age"
                min="18"
                max="100"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="e.g. 35"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:border-[#de9e48] focus:outline-none focus:ring-1 focus:ring-[#de9e48]"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Gender
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['male', 'female', 'other'].map((g) => (
                  <button
                    type="button"
                    key={g}
                    onClick={() => setFormData(prev => ({ ...prev, gender: g }))}
                    className={`py-2 px-2 text-xs font-semibold rounded-xl border capitalize transition-all ${
                      formData.gender === g
                        ? 'bg-[#020d1c] text-[#de9e48] border-[#020d1c]'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Vehicle Specific Fields */}
          {showVehicleFields && (
            <div className="pt-2 border-t border-gray-100 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Vehicle Registration Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="vehicleNumber"
                  value={formData.vehicleNumber}
                  onChange={handleInputChange}
                  placeholder="e.g. UP 32 AB 1234 / DL 01 CD 5678"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm uppercase tracking-wider rounded-xl border border-gray-300 focus:border-[#de9e48] focus:outline-none focus:ring-1 focus:ring-[#de9e48]"
                />
                {formErrors.vehicleNumber && <p className="text-[11px] text-red-600 mt-1">{formErrors.vehicleNumber}</p>}
              </div>

              {/* RC Upload */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Clear RC Photo / Copy <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  {rcFileName ? (
                    <div className="flex items-center justify-between bg-emerald-50 border border-emerald-300 p-2.5 rounded-xl text-xs">
                      <span className="truncate text-emerald-800 font-medium">📄 {rcFileName}</span>
                      <button type="button" onClick={() => { setRcFile(null); setRcFileName(''); }} className="text-red-500 hover:text-red-700 font-bold px-1.5">✕</button>
                    </div>
                  ) : (
                    <label className="flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-[#de9e48] rounded-xl p-3 text-center cursor-pointer bg-gray-50/50">
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f) { setRcFile(f); setRcFileName(f.name); }
                        }}
                        className="hidden"
                      />
                      <span className="text-xs text-gray-600">📷 Upload RC Photo</span>
                    </label>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Previous Policy Copy <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  {prevPolicyFileName ? (
                    <div className="flex items-center justify-between bg-emerald-50 border border-emerald-300 p-2.5 rounded-xl text-xs">
                      <span className="truncate text-emerald-800 font-medium">📄 {prevPolicyFileName}</span>
                      <button type="button" onClick={() => { setPrevPolicyFile(null); setPrevPolicyFileName(''); }} className="text-red-500 hover:text-red-700 font-bold px-1.5">✕</button>
                    </div>
                  ) : (
                    <label className="flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-[#de9e48] rounded-xl p-3 text-center cursor-pointer bg-gray-50/50">
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f) { setPrevPolicyFile(f); setPrevPolicyFileName(f.name); }
                        }}
                        className="hidden"
                      />
                      <span className="text-xs text-gray-600">📑 Upload Old Policy</span>
                    </label>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Consent */}
          <div className="pt-2">
            <label className="flex items-start gap-2 text-[11.5px] text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                className="w-4 h-4 text-[#de9e48] focus:ring-[#de9e48] accent-[#de9e48] rounded mt-0.5"
              />
              <span>I agree to receive insurance comparison and policy guidance from KTR Consultants.</span>
            </label>
            {formErrors.consent && <p className="text-[11px] text-red-600">{formErrors.consent}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#de9e48] hover:bg-[#c98e41] disabled:opacity-70 text-[#020d1c] font-black text-sm py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-3"
          >
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border-2 border-[#020d1c] border-t-transparent rounded-full animate-spin"></span>
                <span>Submitting Request...</span>
              </>
            ) : (
              <>
                <span>{buttonText}</span>
                <span className="text-lg">→</span>
              </>
            )}
          </button>

        </form>
      )}

    </div>
  );
};

export default InsuranceQuickEnquiryForm;
