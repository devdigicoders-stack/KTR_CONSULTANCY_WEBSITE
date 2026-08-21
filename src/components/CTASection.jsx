import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="bg-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div 
          className="bg-[#030e21] rounded-2xl px-8 py-10 lg:px-12 lg:py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(3, 14, 33, 0.95), rgba(3, 14, 33, 0.85)), url('/images/aboutus.png')` 
          }}
        >
          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 lg:gap-8 w-full md:w-auto text-center md:text-left">
            
            {/* Icon */}
            <div className="w-20 h-20 rounded-full border border-[#de9e48] flex items-center justify-center flex-shrink-0 text-[#de9e48] bg-[#de9e48]/5">
              <svg className="w-9 h-9 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10a9 9 0 0118 0v5a3 3 0 01-3 3h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2V10a7 7 0 00-14 0v4h2a1 1 0 011 1v4a1 1 0 01-1 1H6a3 3 0 01-3-3v-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 18h1.5a2.5 2.5 0 012.5 2.5v1.5" />
              </svg>
            </div>
            
            {/* Text */}
            <div className="flex flex-col">
              <h2 className="text-white font-serif font-bold text-2xl md:text-3xl lg:text-[2.2rem] mb-2 lg:mb-3 leading-tight tracking-tight">
                Let's Build Something Great Together
              </h2>
              <p className="text-gray-300 text-[13.5px] md:text-[15px] font-light tracking-wide">
                Have a project in mind or need expert advice? We're here to help you.
              </p>
            </div>
          </div>
          
          {/* Button */}
          <div className="relative z-10 flex-shrink-0 mt-2 md:mt-0">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-bold text-[14px] py-3.5 px-8 rounded transition-all duration-300 shadow-[0_4px_14px_0_rgba(222,158,72,0.39)] hover:shadow-[0_6px_20px_rgba(222,158,72,0.23)] hover:-translate-y-0.5"
            >
              Get In Touch
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

export default CTASection;
