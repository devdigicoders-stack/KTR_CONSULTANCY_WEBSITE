import { Link } from 'react-router-dom';

const steps = [
  {
    num: "01",
    title: "Enquiry",
    desc: "Share your requirements",
    icon: (
      <svg className="w-5 h-5 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    num: "02",
    title: "Documents",
    desc: "Submit required documents",
    icon: (
      <svg className="w-5 h-5 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    )
  },
  {
    num: "03",
    title: "Evaluation",
    desc: "We evaluate and choose best bank for you",
    icon: (
      <svg className="w-5 h-5 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l2 2 4-4" />
      </svg>
    )
  },
  {
    num: "04",
    title: "Processing",
    desc: "Case submitted to bank and processed",
    icon: (
      <svg className="w-5 h-5 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    num: "05",
    title: "Approval",
    desc: "Loan approved by bank",
    icon: (
      <svg className="w-5 h-5 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    num: "06",
    title: "Disbursement",
    desc: "Amount disbursed to your account",
    icon: (
      <svg className="w-5 h-5 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-16 lg:py-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12 flex flex-col xl:flex-row gap-6">
        
        {/* Left Box: How It Works */}
        <div className="flex-1 bg-white border border-gray-100 rounded-xl shadow-sm px-4 py-8 xl:px-10 relative overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-[2px] bg-[#de9e48]/40 w-10 md:w-16"></div>
            <h3 className="text-[#020d1c] text-[16px] md:text-[18px] font-bold tracking-[0.1em] uppercase">
              HOW IT WORKS
            </h3>
            <div className="h-[2px] bg-[#de9e48]/40 w-10 md:w-16"></div>
          </div>

          {/* Flow Container */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-6 lg:gap-0">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center relative flex-1">
                  
                  {/* Connecting Arrow for Desktop */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:flex items-center absolute top-[28px] left-[calc(50%+35px)] right-[calc(-50%+35px)] z-0">
                      <div className="w-full border-t-[1.5px] border-dashed border-[#de9e48]/50 h-0 relative">
                        <svg className="w-3.5 h-3.5 text-[#de9e48]/50 absolute -right-1 -top-[7.5px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Vertical Divider for Desktop (Only spans text area) */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-[75px] bottom-2 right-0 border-r border-gray-100"></div>
                  )}
                  
                  {/* Circle Icon */}
                  <div className="w-[56px] h-[56px] rounded-full border-[1.5px] border-[#de9e48]/60 bg-white flex items-center justify-center mb-5 mx-auto relative hover:scale-105 transition-transform duration-300 shadow-sm z-10">
                    {/* Inner faint orange background for icon */}
                    <div className="w-[44px] h-[44px] rounded-full bg-[#fef8f0] flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  {/* Connecting Arrow for mobile */}
                  {index !== steps.length - 1 && (
                    <div className="lg:hidden w-px h-6 border-l-[1.5px] border-dashed border-[#de9e48]/50 my-2 relative">
                       <svg className="w-3 h-3 text-[#de9e48]/50 absolute -bottom-2 -left-[5px] rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                       </svg>
                    </div>
                  )}

                  {/* Content */}
                  <span className="text-[#020d1c] font-bold text-[13px] md:text-[14px] mb-1">
                    {step.num}
                  </span>
                  <h4 className="text-[#020d1c] font-bold text-[13px] md:text-[14px] mb-2 leading-tight px-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-[12px] md:text-[12.5px] leading-relaxed px-3 max-w-[150px] mx-auto font-medium">
                    {step.desc}
                  </p>

                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Box: Need Help? */}
        <div className="w-full xl:w-[280px] 2xl:w-[300px] flex-shrink-0 bg-[#fef8f0] rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-sm">
          
          {/* Headset Icon */}
          <div className="w-16 h-16 mb-5">
            <svg className="w-full h-full text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" className="hidden" />
              {/* Headset Path */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 18.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M13.5 17h1a2 2 0 002-2v-3.5a7.5 7.5 0 10-15 0V15a2 2 0 002 2h1" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5.5 10v6a1.5 1.5 0 001.5 1.5h.5V10h-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M18.5 10v6a1.5 1.5 0 01-1.5 1.5h-.5V10h2z" />
            </svg>
          </div>
          
          <h2 className="text-[#020d1c] text-xl font-bold mb-3">
            Need Help?
          </h2>
          
          <p className="text-gray-600 text-[13px] leading-relaxed mb-8 px-2 font-medium">
            Our experts are here to guide you at every step of your journey.
          </p>

          <Link to="/contact" className="w-full bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-bold text-[13px] py-3.5 px-6 rounded transition-colors duration-200 flex items-center justify-center">
            Talk to Expert
            <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
