import { Link } from 'react-router-dom';

const CAHero = () => {
  return (
    <section className="bg-white pt-6 pb-10 md:pt-8 md:pb-12 lg:pt-10 lg:pb-14 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 xl:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-[50%] xl:w-[55%] flex flex-col justify-center relative z-10">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-gray-500 text-[13px] font-medium mb-6">
              <Link to="/" className="hover:text-[#de9e48] transition-colors">Home</Link>
              <span className="text-gray-400">›</span>
              <span className="text-gray-700 font-semibold">CA Services</span>
            </div>

            {/* Subtitle */}
            <h3 className="text-[#de9e48] text-[14px] font-bold tracking-wide uppercase mb-3">
              CA SERVICES
            </h3>
            
            {/* Title */}
            <h1 className="text-[#020d1c] text-4xl md:text-5xl lg:text-[42px] xl:text-[52px] font-bold font-serif leading-[1.2] mb-5">
              Professional CA Services <br />
              <span className="text-[#de9e48]">for You & Your Business</span>
            </h1>
            
            {/* Paragraph */}
            <p className="text-gray-700 text-[14.5px] lg:text-[15.5px] leading-relaxed mb-8 max-w-[600px] font-medium">
              <span className="font-bold text-[#624021]">KTR Consultants</span> provides professional <span className="font-bold text-[#624021]">Chartered Accountant services</span> covering taxation, GST, business compliance and financial documentation with a special focus on loans, business finance and project funding.
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-x-2 gap-y-5 mt-6 w-full">
              
              {/* Feature 1 */}
              <div className="flex items-center gap-2.5">
                <div className="flex-shrink-0 text-[#de9e48]">
                  <svg className="w-8 h-8 xl:w-[38px] xl:h-[38px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-[#020d1c] font-bold text-[13.5px] xl:text-[14.5px] leading-[1.3] whitespace-nowrap">Expert CA<br />Professionals</p>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-2.5">
                <div className="flex-shrink-0 text-[#de9e48]">
                  <svg className="w-8 h-8 xl:w-[38px] xl:h-[38px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-[#020d1c] font-bold text-[13.5px] xl:text-[14.5px] leading-[1.3] whitespace-nowrap">100% Compliance<br />& Confidential</p>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-2.5">
                <div className="flex-shrink-0 text-[#de9e48]">
                  <svg className="w-8 h-8 xl:w-[38px] xl:h-[38px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-[#020d1c] font-bold text-[13.5px] xl:text-[14.5px] leading-[1.3] whitespace-nowrap">Loan & Business<br />Finance Focused</p>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center gap-2.5">
                <div className="flex-shrink-0 text-[#de9e48]">
                  <svg className="w-8 h-8 xl:w-[38px] xl:h-[38px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-[#020d1c] font-bold text-[13.5px] xl:text-[14.5px] leading-[1.3] whitespace-nowrap">Timely Support &<br />End-to-End Assistance</p>
              </div>

            </div>
          </div>
          
          {/* Right Image Content */}
          <div className="w-full lg:w-[50%] xl:w-[45%] relative z-0 flex justify-end">
            <div className="relative w-full max-w-[700px]">
               {/* Curved shape image - similar to CA.png from the prompt screenshot */}
               <img 
                 src="/CA.png" 
                 alt="Professional CA Services" 
                 className="w-full h-auto object-cover rounded-tl-[60px] rounded-bl-[10px] lg:rounded-tl-[80px] lg:rounded-bl-[20px] shadow-sm"
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CAHero;
