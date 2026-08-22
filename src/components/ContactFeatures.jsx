import React from 'react';

const ContactFeatures = () => {
  const features = [
    {
      title: "Quick Response",
      desc: "We respond within 24 working hours.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" className="hidden" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.36 6.64a9 9 0 1 1-12.73 0 M12 2v4 M2 12h4 M22 12h-4" className="hidden"/>
          {/* Headset Icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 14v-3a8 8 0 1116 0v3m-10 6h10a2 2 0 002-2v-4a2 2 0 00-2-2H4a2 2 0 00-2 2v4a2 2 0 002 2h2m4 0v-6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 17a3 3 0 11-6 0" />
        </svg>
      )
    },
    {
      title: "Expert Support",
      desc: "Get assistance from our expert team.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Person with badge */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" className="hidden" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7a4 4 0 100-8 4 4 0 000 8zM2 19a7 7 0 0114 0H2z" transform="translate(3,3)" />
          <circle cx="17" cy="17" r="4" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 19.5L22 22" />
        </svg>
      )
    },
    {
      title: "Trusted Guidance",
      desc: "Reliable solutions for all your financial needs.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Handshake */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 00-4.242 0L6.5 14.758a3 3 0 000 4.242 3 3 0 004.242 0l4.258-4.258a3 3 0 000-4.242z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 10.5a3 3 0 014.242 0l4.258 4.258a3 3 0 010 4.242 3 3 0 01-4.242 0l-4.258-4.258a3 3 0 010-4.242z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 13.5l3-3" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15l3-3" />
        </svg>
      )
    },
    {
      title: "Customer Focused",
      desc: "Your satisfaction is our top priority.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Group of people */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white pb-12 lg:pb-16 pt-4 relative z-20">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Main Box */}
        <div className="bg-white border border-gray-100/80 rounded-xl shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] py-6 lg:py-8 px-4 lg:px-2 flex flex-col lg:flex-row items-center justify-between">
          
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-4 px-4 lg:px-7 w-full lg:w-1/4 ${
                index !== features.length - 1 ? 'lg:border-r lg:border-gray-100 mb-6 lg:mb-0 pb-6 lg:pb-0 border-b lg:border-b-0 border-gray-50' : ''
              }`}
            >
              {/* Icon Circle */}
              <div className="w-[58px] h-[58px] rounded-full bg-[#fcf6ee] flex items-center justify-center flex-shrink-0 text-[#020d1c]">
                {feature.icon}
              </div>
              
              {/* Text */}
              <div>
                <h4 className="text-[#020d1c] font-bold text-[14px] lg:text-[14.5px] mb-1 leading-tight">
                  {feature.title}
                </h4>
                <p className="text-gray-500 text-[12px] lg:text-[12.5px] leading-snug">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ContactFeatures;
