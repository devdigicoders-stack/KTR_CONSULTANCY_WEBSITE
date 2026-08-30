import React from 'react';
import { Link } from 'react-router-dom';

const PropertyBottomCTA = () => {
  return (
    <section className="bg-white pb-16 lg:pb-20">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Contact CTA Banner */}
        <div className="bg-[#020d1c] rounded-xl lg:rounded-2xl p-6 md:p-8 lg:p-10 xl:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 shadow-xl border border-gray-800/60 relative overflow-hidden">
          
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#de9e48]/5 to-transparent pointer-events-none rounded-r-2xl blur-3xl"></div>

          {/* Left Content */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 lg:gap-8 relative z-10 w-full lg:w-auto">
            {/* House Icon */}
            <div className="text-[#de9e48] flex-shrink-0 mt-1">
              <svg className="w-14 h-14 xl:w-16 xl:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 12h.01" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M8 7l4-4 4 4" />
              </svg>
            </div>
            
            {/* Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-[#de9e48] font-bold font-serif text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] mb-2 leading-tight">
                Looking for the Right Property?
              </h3>
              <p className="text-gray-300 text-[13px] md:text-[14px] lg:text-[15px] leading-relaxed max-w-[500px]">
                Get expert assistance and discover the best properties that suit your needs.
              </p>
            </div>
          </div>

          {/* Right Content - Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto relative z-10 flex-shrink-0 mt-4 lg:mt-0">
            {/* Consultation Button */}
            <Link 
              to="/contact"
              className="w-full sm:w-auto bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-bold text-[14px] md:text-[14.5px] px-6 md:px-8 py-3.5 rounded-md transition-colors flex items-center justify-center shadow-md whitespace-nowrap"
            >
              Get Free Consultation
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/919918699696"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-gray-600 text-white font-medium text-[14px] md:text-[14.5px] px-6 md:px-8 py-3.5 rounded-md transition-colors flex items-center justify-center whitespace-nowrap"
            >
              <svg className="w-5 h-5 mr-2 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default PropertyBottomCTA;
