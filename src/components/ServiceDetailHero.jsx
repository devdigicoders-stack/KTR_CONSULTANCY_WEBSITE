import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetailHero = () => {
  return (
    <section className="relative w-full bg-[#020d1c] min-h-[450px] lg:min-h-[500px] flex items-center py-12 md:py-16 font-sans overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-[center_right] bg-no-repeat"
        style={{ 
          backgroundImage: `url('/images/servicedetail.png')` 
        }}
      >
        {/* Dark overlay to fade image into navy background - strictly matching the screenshot gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020d1c] via-[#020d1c]/95 to-transparent"></div>
        <div className="absolute inset-0 bg-[#020d1c]/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="max-w-2xl">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2.5 text-sm font-medium mb-8">
            <Link to="/" className="text-white hover:text-[#de9e48] transition-colors flex items-center gap-1.5 text-[13px]">
              <svg className="w-[15px] h-[15px] mb-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <span className="text-[#de9e48] text-[13px] font-bold">›</span>
            <Link to="/services" className="text-white hover:text-[#de9e48] transition-colors text-[13px]">
              Services
            </Link>
            <span className="text-[#de9e48] text-[13px] font-bold">›</span>
            <span className="text-gray-300 text-[13px]">Business Strategy</span>
          </div>

          {/* Subtitle */}
          <h3 className="text-[#de9e48] text-[11px] font-bold tracking-[0.15em] uppercase mb-3">
            OUR SERVICE
          </h3>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-[3rem] font-bold font-serif text-white leading-[1.1] mb-4 tracking-tight">
            Business Strategy
          </h1>
          
          {/* Tagline */}
          <h4 className="text-white text-[17px] md:text-xl font-medium mb-5 tracking-wide">
            Build Strong Strategies. Drive Sustainable Growth.
          </h4>
          
          {/* Paragraph */}
          <p className="text-gray-300 text-[14.5px] leading-relaxed mb-8 max-w-[500px]">
            We help organizations define a clear direction and build winning strategies that create value, drive growth and ensure long-term success.
          </p>
          
          {/* Button */}
          <div>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-bold text-[14px] py-3 px-7 rounded transition-colors duration-200"
            >
              Request Consultation
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

export default ServiceDetailHero;
