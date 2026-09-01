import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CibilServiceNav = ({ activeService = 'enquiry' }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isEnquiryActive = activeService === 'enquiry' || currentPath === '/cibil-services' || currentPath === '/cibil-enquiry';
  const isFakeLoanActive = activeService === 'fake-loan' || currentPath === '/fake-loan-removal' || currentPath === '/cibil-fake-loan-removal';

  return (
    <div className="w-full bg-[#f8fafc] border-b border-gray-200/90 pt-8 pb-6 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Breadcrumb & Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2 text-gray-500 text-xs font-medium mb-1.5">
              <Link to="/" className="hover:text-[#de9e48] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link to="/cibil-services" className="hover:text-[#de9e48] transition-colors">CIBIL Services</Link>
              <span className="text-gray-300">/</span>
              <span className="text-[#020d1c] font-semibold">
                {isFakeLoanActive ? 'Fake Loan Removal Services' : 'CIBIL Enquiry & Score Check'}
              </span>
            </div>
            <h2 className="text-[#020d1c] text-xl md:text-2xl font-bold font-serif tracking-tight">
              CIBIL & Credit Bureau Services
            </h2>
          </div>

          {/* Quick Assurance Chips */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Official Bureau Gateway
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#de9e48]"></span>
              Unmasked Bank Records
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-xs">
              <svg className="w-3 h-3 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              256-Bit Encrypted
            </span>
          </div>
        </div>

        {/* 2 Divided Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Service 1: CIBIL Enquiry & Score Check */}
          <Link
            to="/cibil-services"
            className={`group relative rounded-2xl p-5 md:p-6 transition-all duration-300 flex flex-col justify-between border-2 ${
              isEnquiryActive
                ? 'bg-white border-[#de9e48] shadow-[0_10px_30px_rgba(222,158,72,0.12)] ring-2 ring-[#de9e48]/20'
                : 'bg-white/80 border-gray-200/90 hover:border-gray-300 hover:bg-white hover:shadow-md'
            }`}
          >
            {/* Top Row: Service Number & Active Badge */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-[#020d1c] text-[#de9e48]">
                  Service 01
                </span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Instant Bureau Check
                </span>
              </div>
              {isEnquiryActive ? (
                <span className="inline-flex items-center gap-1.5 bg-[#de9e48]/15 text-[#020d1c] text-[11px] font-extrabold px-3 py-1 rounded-full border border-[#de9e48]/40 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#de9e48] animate-pulse"></span>
                  Active Selection
                </span>
              ) : (
                <span className="text-xs font-bold text-gray-400 group-hover:text-[#de9e48] transition-colors flex items-center gap-1">
                  View Service →
                </span>
              )}
            </div>

            {/* Title & Description */}
            <div className="mb-4">
              <div className="flex items-start gap-3">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                  isEnquiryActive ? 'bg-[#020d1c] text-[#de9e48]' : 'bg-gray-100 text-gray-600 group-hover:bg-[#020d1c] group-hover:text-[#de9e48]'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#020d1c] font-bold text-base md:text-lg font-serif">
                    CIBIL Enquiry & Credit Score Check
                  </h3>
                  <p className="text-gray-600 text-xs md:text-[13px] leading-relaxed mt-1">
                    Check your credit score from 4 official bureaus (CIBIL, Experian, CRIF, Equifax) and download the complete unmasked official PDF report instantly.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between flex-wrap gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-500">Available Bureaus:</span>
                <span className="font-bold text-[#020d1c] bg-gray-100 px-2 py-0.5 rounded text-[11px]">CIBIL ₹50</span>
                <span className="font-bold text-[#020d1c] bg-gray-100 px-2 py-0.5 rounded text-[11px]">Experian ₹30</span>
                <span className="font-bold text-[#020d1c] bg-gray-100 px-2 py-0.5 rounded text-[11px]">CRIF ₹30</span>
                <span className="font-bold text-[#020d1c] bg-gray-100 px-2 py-0.5 rounded text-[11px]">Equifax ₹25</span>
              </div>
              <span className={`font-bold text-xs ${isEnquiryActive ? 'text-[#de9e48]' : 'text-gray-500 group-hover:text-[#de9e48]'}`}>
                Check Score Now ↓
              </span>
            </div>
          </Link>

          {/* Service 2: Fake Loan Removal Services */}
          <Link
            to="/fake-loan-removal"
            className={`group relative rounded-2xl p-5 md:p-6 transition-all duration-300 flex flex-col justify-between border-2 ${
              isFakeLoanActive
                ? 'bg-white border-[#de9e48] shadow-[0_10px_30px_rgba(222,158,72,0.12)] ring-2 ring-[#de9e48]/20'
                : 'bg-white/80 border-gray-200/90 hover:border-gray-300 hover:bg-white hover:shadow-md'
            }`}
          >
            {/* Top Row: Service Number & Active Badge */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-[#020d1c] text-[#de9e48]">
                  Service 02
                </span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Dispute & Forensic Audit
                </span>
              </div>
              {isFakeLoanActive ? (
                <span className="inline-flex items-center gap-1.5 bg-[#de9e48]/15 text-[#020d1c] text-[11px] font-extrabold px-3 py-1 rounded-full border border-[#de9e48]/40 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#de9e48] animate-pulse"></span>
                  Active Selection
                </span>
              ) : (
                <span className="text-xs font-bold text-gray-400 group-hover:text-[#de9e48] transition-colors flex items-center gap-1">
                  View Service →
                </span>
              )}
            </div>

            {/* Title & Description */}
            <div className="mb-4">
              <div className="flex items-start gap-3">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                  isFakeLoanActive ? 'bg-[#020d1c] text-[#de9e48]' : 'bg-gray-100 text-gray-600 group-hover:bg-[#020d1c] group-hover:text-[#de9e48]'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#020d1c] font-bold text-base md:text-lg font-serif">
                    Fake Loan Removal Services
                  </h3>
                  <p className="text-gray-600 text-xs md:text-[13px] leading-relaxed mt-1">
                    Dispute unauthorized loans, fraud accounts, or clerical errors appearing on your CIBIL file. Includes comprehensive forensic review and dispute action plan.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between flex-wrap gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-500">Case Assessment Fee:</span>
                <span className="font-black text-[#020d1c] bg-[#de9e48]/15 text-[#020d1c] px-2 py-0.5 rounded text-[11px] border border-[#de9e48]/30">
                  ₹1,000 + GST
                </span>
                <span className="text-gray-400 text-[11px]">(Forensic Evaluation)</span>
              </div>
              <span className={`font-bold text-xs ${isFakeLoanActive ? 'text-[#de9e48]' : 'text-gray-500 group-hover:text-[#de9e48]'}`}>
                Apply For Removal →
              </span>
            </div>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default CibilServiceNav;
