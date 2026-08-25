import React from 'react';

const NonApprovedIntro = () => {
  return (
    <section className="bg-[#fcfcfd] py-12 lg:py-16 font-sans border-y border-gray-100 relative overflow-hidden">
      {/* Decorative quotes icon */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-[0.03] text-[#de9e48] pointer-events-none">
        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <div className="max-w-[1000px] mx-auto px-4 lg:px-6 xl:px-12 text-center relative z-10">
        <h2 className="text-[#020d1c] text-xl md:text-2xl lg:text-[26px] font-bold font-serif mb-4 leading-[1.3]">
          Your property doesn't have to be in a bank-approved society to explore loan options.
        </h2>
        <div className="inline-block bg-[#fff5e6] text-[#c97d22] font-bold tracking-wide uppercase text-[12px] px-4 py-1.5 rounded-full mb-6">
          Our Flagship Specialization
        </div>
        <p className="text-gray-700 text-[15px] md:text-[16px] leading-relaxed max-w-[850px] mx-auto">
          As one of our most specialized and high-demand financing areas, <span className="font-bold text-[#020d1c]">KTR Consultants</span> provides <span className="font-bold">specialized assistance for eligible properties in non-approved societies</span>. We expertly navigate and arrange Home Loans and Property Finance through Nationalized Banks, subject to proper documentation, legal verification, technical assessment, and the lender's applicable policies.
        </p>
      </div>
    </section>
  );
};

export default NonApprovedIntro;
