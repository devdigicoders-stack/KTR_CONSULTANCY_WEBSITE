import React from 'react';
import { Link } from 'react-router-dom';

const ServicesHero = () => {
  return (
    <section className="relative w-full bg-[#020d1c] min-h-[400px] lg:min-h-[450px] flex items-center py-12 md:py-16 font-sans overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-[center_15%] md:bg-[right_10%] bg-no-repeat"
        style={{ 
          backgroundImage: `url('/images/aboutushero.png')` 
        }}
      >
        {/* Dark overlay to make text pop and match the dark navy theme */}
        <div className="absolute inset-0 bg-[#020d1c]/80 lg:bg-gradient-to-r lg:from-[#020d1c] lg:via-[#020d1c]/95 lg:to-[#020d1c]/40"></div>
        
        {/* Subtle Dotted Map Pattern Overlay (Optional effect) */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="max-w-2xl">
          {/* Subtitle */}
          <h3 className="text-[#de9e48] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
            OUR SERVICES
          </h3>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold font-serif text-white leading-[1.2] mb-4 tracking-tight">
            Comprehensive Solutions <br />
            to <span className="text-[#de9e48]">Accelerate Your Growth</span>
          </h1>
          
          {/* Paragraph */}
          <p className="text-gray-200 text-[14.5px] leading-relaxed mb-8 max-w-[500px]">
            We offer a wide range of consulting services tailored to help businesses overcome challenges, seize opportunities and achieve sustainable success.
          </p>
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2.5 text-sm font-medium">
            <Link to="/" className="text-white hover:text-[#de9e48] transition-colors flex items-center gap-1.5 text-[13px]">
              <svg className="w-[15px] h-[15px] mb-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <span className="text-[#de9e48] text-[13px] font-bold">›</span>
            <span className="text-white text-[13px]">Services</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
