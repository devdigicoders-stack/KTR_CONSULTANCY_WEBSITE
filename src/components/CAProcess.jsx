import React from 'react';

const CAProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Select Service",
      desc: "Choose the CA service you need.",
      icon: (
        <svg className="w-8 h-8 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Fill Application",
      desc: "Provide basic details and requirements.",
      icon: (
        <svg className="w-8 h-8 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Upload Documents",
      desc: "Upload the required documents securely.",
      icon: (
        <svg className="w-8 h-8 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Case Review",
      desc: "Our CA team reviews your case and documents.",
      icon: (
        <svg className="w-8 h-8 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m11 4.5L21 21m-2-5a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Charges Confirmed",
      desc: "We confirm the scope and professional fees.",
      icon: (
        <svg className="w-8 h-8 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Service Initiated",
      desc: "Work begins after your confirmation.",
      icon: (
        <svg className="w-8 h-8 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#fafafa] py-16 font-sans border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-[#020d1c] text-2xl md:text-[28px] lg:text-[32px] font-bold mb-3">
            How Our CA Service Process Works
          </h2>
          <div className="w-16 h-1 bg-[#de9e48] rounded-full mx-auto relative mt-4">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full border border-[#de9e48]"></div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-y-12 gap-x-4 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
               
               {/* Dotted Line (desktop only, not after last item) */}
               {index < steps.length - 1 && (
                 <div className="hidden xl:flex absolute top-10 left-[65%] w-[70%] items-center z-0">
                   <div className="flex-1 border-t-[1.5px] border-dashed border-gray-300"></div>
                   <svg className="w-4 h-4 text-gray-300 -ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                   </svg>
                 </div>
               )}
               
               {/* Circle with Icon */}
               <div className="w-[84px] h-[84px] rounded-full border border-gray-200 bg-white flex items-center justify-center relative z-10 mb-5 shadow-sm group-hover:border-[#de9e48] transition-colors duration-300">
                 {step.icon}
                 
                 {/* Number Badge */}
                 <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[26px] h-[26px] bg-[#de9e48] text-white rounded-full flex items-center justify-center text-[13px] font-bold border-[2.5px] border-white shadow-sm">
                   {step.id}
                 </div>
               </div>
               
               {/* Text */}
               <h4 className="text-[#020d1c] font-bold text-[14.5px] mb-1.5">{step.title}</h4>
               <p className="text-gray-500 text-[12.5px] leading-relaxed max-w-[160px] mx-auto">
                 {step.desc.split('\n').map((line, i) => (
                   <React.Fragment key={i}>
                     {line}
                     {i !== step.desc.split('\n').length - 1 && <br />}
                   </React.Fragment>
                 ))}
               </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CAProcess;
