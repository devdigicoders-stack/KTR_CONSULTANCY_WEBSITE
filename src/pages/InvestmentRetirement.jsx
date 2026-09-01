import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import InsuranceQuickEnquiryForm from '../components/InsuranceQuickEnquiryForm';

const InvestmentRetirement = () => {
  const formRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const solutions = [
    {
      id: 'investment',
      icon: '💰',
      badge: 'Wealth Creation',
      title: 'Investment Plans',
      tagline: 'Structured Solutions for Long-Term Financial Goals',
      desc: 'Explore structured investment solutions designed for different time horizons and life milestones.',
      points: [
        'Long-term wealth creation & capital growth',
        'Goal-based planning (Children’s higher education & marriage)',
        'Systematic long-term savings discipline',
        'Guaranteed & hybrid savings options according to risk appetite'
      ]
    },
    {
      id: 'ulip',
      icon: '📊',
      badge: 'Insurance + Growth',
      title: 'ULIP Plans (Unit Linked)',
      tagline: 'Life Cover + Market-Linked Wealth in One Plan',
      desc: 'ULIPs combine life insurance protection with market investment. Premium is distributed between insurance coverage and chosen investment funds.',
      points: [
        'Equity-oriented funds (high growth potential)',
        'Debt and balanced funds (stability & capital preservation)',
        'Free fund switching options to navigate market cycles',
        'Tax benefits under applicable sections of Income Tax Act'
      ],
      note: 'Important: ULIPs are market-linked products. Returns are subject to market performance and applicable policy charges.'
    },
    {
      id: 'market',
      icon: '📈',
      badge: 'Market Strategy',
      title: 'Market-Linked Plans',
      tagline: 'Participate in Economic & Market Opportunities',
      desc: 'For customers looking for market-linked growth opportunities as part of a long-term diversified portfolio.',
      points: [
        'Comprehensive risk and return potential assessment',
        'Investment horizon alignment (5, 10, 15+ years)',
        'Transparent fee and fund management charge breakdown',
        'Our approach: We help you understand the product before you invest'
      ]
    },
    {
      id: 'retirement',
      icon: '👴',
      badge: 'Financial Independence',
      title: 'Retirement & Pension Plans',
      tagline: 'Plan Your Retirement Before Retirement Plans You',
      desc: 'Retirement planning should start early. A structured pension plan builds a substantial financial corpus to ensure regular monthly cash flow.',
      points: [
        'Retirement corpus creation with compound interest advantage',
        'Guaranteed regular income / lifelong annuity options',
        'Inflation-protected financial security in post-retirement years',
        'Customized pension solutions for different retirement horizons'
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#020d1c] via-[#091e3b] to-[#020d1c] text-white pt-10 pb-16 lg:pt-14 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#de9e48 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#de9e48]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-6">
            <Link to="/" className="hover:text-[#de9e48] transition-colors">Home</Link>
            <span className="text-gray-600">/</span>
            <Link to="/insurance-services" className="hover:text-[#de9e48] transition-colors">Insurance</Link>
            <span className="text-gray-600">/</span>
            <span className="text-[#de9e48] font-semibold">Investment & Retirement</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
            
            {/* Left Content */}
            <div className="w-full lg:w-[58%]">
              <div className="inline-flex items-center gap-2 bg-[#de9e48]/15 text-[#de9e48] border border-[#de9e48]/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-[#de9e48] animate-pulse"></span>
                📈 Long-Term Wealth & Pension Solutions
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold font-serif text-white leading-[1.18] mb-4">
                Invest Today. <br />
                <span className="text-[#de9e48]">Build Tomorrow.</span>
              </h1>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                Building wealth requires more than simply saving money in traditional accounts. The right investment and retirement strategy helps you work towards your long-term financial goals, children’s future, wealth creation, and comfortable retirement planning.
              </p>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-8">
                At <strong>KTR Consultants</strong>, we help you explore structured investment and insurance-linked financial solutions based on your age, financial goals, risk profile, and investment horizon.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={scrollToForm}
                  className="w-full sm:w-auto bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-black text-sm px-8 py-3.5 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(222,158,72,0.39)] hover:shadow-[0_6px_20px_rgba(222,158,72,0.25)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span>Get Investment Assistance</span>
                  <span className="text-lg">↓</span>
                </button>

                <Link
                  to="/insurance-services"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <span>View Protection Insurance →</span>
                </Link>
              </div>

            </div>

            {/* Right Pillars Highlight */}
            <div className="w-full lg:w-[40%]">
              <div className="bg-white/5 backdrop-blur-md border border-white/15 p-6 sm:p-7 rounded-3xl text-white shadow-2xl space-y-4">
                <span className="text-[#de9e48] text-xs font-bold uppercase tracking-wider block">
                  Our Advisory Framework
                </span>
                <h3 className="text-xl font-bold font-serif">
                  Understand → Compare → Choose → Invest
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  We don't simply push return numbers. We guide you through risk appetite, fund allocation, and lock-in conditions so you invest with complete clarity.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-center">
                    <span className="text-2xl block mb-1">🎯</span>
                    <strong className="text-xs text-white block">Goal Aligned</strong>
                    <span className="text-[10px] text-gray-400">Child & Family Future</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-center">
                    <span className="text-2xl block mb-1">🛡️</span>
                    <strong className="text-xs text-white block">Risk Analyzed</strong>
                    <span className="text-[10px] text-gray-400">Balanced Portfolio</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Main 4 Pillars Section */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 py-12 lg:py-16 space-y-16">
        
        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="bg-[#de9e48]/15 text-[#020d1c] text-xs font-extrabold px-3 py-1 rounded-full border border-[#de9e48]/30">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#020d1c] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#de9e48] font-bold uppercase tracking-wider mb-3">
                  {item.tagline}
                </p>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* Points */}
                <ul className="space-y-2.5 mb-6">
                  {item.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-gray-700">
                      <span className="text-emerald-500 font-bold text-sm">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.note && (
                <div className="bg-amber-50 border border-amber-200 text-amber-900 text-[11px] p-3 rounded-xl leading-relaxed mt-2 mb-4">
                  {item.note}
                </div>
              )}

              <button
                onClick={scrollToForm}
                className="w-full bg-[#020d1c] hover:bg-[#0c2242] text-white font-bold text-xs py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 hover:text-[#de9e48]"
              >
                <span>Request {item.title} Guidance</span>
                <span>→</span>
              </button>

            </div>
          ))}
        </div>

        {/* Quick Enquiry Form Section */}
        <section ref={formRef} className="scroll-mt-20">
          <div className="max-w-2xl mx-auto">
            <InsuranceQuickEnquiryForm
              category="Investment Plans"
              title="Investment & Retirement Assistance"
              subtitle="Only 4 details required. Our certified financial advisor will reach out to discuss suitable tailored options."
              showInvestmentOptions={true}
              buttonText="Get Investment Assistance"
              customId="investment-enquiry-form"
            />
          </div>
        </section>

        {/* Important Statutory Disclaimer */}
        <section className="bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8">
          <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span>⚠️</span> Important Statutory Investment Disclaimer
          </h4>
          <p className="text-[11.5px] text-gray-600 leading-relaxed">
            Investment products, ULIPs and market-linked plans are subject to market risks, product terms, fund performance, applicable charges and underwriting policy conditions. Returns are not guaranteed unless specifically stated by the respective insurance / financial product. Customers should carefully review the official product brochures, sales illustrations, and policy documents before investing.
          </p>
        </section>

      </div>
    </div>
  );
};

export default InvestmentRetirement;
