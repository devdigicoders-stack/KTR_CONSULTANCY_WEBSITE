import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetailCTA = () => {
  return (
    <section className="bg-white pb-16 lg:pb-20 font-sans">
      <div className="max-w-[1140px] mx-auto px-6 md:px-8">
        <div className="bg-[#020d1c] rounded-xl px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          
          {/* Left Content */}
          <div className="flex items-center gap-6 lg:gap-8 w-full md:w-auto">
            {/* Calendar Icon */}
            <div className="flex-shrink-0 text-[#de9e48]">
              <svg className="w-14 h-14 lg:w-16 lg:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="1.2" />
                <line x1="16" y1="2" x2="16" y2="6" strokeWidth="1.2" />
                <line x1="8" y1="2" x2="8" y2="6" strokeWidth="1.2" />
                <line x1="3" y1="10" x2="21" y2="10" strokeWidth="1.2" />
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            
            {/* Text */}
            <div>
              <h3 className="text-white text-[22px] lg:text-[26px] font-bold font-serif mb-2 tracking-tight">
                Let's Build a Winning Strategy Together
              </h3>
              <p className="text-gray-300 text-[14.5px] lg:text-[15px] font-light">
                Schedule a consultation with our experts today.
              </p>
            </div>
          </div>
          
          {/* Right Content - Button */}
          <div className="w-full md:w-auto flex-shrink-0">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center w-full md:w-auto bg-[#de9e48] hover:bg-[#c88d3e] text-[#020d1c] font-semibold text-[14.5px] px-8 py-3.5 rounded-md transition-colors duration-300"
            >
              Schedule a Meeting
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceDetailCTA;
