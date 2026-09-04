
import React, { useState } from 'react';
import CADocumentsModal from './CADocumentsModal';
import CAApplyModal from './CAApplyModal';

const CAServicesList = () => {
  const [selectedServiceForDocs, setSelectedServiceForDocs] = useState(null);
  const [selectedServiceForApply, setSelectedServiceForApply] = useState(null);
  const [isDocsModalOpen, setIsDocsModalOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const handleOpenDocsModal = (service) => {
    setSelectedServiceForDocs(service);
    setIsDocsModalOpen(true);
  };

  const handleOpenApplyModal = (service) => {
    setSelectedServiceForApply(service);
    setIsApplyModalOpen(true);
  };

  const handleApplyFromDocs = (service) => {
    setIsDocsModalOpen(false);
    setSelectedServiceForApply(service);
    setIsApplyModalOpen(true);
  };

  const services = [
    {
      id: "01",
      title: "GST Registration",
      description: "Assistance with new GST registration and related documentation.",
      usp: "Same Day GST Certificate",
      icon: (
        <svg className="w-[26px] h-[26px] text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: "02",
      title: "Income Tax Return (ITR) Filing",
      description: "ITR filing for individuals, salaried, professionals, proprietors, firms and businesses.",
      icon: (
        <svg className="w-[26px] h-[26px] text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      id: "03",
      title: "GST Return Filing & Compliance",
      description: "GST return filing and compliance assistance for registered businesses.",
      icon: (
        <svg className="w-[26px] h-[26px] text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: "04",
      title: "Business Registration & Setup",
      description: "Proprietorship, Partnership, LLP, Private Limited Company, MSME/Udyam Registration and more.",
      icon: (
        <svg className="w-[26px] h-[26px] text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: "05",
      title: "Financial Statements & CA Certification",
      description: "Balance Sheet, P&L, Income/Turnover, Net Worth and CA certified financial statements.",
      icon: (
        <svg className="w-[26px] h-[26px] text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      id: "06",
      title: "CMA Data & Loan Documentation",
      description: "CMA Data and loan documents for CC/OD, Term Loan, MSME Loans, LAP and other finance requirements.",
      icon: (
        <svg className="w-[26px] h-[26px] text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      )
    },
    {
      id: "07",
      title: "Project Report / DPR",
      description: "Preparation of Project Reports / Detailed Project Reports for business expansion, new projects and project finance.",
      icon: (
        <svg className="w-[26px] h-[26px] text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: "08",
      title: "Financial Projections",
      description: "Financial projections for loan applications, project funding and business planning.",
      icon: (
        <svg className="w-[26px] h-[26px] text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: "09",
      title: "Income / Turnover / Net Worth Certificates",
      description: "Certificates required for loans, tenders, property transactions and other official purposes.",
      icon: (
        <svg className="w-[26px] h-[26px] text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: "10",
      title: "Tax & GST Compliance / Notice Assistance",
      description: "Assistance with tax & GST compliance, pending requirements and notices.",
      icon: (
        <svg className="w-[26px] h-[26px] text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: "11",
      title: "Audit Services",
      description: "Tax Audit, Statutory Audit, Internal Audit and other applicable audit and compliance services.",
      icon: (
        <svg className="w-[26px] h-[26px] text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m11 4.5L21 21m-2-5a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <section className="bg-[#fafafa] py-16 font-sans">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-[#020d1c] text-3xl md:text-[34px] font-bold mb-3">
              Our CA Services (11)
            </h2>
            <p className="text-gray-600 text-[14.5px] md:text-[15px] font-medium max-w-2xl mx-auto">
              Comprehensive solutions for all your tax, compliance and financial documentation needs.
            </p>
            <div className="w-16 h-1 bg-[#de9e48] rounded-full mx-auto mt-4 relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full border border-[#de9e48]"></div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 relative flex flex-col h-full group"
              >
                {/* Number */}
                <div className="absolute top-4 left-4 text-[#de9e48] font-bold text-[13px]">
                  {service.id}
                </div>

                {/* USP Badge (if available) */}
                {service.usp && (
                  <div className="absolute top-3.5 right-3 bg-gradient-to-r from-amber-500 to-[#de9e48] text-[#020d1c] font-black text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs flex items-center gap-1 border border-amber-300">
                    <span>⚡</span>
                    <span>{service.usp}</span>
                  </div>
                )}
                
                {/* Icon Circle */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-orange-50/70 group-hover:bg-orange-100/70 transition-colors flex items-center justify-center mb-3 sm:mb-4 mt-2">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-[#020d1c] font-bold text-[14.5px] sm:text-[15.5px] text-center leading-snug mb-1 min-h-[44px] flex items-center justify-center">
                  {service.title}
                </h3>

                {/* Highlight Tag under Title for USP */}
                {service.usp && (
                  <div className="mb-2 text-center">
                    <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-[11px] px-2.5 py-0.5 rounded-full border border-emerald-200">
                      ✓ Instant / Same Day Delivery
                    </span>
                  </div>
                )}
                
                {/* Description */}
                <p className="text-gray-600 text-[12.5px] sm:text-[13px] text-center leading-relaxed mb-5 flex-grow">
                  {service.description}
                </p>
                
                {/* Action Buttons: Documents Required + Apply Now */}
                <div className="w-full mt-auto space-y-2 pt-2 border-t border-gray-100">
                  
                  {/* Button 1: Documents Required */}
                  <button 
                    type="button"
                    onClick={() => handleOpenDocsModal(service)}
                    className="w-full py-2 px-3 rounded-lg border border-gray-200 bg-gray-50/90 hover:bg-orange-50/70 hover:border-[#de9e48]/50 text-gray-700 hover:text-[#de9e48] font-bold text-[12px] sm:text-[12.5px] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs active:scale-98"
                    title="View required documents list"
                  >
                    <span>📄 Documents Required</span>
                  </button>

                  {/* Button 2: Request Quote */}
                  <button 
                    type="button"
                    onClick={() => handleOpenApplyModal(service)}
                    className="w-full py-2.5 px-3 rounded-lg bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-black text-[12.5px] sm:text-[13px] transition-all shadow-xs hover:shadow flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                  >
                    <span>Request Quote</span>
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                </div>

              </div>
            ))}

            {/* Charges Banner */}
            <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 bg-[#fdfaf6] border border-[#f5e3cd] rounded-xl px-6 md:px-8 xl:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-6 h-full shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              
              <div className="flex items-start md:items-center gap-4 xl:gap-5 w-full md:w-auto">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10 xl:w-12 xl:h-12 text-[#d68529]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9.5" strokeWidth={1.8} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 16v-4m0-4h.01" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-[#cc7b18] font-bold text-[17px] xl:text-[19px] mb-1.5 leading-snug">
                    Charges: To be confirmed after discussion.
                  </h4>
                  <p className="text-[#4b5668] font-semibold text-[13px] xl:text-[14px] leading-relaxed max-w-[550px]">
                    The scope of work, documents, timeline and professional fees will be confirmed after reviewing your case and documents.
                  </p>
                </div>
              </div>
              
              <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                <img src="/calculator.png" alt="Calculator" className="w-[180px] xl:w-[220px] h-auto object-contain" />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Documents Required Checklist Modal */}
      <CADocumentsModal
        isOpen={isDocsModalOpen}
        onClose={() => {
          setIsDocsModalOpen(false);
          setSelectedServiceForDocs(null);
        }}
        service={selectedServiceForDocs}
        onApplyClick={handleApplyFromDocs}
      />

      {/* Direct Apply Now Modal */}
      <CAApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => {
          setIsApplyModalOpen(false);
          setSelectedServiceForApply(null);
        }}
        service={selectedServiceForApply}
        onViewDocsClick={(svc) => {
          setIsApplyModalOpen(false);
          setSelectedServiceForDocs(svc);
          setIsDocsModalOpen(true);
        }}
      />
    </>
  );
};

export default CAServicesList;
