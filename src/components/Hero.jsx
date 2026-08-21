import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-[#020d1c] pt-20 pb-36 lg:pt-32 lg:pb-48 font-sans border-b border-gray-800/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start text-left lg:pr-8">
            <h3 className="text-[#de9e48] text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              WELCOME TO KTR CONSULTANTS
            </h3>
            
            <h1 className="text-4xl lg:text-[3.5rem] font-bold text-white leading-tight mb-5 font-serif tracking-tight">
              Your Growth,<br />
              <span className="text-[#fff]"> Our <span className="text-[#de9e48]">Expertise.</span></span>
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base max-w-[420px] mb-8 leading-relaxed font-light">
              Comprehensive solutions to help your business grow with strategy, technology and expert guidance.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/services" className="inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-medium py-2.5 px-6 rounded transition-colors duration-200 text-sm">
                Explore Services
                <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center border border-[#de9e48] text-[#de9e48] hover:bg-[#de9e48]/10 font-medium py-2.5 px-6 rounded transition-colors duration-200 text-sm">
                Contact Us
                <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
             <img 
                src="/images/circle.png" 
                alt="Hero Shield" 
                className="w-full max-w-[260px] md:max-w-xs lg:max-w-sm object-contain relative z-10" 
             />
          </div>
        </div>
      </div>

      {/* Stats Card Overlapping */}
      <div className="absolute bottom-0 left-0 w-full translate-y-1/2 px-6 md:px-12 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#051329] border border-gray-700/60 rounded-xl p-6 lg:p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8 shadow-2xl">
            
            {/* Stat 1 */}
            <div className="flex items-start gap-4 flex-1">
              <div className="text-[#de9e48] flex-shrink-0 mt-1">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold text-base mb-1">Expert Team</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Experienced professionals delivering results.</p>
              </div>
            </div>

            <div className="hidden lg:block w-px h-16 bg-gray-700/60"></div>

            {/* Stat 2 */}
            <div className="flex items-start gap-4 flex-1">
              <div className="text-[#de9e48] flex-shrink-0 mt-1">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold text-base mb-1">Tailored Solutions</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Customized strategies for measurable results.</p>
              </div>
            </div>

            <div className="hidden lg:block w-px h-16 bg-gray-700/60"></div>

            {/* Stat 3 */}
            <div className="flex items-start gap-4 flex-1">
              <div className="text-[#de9e48] flex-shrink-0 mt-1">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold text-base mb-1">Client Success</h4>
                <p className="text-gray-400 text-sm leading-relaxed">We are committed to your long-term growth.</p>
              </div>
            </div>

            <div className="hidden lg:block w-px h-16 bg-gray-700/60"></div>

            {/* Stat 4 */}
            <div className="flex items-start gap-4 flex-1">
              <div className="text-[#de9e48] flex-shrink-0 mt-1">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15a5 5 0 100-10 5 5 0 000 10z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.21 13.89L7 21l5-2 5 2-1.21-7.11" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold text-base mb-1">Proven Track Record</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Delivering excellence with integrity and trust.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
