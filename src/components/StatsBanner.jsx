import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Bank Icon */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M3 21h18M3 10h18M5 6l7-3 7 3v4H5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M7 21v-7m3 7v-7m4 7v-7m3 7v-7" />
        <circle cx="12" cy="15.5" r="1.5" fill="currentColor" stroke="none" className="text-[#de9e48]" />
      </svg>
    ),
    label: (
      <>
        Nationalized Bank <br /> Focused
      </>
    )
  },
  {
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Stopwatch */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M12 22a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M10 2h4M12 4v2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} className="text-[#de9e48]" d="M12 9v4l2.5 2.5" />
      </svg>
    ),
    label: (
      <>
        Minimum Practical <br /> TAT
      </>
    )
  },
  {
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Window/Puzzle */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M12 4v16M4 12h16" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="text-[#de9e48]" d="M15 15a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    label: (
      <>
        One-Window <br /> Solutions
      </>
    )
  },
  {
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Transparent Process / Shield */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M3 12l9-9 9 9M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} className="text-[#de9e48]" d="M9 14l2 2 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M12 19v.01" />
      </svg>
    ),
    label: (
      <>
        100% Transparent <br /> Process
      </>
    )
  }
];

const StatsBanner = () => {
  return (
    <section className="bg-[#fcfcfd] pb-16 lg:pb-24 font-sans relative z-10 pt-4">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        <div className="bg-[#030d1c] rounded-xl shadow-xl flex flex-col xl:flex-row items-center justify-between py-5 px-6 md:px-8 xl:px-10 gap-6 xl:gap-0 border border-gray-800">
          
          {/* Left Text Area */}
          <div className="flex-shrink-0 w-full xl:w-[32%] 2xl:w-[28%] flex items-center xl:border-r border-gray-700/60 xl:pr-6 text-center xl:text-left h-full">
            <div className="w-full">
              <h3 className="text-white text-[14px] md:text-[15px] font-semibold leading-[1.4] mb-2 text-opacity-95">
                Specialized assistance for <br className="hidden lg:block"/> eligible non-approved <br className="hidden lg:block"/> society properties.
              </h3>
              <p className="text-gray-400 text-[10px] md:text-[11px]">
                Subject to bank policy and eligibility.
              </p>
            </div>
          </div>

          {/* Middle Icons Area */}
          <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-2 xl:px-6 2xl:px-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-2">
                <div className="text-[#de9e48]">
                  {feature.icon}
                </div>
                <span className="text-white text-[10px] md:text-[11px] font-medium leading-snug text-opacity-80 max-w-[110px]">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right Button Area */}
          <div className="flex-shrink-0 w-full xl:w-auto flex justify-center xl:justify-end xl:pl-4 2xl:pl-6">
            <Link 
              to="/about" 
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-semibold py-3 sm:py-2.5 px-5 rounded transition-all duration-300 hover:-translate-y-0.5 text-[12px] whitespace-nowrap"
            >
              Know More About Us
              <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
