import React from 'react';
import { Link } from 'react-router-dom';

const ApplyHero = () => {
  const steps = [
    { 
      num: 1, label: "Select Service", active: true, 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ) 
    },
    { 
      num: 2, label: "Your Details", active: false, 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ) 
    },
    { 
      num: 3, label: "Upload Documents", active: false, 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ) 
    },
    { 
      num: 4, label: "Review & Submit", active: false, 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ) 
    },
    { 
      num: 5, label: "Application Submitted", active: false, 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      ) 
    },
  ];

  return (
    <section className="bg-white pt-8 pb-6 lg:pb-10 relative">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
        
        {/* Breadcrumbs */}
        <div className="flex items-center justify-center lg:justify-start gap-2 text-[12px] md:text-[13px] text-gray-500 mb-6">
          <Link to="/" className="hover:text-[#de9e48] transition-colors">Home</Link>
          <span>›</span>
          <span className="text-[#020d1c] font-medium">Apply Online</span>
        </div>

        {/* Headings */}
        <div className="text-center lg:text-left">
          <h1 className="text-[#020d1c] font-bold font-serif text-[32px] md:text-[38px] lg:text-[42px] leading-tight mb-2">
            Apply Online
          </h1>
          <p className="text-[#de9e48] text-[15px] lg:text-[16px] font-bold mb-10">
            Start your application in just a few simple steps
          </p>
        </div>


        
      </div>
    </section>
  );
};

export default ApplyHero;
