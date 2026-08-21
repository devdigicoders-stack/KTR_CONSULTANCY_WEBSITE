import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCTA = () => {
  return (
    <section className="bg-white py-16 lg:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#020d1c] rounded-2xl p-8 md:p-10 lg:px-12 lg:py-10 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 lg:gap-8 w-full">
            {/* Icon */}
            <div className="flex-shrink-0">
              <svg className="w-[68px] h-[68px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 14a4 4 0 100-8 4 4 0 000 8zm-8 7v-1c0-3.314 3.582-6 8-6s8 2.686 8 6v1M4.5 11.5c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5M19.5 11.5c1.5 0 2.5-1 2.5-2.5s-1-2.5-2.5-2.5M12 12a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
            </div>
            
            {/* Text Content */}
            <div className="pt-2">
              <h2 className="text-white text-2xl lg:text-[1.75rem] font-bold font-serif mb-3 tracking-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 text-[14.5px] font-light leading-relaxed max-w-xl">
                Let's work together to create strategies that drive growth, efficiency and long-term success.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-bold text-[14px] py-3.5 px-8 rounded transition-colors duration-200"
            >
              Consult With Us
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
