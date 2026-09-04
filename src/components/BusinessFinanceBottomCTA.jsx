import React from 'react';
import { Link } from 'react-router-dom';

const BusinessFinanceBottomCTA = () => {
  return (
    <section className="bg-white pb-16 lg:pb-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        <div className="bg-[#020d1c] rounded-xl p-8 lg:p-10 flex flex-col xl:flex-row items-center justify-between gap-8 shadow-lg">
          
          {/* Left Content */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start xl:items-center text-center sm:text-left gap-5 xl:gap-8 w-full xl:w-auto">
            {/* Headset Icon */}
            <div className="flex-shrink-0">
              <svg className="w-14 h-14 md:w-16 md:h-16 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 17h1a2 2 0 002-2v-3.5a7.5 7.5 0 10-15 0V15a2 2 0 002 2h1" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.5 10v6a1.5 1.5 0 001.5 1.5h.5V10h-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.5 10v6a1.5 1.5 0 01-1.5 1.5h-.5V10h2z" />
              </svg>
            </div>
            
            <div className="flex flex-col mt-1">
              <h2 className="text-[#de9e48] text-[22px] lg:text-[26px] font-bold mb-1.5 tracking-wide">
                Need Business Finance Solutions?
              </h2>
              <p className="text-gray-300 text-[13px] md:text-[14px]">
                Talk to our experts and get the right solution for your business.
              </p>
            </div>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full sm:w-auto justify-center">
            
            <Link 
              to="/apply-online?category=business" 
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-bold text-[13px] py-3.5 px-8 rounded-md transition-all duration-300 shadow-sm"
            >
              Get Free Consultation
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <a 
              href="https://wa.me/919918699696" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-gray-600 hover:border-[#de9e48] text-white font-bold text-[13px] py-3.5 px-8 rounded-md transition-all duration-300 group"
            >
              <svg className="w-4 h-4 mr-2 text-[#de9e48]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessFinanceBottomCTA;
