
const ApplyFeatures = () => {
  const features = [
    {
      title: "Simple & Quick",
      desc: "Complete your application in just a few minutes.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Secure & Safe",
      desc: "Your data is protected with bank-level security.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Expert Support",
      desc: "Get guidance from our financial experts.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7a4 4 0 100-8 4 4 0 000 8zM2 19a7 7 0 0114 0H2z" transform="translate(3,3)" className="hidden" />
          <circle cx="17" cy="17" r="4" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 19.5L22 22" />
        </svg>
      )
    },
    {
      title: "Track Application",
      desc: "Track your application status anytime, anywhere.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white pb-12 lg:pb-20 border-t border-gray-100 pt-12">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex items-start gap-4 w-full px-4 py-5 lg:py-0 ${
                index !== features.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-gray-100' : ''
              } lg:px-6`}
            >
              <div className="w-[50px] h-[50px] rounded-full bg-white border-2 border-gray-100 flex items-center justify-center flex-shrink-0 text-[#020d1c] shadow-sm relative">
                {feature.icon}
                {/* Small orange accent dot */}
                <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#de9e48]"></div>
              </div>
              
              <div>
                <h4 className="text-[#020d1c] font-bold text-[13.5px] lg:text-[14px] mb-1 leading-tight">
                  {feature.title}
                </h4>
                <p className="text-gray-500 text-[12px] lg:text-[12.5px] leading-snug pr-2">
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

export default ApplyFeatures;
