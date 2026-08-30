import React from 'react';
import { Link } from 'react-router-dom';

const PropertyHero = () => {
  return (
    <section className="bg-white relative overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-20">
      
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
              <span className="text-[#020d1c]">Property Services</span>
            </div>
            
            {/* Subtitle */}
            <h3 className="text-[#de9e48] text-[13px] font-bold tracking-wide uppercase mb-2">
              PROPERTY SERVICES
            </h3>
            
            {/* Main Title */}
            <h1 className="text-[#020d1c] text-4xl md:text-5xl lg:text-[42px] xl:text-[50px] font-bold font-serif leading-[1.15] mb-4">
              Find, Buy & Secure <br/>
              Your <span className="text-[#de9e48]">Perfect Property</span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-600 text-[13.5px] lg:text-[14.5px] leading-relaxed mb-6 max-w-[500px]">
              End-to-end property solutions to help you find the right property and complete a safe, transparent and hassle-free transaction.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              
              <button className="w-full sm:w-auto bg-[#de9e48] hover:bg-[#c98e41] text-white font-bold text-[14.5px] px-8 py-3.5 rounded-md transition-colors flex items-center justify-center shadow-md whitespace-nowrap">
                Get Free Consultation
                <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <a 
                href="https://wa.me/919918699696"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-gray-50 border border-gray-300 text-[#020d1c] font-bold text-[14.5px] px-7 py-3.5 rounded-md transition-colors flex items-center justify-center shadow-sm whitespace-nowrap"
              >
                <svg className="w-5 h-5 mr-2" fill="#25D366" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
              
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full lg:w-[50%] xl:w-[55%] flex justify-center lg:justify-end mt-8 lg:mt-0 relative">
            <div className="relative w-full max-w-[500px] lg:max-w-[700px]">
              <img 
                src="/property.png" 
                alt="Property Services" 
                className="w-full h-auto object-contain transform hover:scale-[1.02] transition-transform duration-500" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PropertyHero;
