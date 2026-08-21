import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Business Strategy',
    desc: 'Strategic planning and advisory to achieve long-term growth.',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-[#020d1c] mb-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18" />
      </svg>
    )
  },
  {
    title: 'Digital Transformation',
    desc: 'Driving innovation through technology and modernization.',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-[#020d1c] mb-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    title: 'Operations Consulting',
    desc: 'Optimizing operations to improve efficiency and reduce costs.',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-[#020d1c] mb-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: 'Data & Analytics',
    desc: 'Turning data into actionable insights for better decisions.',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-[#020d1c] mb-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    )
  },
  {
    title: 'Risk Management',
    desc: 'Identifying risks and creating strategies to mitigate them.',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-[#020d1c] mb-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Change Management',
    desc: 'Helping organizations adapt and thrive in change.',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-[#020d1c] mb-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  }
];

const Services = () => {
  return (
    <section className="bg-[#fafafa] pt-32 pb-24 font-sans relative z-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="text-left">
            <h3 className="text-[#de9e48] text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              OUR SERVICES
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#020d1c] font-serif mb-4 leading-tight tracking-tight">
              Solutions That Drive Success
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-lg font-light">
              End-to-end consulting solutions crafted to empower your business.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <Link to="/services" className="inline-flex items-center justify-center border border-[#de9e48] text-[#de9e48] hover:bg-[#de9e48]/5 font-medium py-2.5 px-6 rounded transition-colors duration-200 text-sm bg-white">
              View All Services
              <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {service.icon}
              <h4 className="text-[#020d1c] font-bold text-sm mb-3 font-sans leading-tight">
                {service.title}
              </h4>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-6 flex-grow font-light">
                {service.desc}
              </p>
              <Link 
                to={`/services/${service.title.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`} 
                className="inline-flex items-center text-[#020d1c] font-semibold text-[13px] group-hover:text-[#de9e48] transition-colors mt-auto tracking-wide"
              >
                Learn More
                <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
