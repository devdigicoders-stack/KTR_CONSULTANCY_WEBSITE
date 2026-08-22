import React from 'react';

const ApplySidebar = () => {
  const progressSteps = [
    { num: 1, label: "Select Service", active: true },
    { num: 2, label: "Your Details", active: false },
    { num: 3, label: "Upload Documents", active: false },
    { num: 4, label: "Review & Submit", active: false },
    { num: 5, label: "Application Submitted", active: false },
  ];

  return (
    <>
      {/* 1. Your Application Progress */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)]">
        <h4 className="text-[#020d1c] font-bold text-[15px] mb-6">Your Application Progress</h4>
        
        <div className="flex flex-col gap-6 relative">
          {/* Vertical Connecting Line */}
          <div className="absolute top-4 bottom-4 left-3.5 w-px bg-gray-200 z-0"></div>

          {progressSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-4 relative z-10">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0 ${
                step.active ? 'bg-[#de9e48] text-white shadow-md' : 'bg-gray-100 text-gray-500'
              }`}>
                {step.num}
              </div>
              <span className={`text-[13px] font-bold ${step.active ? 'text-[#020d1c]' : 'text-gray-500'}`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Why Choose Us? */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)]">
        <h4 className="text-[#020d1c] font-bold text-[15px] mb-5">Why Choose KTR Consultants?</h4>
        
        <ul className="space-y-3.5 mb-6">
          {['100% Transparent Process', 'Expert Guidance', 'Quick & Easy Application', 'Secure & Confidential'].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#de9e48]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-2.5 h-2.5 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[13px] text-[#020d1c] font-medium">{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex justify-center mt-2">
           {/* Mock Shield SVG */}
           <svg className="w-16 h-16 text-[#020d1c]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
              <path fill="#de9e48" d="M12 11.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
           </svg>
        </div>
      </div>

      {/* 3. Need Help? */}
      <div className="bg-[#fdfaf5] border border-[#de9e48]/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <svg className="w-6 h-6 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <h4 className="text-[#020d1c] font-bold text-[16px]">Need Help?</h4>
        </div>
        
        <p className="text-[12px] text-gray-600 mb-4 leading-relaxed">
          Our experts are ready to assist you with your application.
        </p>
        
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-4 h-4 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          <span className="text-[14px] font-bold text-[#020d1c]">+91 12345 67890</span>
        </div>
        
        <p className="text-[11.5px] font-bold text-[#020d1c] mb-5">Mon - Sat: 10:00 AM - 7:00 PM</p>
        
        <button className="w-full bg-transparent hover:bg-white border border-[#de9e48] text-[#de9e48] hover:text-[#c98e41] font-bold text-[13px] py-2.5 rounded transition-colors flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          Chat on WhatsApp
        </button>
      </div>

    </>
  );
};

export default ApplySidebar;
