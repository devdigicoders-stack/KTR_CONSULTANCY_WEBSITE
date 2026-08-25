
const NonApprovedDisclaimer = () => {
  return (
    <section className="bg-white pb-16 lg:pb-20 px-4 lg:px-6 xl:px-12 font-sans">
      <div className="max-w-[1200px] mx-auto space-y-4">
        
        {/* Top Banner - Understanding */}
        <div className="relative bg-[#fffcf8] border border-[#f5eadb] rounded-[10px] p-6 lg:p-7 flex items-center gap-5 overflow-hidden shadow-sm">
          {/* City Skyline Background SVG */}
          <div className="absolute right-0 bottom-0 h-[85%] w-[45%] md:w-[35%] lg:w-[30%] opacity-25 pointer-events-none flex items-end justify-end">
            <svg viewBox="0 0 400 100" className="w-full h-full text-[#de9e48]" fill="none" stroke="currentColor" strokeWidth="1.5">
               <path d="M10 100V60h15v-10h20v50 M45 100V40h10v-10h15v-5h10v75 M80 100V50h25v50 M105 100V30h10v-15h5v-5h5v20h15v70 M140 100V65h20v35 M160 100V45h15v-20h10v-5h10v25h15v55 M210 100V20h10v-10h5v10h15v80 M240 100V55h25v45 M265 100V35h15v-15h10v50 M290 100V60h20v40 M310 100V40h15v-20h5v20h20v60 M350 100V70h20v30 M370 100V50h20v50" strokeLinejoin="round" />
               <path d="M55 45h5 M55 55h5 M55 65h5 M65 45h5 M65 55h5 M65 65h5 M90 60h5 M90 70h5 M90 80h5 M120 40h5 M120 50h5 M120 60h5 M175 35h5 M175 45h5 M175 55h5 M220 30h5 M220 40h5 M220 50h5 M250 65h5 M250 75h5 M280 45h5 M280 55h5 M280 65h5 M320 50h5 M320 60h5 M320 70h5" strokeWidth="1" />
            </svg>
          </div>

          {/* Icon */}
          <div className="flex-shrink-0 relative z-10 ml-2">
            <svg className="w-[42px] h-[42px] text-[#d68c2d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>

          {/* Text */}
          <div className="relative z-10 pl-2">
            <h3 className="text-[#020d1c] font-bold text-[15px] lg:text-[16px] mb-1">
              We understand that every property is unique.
            </h3>
            <p className="text-[#4a5568] text-[14px]">
              Even if your society is not on the bank's approved list, there may still be loan options available.
            </p>
          </div>
        </div>

        {/* Bottom Banner - Disclaimer */}
        <div className="bg-[#020d1c] rounded-[10px] p-4 lg:p-5 flex items-start sm:items-center gap-4 shadow-md">
          <div className="flex-shrink-0 ml-3 mt-0.5 sm:mt-0">
            <svg className="w-6 h-6 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-300 text-[13px] leading-snug">
            <span className="text-gray-300">Disclaimer:</span> Final loan approval is subject to the concerned bank's legal, technical, income and credit assessment and their existing policies and procedures.
          </p>
        </div>

      </div>
    </section>
  );
};

export default NonApprovedDisclaimer;
