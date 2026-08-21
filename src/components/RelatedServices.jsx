import React from 'react';
import { Link } from 'react-router-dom';

const relatedServices = [
  { name: 'Digital Transformation', path: '#' },
  { name: 'Operations Consulting', path: '#' },
  { name: 'Data & Analytics', path: '#' },
  { name: 'Risk Management', path: '#' },
];

const RelatedServices = () => {
  return (
    <section className="bg-white pb-20 lg:pb-28 font-sans">
      <div className="max-w-[1140px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <h3 className="text-[#020d1c] text-[20px] lg:text-[22px] font-bold font-serif mb-2 tracking-tight">
            Related Services
          </h3>
          <div className="w-8 h-[2.5px] bg-[#de9e48]"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {relatedServices.map((service, index) => (
            <Link 
              key={index} 
              to={service.path}
              className="group flex items-center justify-between px-5 py-4 border border-gray-200 rounded-lg hover:border-[#de9e48] transition-colors duration-300"
            >
              <span className="text-[#020d1c] font-medium text-[14px] group-hover:text-[#de9e48] transition-colors duration-300">
                {service.name}
              </span>
              <svg 
                className="w-4 h-4 text-[#020d1c] group-hover:text-[#de9e48] transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RelatedServices;
