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
            <label className="text-[13px] font-bold text-[#020d1c]">City <span className="text-red-500">*</span></label>
            <input type="text" placeholder="Enter your city" className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Company / Business Name (Optional)</label>
            <input type="text" placeholder="Enter business name" className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Business Constitution</label>
            <select className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 bg-white">
               <option value="" disabled selected>Select Option</option>
               <option>Individual / Proprietorship</option>
               <option>Partnership Firm</option>
               <option>Private Limited / LLP</option>
               <option>Not Applicable</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. Message */}
      <div>
        <SectionTitle num="3" title="Additional Requirements" />
        
        <div className="flex flex-col gap-1.5 mb-8">
          <label className="text-[13px] font-bold text-[#020d1c]">Message or Specific Requirement (Optional)</label>
          <textarea 
            placeholder="Briefly describe what you need help with..." 
            className="w-full p-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400 resize-none min-h-[120px]"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center xl:justify-start">
           <button className="bg-[#de9e48] hover:bg-[#c98e41] text-white font-bold text-[14.5px] px-8 py-3.5 rounded-md transition-colors w-full sm:w-[300px] flex items-center justify-center gap-2 shadow-md">
             Request a Quote
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
           </button>
        </div>
      </div>

    </div>
  );
};

export default CAQuoteForm;
