import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-[#fcfcfd] pt-12 pb-16 lg:pt-16 lg:pb-20 font-sans overflow-hidden min-h-[600px] flex items-center">
      {/* Background - Clean light gray */}
      <div className="absolute inset-0 pointer-events-none"></div>
      
      <div className="max-w-[1400px] w-full mx-auto px-4 lg:px-6 xl:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="w-full lg:w-[55%] xl:w-[60%] pt-4 lg:pt-0 z-20 lg:pr-8">
          <h3 className="text-[#de9e48] text-xs md:text-sm font-bold tracking-[0.15em] uppercase mb-4">
            WELCOME TO KTR CONSULTANTS
          </h3>
          
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#020d1c] leading-[1.15] mb-5 font-serif whitespace-nowrap lg:whitespace-normal">
            All Your Financial & <br className="hidden md:block" />
            Property Solutions <br />
            <span className="text-[#de9e48]">Under One Roof</span>
          </h1>
          
          <p className="text-gray-600 text-sm md:text-base max-w-[550px] mb-8 leading-[1.6] font-medium">
            From documentation to funding, CIBIL to property services —<br className="hidden md:block" /> we handle it all for you with speed, transparency and trust.
          </p>
          
          {/* Buttons Row */}
          <div className="flex flex-wrap items-center gap-3 lg:gap-4 mb-12">
            <Link to="/apply-online" className="inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-bold py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:-translate-y-0.5 text-sm whitespace-nowrap">
              Apply Now
              <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center border-2 border-[#de9e48] text-[#020d1c] hover:bg-orange-50 font-bold py-2.5 px-6 rounded-md transition-all duration-300 text-sm whitespace-nowrap">
              Get Free Consultation
              <svg className="w-4 h-4 ml-1.5 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#020d1c] hover:bg-[#0a1930] text-white font-bold py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:-translate-y-0.5 text-sm whitespace-nowrap">
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>          {/* Features Row */}
          <div className="flex flex-wrap items-start md:items-center gap-x-5 gap-y-4 xl:gap-6">
            {/* Feature 1 */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full border border-orange-100 flex items-center justify-center text-[#de9e48] bg-white shadow-sm">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[#020d1c] text-[12px] font-bold leading-tight">Fast Processing</span>
                <span className="text-gray-500 text-[10px] font-medium">Minimum TAT</span>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full border border-orange-100 flex items-center justify-center text-[#de9e48] bg-white shadow-sm">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[#020d1c] text-[12px] font-bold leading-tight">Dedicated Support</span>
                <span className="text-gray-500 text-[10px] font-medium">Personal Manager</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full border border-orange-100 flex items-center justify-center text-[#de9e48] bg-white shadow-sm">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[#020d1c] text-[12px] font-bold leading-tight">100% Transparent</span>
                <span className="text-gray-500 text-[10px] font-medium">No Hidden Charges</span>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full border border-orange-100 flex items-center justify-center text-[#de9e48] bg-white shadow-sm">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[#020d1c] text-[12px] font-bold leading-tight">End-to-End Service</span>
                <span className="text-gray-500 text-[10px] font-medium">Start to Funding</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="w-full lg:w-[50%] xl:w-[45%] relative mt-12 lg:mt-0 flex justify-center items-center z-10 pointer-events-none lg:-ml-16 xl:-ml-24 2xl:-ml-32 pr-4 lg:pr-12 xl:pr-24">
          <img 
            src="/hero.png" 
            alt="Hero Illustration" 
            className="w-full max-w-[500px] lg:max-w-full object-contain drop-shadow-xl" 
          />
        </div>

      </div>
      
      {/* Floating Right Sidebar (Quick Links) */}
      <div className="hidden lg:flex flex-col bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 absolute right-4 xl:right-6 top-1/2 -translate-y-1/2 z-40 py-5 px-3 gap-6">
        <Link to="/apply-online" className="flex flex-col items-center gap-1.5 group">
          <div className="text-[#de9e48] group-hover:-translate-y-0.5 transition-transform duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
          </div>
          <span className="text-[10px] font-semibold text-gray-700 group-hover:text-[#de9e48] transition-colors whitespace-nowrap">Apply Online</span>
        </Link>
        
        <Link to="/track-application" className="flex flex-col items-center gap-1.5 group">
          <div className="text-[#de9e48] group-hover:-translate-y-0.5 transition-transform duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
          <span className="text-[10px] font-semibold text-gray-700 group-hover:text-[#de9e48] transition-colors whitespace-nowrap">Track App</span>
        </Link>

        <Link to="/cibil-report" className="flex flex-col items-center gap-1.5 group">
          <div className="text-[#de9e48] group-hover:-translate-y-0.5 transition-transform duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          </div>
          <span className="text-[10px] font-semibold text-gray-700 group-hover:text-[#de9e48] transition-colors whitespace-nowrap">CIBIL Report</span>
        </Link>

        <Link to="/emi-calculator" className="flex flex-col items-center gap-1.5 group">
          <div className="text-[#de9e48] group-hover:-translate-y-0.5 transition-transform duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2-2v14a2 2 0 002 2z"/></svg>
          </div>
          <span className="text-[10px] font-semibold text-gray-700 group-hover:text-[#de9e48] transition-colors whitespace-nowrap">Calculate EMI</span>
        </Link>

        <Link to="/contact" className="flex flex-col items-center gap-1.5 group">
          <div className="text-[#de9e48] group-hover:-translate-y-0.5 transition-transform duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          </div>
          <span className="text-[10px] font-semibold text-gray-700 group-hover:text-[#de9e48] transition-colors whitespace-nowrap">Contact Us</span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
