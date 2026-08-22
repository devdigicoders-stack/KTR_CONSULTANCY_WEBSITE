import React from 'react';
import { Link } from 'react-router-dom';

const CibilBottomCTA = () => {
  return (
    <section className="bg-white pb-16 lg:pb-20">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Important Note Banner */}
        <div className="bg-[#fffdf8] border border-[#f7e8ce] rounded-xl p-5 mb-6 flex items-start sm:items-center gap-4 shadow-sm">
          <div className="text-[#de9e48] flex-shrink-0 mt-0.5 sm:mt-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <p className="text-gray-700 text-[14px] leading-relaxed">
            <span className="font-bold text-[#020d1c]">Important Note:</span> Checking your CIBIL report will not affect your credit score. It is a soft check and completely safe.
          </p>
        </div>

        {/* Contact CTA Banner */}
        <div className="bg-[#020d1c] rounded-2xl p-8 lg:p-10 xl:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl border border-gray-800/60">
          
          {/* Left Content */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 lg:gap-8">
            {/* Headset Icon */}
            <div className="text-[#de9e48] flex-shrink-0">
              <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" className="hidden" />
                {/* Adding headphone band */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 00-18 0v4a2 2 0 002 2h1a2 2 0 002-2v-4a2 2 0 00-2-2H4a2 2 0 002-2 7 7 0 1114 0 2 2 0 002 2h-2a2 2 0 00-2 2v4a2 2 0 002 2h1a2 2 0 002-2v-4z" />
              </svg>
            </div>
            
            {/* Text */}
            <div>
              <h3 className="text-[#de9e48] font-bold text-[20px] lg:text-[22px] xl:text-[24px] mb-2">
                Have Questions About CIBIL?
              </h3>
              <p className="text-gray-300 text-[14px] lg:text-[15px]">
                Our experts are ready to help you understand your credit health.
              </p>
            </div>
          </div>

          {/* Right Content - Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            {/* Consultation Button */}
            <Link 
              to="/contact"
              className="w-full sm:w-auto bg-[#de9e48] hover:bg-[#c98e41] text-white font-semibold text-[14.5px] px-8 py-3.5 rounded-md transition-colors flex items-center justify-center shadow-md whitespace-nowrap"
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
              className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-gray-600 text-white font-medium text-[14.5px] px-8 py-3.5 rounded-md transition-colors flex items-center justify-center whitespace-nowrap"
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

export default CibilBottomCTA;
