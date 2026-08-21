import React from 'react';

const AboutWhyChooseUs = () => {
  return (
    <section className="bg-white pb-20 lg:pb-28 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#fdfaf5] rounded-[2rem] p-8 lg:p-10 shadow-sm border border-[#de9e48]/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-0 lg:divide-x divide-gray-200/80 items-center">
            
            {/* Left Content (Title, Text, Button) */}
            <div className="lg:col-span-4 lg:pr-10 flex flex-col justify-center text-center lg:text-left">
              <h3 className="text-[#de9e48] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-3">
                WHY CHOOSE US
              </h3>
              <h2 className="text-[#020d1c] text-2xl lg:text-[1.65rem] font-bold font-serif leading-tight mb-4 tracking-tight">
                The Right Partner for <br className="hidden lg:block" />
                Your <span className="text-[#de9e48]">Business Success</span>
              </h2>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-6 font-light">
                We don't just offer advice; we become an extension of your team, working together to achieve your business objectives.
              </p>
              <div>
                <a href="/contact" className="inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-bold text-[13px] py-2.5 px-6 rounded transition-colors duration-200">
                  Get to Know Us
                  <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Feature 1 */}
            <div className="lg:col-span-2 flex flex-col items-center text-center lg:px-5">
              <div className="w-12 h-12 rounded-full bg-[#f6efe6] flex items-center justify-center text-[#020d1c] mb-4 border border-[#de9e48]/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h4 className="text-[#020d1c] font-bold text-[14.5px] mb-2 tracking-tight">Client-Centric</h4>
              <p className="text-gray-500 text-[12px] leading-relaxed font-light px-2 lg:px-0">
                We put our clients' goals at the heart of everything we do.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="lg:col-span-2 flex flex-col items-center text-center lg:px-5 border-t lg:border-t-0 border-gray-200/80 pt-8 lg:pt-0">
               <div className="w-12 h-12 rounded-full bg-[#f6efe6] flex items-center justify-center text-[#020d1c] mb-4 border border-[#de9e48]/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h4 className="text-[#020d1c] font-bold text-[14.5px] mb-2 tracking-tight">Innovative Solutions</h4>
              <p className="text-gray-500 text-[12px] leading-relaxed font-light px-2 lg:px-0">
                We leverage the latest technology and methodologies.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="lg:col-span-2 flex flex-col items-center text-center lg:px-5 border-t lg:border-t-0 border-gray-200/80 pt-8 lg:pt-0">
               <div className="w-12 h-12 rounded-full bg-[#f6efe6] flex items-center justify-center text-[#020d1c] mb-4 border border-[#de9e48]/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h4 className="text-[#020d1c] font-bold text-[14.5px] mb-2 tracking-tight">Experienced Team</h4>
              <p className="text-gray-500 text-[12px] leading-relaxed font-light px-2 lg:px-0">
                Our consultants bring deep industry knowledge and expertise.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="lg:col-span-2 flex flex-col items-center text-center lg:pl-5 border-t lg:border-t-0 border-gray-200/80 pt-8 lg:pt-0">
               <div className="w-12 h-12 rounded-full bg-[#f6efe6] flex items-center justify-center text-[#020d1c] mb-4 border border-[#de9e48]/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h4 className="text-[#020d1c] font-bold text-[14.5px] mb-2 tracking-tight">Results-Driven</h4>
              <p className="text-gray-500 text-[12px] leading-relaxed font-light px-2 lg:px-0">
                We focus on measurable outcomes that drive real business impact.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChooseUs;
