import React, { useState } from 'react';

const ApplyForm = () => {
  const [selectedService, setSelectedService] = useState('Home Loan');
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    dob: '',
    source: '',
    loanAmount: '',
    purpose: '',
    otherPurpose: '',
    otherServiceType: '',
    employmentType: '',
    message: ''
  });

  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile || !formData.purpose || !formData.employmentType) {
      showNotification('Please fill in all required fields.', 'error');
      return;
    }

    if (selectedService === 'Other' && !formData.otherServiceType) {
      showNotification('Please specify the service you are looking for.', 'error');
      return;
    }

    try {
      setLoading(true);
      const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      
      const response = await fetch(`${BACKEND_URL}/applications/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, serviceType: selectedService })
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmittedData(result.data);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        showNotification(result.message || 'Something went wrong', 'error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showNotification('Failed to connect to the server.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const printReceipt = (data) => {
    const printWindow = window.open('', '_blank', 'width=700,height=800');
    const submittedDate = new Date(data.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    printWindow.document.write(`<!DOCTYPE html><html><head><title>Receipt - ${data.applicationId}</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',Arial,sans-serif;background:#f4f5f7;display:flex;justify-content:center;padding:40px 20px}.receipt{width:520px;background:white;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,.12)}.rh{background:#020d1c;padding:24px;display:flex;justify-content:space-between;align-items:flex-start}.ct{color:#de9e48;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:4px}.cn{color:white;font-size:18px;font-weight:900}.rl{color:#9ca3af;font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;text-align:right;margin-bottom:4px}.ri{color:#de9e48;font-size:15px;font-weight:900;letter-spacing:1px}.rb{padding:24px}.row{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:18px;margin-bottom:18px;border-bottom:1px solid #f1f5f9}.fl{font-size:10px;color:#9ca3af;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px}.fv{font-size:15px;color:#020d1c;font-weight:800}.fvs{font-size:13px;color:#020d1c;font-weight:700}.sb{background:#fffbeb;border:1px solid #fde68a;color:#b45309;font-size:10px;font-weight:800;padding:5px 12px;border-radius:99px;text-transform:uppercase;letter-spacing:1px}.gr{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding-bottom:18px;margin-bottom:18px;border-bottom:1px solid #f1f5f9}.ib{background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:14px;display:flex;gap:10px}.it{font-size:11.5px;color:#1d4ed8;line-height:1.6}.rf{background:#f8fafc;border-top:1px solid #e2e8f0;padding:16px 24px;display:flex;justify-content:space-between}.ft{font-size:11px;color:#94a3b8;font-weight:600}.fn{font-size:11px;color:#64748b;font-weight:700}@media print{body{background:white;padding:0}.receipt{box-shadow:none;border-radius:0;width:100%}}</style></head><body><div class="receipt"><div class="rh"><div><div class="ct">Application Receipt</div><div class="cn">KTR Financial Services</div></div><div><div class="rl">Reference ID</div><div class="ri">${data.applicationId}</div></div></div><div class="rb"><div class="row"><div><div class="fl">Applicant Name</div><div class="fv">${data.fullName}</div></div><div style="text-align:right"><div class="fl">Mobile</div><div class="fvs">+91 ${data.mobile}</div></div></div><div class="row"><div><div class="fl">Service Applied For</div><div class="fvs">${data.serviceType}${data.serviceType==='Other'&&data.otherServiceType?' ('+data.otherServiceType+')':''}</div></div><div class="sb">Pending Review</div></div><div class="gr"><div><div class="fl">Purpose</div><div class="fvs">${data.purpose==='Other'?data.otherPurpose:data.purpose}</div></div><div><div class="fl">Employment Type</div><div class="fvs">${data.employmentType}</div></div>${data.loanAmount?'<div><div class="fl">Loan Amount</div><div class="fvs">&#8377; '+data.loanAmount+'</div></div>':''}<div><div class="fl">Submitted On</div><div class="fvs">${submittedDate}</div></div></div><div class="ib"><div style="color:#3b82f6;font-size:18px;flex-shrink:0">&#9432;</div><div class="it">Please save your Reference ID <strong>${data.applicationId}</strong>. Our team will contact you on <strong>+91 ${data.mobile}</strong> within 24–48 business hours.</div></div></div><div class="rf"><div class="ft">KTR Financial Services &copy; ${new Date().getFullYear()}</div><div class="fn">Printed on ${new Date().toLocaleDateString('en-IN')}</div></div></div><script>window.onload=function(){window.print();window.onafterprint=function(){window.close();};}<\/script></body></html>`);
    printWindow.document.close();
  };

  const services = [
    { id: 'Home Loan', label: 'Home Loan', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
    { id: 'Plot + Construction (P+C)', label: 'Plot + Construction (P+C)', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> },
    { id: 'Construction Loan', label: 'Construction Loan', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /> },
    { id: 'Loan Against Property (LAP)', label: 'Loan Against Property (LAP)', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
    { id: 'LAP Takeover + Top-Up', label: 'LAP Takeover + Top-Up', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /> },
    { id: 'MSME / Business Loan', label: 'MSME / Business Loan', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
    { id: 'Mudra Loan', label: 'Mudra Loan', icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.5} /></> },
    { id: 'CC / OD – Working Capital', label: 'CC / OD – Working Capital', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
    { id: 'Project Finance / Project Loan', label: 'Project Finance / Project Loan', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /> },
    { id: 'Term Loan', label: 'Term Loan', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> },
    { id: 'Business Loan Takeover + Top-Up', label: 'Business Loan Takeover + Top-Up', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /> },
    { id: 'Home Loan Balance Transfer + Top-Up', label: 'Home Loan Balance Transfer + Top-Up', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
    { id: 'Property Purchase Loan', label: 'Property Purchase Loan', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /> },
    { id: 'Commercial Property Loan', label: 'Commercial Property Loan', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> },
    { id: 'Other', label: 'Other', icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></> }
  ];

  const SectionTitle = ({ title, num }) => (
    <div className="flex items-center gap-2 mb-6">
      <div className="w-1.5 h-5 bg-[#de9e48] rounded-sm"></div>
      <h3 className="text-[#020d1c] font-bold text-[16px] md:text-[18px]">
        {num}. {title}
      </h3>
    </div>
  );

  return (
    <div className="space-y-12 relative">
      {notification && (
        <div className={`fixed top-6 right-6 z-50 px-6 py-3 rounded-xl shadow-xl border font-bold text-sm ${
          notification.type === 'error' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-green-50 text-green-600 border-green-100'
        }`}>
          {notification.message}
        </div>
      )}

      {/* ===== RECEIPT SCREEN ===== */}
      {submittedData ? (
        <div className="flex flex-col items-center justify-center py-8">
          {/* Success Icon */}
          <div className="w-20 h-20 rounded-full bg-green-50 border-4 border-green-100 flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-[#020d1c] font-bold text-[22px] md:text-[26px] mb-1">Application Submitted!</h2>
          <p className="text-gray-500 text-[14px] mb-8 text-center max-w-md">Your application has been received. Our team will contact you shortly.</p>

          {/* Receipt Card */}
          <div className="w-full max-w-[560px] bg-white border border-gray-100 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.07)] overflow-hidden">
            {/* Receipt Header */}
            <div className="bg-[#020d1c] px-6 py-5 flex items-center justify-between">
              <div>
                <p className="text-[#de9e48] text-[11px] font-bold uppercase tracking-widest mb-1">Application Receipt</p>
                <p className="text-white font-black text-[18px]">KTR Financial Services</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-1">Reference ID</p>
                <p className="text-[#de9e48] font-black text-[15px] tracking-wider">{submittedData.applicationId}</p>
              </div>
            </div>

            {/* Receipt Body */}
            <div className="px-6 py-5 space-y-4">
              {/* Applicant Row */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Applicant Name</p>
                  <p className="text-[#020d1c] font-black text-[16px]">{submittedData.fullName}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Mobile</p>
                  <p className="text-[#020d1c] font-bold text-[14px]">+91 {submittedData.mobile}</p>
                </div>
              </div>

              {/* Service */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Service Applied For</p>
                  <p className="text-[#020d1c] font-bold text-[14px]">
                    {submittedData.serviceType}
                    {submittedData.serviceType === 'Other' && submittedData.otherServiceType && (
                      <span className="block text-gray-500 text-[12px] font-medium mt-0.5">({submittedData.otherServiceType})</span>
                    )}
                  </p>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-[11px] font-black uppercase tracking-wider">
                  Pending Review
                </span>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-100">
                <div>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Purpose</p>
                  <p className="text-[#020d1c] font-bold text-[13px]">
                    {submittedData.purpose === 'Other' ? submittedData.otherPurpose : submittedData.purpose}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Employment Type</p>
                  <p className="text-[#020d1c] font-bold text-[13px]">{submittedData.employmentType}</p>
                </div>
                {submittedData.loanAmount && (
                  <div>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Loan Amount</p>
                    <p className="text-[#020d1c] font-bold text-[13px]">₹ {submittedData.loanAmount}</p>
                  </div>
                )}
                <div>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Submitted On</p>
                  <p className="text-[#020d1c] font-bold text-[13px]">
                    {new Date(submittedData.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>

              {/* Info Note */}
              <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-xl p-3.5">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-blue-700 text-[12px] font-medium leading-relaxed">
                  Please save your Reference ID <strong>{submittedData.applicationId}</strong> for future tracking. Our team will contact you on <strong>+91 {submittedData.mobile}</strong> within 24–48 business hours.
                </p>
              </div>
            </div>

            {/* Receipt Footer */}
            <div className="bg-gray-50 border-t border-gray-100 px-6 py-4 flex items-center justify-between gap-3">
              <button
                onClick={() => printReceipt(submittedData)}
                className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-[13px] font-bold text-gray-600 hover:bg-white hover:border-gray-300 transition-colors">

                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print Receipt
              </button>
              <button
                onClick={() => {
                  setSubmittedData(null);
                  setFormData({ fullName: '', mobile: '', email: '', dob: '', source: '', loanAmount: '', purpose: '', otherPurpose: '', otherServiceType: '', employmentType: '', message: '' });
                  setSelectedService('Home Loan');
                }}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#de9e48] hover:bg-[#c98e41] text-white rounded-lg text-[13px] font-bold transition-colors"
              >
                Submit Another Application
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
      <form onSubmit={handleSubmit}>
        <div>
          <SectionTitle num="1" title="What are you looking for?" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                name="service_type" 
                className="absolute top-3 right-3 w-4 h-4 accent-[#de9e48]"
                checked={selectedService === service.id}
                readOnly
              />
              <svg className={`w-8 h-8 mb-3 ${selectedService === service.id ? 'text-[#de9e48]' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {service.icon}
              </svg>
              <span className={`text-[13px] font-bold ${selectedService === service.id ? 'text-[#020d1c]' : 'text-gray-600'}`}>
                {service.label}
              </span>
            </label>
          ))}
        </div>
        
        {selectedService === 'Other' && (
          <div className="mt-6 flex flex-col gap-1.5 animate-in fade-in zoom-in duration-200">
            <label className="text-[13px] font-bold text-[#020d1c]">Please Specify Service <span className="text-red-500">*</span></label>
            <input type="text" name="otherServiceType" value={formData.otherServiceType} onChange={handleChange} required placeholder="Enter the service you are looking for" className="w-full max-w-md h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400" />
          </div>
        )}
      </div>

      {/* 2. Your Basic Details */}
      <div className="mt-12">
        <SectionTitle num="2" title="Your Basic Details" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Full Name <span className="text-red-500">*</span></label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Enter your full name" className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Mobile Number <span className="text-red-500">*</span></label>
            <div className="flex h-11 border border-gray-200 rounded-lg focus-within:border-[#de9e48] overflow-hidden">
               <select className="bg-gray-50 border-r border-gray-200 px-3 text-[14px] text-gray-700 outline-none h-full font-medium">
                  <option>+91</option>
               </select>
               <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder="Enter mobile number" className="flex-1 px-4 outline-none text-[14px] text-gray-700 placeholder-gray-400" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email address" className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Date of Birth <span className="text-gray-400 font-normal text-[11px]">(Optional)</span></label>
            <div className="relative">
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">How did you hear about us?</label>
            <select name="source" value={formData.source} onChange={handleChange} className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 bg-white">
               <option value="" disabled>Select Option</option>
               <option value="Social Media">Social Media</option>
               <option value="Friend / Family">Friend / Family</option>
               <option value="Google Search">Google Search</option>
               <option value="Advertisement">Advertisement</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. Service Requirement Details */}
      <div className="mt-12">
        <SectionTitle num="3" title="Service Requirement Details" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 mb-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Loan / Service Amount (₹)</label>
            <input type="text" name="loanAmount" value={formData.loanAmount} onChange={handleChange} placeholder="Enter amount (Optional)" className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Purpose of Requirement <span className="text-red-500">*</span></label>
            <select name="purpose" value={formData.purpose} onChange={handleChange} required className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 bg-white">
               <option value="" disabled>Select Purpose</option>
               <option value="New Home">New Home</option>
               <option value="Business Expansion">Business Expansion</option>
               <option value="Personal Reason">Personal Reason</option>
               <option value="Other">Other</option>
            </select>
          </div>
          
          {formData.purpose === 'Other' && (
            <div className="flex flex-col gap-1.5 md:col-span-2 xl:col-span-1 animate-in fade-in zoom-in duration-200">
              <label className="text-[13px] font-bold text-[#020d1c]">Please Specify Reason <span className="text-red-500">*</span></label>
              <input type="text" name="otherPurpose" value={formData.otherPurpose} onChange={handleChange} required placeholder="Enter your reason" className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400" />
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Employment Type / Business Type <span className="text-red-500">*</span></label>
            <select name="employmentType" value={formData.employmentType} onChange={handleChange} required className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 bg-white">
               <option value="" disabled>Select Type</option>
               <option value="Salaried">Salaried</option>
               <option value="Self-Employed (Business)">Self-Employed (Business)</option>
               <option value="Self-Employed (Professional)">Self-Employed (Professional)</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 mb-8">
          <label className="text-[13px] font-bold text-[#020d1c]">Additional Requirements / Message (Optional)</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message or additional requirements..." 
            className="w-full p-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400 resize-none min-h-[120px]"
          ></textarea>
          <p className="text-[11px] text-gray-500 mt-1">Please provide accurate information to help us serve you better.</p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center xl:justify-start">
           <button disabled={loading} className="bg-[#de9e48] hover:bg-[#c98e41] text-white font-bold text-[14.5px] px-8 py-3.5 rounded-md transition-colors w-full sm:w-[300px] flex items-center justify-center gap-2 shadow-md disabled:opacity-50">
             {loading ? (
               <svg className="w-5 h-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
               </svg>
             ) : (
               <>
                 Submit Application
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </>
             )}
           </button>
        </div>

      </div>
      </form>
      )}
    </div>
  );
};

export default ApplyForm;
