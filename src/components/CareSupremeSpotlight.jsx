import React from 'react';

const CareSupremeSpotlight = ({ onApplyClick }) => {
  const highlights = [
    {
      icon: '🔥',
      title: '7X Coverage Growth',
      desc: 'Increase Sum Insured up to 7 times over 5 consecutive claim-free years via Cumulative Bonus Super.'
    },
    {
      icon: '♾️',
      title: 'Unlimited Automatic Recharge',
      desc: 'Sum Insured recharges automatically unlimited times in a policy year for multiple unrelated hospitalisations.'
    },
    {
      icon: '🚫',
      title: 'No Sub-Limits on Treatments',
      desc: 'Zero capping on ICU charges, room rent, AYUSH, and advanced robotic / modern medical treatments.'
    },
    {
      icon: '🏥',
      title: '22,100+ Cashless Hospitals',
      desc: 'Extensive network of 22,100+ healthcare providers across 1,400+ cities for instant cashless claims.'
    },
    {
      icon: '💻',
      title: 'Unlimited E-Consultations',
      desc: 'Free unlimited online consultations with qualified general physicians anytime via Care platform.'
    },
    {
      icon: '💰',
      title: 'Up to 30% Renewal Discount',
      desc: 'Earn lucrative premium renewal discounts up to 30% by achieving active fitness & wellness score targets.'
    }
  ];

  const coverageItems = [
    'In-Patient Hospitalisation',
    'Day-Care Procedures',
    'Advanced Technology Treatments',
    '60 Days Pre-Hospitalisation',
    '180 Days Post-Hospitalisation',
    'AYUSH Alternative Treatments',
    'Domiciliary Hospitalisation',
    'Organ Donor Medical Expenses',
    'Road Ambulance Cover',
    'Annual Health Check-Up',
    'Active Wellness Benefits',
    'No Room Rent Capping'
  ];

  return (
    <section className="bg-gradient-to-b from-[#020d1c] via-[#081830] to-[#020d1c] text-white py-14 lg:py-20 rounded-3xl my-8 relative overflow-hidden shadow-2xl border border-gray-800">
      
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#de9e48]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1300px] mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#de9e48]/20 text-[#de9e48] border border-[#de9e48]/40 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3">
            <span>🏆 Flagship Health Plan Spotlight</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight mb-3">
            Care Supreme Health Insurance
          </h2>
          
          <p className="text-base md:text-lg text-[#de9e48] font-bold">
            7X Potential Coverage Growth + Unlimited Automatic Recharge
          </p>
          
          <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
            Care Supreme from Care Health Insurance offers market-leading cumulative bonus structures, zero sub-limits on treatments, and an expansive cashless medical network.
          </p>
        </div>

        {/* 6 Key Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 hover:border-[#de9e48]/50 p-5 rounded-2xl transition-all duration-300 hover:bg-white/10 flex flex-col justify-between"
            >
              <div className="flex items-start gap-3.5 mb-3">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-white">{item.title}</h4>
                  <p className="text-xs text-gray-300 leading-relaxed mt-1">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Checklist Box */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold font-serif text-white flex items-center gap-2">
                <span className="text-[#de9e48]">✓</span> Comprehensive Coverage Checklist
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Every policy term designed to provide complete financial shelter during medical emergencies.
              </p>
            </div>
            <span className="text-xs bg-[#de9e48]/20 text-[#de9e48] border border-[#de9e48]/40 px-3 py-1 rounded-full font-bold self-start md:self-auto">
              60 Days Pre / 180 Days Post Hospitalisation
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {coverageItems.map((cov, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-200 bg-white/5 px-3 py-2 rounded-xl">
                <span className="text-emerald-400 font-bold">✓</span>
                <span className="truncate">{cov}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Consider Care Supreme Banner & Action */}
        <div className="bg-gradient-to-r from-[#de9e48]/20 via-[#de9e48]/10 to-[#de9e48]/20 border border-[#de9e48]/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Why Consider Care Supreme?
            </h4>
            <p className="text-xs sm:text-sm text-gray-200">
              Higher potential coverage + unlimited recharge + broad treatment coverage + extensive cashless network + wellness benefits.
            </p>
          </div>

          <button
            onClick={onApplyClick}
            className="flex-shrink-0 bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-black text-xs sm:text-sm px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Get Care Supreme Assistance →
          </button>
        </div>

      </div>
    </section>
  );
};

export default CareSupremeSpotlight;
