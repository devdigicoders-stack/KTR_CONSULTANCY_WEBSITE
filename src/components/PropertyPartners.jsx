import React from 'react';

const PropertyPartners = () => {
  const partners = [
    {
      name: "DLF",
      render: () => (
        <div className="flex items-center gap-1 text-black font-black italic text-2xl tracking-tighter">
          DLF<span className="text-[10px] leading-none grid grid-cols-3 gap-0.5 mt-2 opacity-80">
            <div className="w-1 h-1 bg-black rounded-full col-start-2"></div>
            <div className="w-1 h-1 bg-black rounded-full col-start-1"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full col-start-1"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
          </span>
        </div>
      )
    },
    {
      name: "Godrej Properties",
      render: () => (
        <div className="flex flex-col items-center">
          <span className="font-serif italic text-2xl font-bold text-gray-700 leading-none">Godrej</span>
          <span className="text-[7px] tracking-[0.2em] font-semibold text-gray-500 mt-1 uppercase">Properties</span>
        </div>
      )
    },
    {
      name: "LODHA",
      render: () => (
        <div className="flex items-center gap-2 text-[#b08e5c]">
          <div className="flex flex-col gap-[3px]">
            <div className="w-4 h-[3px] bg-gray-500"></div>
            <div className="w-4 h-[3px] bg-gray-500"></div>
            <div className="w-4 h-[3px] bg-gray-500"></div>
            <div className="w-4 h-[3px] bg-gray-500"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-lg tracking-widest leading-none mb-0.5">LODHA</span>
            <span className="text-[5px] text-gray-400 tracking-wider">BUILDING A BETTER LIFE</span>
          </div>
        </div>
      )
    },
    {
      name: "MAHAGUN",
      render: () => (
        <div className="flex flex-col items-center">
          <svg className="w-6 h-4 text-blue-900 mb-1" viewBox="0 0 40 20" fill="currentColor">
            <path d="M0 20L10 0L20 15L30 0L40 20H32L20 10L10 20H0Z"/>
            <path d="M10 20L20 10L30 20H22L20 17L18 20H10Z" className="text-blue-500 opacity-80"/>
          </svg>
          <span className="font-sans font-bold text-xs tracking-widest text-gray-800 leading-none mb-0.5">MAHAGUN</span>
          <span className="text-[4px] text-gray-400 tracking-widest">A NAME THAT PERFORMS</span>
        </div>
      )
    },
    {
      name: "TATA HOUSING",
      render: () => (
        <div className="flex flex-col items-center">
          <span className="font-sans font-extrabold text-blue-800 text-sm tracking-wide mb-[-2px]">TATA</span>
          <span className="font-sans font-extrabold text-blue-800 text-lg tracking-wider">HOUSING</span>
        </div>
      )
    },
    {
      name: "OMAXE",
      render: () => (
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 bg-red-600 flex items-center justify-center relative">
             <div className="w-2.5 h-2.5 border-t border-r border-white absolute bottom-1 left-1"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-extrabold text-blue-900 text-lg leading-none tracking-tight">OMAXE</span>
            <span className="text-[4px] text-gray-500 tracking-tight leading-none mt-0.5">Turning dreams into reality</span>
          </div>
        </div>
      )
    },
    {
      name: "ATS",
      render: () => (
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 grid grid-cols-2 gap-[1px] rotate-45 transform">
            <div className="bg-gray-300"></div><div className="bg-gray-300"></div>
            <div className="bg-gray-300"></div><div className="bg-red-700"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-black text-green-900 text-xl leading-none">ATS</span>
            <span className="text-[5px] text-gray-500 italic leading-none mt-0.5">The better way home</span>
          </div>
        </div>
      )
    },
    {
      name: "BRIGADE",
      render: () => (
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="font-sans font-bold text-gray-800 text-[10px] tracking-widest leading-none mb-1">BRIGADE</span>
            <span className="text-[4.5px] text-gray-500 tracking-wide leading-none">Building Positive Experiences</span>
          </div>
          <div className="flex gap-[1px] items-end pb-1 relative">
             <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-yellow-400"></div>
             <div className="w-1.5 h-2 bg-gray-400"></div>
             <div className="w-1.5 h-4 bg-gray-400"></div>
             <div className="w-1.5 h-3 bg-gray-400"></div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="bg-white pb-16 lg:pb-20">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-8 md:w-12 bg-[#de9e48]"></div>
          <h3 className="text-[#020d1c] text-[15px] font-bold tracking-wide uppercase">
            OUR PROPERTY PARTNERS
          </h3>
          <div className="h-px w-8 md:w-12 bg-[#de9e48]"></div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 lg:gap-3">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-lg p-3 sm:p-4 h-[80px] sm:h-[90px] flex items-center justify-center hover:shadow-md transition-shadow duration-300 filter grayscale hover:grayscale-0 transition-all cursor-pointer"
              title={partner.name}
            >
              {partner.render()}
            </div>
          ))}
        </div>
        
        {/* Footnote */}
        <p className="text-center text-gray-400 text-[11px] mt-6">
          * Partners shown above are for representation only.
        </p>

      </div>
    </section>
  );
};

export default PropertyPartners;
