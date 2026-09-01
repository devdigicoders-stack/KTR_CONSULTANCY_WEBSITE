import React from 'react';

const PropertyValuationOverview = ({ onSelectService }) => {
  return (
    <section className="bg-gray-50/50 py-12 lg:py-16 font-sans border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-8 bg-[#de9e48]"></div>
            <span className="text-[#de9e48] text-xs font-black tracking-widest uppercase">
              Choose The Service You Need
            </span>
            <div className="h-px w-8 bg-[#de9e48]"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-[#020d1c] tracking-tight">
            Our Dedicated Property Tax & Valuation Solutions
          </h2>
          <p className="text-gray-600 text-xs md:text-sm mt-2">
            Select the specialized service tailored to your transaction requirements.
          </p>
        </div>

        {/* 2 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Service 1: Property Valuation for Income Tax */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#020d1c] text-[#de9e48] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  Service 01
                </span>
                <span className="text-xs font-bold text-gray-500 uppercase">Valuation Report</span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#de9e48]/15 text-[#020d1c] flex items-center justify-center text-2xl flex-shrink-0">
                  📊
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-[#020d1c] group-hover:text-[#de9e48] transition-colors">
                    Property Valuation for Income Tax
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Need a valuation report for a property you have bought or sold?
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-5">
                We assist in arranging certified property valuation through qualified, registered government-approved valuers for:
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-6">
                {[
                  { title: 'Income Tax Submission', desc: 'Official valuation certificates acceptable by the Income Tax Department.' },
                  { title: 'Property Purchase / Sale Documentation', desc: 'Accurate market rate assessment supporting agreement and registry values.' },
                  { title: 'Capital Gains-Related Requirements', desc: 'Fair Market Value (FMV as on 01-04-2001) for indexed cost of acquisition calculation.' },
                  { title: 'Other Applicable Valuation Requirements', desc: 'Dispute settlements, probate, balance sheet, or banking assessment.' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="text-[#020d1c] font-semibold">{item.title}:</strong>{' '}
                      <span className="text-gray-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <button
                onClick={() => onSelectService && onSelectService('Property Valuation for Income Tax')}
                className="w-full bg-[#020d1c] hover:bg-[#0c2242] text-white font-bold text-xs py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group-hover:bg-[#de9e48] group-hover:text-[#020d1c]"
              >
                <span>Request Valuation Assistance</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Service 2: Property TDS Filing */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#020d1c] text-[#de9e48] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  Service 02
                </span>
                <span className="text-xs font-bold text-gray-500 uppercase">TDS Compliance</span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#de9e48]/15 text-[#020d1c] flex items-center justify-center text-2xl flex-shrink-0">
                  🧾
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-[#020d1c] group-hover:text-[#de9e48] transition-colors">
                    Property TDS Filing (Sec 194-IA)
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Bought or sold a property and need assistance with TDS compliance/filing?
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-5">
                We assist with the applicable property TDS process, documentation, and filing requirements to keep you 100% compliant:
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-6">
                {[
                  { title: 'Form 26QB Preparation & Filing', desc: 'Online filing of statement-cum-challan for payment of TDS under section 194-IA.' },
                  { title: 'PAN Verification of Buyer & Seller', desc: 'Cross-verification of Aadhaar-PAN linking and correct PAN records to avoid invalid challans.' },
                  { title: 'Challan Generation & Payment Assistance', desc: 'Step-by-step guidance on direct online tax payment through TIN-NSDL/IT portal.' },
                  { title: 'Form 16B Certificate Generation', desc: 'Download and issuance of official TDS Certificate (Form 16B) to the seller.' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="text-[#020d1c] font-semibold">{item.title}:</strong>{' '}
                      <span className="text-gray-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <button
                onClick={() => onSelectService && onSelectService('Property TDS Filing (Form 26QB)')}
                className="w-full bg-[#020d1c] hover:bg-[#0c2242] text-white font-bold text-xs py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group-hover:bg-[#de9e48] group-hover:text-[#020d1c]"
              >
                <span>Request TDS Filing Assistance</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PropertyValuationOverview;
