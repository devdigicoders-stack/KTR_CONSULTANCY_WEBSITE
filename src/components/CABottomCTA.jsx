import React from 'react';

const CABottomCTA = () => {
  return (
    <section className="bg-white py-12 md:py-16 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 flex flex-col gap-6">
        
        {/* Important Note Box */}
        <div className="bg-[#fdfaf6] border border-[#f5e3cd] rounded-xl p-5 md:p-6 lg:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_2px_10px_rgba(222,158,72,0.03)] relative overflow-hidden">
          
          <div className="flex items-start gap-4 xl:gap-5 z-10 w-full md:w-auto flex-1">
            <div className="flex-shrink-0 mt-0.5">
              <svg className="w-9 h-9 xl:w-10 xl:h-10 text-[#d68529]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9.5" strokeWidth={1.8} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 16v-4m0-4h.01" />
              </svg>
            </div>
            <div>
              <h4 className="text-[#a15f12] font-bold text-[16.5px] md:text-[17.5px] mb-1.5">
                Important Note
              </h4>
              <p className="text-[#4b5668] font-medium text-[13.5px] md:text-[14px] leading-[1.6]">
                All CA services are subject to document verification, professional assessment and applicability of the relevant laws/regulations. <br className="hidden lg:block" />
                Final requirements, scope, timeline and charges will be confirmed after reviewing the customer's case and documents.
              </p>
            </div>
          </div>

          {/* Right SVG Illustration */}
          <div className="hidden md:flex flex-shrink-0 justify-center items-center z-10 opacity-95 pr-2 xl:pr-6">
            <svg className="w-[85px] h-[85px] xl:w-[95px] xl:h-[95px]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Clipboard Base */}
              <rect x="25" y="15" width="45" height="70" rx="3" fill="#fffdf8" stroke="#374151" strokeWidth="2.5" />
              {/* Clip Base */}
              <path d="M40 10h15v8H40z" fill="#f3f4f6" stroke="#374151" strokeWidth="2.5" strokeLinejoin="round" />
              {/* Clip Top */}
              <path d="M43 6h9a2 2 0 012 2v2H41V8a2 2 0 012-2z" fill="#e5e7eb" stroke="#374151" strokeWidth="2.5" />
              
              {/* Check 1 */}
              <path d="M32 30l4 4 8-8" stroke="#de9e48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M50 30h12" stroke="#d1d5db" strokeWidth="2.5" strokeLinecap="round" />
              
              {/* Check 2 */}
              <path d="M32 45l4 4 8-8" stroke="#de9e48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M50 45h12" stroke="#d1d5db" strokeWidth="2.5" strokeLinecap="round" />
              
              {/* Check 3 */}
              <path d="M32 60l4 4 8-8" stroke="#de9e48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M50 60h12" stroke="#d1d5db" strokeWidth="2.5" strokeLinecap="round" />
              
              {/* Lines below check 3 */}
              <path d="M32 75h30" stroke="#d1d5db" strokeWidth="2.5" strokeLinecap="round" />
              
              {/* Rubber Stamp (angled) */}
              <g transform="translate(58, 62) rotate(-20)">
                 {/* Handle Top */}
                 <path d="M12 -5C12 -10 18 -10 18 -5V10C18 14 12 14 12 10V-5Z" fill="#de9e48" stroke="#374151" strokeWidth="2.5" />
                 {/* Handle Base Curve */}
                 <path d="M10 10h10" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
                 {/* Wooden block */}
                 <rect x="4" y="14" width="22" height="7" rx="1.5" fill="#fcd34d" stroke="#374151" strokeWidth="2.5" />
                 {/* Stamp Pad Ink */}
                 <rect x="1.5" y="22" width="27" height="4" rx="1" fill="#374151" />
              </g>
            </svg>
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-6 md:p-8 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center md:text-left">
            <h3 className="text-[#020d1c] font-bold text-[19px] md:text-[21px] mb-2">
              Need help choosing the right service?
            </h3>
            <p className="text-[#4b5668] text-[14.5px] font-medium">
              Our experts are ready to understand your <span className="text-[#a15f12]">requirement</span> and guide you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 w-full md:w-auto">
            {/* Call Button */}
            <a 
              href="tel:+919918699696" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-[#de9e48] text-[#020d1c] font-bold text-[14px] px-6 py-3.5 rounded-md hover:bg-orange-50 transition-colors shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <svg className="w-[18px] h-[18px] text-[#de9e48]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              Call Now: +91 99186 99696
            </a>
            
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/919918699696" 
              target="_blank" 
              rel="noreferrer" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-[14px] px-6 py-3.5 rounded-md transition-colors shadow-[0_2px_8px_rgba(37,211,102,0.3)]"
            >
              <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CABottomCTA;
