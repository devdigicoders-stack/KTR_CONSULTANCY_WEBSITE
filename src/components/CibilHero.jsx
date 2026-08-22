import React from 'react';
import { Link } from 'react-router-dom';

const CibilHero = () => {
  return (
    <section className="bg-white pt-6 pb-10 md:pt-8 md:pb-12 lg:pt-8 lg:pb-12 font-sans overflow-hidden relative">
      
      {/* Background subtle elements */}
      <div className="absolute left-0 bottom-0 w-full h-[60%] bg-gradient-to-t from-gray-50/80 to-transparent pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20">
          
          {/* Left Content (Text & Features) */}
          <div className="w-full lg:w-[55%] xl:w-[60%] max-w-[650px] flex flex-col justify-center relative z-20">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-gray-500 text-[12.5px] font-medium mb-6">
              <Link to="/" className="hover:text-[#de9e48] transition-colors">Home</Link>
              <span className="text-gray-400">›</span>
              <span className="text-[#020d1c]">CIBIL Services</span>
            </div>

            {/* Subtitle */}
            <h3 className="text-[#de9e48] text-[13px] font-bold tracking-[0.08em] uppercase mb-3">
              CIBIL SERVICES
            </h3>
            
            {/* Title */}
            <h1 className="text-[#020d1c] text-3xl md:text-[40px] lg:text-[42px] xl:text-[46px] font-bold font-serif leading-[1.15] mb-4">
              Check Your Credit <br />
              Health with <span className="text-[#de9e48]">CIBIL</span>
            </h1>
            
            {/* Paragraph */}
            <p className="text-gray-600 text-[14px] lg:text-[15px] leading-relaxed mb-10 max-w-[550px]">
              Get your detailed CIBIL report instantly and take control of your financial future. Know your credit score, loan accounts and complete credit history in one comprehensive report.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8 max-w-[600px]">
              
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-[42px] h-[42px] rounded-full border-[1.5px] border-[#de9e48]/60 bg-[#fef8f0] flex items-center justify-center flex-shrink-0 text-[#de9e48]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="flex flex-col mt-0.5">
                  <h4 className="text-[#020d1c] font-bold text-[14px] mb-1.5 leading-none">Detailed Report</h4>
                  <p className="text-gray-500 text-[12px] leading-relaxed">Get complete credit history with loan accounts and enquiries.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-[42px] h-[42px] rounded-full border-[1.5px] border-[#de9e48]/60 bg-[#fef8f0] flex items-center justify-center flex-shrink-0 text-[#de9e48]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="flex flex-col mt-0.5">
                  <h4 className="text-[#020d1c] font-bold text-[14px] mb-1.5 leading-none">Fast & Secure</h4>
                  <p className="text-gray-500 text-[12px] leading-relaxed">Quick report generation with 100% secure process.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-[42px] h-[42px] rounded-full border-[1.5px] border-[#de9e48]/60 bg-[#fef8f0] flex items-center justify-center flex-shrink-0 text-[#de9e48]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex flex-col mt-0.5">
                  <h4 className="text-[#020d1c] font-bold text-[14px] mb-1.5 leading-none">Trusted & Accurate</h4>
                  <p className="text-gray-500 text-[12px] leading-relaxed">Reliable information directly from CIBIL database.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Form Container */}
          <div className="w-full max-w-[420px] flex-shrink-0 relative z-20">
            <div className="bg-[#020d1c] rounded-xl p-6 xl:p-7 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-gray-800">
              
              <h2 className="text-white text-[19px] xl:text-[21px] font-bold mb-1.5">
                Get Your CIBIL Report
              </h2>
              <p className="text-gray-400 text-[12.5px] xl:text-[13px] mb-5 font-medium">
                Enter the details below to receive your CIBIL report.
              </p>

              <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
                
                {/* PAN Number */}
                <div className="space-y-1.5">
                  <label className="text-gray-200 text-[12.5px] font-medium block">PAN Number</label>
                  <input 
                    type="text" 
                    placeholder="Enter PAN Number"
                    className="w-full h-[42px] bg-white border border-transparent rounded-md text-[13px] px-3.5 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-all text-gray-800 placeholder-gray-400 shadow-inner"
                  />
                </div>

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-gray-200 text-[12.5px] font-medium block">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter Full Name"
                    className="w-full h-[42px] bg-white border border-[#de9e48] ring-1 ring-[#de9e48] rounded-md text-[13px] px-3.5 focus:outline-none transition-all text-gray-800 placeholder-gray-400 shadow-inner"
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-1.5">
                  <label className="text-gray-200 text-[12.5px] font-medium block">Mobile Number</label>
                  <input 
                    type="tel" 
                    placeholder="Enter Mobile Number"
                    className="w-full h-[42px] bg-white border border-transparent rounded-md text-[13px] px-3.5 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-all text-gray-800 placeholder-gray-400 shadow-inner"
                  />
                </div>

                {/* Gender */}
                <div className="space-y-1.5 relative">
                  <label className="text-gray-200 text-[12.5px] font-medium block">Gender</label>
                  <div className="relative">
                    <select className="w-full h-[42px] bg-white border border-transparent rounded-md text-[13px] px-3.5 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-all text-gray-600 appearance-none cursor-pointer shadow-inner">
                      <option value="" disabled selected>Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2.5 mt-4 mb-2">
                  <div className="relative flex items-center mt-[2px] flex-shrink-0">
                    <input type="checkbox" className="peer w-[16px] h-[16px] opacity-0 absolute cursor-pointer z-10" defaultChecked />
                    <div className="w-[16px] h-[16px] border-[1.5px] border-[#de9e48] rounded-[3px] bg-[#de9e48] flex items-center justify-center transition-colors">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <label className="text-gray-300 text-[12px] leading-tight cursor-pointer pt-px">
                    I provide my consent to fetch my CIBIL report.
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full h-[44px] bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-bold text-[13.5px] rounded-md transition-colors mt-3 flex items-center justify-center shadow-sm"
                >
                  Get My CIBIL Report
                  <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                {/* Secure Note */}
                <div className="flex items-center justify-center gap-1.5 mt-4">
                  <svg className="w-3 h-3 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-[#de9e48]/90 text-[10.5px] font-medium tracking-wide">
                    Your information is secure and will not be shared.
                  </span>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CibilHero;
