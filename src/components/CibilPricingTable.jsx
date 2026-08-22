import React from 'react';
import { BUREAU_CONFIGS } from '../services/surepassApi';

const CibilPricingTable = () => {
  const bureaus = [
    {
      ...BUREAU_CONFIGS.cibil,
      recommended: true,
      coverage: 'All Public, Private, PSU & Foreign Banks',
      detailsLevel: 'Maximum (Bank Names + Full Account Numbers)',
      turnaround: 'Instant (Under 10 Seconds)',
      features: [
        'Complete TransUnion CIBIL 3-Digit Score',
        'Full Bank Names unmasked',
        'Complete Loan Account Numbers',
        'Active & Closed Loan History',
        'Credit Card Limits & Outstanding Balance',
        '36 Months Payment Repayment Trend',
        'Official Downloadable PDF Format'
      ]
    },
    {
      ...BUREAU_CONFIGS.crif,
      recommended: false,
      coverage: 'Banks, NBFCs & Microfinance Institutions (MFI)',
      detailsLevel: 'High (Commercial & Retail Depth)',
      turnaround: 'Instant (Under 10 Seconds)',
      features: [
        'CRIF High Mark Credit Score',
        'Microfinance & NBFC Account records',
        'Retail Loan Portfolio summary',
        'Delinquency & Default status',
        'Recent Credit Enquiries',
        'Official Downloadable PDF Format'
      ]
    },
    {
      ...BUREAU_CONFIGS.experian,
      recommended: false,
      coverage: 'Major Indian Banks & Global Institutions',
      detailsLevel: 'High (Global Risk Scoring)',
      turnaround: 'Instant (Under 10 Seconds)',
      features: [
        'Experian Credit Health Score',
        'Granular Payment History',
        'Credit Utilization Insights',
        'Hard Enquiry Tracker',
        'Risk Rating Analysis',
        'Official Downloadable PDF Format'
      ]
    },
    {
      ...BUREAU_CONFIGS.equifax,
      recommended: false,
      coverage: 'Retail Banks, Credit Card Companies',
      detailsLevel: 'Standard Summary',
      turnaround: 'Instant (Under 10 Seconds)',
      features: [
        'Equifax Credit Score',
        'Basic Loan Summary',
        'Credit Card Status',
        'Recent Inquiries',
        'Official Downloadable PDF Format'
      ]
    }
  ];

  return (
    <section className="bg-white py-14 lg:py-18 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-[#de9e48]/15 text-[#de9e48] border border-[#de9e48]/30 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest mb-3">
            Transparent Pricing
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-[#020d1c] mb-4">
            Compare Credit Report Plans & Bureaus
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Get 100% genuine official credit reports directly from RBI authorized credit bureaus with unmasked bank account numbers and instant PDF download.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {bureaus.map((item) => {
            return (
              <div
                key={item.id}
                className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative ${
                  item.recommended
                    ? 'bg-[#020d1c] text-white shadow-2xl border-2 border-[#de9e48] scale-[1.02] lg:-translate-y-2'
                    : 'bg-gray-50/70 text-gray-800 border border-gray-200 hover:shadow-lg hover:bg-white'
                }`}
              >
                {item.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#de9e48] text-[#020d1c] text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md tracking-wider">
                    ⭐ Client Favourite USP
                  </div>
                )}

                <div>
                  {/* Title & Badge */}
                  <div className="mb-4">
                    <h3 className={`text-lg font-bold ${item.recommended ? 'text-white' : 'text-[#020d1c]'}`}>
                      {item.name}
                    </h3>
                    <p className={`text-xs mt-1 ${item.recommended ? 'text-gray-300' : 'text-gray-500'}`}>
                      {item.badge}
                    </p>
                  </div>

                  {/* Price Section */}
                  <div className={`p-4 rounded-xl mb-6 ${item.recommended ? 'bg-gray-900/90 border border-gray-800' : 'bg-white border border-gray-200'}`}>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-[#de9e48]">
                        ₹{item.basePrice}
                      </span>
                      <span className={`text-xs ${item.recommended ? 'text-gray-400' : 'text-gray-500'}`}>
                        + 18% GST
                      </span>
                    </div>

                    <div className="mt-2 pt-2 border-t border-gray-700/40 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-gray-400">
                        Generation Time:
                      </span>
                      <span className={`text-xs font-bold ${item.recommended ? 'text-green-400' : 'text-green-600'}`}>
                        Instant PDF
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-6 text-xs">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <svg
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            item.recommended ? 'text-[#de9e48]' : 'text-green-600'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={item.recommended ? 'text-gray-200' : 'text-gray-600'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Link to Top Form */}
                <a
                  href="#cibil-form-top"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full py-3 rounded-xl font-bold text-xs text-center transition-all block ${
                    item.recommended
                      ? 'bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] shadow-lg shadow-[#de9e48]/20'
                      : 'bg-[#020d1c] hover:bg-gray-800 text-white'
                  }`}
                >
                  Download {item.shortName} Report
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CibilPricingTable;
