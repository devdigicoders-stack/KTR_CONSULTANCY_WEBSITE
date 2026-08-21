
const TechVision = () => (
  <div className="flex items-center gap-2.5 text-[#6b7280] hover:text-blue-600 hover:scale-95 transition-all duration-300">
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
    <div className="flex flex-col leading-none">
      <span className="font-bold text-[19px] tracking-tight">TechVision</span>
      <span className="text-[9px] font-bold tracking-widest text-[#9ca3af] mt-0.5">INC.</span>
    </div>
  </div>
);

const GrowthPlus = () => (
  <div className="flex items-center gap-2.5 text-[#6b7280] hover:text-emerald-600 hover:scale-95 transition-all duration-300">
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 11-9-9c2.5 0 4.75 1.05 6.36 2.74L12 12h9" />
    </svg>
    <span className="font-bold text-[20px] tracking-tight">GrowthPlus</span>
  </div>
);

const InnoWorks = () => (
  <div className="flex items-center gap-2.5 text-[#6b7280] hover:text-indigo-600 hover:scale-95 transition-all duration-300">
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    <span className="font-bold text-[20px] tracking-tight">InnoWorks</span>
  </div>
);

const DataSmart = () => (
  <div className="flex items-center gap-2.5 text-[#6b7280] hover:text-orange-500 hover:scale-95 transition-all duration-300">
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="2" strokeWidth={1.8} />
      <circle cx="5" cy="19" r="2" strokeWidth={1.8} />
      <circle cx="19" cy="19" r="2" strokeWidth={1.8} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.5 7.5l-4 8m11-8l-4 8m-6 1h8" />
    </svg>
    <span className="font-bold text-[20px] tracking-tight">DataSmart</span>
  </div>
);

const NextGen = () => (
  <div className="flex items-center gap-2.5 text-[#6b7280] hover:text-teal-600 hover:scale-95 transition-all duration-300">
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" strokeWidth={1.8} />
      <circle cx="12" cy="12" r="4" strokeWidth={1.8} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 2v2m0 16v2M2 12h2m16 0h2" />
    </svg>
    <div className="flex flex-col leading-none">
      <span className="font-bold text-[19px] tracking-tight">NextGen</span>
      <span className="text-[9px] font-bold tracking-widest text-[#9ca3af] mt-0.5">SOLUTIONS</span>
    </div>
  </div>
);

const TrustedBy = () => {
  // A set of 5 logos
  const logoSet = [
    <TechVision key="1" />,
    <GrowthPlus key="2" />,
    <InnoWorks key="3" />,
    <DataSmart key="4" />,
    <NextGen key="5" />
  ];

  return (
    <section className="bg-white py-12 md:py-16 font-sans border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 text-center">
        <h3 className="text-[#566378] text-[11.5px] font-semibold tracking-[0.15em] uppercase">
          Trusted by Leading Companies
        </h3>
      </div>
      
      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden group">
        
        {/* CSS block for the seamless marquee animation */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 35s linear infinite;
              width: max-content;
            }
            .group:hover .animate-marquee {
              animation-play-state: paused;
            }
          `}
        </style>
        
        {/* We use two identical blocks inside a w-max container animating to -50% */}
        <div className="flex animate-marquee">
          {/* First Half */}
          <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
            {logoSet.map((Logo, index) => (
              <div key={`set1-${index}`} className="flex-shrink-0 cursor-pointer">
                {Logo}
              </div>
            ))}
            {/* Duplicate again in the first half to ensure it fills ultra-wide screens */}
            {logoSet.map((Logo, index) => (
              <div key={`set1-dup-${index}`} className="flex-shrink-0 cursor-pointer">
                {Logo}
              </div>
            ))}
          </div>

          {/* Second Half (Exact Replica) */}
          <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
            {logoSet.map((Logo, index) => (
              <div key={`set2-${index}`} className="flex-shrink-0 cursor-pointer">
                {Logo}
              </div>
            ))}
            {logoSet.map((Logo, index) => (
              <div key={`set2-dup-${index}`} className="flex-shrink-0 cursor-pointer">
                {Logo}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustedBy;
