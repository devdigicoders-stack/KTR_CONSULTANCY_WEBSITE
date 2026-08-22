import { Link } from 'react-router-dom';

const BusinessFinanceHero = () => {
  return (
    <section className="bg-white pt-6 pb-10 md:pt-8 md:pb-12 lg:pt-10 lg:pb-14 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 xl:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-[45%] xl:w-[50%] flex flex-col justify-center relative z-10">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-gray-500 text-[13px] font-medium mb-6">
              <Link to="/" className="hover:text-[#de9e48] transition-colors">Home</Link>
              <span className="text-gray-400">›</span>
              <span className="text-[#020d1c]">Business Finance</span>
            </div>

            {/* Subtitle */}
            <h3 className="text-[#de9e48] text-[13px] font-bold tracking-wide uppercase mb-2">
              BUSINESS FINANCE
            </h3>
            
            
            {/* Title */}
            <h1 className="text-[#020d1c] text-4xl md:text-5xl lg:text-[42px] xl:text-[50px] font-bold font-serif leading-[1.15] mb-4">
              Fuel Your Business Growth <br />
              <span className="text-[#de9e48]">With Smart Financing</span>
            </h1>
            
            {/* Paragraph */}
            <p className="text-gray-600 text-[13.5px] lg:text-[14.5px] leading-relaxed mb-6 max-w-[500px]">
              End-to-end financial solutions for businesses of all sizes. From working capital to project finance, we help you achieve your business goals.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-bold text-[13px] py-3.5 px-8 rounded-md transition-all duration-300 shadow-sm"
              >
                Get Free Consultation
                <svg className="w-3.5 h-3.5 ml-2 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              
              <a 
                href="https://wa.me/911234567890" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white border border-gray-200 hover:border-[#de9e48] text-[#020d1c] font-bold text-[13px] py-3.5 px-8 rounded-md transition-all duration-300 group shadow-sm"
              >
                <svg className="w-4 h-4 mr-2 text-[#020d1c] group-hover:text-[#de9e48] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
          
          {/* Right Image Content */}
          <div className="w-full lg:w-[55%] xl:w-[50%] flex justify-center lg:justify-end relative z-0">
            <img 
              src="/bussiness.png" 
              alt="Business Finance" 
              className="w-full max-w-[500px] xl:max-w-[650px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessFinanceHero;
