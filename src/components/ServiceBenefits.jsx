import React from 'react';

const ServiceBenefits = () => {
  return (
    <section className="bg-white py-10 lg:py-16 font-sans">
      <div className="max-w-[1140px] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column (Benefits + Image) */}
          <div className="lg:w-[62%] bg-[#fffdf5] rounded-xl border border-[#f5e8d3] flex flex-col md:flex-row shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
            
            {/* Text Content */}
            <div className="w-full md:w-[50%] lg:w-[52%] p-8 lg:p-10 pr-4">
              <h3 className="text-[#020d1c] text-[22px] lg:text-[24px] font-bold font-serif mb-2 tracking-tight">
                Benefits
              </h3>
              <div className="w-10 h-[2.5px] bg-[#de9e48] mb-8"></div>
              
              <ul className="space-y-4 lg:space-y-4.5">
                {[
                  "Clear strategic direction",
                  "Better decision making",
                  "Competitive advantage",
                  "Improved efficiency & profitability",
                  "Sustainable long-term growth"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3.5 text-[14.5px] text-[#4b5563] font-normal">
                    <div className="flex-shrink-0 w-[18px] h-[18px] rounded-full bg-[#de9e48] flex items-center justify-center text-white shadow-sm">
                      <svg className="w-[10px] h-[10px]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Image */}
            <div className="w-full md:w-[50%] lg:w-[48%] p-3.5 md:pl-0 md:py-3.5 md:pr-3.5">
              <div className="w-full h-full min-h-[280px] rounded-lg overflow-hidden shadow-sm">
                <img 
                  src="/images/aboutus.png" 
                  alt="Business Meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column (Why Choose Us) */}
          <div className="lg:w-[38%] border border-[#f5e8d3] rounded-xl p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.015)] flex flex-col justify-center">
            <h3 className="text-[#020d1c] text-[22px] lg:text-[24px] font-bold font-serif mb-5 tracking-tight">
              Why Choose KTR Consultants?
            </h3>
            <p className="text-[#4b5563] text-[14.5px] leading-[1.75] mb-8 pr-2 font-normal">
              We combine deep industry expertise with innovative thinking 
              and a client-centric approach to deliver strategies that 
              create real impact.
            </p>
            
            <ul className="space-y-4">
                {[
                  "Experienced strategy consultants",
                  "Proven methodologies",
                  "Tailored solutions for your business",
                  "Commitment to your success"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3.5 text-[14.5px] text-[#4b5563] font-normal">
                    <div className="flex-shrink-0 w-[18px] h-[18px] rounded-full bg-[#de9e48] flex items-center justify-center text-white shadow-sm">
                      <svg className="w-[10px] h-[10px]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
