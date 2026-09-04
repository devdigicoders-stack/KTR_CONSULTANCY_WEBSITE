import React from 'react';
import { Link } from 'react-router-dom';

const MSMEDisclaimer = () => {
  return (
    <section className="bg-white pb-16 lg:pb-24 px-4 lg:px-6 xl:px-12 font-sans pt-12">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Banner */}
        <div className="bg-[#020d1c] rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 lg:gap-8 shadow-xl">
          <div className="flex-shrink-0 mt-1">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-7 h-7 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold text-[18px] lg:text-[20px] mb-3 font-serif tracking-wide">
              Important Disclaimer
            </h4>
            <p className="text-gray-300 text-[14.5px] lg:text-[15.5px] leading-relaxed mb-4">
              Loan sanction and final terms are solely subject to the concerned bank/lender's credit, legal, technical, financial, and internal policies. <span className="text-white font-bold">KTR Consultants' role is to assist, prepare, coordinate, and follow-up.</span> We do not guarantee loan approvals.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Link to="/apply-online?category=msme" className="text-[#de9e48] hover:text-white font-bold text-[14px] uppercase tracking-wider transition-colors duration-300 flex items-center gap-2 group border-b border-[#de9e48]/30 pb-1">
                Start Your Funding Request
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MSMEDisclaimer;
