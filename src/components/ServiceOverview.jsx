import React from 'react';

const ServiceOverview = () => {
  return (
    <section className="bg-white py-16 lg:py-20 font-sans">
      <div className="max-w-[1140px] mx-auto px-6 md:px-8">
        
        {/* Top Section: Overview & What You Get */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-20 items-stretch">
          
          {/* Left: Overview */}
          <div className="lg:w-[58%] pt-2">
            <h2 className="text-[#020d1c] text-[26px] lg:text-[28px] font-bold font-serif mb-5">
              Overview
            </h2>
            <p className="text-[#4b5563] text-[15px] leading-[1.8] font-normal pr-4 lg:pr-10">
              Our Business Strategy services help you align your vision with actionable strategies. We work 
              closely with your leadership team to identify opportunities, mitigate risks 
              and build a roadmap for sustainable growth.
            </p>
          </div>
          
          {/* Right: What You Get */}
          <div className="lg:w-[42%]">
            <div className="bg-[#fffcf7] border border-[#f5e8d3] rounded-xl p-8 lg:p-9 h-full">
              <h3 className="text-[#020d1c] text-[16px] font-bold mb-6 font-sans">
                What You Get
              </h3>
              <ul className="space-y-4">
                {[
                  "Data-driven strategic insights",
                  "Market and competitive intelligence",
                  "Actionable growth strategies",
                  "Measurable business impact"
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

        {/* Bottom Section: What We Offer */}
        <div>
          <h2 className="text-[#020d1c] text-[26px] lg:text-[28px] font-bold font-serif mb-4">
            What We Offer
          </h2>
          <div className="w-10 h-[2px] bg-[#de9e48] mb-12"></div>
          
          {/* 5 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 relative">
            
            {/* Offer 1 */}
            <div className="flex flex-col items-center text-center px-4 lg:px-5 relative lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-[15%] lg:after:h-[70%] lg:after:w-[1px] lg:after:bg-gray-200">
              <div className="relative w-14 h-14 rounded-full bg-[#fdf8f0] flex items-center justify-center mb-5">
                <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <div className="absolute top-2 right-1.5 w-1 h-1 bg-[#de9e48] rounded-full"></div>
              </div>
              <h4 className="text-[#020d1c] font-bold text-[14px] mb-2.5">Strategic Planning</h4>
              <p className="text-[#6b7280] text-[13px] leading-[1.6]">
                Crafting clear plans to achieve your business objectives.
              </p>
            </div>

            {/* Offer 2 */}
            <div className="flex flex-col items-center text-center px-4 lg:px-5 mt-10 lg:mt-0 relative lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-[15%] lg:after:h-[70%] lg:after:w-[1px] lg:after:bg-gray-200">
              <div className="relative w-14 h-14 rounded-full bg-[#fdf8f0] flex items-center justify-center mb-5">
                <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="1" strokeWidth="2" />
                </svg>
                <div className="absolute top-2 left-2 w-1 h-1 bg-[#de9e48] rounded-full"></div>
              </div>
              <h4 className="text-[#020d1c] font-bold text-[14px] mb-2.5">Market Analysis</h4>
              <p className="text-[#6b7280] text-[13px] leading-[1.6]">
                In-depth market research to identify opportunities and trends.
              </p>
            </div>

            {/* Offer 3 */}
            <div className="flex flex-col items-center text-center px-4 lg:px-5 mt-10 lg:mt-0 relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-[15%] md:after:h-[70%] md:after:w-[1px] md:after:bg-gray-200 lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-[15%] lg:after:h-[70%] lg:after:w-[1px] lg:after:bg-gray-200">
              <div className="relative w-14 h-14 rounded-full bg-[#fdf8f0] flex items-center justify-center mb-5">
                <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="1.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v8m-4-4h8" />
                </svg>
                <div className="absolute bottom-2 right-2 w-1 h-1 bg-[#de9e48] rounded-full"></div>
              </div>
              <h4 className="text-[#020d1c] font-bold text-[14px] mb-2.5">Competitive Analysis</h4>
              <p className="text-[#6b7280] text-[13px] leading-[1.6]">
                Assessing competitors to build strategies that give you an edge.
              </p>
            </div>

            {/* Offer 4 */}
            <div className="flex flex-col items-center text-center px-4 lg:px-5 mt-10 lg:mt-0 relative lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-[15%] lg:after:h-[70%] lg:after:w-[1px] lg:after:bg-gray-200">
              <div className="relative w-14 h-14 rounded-full bg-[#fdf8f0] flex items-center justify-center mb-5">
                <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
                </svg>
              </div>
              <h4 className="text-[#020d1c] font-bold text-[14px] mb-2.5">Business Model Optimization</h4>
              <p className="text-[#6b7280] text-[13px] leading-[1.6]">
                Optimizing business models for profitability and sustainable growth.
              </p>
            </div>

            {/* Offer 5 */}
            <div className="flex flex-col items-center text-center px-4 lg:px-5 mt-10 lg:mt-0">
              <div className="relative w-14 h-14 rounded-full bg-[#fdf8f0] flex items-center justify-center mb-5">
                <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <div className="absolute top-2 right-1.5 w-1 h-1 bg-[#de9e48] rounded-full"></div>
              </div>
              <h4 className="text-[#020d1c] font-bold text-[14px] mb-2.5">Growth Strategy</h4>
              <p className="text-[#6b7280] text-[13px] leading-[1.6]">
                Developing innovative growth strategies to expand your business.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceOverview;
