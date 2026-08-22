import React from 'react';

const CibilBenefits = () => {
  const benefits = [
    {
      title: "Know Your Score",
      desc: "Stay updated with your credit score and credit health.",
      icon: (
        <svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          <circle cx="12" cy="11" r="3" strokeWidth="1.2" />
        </svg>
      )
    },
    {
      title: "Better Loan Approval",
      desc: "Higher chances of loan approval with good credit score.",
      icon: (
        <svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Lower Interest Rates",
      desc: "Good score helps you get loans at lower interest rates.",
      icon: (
        <svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Financial Planning",
      desc: "Helps in better financial planning and goal achievement.",
      icon: (
        <svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Detect Errors",
      desc: "Identify and dispute errors in your credit report.",
      icon: (
        <svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4-4m-4 4l-4-4m13-4a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gray-50/50 pb-12 lg:pb-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Dark Banner Container */}
        <div className="bg-[#020d1c] rounded-xl p-6 lg:px-8 lg:py-8 xl:px-10 xl:py-7 shadow-2xl relative overflow-hidden border border-gray-800/50">
          
          {/* Decorative background glow */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-full bg-gradient-to-b from-[#de9e48]/5 to-transparent pointer-events-none rounded-full blur-3xl opacity-50"></div>

          <h3 className="text-[#de9e48] text-center font-bold text-[12px] md:text-[13px] tracking-wide uppercase mb-6 relative z-10">
            BENEFITS OF CHECKING CIBIL REGULARLY
          </h3>
          
          <div className="flex flex-col lg:flex-row justify-between items-stretch divide-y lg:divide-y-0 lg:divide-x divide-gray-700/60 relative z-10">
            
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`flex gap-3 items-start py-4 lg:py-0 ${
                  index === 0 ? 'lg:pr-4 xl:pr-6' : 
                  index === benefits.length - 1 ? 'lg:pl-4 xl:pl-6' : 
                  'lg:px-4 xl:px-6'
                } flex-1`}
              >
                {/* Icon */}
                <div className="text-[#de9e48] flex-shrink-0 mt-0.5 opacity-90 group-hover:opacity-100 transition-opacity">
                  {benefit.icon}
                </div>
                
                {/* Content */}
                <div>
                  <h4 className="text-white font-bold text-[13px] xl:text-[13.5px] mb-1.5 leading-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-400 text-[11px] xl:text-[11.5px] leading-snug">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
            
          </div>

        </div>

      </div>
    </section>
  );
};

export default CibilBenefits;
