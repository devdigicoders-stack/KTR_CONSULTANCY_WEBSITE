import React from 'react';

const PropertyValuationWhyChoose = () => {
  const points = [
    {
      icon: '🛡️',
      title: 'Qualified Valuer Network',
      desc: 'We coordinate with registered, government-approved valuers for authentic FMV and Income Tax valuation reports.'
    },
    {
      icon: '⚡',
      title: 'Zero Penalty TDS Compliance',
      desc: 'Avoid costly interest (1% - 1.5% per month) and late fees (₹200/day) under section 234E with timely Form 26QB filing.'
    },
    {
      icon: '📑',
      title: 'Complete Form 16B Support',
      desc: 'Seamless generation and download of TDS Certificate Form 16B directly from TRACES portal for property buyers and sellers.'
    },
    {
      icon: '⚖️',
      title: 'Income Tax Notice Defense',
      desc: 'Proper documentation and stamp duty value vs agreement value justification for section 50C & 56(2)(x) compliance.'
    }
  ];

  return (
    <section className="bg-gray-50 py-12 lg:py-16 font-sans border-t border-gray-200/70">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[#de9e48] text-xs font-black tracking-widest uppercase mb-1 block">
            Why Choose KTR Consultants
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#020d1c]">
            End-to-End Tax & Valuation Peace of Mind
          </h2>
          <p className="text-gray-600 text-xs md:text-sm mt-2">
            Ensuring every property transaction is 100% tax compliant and legally supported.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              <div className="text-3xl mb-3">{point.icon}</div>
              <h3 className="text-[#020d1c] font-bold text-sm mb-2">{point.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PropertyValuationWhyChoose;
