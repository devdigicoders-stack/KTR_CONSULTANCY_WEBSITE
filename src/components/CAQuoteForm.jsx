import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CAQuoteForm = () => {
  const [selectedService, setSelectedService] = useState('Income Tax Return (ITR) Filing');
  const location = useLocation();

  const services = [
    { id: 'Income Tax Return (ITR) Filing', label: 'ITR Filing', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
    { id: 'GST Registration', label: 'GST Registration', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { id: 'GST Return Filing & Compliance', label: 'GST Return & Compliance', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { id: 'Business Registration & Setup', label: 'Business Registration', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { id: 'Financial Statements & CA Certification', label: 'Financial Statements & CA', icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z' },
    { id: 'CMA Data & Loan Documentation', label: 'CMA Data & Loans', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' },
    { id: 'Project Report / DPR', label: 'Project Report / DPR', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { id: 'Financial Projections', label: 'Financial Projections', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
    { id: 'Income / Turnover / Net Worth Certificates', label: 'Net Worth Certificates', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'Tax & GST Compliance / Notice Assistance', label: 'Notice Assistance', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
    { id: 'Audit Services', label: 'Audit Services', icon: 'M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m11 4.5L21 21m-2-5a3 3 0 11-6 0 3 3 0 016 0z' }
  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      const decodedService = decodeURIComponent(serviceParam);
      const exists = services.find(s => s.id === decodedService);
      if (exists) {
        setSelectedService(decodedService);
      }
    }
  }, [location, services]);

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    businessName: '',
    businessConstitution: '',
    message: ''
  });
  
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState(null);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleFileSelect = (e) => {
    const selected = Array.from(e.target.files || []);
    if (!selected.length) return;
    const valid = [];
    for (const f of selected) {
      if (f.size > 15 * 1024 * 1024) {
        setApiError(`File ${f.name} exceeds 15MB size limit.`);
        return;
      }
      valid.push(f);
    }
    if (files.length + valid.length > 10) {
      setApiError('Maximum 10 documents allowed.');
      return;
    }
    setFiles(prev => [...prev, ...valid]);
    setApiError('');
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Enter valid 10-digit mobile number';
    }
    if (!formData.city.trim()) newErrors.city = 'City is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    if (!validate()) {
      return;
    }

    try {
      setLoading(true);
      const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      
      const data = new FormData();
      data.append('serviceType', selectedService);
      data.append('fullName', formData.fullName.trim());
      data.append('mobile', formData.mobile.trim());
      data.append('email', formData.email ? formData.email.trim() : '');
      data.append('city', formData.city.trim());
      data.append('businessName', formData.businessName ? formData.businessName.trim() : '');
      data.append('businessConstitution', formData.businessConstitution || '');
      data.append('message', formData.message ? formData.message.trim() : '');

      files.forEach(file => {
        data.append('documents', file);
      });

      const res = await fetch(`${BACKEND_URL}/ca-quotes/submit`, {
        method: 'POST',
        body: data
      });
      
      const result = await res.json();
      
      if (result.success) {
        setSubmittedQuote(result.data);
      } else {
        setApiError(result.message || 'Failed to submit quote request. Please try again.');
      }
    } catch (error) {
      setApiError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmittedQuote(null);
    setFiles([]);
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      city: '',
      businessName: '',
      businessConstitution: '',
      message: ''
    });
    setErrors({});
  };

  const SectionTitle = ({ title, num }) => (
    <div className="flex items-center gap-2 mb-6">
      <div className="w-1.5 h-5 bg-[#de9e48] rounded-sm"></div>
      <h3 className="text-[#020d1c] font-bold text-[16px] md:text-[18px]">
        {num}. {title}
      </h3>
    </div>
  );

  if (submittedQuote) {
    return (
      <div className="bg-white rounded-2xl border-2 border-[#de9e48] shadow-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold font-serif text-[#020d1c] mb-2">Quote Request Received!</h3>
        <p className="text-gray-500 mb-6 text-lg">Thank you, {submittedQuote.fullName}. Your request ID is <strong className="text-[#020d1c] font-mono">{submittedQuote.quoteId}</strong>.</p>
        
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-left mb-8 max-w-xl mx-auto space-y-3">
          <div className="flex justify-between border-b pb-2"><span className="text-gray-500">Service:</span> <span className="font-bold text-[#020d1c] text-right">{submittedQuote.serviceType}</span></div>
          <div className="flex justify-between border-b pb-2"><span className="text-gray-500">Mobile:</span> <span className="font-bold text-[#020d1c]">{submittedQuote.mobile}</span></div>
          <div className="flex justify-between border-b pb-2"><span className="text-gray-500">City:</span> <span className="font-bold text-[#020d1c]">{submittedQuote.city}</span></div>
          {submittedQuote.businessConstitution && (
             <div className="flex justify-between"><span className="text-gray-500">Entity Type:</span> <span className="font-bold text-[#020d1c]">{submittedQuote.businessConstitution}</span></div>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-8 leading-relaxed max-w-xl mx-auto">Our CA advisory team is reviewing your requirements and will contact you shortly with a personalized consultation and quotation.</p>

        <button 
          onClick={resetForm}
          className="bg-[#de9e48] hover:bg-[#c98e41] text-white font-bold px-8 py-3 rounded-lg shadow-md transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12 relative">
      
      {apiError && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg font-medium text-sm flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          {apiError}
        </div>
      )}

      {/* 1. Select the CA Service */}
      <div>
        <SectionTitle num="1" title="Select the CA Service You Need" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service) => (
            <label 
              key={service.id}
              className={`relative cursor-pointer rounded-xl border p-4 flex flex-col items-center justify-center text-center transition-all ${
                selectedService === service.id 
                  ? 'border-[#de9e48] bg-[#fdfaf5]' 
                  : 'border-gray-200 hover:border-[#de9e48]/50 bg-white'
              }`}
              onClick={() => setSelectedService(service.id)}
            >
              <input 
                type="radio" 
                name="ca_service_type" 
                className="absolute top-3 right-3 w-4 h-4 accent-[#de9e48]"
                checked={selectedService === service.id}
                readOnly
              />
              <svg className={`w-8 h-8 mb-3 ${selectedService === service.id ? 'text-[#de9e48]' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
              </svg>
              <span className={`text-[12.5px] font-bold ${selectedService === service.id ? 'text-[#020d1c]' : 'text-gray-600'}`}>
                {service.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* 2. Your Details */}
      <div>
        <SectionTitle num="2" title="Your Contact Details" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Full Name <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name" 
              className={`w-full h-11 px-4 border rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400 transition-colors ${errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-gray-200 bg-white'}`}
            />
            {errors.fullName && <span className="text-red-500 text-xs font-medium">{errors.fullName}</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Mobile Number <span className="text-red-500">*</span></label>
            <div className={`flex h-11 border rounded-lg focus-within:border-[#de9e48] overflow-hidden transition-colors ${errors.mobile ? 'border-red-400 bg-red-50/30' : 'border-gray-200 bg-white'}`}>
               <div className="bg-gray-50 border-r border-gray-200 px-3 flex items-center justify-center text-[14px] text-gray-700 font-medium">
                  +91
               </div>
               <input 
                 type="tel" 
                 name="mobile"
                 maxLength="10"
                 value={formData.mobile}
                 onChange={handleChange}
                 placeholder="Enter mobile number" 
                 className="flex-1 px-4 outline-none text-[14px] text-gray-700 placeholder-gray-400 bg-transparent" 
               />
            </div>
            {errors.mobile && <span className="text-red-500 text-xs font-medium">{errors.mobile}</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address" 
              className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400 bg-white" 
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">City <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city" 
              className={`w-full h-11 px-4 border rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400 transition-colors ${errors.city ? 'border-red-400 bg-red-50/30' : 'border-gray-200 bg-white'}`}
            />
            {errors.city && <span className="text-red-500 text-xs font-medium">{errors.city}</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Company / Business Name (Optional)</label>
            <input 
              type="text" 
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Enter business name" 
              className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400 bg-white" 
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Business Constitution</label>
            <select 
              name="businessConstitution"
              value={formData.businessConstitution}
              onChange={handleChange}
              className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 bg-white cursor-pointer"
            >
               <option value="" disabled>Select Option</option>
               <option value="Individual / Proprietorship">Individual / Proprietorship</option>
               <option value="Partnership Firm">Partnership Firm</option>
               <option value="Private Limited / LLP">Private Limited / LLP</option>
               <option value="Not Applicable">Not Applicable</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. Document Upload (Optional) */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <SectionTitle num="3" title="Upload Relevant Documents (Optional)" />
          <span className="text-[11px] bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded border border-emerald-200">
            Optional
          </span>
        </div>

        <p className="text-gray-500 text-[13px] mb-4 leading-relaxed">
          You can submit with just basic contact details, or upload documents (PAN, Aadhaar, Bank Statement, Previous ITR/GST, Financials) right now for expedited processing.
        </p>

        {/* Dropzone */}
        <label className="border-2 border-dashed border-gray-300 hover:border-[#de9e48] bg-gray-50/60 hover:bg-[#fdfaf5] rounded-xl p-6 text-center cursor-pointer transition-all block group">
          <input
            type="file"
            onChange={handleFileSelect}
            multiple
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx,.zip"
            className="hidden"
          />
          <div className="w-12 h-12 rounded-full bg-white group-hover:bg-[#de9e48]/15 text-gray-500 group-hover:text-[#de9e48] flex items-center justify-center mx-auto mb-3 transition-colors shadow-xs">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <p className="text-sm font-bold text-[#020d1c] group-hover:text-[#de9e48] transition-colors">
            Click to browse or drag & drop files here
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Supports PDF, JPG, PNG, DOCX, XLS (Up to 15MB each, max 10 files)
          </p>
        </label>

        {/* Selected Files List */}
        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">
              Attached Files ({files.length}):
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {files.map((f, i) => (
                <div 
                  key={i} 
                  className="bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-between shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                    <span className="text-lg">📄</span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#020d1c] truncate">{f.name}</p>
                      <p className="text-[10px] text-gray-400">{formatFileSize(f.size)}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    className="text-gray-400 hover:text-red-500 p-1 rounded transition-colors cursor-pointer"
                    title="Remove file"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 4. Message */}
      <div>
        <SectionTitle num="4" title="Additional Requirements" />
        
        <div className="flex flex-col gap-1.5 mb-8">
          <label className="text-[13px] font-bold text-[#020d1c]">Message or Specific Requirement (Optional)</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Briefly describe what you need help with..." 
            className="w-full p-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400 resize-none min-h-[120px] bg-white"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center xl:justify-start">
           <button 
             type="submit"
             disabled={loading}
             className="bg-[#de9e48] hover:bg-[#c98e41] disabled:opacity-75 disabled:cursor-not-allowed text-white font-bold text-[14.5px] px-8 py-3.5 rounded-md transition-colors w-full sm:w-[320px] flex items-center justify-center gap-2 shadow-md relative overflow-hidden group cursor-pointer"
           >
             {loading ? (
               <>
                  <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Processing...
               </>
             ) : (
               <>
                 <span>
                   {files.length > 0
                     ? `Submit with ${files.length} Document${files.length > 1 ? 's' : ''}`
                     : 'Submit Application'}
                 </span>
                 <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </>
             )}
           </button>
        </div>
      </div>

    </form>
  );
};

export default CAQuoteForm;
