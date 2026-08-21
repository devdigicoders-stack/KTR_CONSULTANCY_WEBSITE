import React from 'react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  const features = [
    "Proven Track Record",
    "Client-Centric Approach",
    "Innovative Solutions",
    "Reliable Support"
  ];

  return (
    <section className="bg-white py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start text-left lg:pr-8">
            <h3 className="text-[#de9e48] text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              WHY CHOOSE US
            </h3>
            
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#020d1c] font-serif mb-6 leading-[1.2] tracking-tight">
              Why Businesses Choose <br />
              <span className="text-[#de9e48]">KTR Consultants?</span>
            </h2>
            
            <p className="text-gray-600 text-sm md:text-base max-w-[480px] mb-8 leading-relaxed font-light">
              We combine industry expertise with innovative thinking to deliver measurable results.
            </p>
            
            <ul className="space-y-4 mb-10 w-full">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-[#020d1c] font-medium text-sm md:text-base">
                  <svg className="w-6 h-6 text-[#de9e48] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-medium py-3 px-8 rounded transition-colors duration-200 text-sm shadow-md"
            >
              Learn More About Us
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Right Content - Image */}
          <div className="relative mt-10 lg:mt-0 w-full flex justify-center lg:justify-end">
             {/* Using aboutus.png assuming it's the requested meeting room image from the public folder */}
             <img 
                src="/images/aboutus.png" 
                alt="Why Choose KTR Consultants" 
                className="w-full h-auto max-w-2xl object-cover rounded-2xl shadow-xl border border-gray-100" 
             />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
