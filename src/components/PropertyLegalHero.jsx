import React from 'react';
import { Link } from 'react-router-dom';

const PropertyLegalHero = () => {
  return (
    <section className="bg-white relative overflow-hidden pt-12 pb-12 lg:pt-16 lg:pb-16">
      
      {/* Optional: subtle background pattern/glow */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#020d1c 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50/80 to-transparent pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Side Content */}
          <div className="w-full lg:w-[50%] xl:w-[45%]">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-gray-500 text-[13px] font-medium mb-6">
              <Link to="/" className="hover:text-[#de9e48] transition-colors">Home</Link>
              <span className="text-gray-400">›</span>
              <span className="text-gray-500">Property Legal Services</span>
              <span className="text-gray-400">›</span>
              <span className="text-[#020d1c]">Chain Deeds Application</span>
            </div>
            
            {/* Subtitle */}
            <h3 className="text-[#de9e48] text-[13px] font-bold tracking-wide uppercase mb-2">
              PROPERTY LEGAL SERVICES
            </h3>
            
            {/* Main Title */}
            <h1 className="text-[#020d1c] text-4xl md:text-5xl lg:text-[42px] xl:text-[50px] font-bold font-serif leading-[1.15] mb-4">
              Chain Deeds <br/>
              <span className="text-[#de9e48]">Application</span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-600 text-[13.5px] lg:text-[14.5px] leading-relaxed mb-8 max-w-[500px]">
              Get previous ownership deeds/documents of your property mentioned in the registry to establish a clear chain of ownership.
            </p>
            
            {/* Features Bottom Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              
              {/* Feature 1 */}
              <div className="flex items-center gap-3 bg-gray-50/50 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none border border-gray-100 sm:border-none">
                <div className="w-9 h-9 rounded-full border border-[#de9e48] flex items-center justify-center flex-shrink-0 bg-white">
                  <svg className="w-4 h-4 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-bold leading-tight uppercase tracking-wider">Available Only in</p>
                  <p className="text-[13px] text-[#020d1c] font-bold leading-tight mt-0.5">Lucknow</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex items-center gap-3 bg-gray-50/50 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none border border-gray-100 sm:border-none relative sm:before:content-[''] sm:before:absolute sm:before:-left-3 sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:w-px sm:before:h-8 sm:before:bg-gray-200">
                <div className="w-9 h-9 rounded-full border border-[#de9e48] flex items-center justify-center flex-shrink-0 bg-white">
                  <svg className="w-4 h-4 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-bold leading-tight uppercase tracking-wider">Expected Timeline</p>
                  <p className="text-[13px] text-[#020d1c] font-bold leading-tight mt-0.5">1 Working Day*</p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex items-center gap-3 bg-gray-50/50 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none border border-gray-100 sm:border-none relative sm:before:content-[''] sm:before:absolute sm:before:-left-3 sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:w-px sm:before:h-8 sm:before:bg-gray-200">
                <div className="w-9 h-9 rounded-full border border-[#de9e48] flex items-center justify-center flex-shrink-0 bg-white">
                  <svg className="w-4 h-4 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-bold leading-tight uppercase tracking-wider">Secure &</p>
                  <p className="text-[13px] text-[#020d1c] font-bold leading-tight mt-0.5">Reliable Service</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full lg:w-[50%] xl:w-[55%] flex justify-center lg:justify-end mt-8 lg:mt-0 relative">
            <div className="relative w-full max-w-[500px] lg:max-w-[700px]">
              <img 
                src="/legal.png" 
                alt="Property Legal Services" 
                className="w-full h-auto object-contain transform hover:scale-[1.02] transition-transform duration-500" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PropertyLegalHero;
