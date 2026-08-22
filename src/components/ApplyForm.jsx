import React, { useState } from 'react';

const ApplyForm = () => {
  const [selectedService, setSelectedService] = useState('Home Loan');

  const services = [
    { id: 'Home Loan', label: 'Home Loan', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'Plot + Construction Loan', label: 'Plot + Construction Loan', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { id: 'Business Loan / MSME', label: 'Business Loan / MSME', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { id: 'Mudra Loan', label: 'Mudra Loan', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'Project Finance', label: 'Project Finance', icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z' },
    { id: 'Equipment / Machinery Loan', label: 'Equipment / Machinery Loan', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
    { id: 'CIBIL Report', label: 'CIBIL Report', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }, // using lightning for speed/report indicator
    { id: 'Property Services', label: 'Property Services', icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z' },
    { id: 'Legal / Documentation', label: 'Legal / Documentation', icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' },
    { id: 'Valuation / Technical', label: 'Valuation / Technical', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
    { id: 'Nagar Nigam Services', label: 'Nagar Nigam Services', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { id: 'Other Services', label: 'Other Services', icon: 'M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z' },
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
    <div className="space-y-12">
      
      {/* 1. Select the Service You Need */}
      <div>
        <SectionTitle num="1" title="Select the Service You Need" />
        
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
              </svg>
              <span className={`text-[13px] font-bold ${selectedService === service.id ? 'text-[#020d1c]' : 'text-gray-600'}`}>
                {service.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* 2. Your Basic Details */}
      <div>
        <SectionTitle num="2" title="Your Basic Details" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Full Name <span className="text-red-500">*</span></label>
            <input type="text" placeholder="Enter your full name" className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Mobile Number <span className="text-red-500">*</span></label>
            <div className="flex h-11 border border-gray-200 rounded-lg focus-within:border-[#de9e48] overflow-hidden">
               <select className="bg-gray-50 border-r border-gray-200 px-3 text-[14px] text-gray-700 outline-none h-full font-medium">
                  <option>+91</option>
               </select>
               <input type="tel" placeholder="Enter mobile number" className="flex-1 px-4 outline-none text-[14px] text-gray-700 placeholder-gray-400" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Email Address</label>
            <input type="email" placeholder="Enter email address" className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Date of Birth</label>
            <div className="relative">
              <input type="text" placeholder="DD/MM/YYYY" className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400" />
              <svg className="w-5 h-5 text-gray-400 absolute right-3 top-3 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Gender <span className="text-red-500">*</span></label>
            <select className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 bg-white">
               <option value="" disabled selected>Select Gender</option>
               <option>Male</option>
               <option>Female</option>
               <option>Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Marital Status</label>
            <select className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 bg-white">
               <option value="" disabled selected>Select Status</option>
               <option>Single</option>
               <option>Married</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Residential City <span className="text-red-500">*</span></label>
            <select className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 bg-white">
               <option value="" disabled selected>Select City</option>
               <option>Lucknow</option>
               <option>Kanpur</option>
               <option>Noida</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Preferred Branch</label>
            <select className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 bg-white">
               <option value="" disabled selected>Select Branch (Optional)</option>
               <option>Head Office: Lucknow</option>
               <option>Branch Office: Kanpur</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">How did you hear about us?</label>
            <select className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 bg-white">
               <option value="" disabled selected>Select Option</option>
               <option>Social Media</option>
               <option>Friend / Family</option>
               <option>Google Search</option>
               <option>Advertisement</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. Service Requirement Details */}
      <div>
        <SectionTitle num="3" title="Service Requirement Details" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Loan / Service Amount (₹)</label>
            <input type="text" placeholder="Enter amount (Optional)" className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Purpose of Requirement <span className="text-red-500">*</span></label>
            <select className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 bg-white">
               <option value="" disabled selected>Select Purpose</option>
               <option>New Home</option>
               <option>Business Expansion</option>
               <option>Personal Reason</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Employment Type / Business Type <span className="text-red-500">*</span></label>
            <select className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 bg-white">
               <option value="" disabled selected>Select Type</option>
               <option>Salaried</option>
               <option>Self-Employed (Business)</option>
               <option>Self-Employed (Professional)</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 mb-8">
          <label className="text-[13px] font-bold text-[#020d1c]">Additional Requirements / Message (Optional)</label>
          <textarea 
            placeholder="Enter your message or additional requirements..." 
            className="w-full p-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400 resize-none min-h-[120px]"
          ></textarea>
          <p className="text-[11px] text-gray-500 mt-1">Please provide accurate information to help us serve you better.</p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center xl:justify-start">
           <button className="bg-[#de9e48] hover:bg-[#c98e41] text-white font-bold text-[14.5px] px-8 py-3.5 rounded-md transition-colors w-full sm:w-[300px] flex items-center justify-center gap-2 shadow-md">
             Save & Continue
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
           </button>
        </div>

      </div>

    </div>
  );
};

export default ApplyForm;
