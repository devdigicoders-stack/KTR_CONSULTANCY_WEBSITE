
const ServiceHowItWorks = () => {
  const steps = [
    {
      num: 1,
      title: 'Submit Application',
      desc: 'Fill the form and upload required document.',
      icon: (
        <svg className="w-8 h-8 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5l13.732-13.732z" />
        </svg>
      )
    },
    {
      num: 2,
      title: 'Verification',
      desc: 'Our team verifies the details and document.',
      icon: (
        <svg className="w-9 h-9 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M19 11a8 8 0 11-16 0 8 8 0 0116 0z" />
        </svg>
      )
    },
    {
      num: 3,
      title: 'Deed Retrieval',
      desc: 'We apply and retrieve the required deed.',
      icon: (
        <svg className="w-9 h-9 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6" />
          <circle cx="16" cy="16" r="5" fill="white" stroke="currentColor" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 14v4m-2-2h4" />
        </svg>
      )
    },
    {
      num: 4,
      title: 'Quality Check',
      desc: 'Document is cross-checked for accuracy.',
      icon: (
        <svg className="w-9 h-9 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <circle cx="16" cy="16" r="6" fill="white" stroke="currentColor" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 16l1 1 3-3" />
        </svg>
      )
    },
    {
      num: 5,
      title: 'Delivery',
      desc: 'Deed is delivered to you via WhatsApp / Email.',
      icon: (
        <svg className="w-9 h-9 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          <circle cx="16" cy="14" r="6" fill="white" stroke="currentColor" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 14l1 1 3-3" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 mb-4">
        
        {/* Title */}
        <div className="flex items-center justify-center gap-4 mb-12 lg:mb-16">
          <div className="h-px bg-[#de9e48] w-12 md:w-20"></div>
          <h2 className="text-[#020d1c] text-lg md:text-xl font-bold tracking-wide">HOW THIS SERVICE WORKS</h2>
          <div className="h-px bg-[#de9e48] w-12 md:w-20"></div>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-4">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center">
              
              {/* Dotted Line Arrow (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] border-t border-dashed border-gray-300 z-0">
                  <div className="absolute -right-1 -top-[4px] w-2 h-2 border-t-2 border-r-2 border-gray-300 rotate-45"></div>
                </div>
              )}

              {/* Circle Icon */}
              <div className="w-24 h-24 rounded-full border border-gray-200 bg-white flex items-center justify-center relative z-10 shadow-sm transition-transform hover:scale-105 duration-300">
                {step.icon}
                
                {/* Step Number Badge */}
                <div className="absolute -bottom-3 w-[26px] h-[26px] bg-[#d69f4c] rounded-full flex items-center justify-center text-white text-[13px] font-bold border-2 border-white shadow-sm">
                  {step.num}
                </div>
              </div>
              
              {/* Text */}
              <h3 className="mt-8 text-[#020d1c] font-bold text-[15px]">{step.title}</h3>
              <p className="text-gray-500 text-[12px] text-center mt-2 px-2 leading-relaxed max-w-[220px]">
                {step.desc}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceHowItWorks;
