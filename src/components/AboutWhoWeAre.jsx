
const AboutWhoWeAre = () => {
  return (
    <section className="bg-[#fafafa] py-20 lg:py-28 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Image with Decorations */}
          <div className="w-full lg:w-[45%] relative">
            {/* Top Left Dots Decoration */}
            <div className="absolute -top-10 -left-10 z-0 hidden md:block">
              <svg width="80" height="150" viewBox="0 0 80 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <pattern id="dots-pattern-1" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" fill="#de9e48" opacity="0.6"/>
                </pattern>
                <rect width="80" height="150" fill="url(#dots-pattern-1)"/>
              </svg>
            </div>
            
            {/* Bottom Left Golden L-Shape Decoration */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-b-[10px] border-l-[10px] border-[#de9e48] rounded-bl-[2rem] z-0"></div>
            
            {/* Bottom Right Dots Decoration */}
            <div className="absolute -bottom-10 -right-10 z-0 hidden md:block">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <pattern id="dots-pattern-2" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" fill="#de9e48" opacity="0.6"/>
                </pattern>
                <rect width="100" height="100" fill="url(#dots-pattern-2)"/>
              </svg>
            </div>

            {/* Main Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white p-2">
              <img 
                src="/images/aboutus.png" 
                alt="About KTR Consultants" 
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-[55%]">
            {/* Heading Section */}
            <h3 className="text-[#de9e48] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              WHO WE ARE
            </h3>
            
            <h2 className="text-[#020d1c] text-3xl md:text-4xl lg:text-[2.6rem] font-bold font-serif leading-[1.2] mb-6 tracking-tight">
              Driving Growth Through <br className="hidden md:block" />
              Strategy, Technology & Expertise
            </h2>
            
            <div className="w-12 h-1 bg-[#de9e48] mb-6"></div>
            
            <p className="text-gray-600 text-[15px] leading-relaxed mb-10 max-w-2xl font-light">
              KTR Consultants is a team of passionate professionals committed to delivering measurable results for businesses of all sizes. We combine industry expertise with innovative solutions to help our clients navigate challenges, seize opportunities, and achieve sustainable growth.
            </p>

            {/* 2x2 Grid Features */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Feature 1 */}
              <div className="flex gap-5 md:border-r border-b border-gray-200/80 md:pr-8 pb-8">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#fbf5ee] flex items-center justify-center text-[#de9e48] border border-[#de9e48]/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
                <div className="pt-1">
                  <h4 className="text-[#020d1c] font-bold text-[17px] mb-2">Our Vision</h4>
                  <p className="text-gray-500 text-[13.5px] leading-relaxed font-light">
                    To be the most trusted consulting partner for businesses worldwide.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-5 border-b border-gray-200/80 md:pl-8 pb-8 pt-8 md:pt-0">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#fbf5ee] flex items-center justify-center text-[#de9e48] border border-[#de9e48]/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>
                <div className="pt-1">
                  <h4 className="text-[#020d1c] font-bold text-[17px] mb-2">Our Values</h4>
                  <p className="text-gray-500 text-[13.5px] leading-relaxed font-light">
                    Integrity, Excellence, Collaboration and Commitment to Client Success.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-5 md:border-r border-gray-200/80 md:pr-8 pt-8">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#fbf5ee] flex items-center justify-center text-[#de9e48] border border-[#de9e48]/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div className="pt-1">
                  <h4 className="text-[#020d1c] font-bold text-[17px] mb-2">Our Mission</h4>
                  <p className="text-gray-500 text-[13.5px] leading-relaxed font-light">
                    To empower organizations with innovative solutions and measurable results.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-5 md:pl-8 pt-8">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#fbf5ee] flex items-center justify-center text-[#de9e48] border border-[#de9e48]/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="pt-1">
                  <h4 className="text-[#020d1c] font-bold text-[17px] mb-2">Our Promise</h4>
                  <p className="text-gray-500 text-[13.5px] leading-relaxed font-light">
                    We deliver strategies that drive growth, create value and build lasting impact.
                  </p>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
