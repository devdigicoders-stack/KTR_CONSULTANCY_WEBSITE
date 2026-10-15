import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import EMICalculator from '../components/EMICalculator';

const HomeLoanLucknow = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('salaried');

  const faqs = [
    {
      q: 'What is the current home loan interest rate in Lucknow for 2026?',
      a: 'Home loan interest rates in Lucknow currently start from 8.35%* to 9.25% depending on your CIBIL score, income stability, and loan amount. KTR Consultants compares rates across SBI, HDFC, ICICI, Bank of Baroda, and PNB to get you the lowest rate.'
    },
    {
      q: 'Can I get a home loan on registry plots or non-LDA approved properties in Lucknow?',
      a: 'Yes! KTR Consultants specializes in arranging home loans and mortgage funding through nationalized and private banks for eligible properties in non-approved societies and registry plots across Lucknow, subject to legal title search and technical valuation.'
    },
    {
      q: 'What is the minimum CIBIL score required for a home loan in Lucknow?',
      a: 'Most banks prefer a CIBIL score of 750 or above for the lowest interest rates. However, if your score is between 650 and 750, or if you have negative remarks or fake loan disputes, KTR Consultants can help rectify your credit profile and still facilitate loan approval.'
    },
    {
      q: 'Which areas in Lucknow does KTR Consultants serve for Home Loans?',
      a: 'We provide door-step home loan services across all Lucknow locations including Gomti Nagar, Gomti Nagar Extension, Indira Nagar, Shaheed Path, Hazratganj, Alambagh, Ashiyana, Jankipuram, Raebareli Road, Faizabad Road, and Sultanpur Road.'
    },
    {
      q: 'Why should I apply through KTR Consultants instead of going directly to a bank?',
      a: 'When you visit a single bank, they only pitch their own products and rigid criteria. KTR Consultants works with 20+ partner banks. We assess your profile, select the bank offering the highest eligibility and lowest rate, resolve documentation bottlenecks, and manage the process end-to-end with zero upfront fees.'
    }
  ];

  const banks = [
    { name: 'State Bank of India', rate: 'From 8.40%*' },
    { name: 'HDFC Bank', rate: 'From 8.50%*' },
    { name: 'ICICI Bank', rate: 'From 8.60%*' },
    { name: 'Bank of Baroda', rate: 'From 8.40%*' },
    { name: 'Punjab National Bank', rate: 'From 8.45%*' },
    { name: 'LIC Housing Finance', rate: 'From 8.50%*' },
    { name: 'Axis Bank', rate: 'From 8.65%*' },
    { name: 'Tata Capital', rate: 'From 8.75%*' }
  ];

  const localities = [
    'Gomti Nagar & Extension',
    'Indira Nagar & Munshi Pulia',
    'Shaheed Path & Sultanpur Rd',
    'Hazratganj & Mahanagar',
    'Alambagh & Ashiyana',
    'Jankipuram & Vikas Nagar',
    'Raebareli Road & Telibagh',
    'Faizabad Road & Chinhat'
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen font-sans text-gray-800">
      <SEO 
        title="Best Home Loan in Lucknow | Lowest Rates 8.35%* | KTR Consultants"
        description="Apply for Home Loans in Lucknow with KTR Consultants (Gomti Nagar). Compare rates from 20+ banks (SBI, HDFC, ICICI, BOB, PNB, LIC HFL). Quick approvals, plot & flat financing, zero hassle."
        keywords="home loan in lucknow, best home loan lucknow, home loan interest rate lucknow, housing loan lucknow, home loan agent gomti nagar, home loan consultant lucknow, ktr consultants home loan"
        canonicalUrl="https://www.ktrconsultants.in/home-loan-in-lucknow"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#020d1c] via-[#051833] to-[#020d1c] text-white pt-10 pb-16 lg:pt-14 lg:pb-20 relative overflow-hidden">
        {/* Glow decorative effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#de9e48]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-gray-400 text-xs mb-6">
            <Link to="/" className="hover:text-[#de9e48] transition-colors">Home</Link>
            <span>›</span>
            <Link to="/loans" className="hover:text-[#de9e48] transition-colors">Loans</Link>
            <span>›</span>
            <span className="text-white font-medium">Home Loan in Lucknow</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
            {/* Left Hero Content */}
            <div className="w-full lg:w-[60%]">
              <div className="inline-flex items-center gap-2 bg-[#de9e48]/20 border border-[#de9e48]/40 px-3.5 py-1 rounded-full text-xs font-bold text-[#de9e48] uppercase tracking-wider mb-4">
                <span>🏆</span> Lucknow's #1 Housing Loan Advisory
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-[1.2] mb-4 text-white">
                Best Home Loan in Lucknow <br />
                <span className="text-[#de9e48]">Lowest Rates & Fast Disbursals</span>
              </h1>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                Buying a flat, building your dream house, or transferring an existing high-interest loan? KTR Consultants (Virat Khand, Gomti Nagar) compares 20+ nationalized and private banks to secure your sanction at lowest EMI.
              </p>

              {/* Quick Key Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <span className="text-xs text-gray-400 block">Interest Rates</span>
                  <span className="text-sm sm:text-base font-bold text-[#de9e48]">From 8.35%* p.a.</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <span className="text-xs text-gray-400 block">Max Tenure</span>
                  <span className="text-sm sm:text-base font-bold text-white">Up to 30 Years</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-3 col-span-2 sm:col-span-1">
                  <span className="text-xs text-gray-400 block">Partner Banks</span>
                  <span className="text-sm sm:text-base font-bold text-white">20+ Top Banks</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/apply-online?category=home-loan"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-black text-sm py-3.5 px-7 rounded-lg transition-all shadow-md hover:-translate-y-0.5 gap-2"
                >
                  <span>Apply for Home Loan</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>

                <a
                  href="https://wa.me/919918699696?text=Hi%2C%20I%20am%20looking%20for%20a%20Home%20Loan%20in%20Lucknow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 font-bold text-sm py-3 px-6 rounded-lg transition-all gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>Chat with Loan Officer</span>
                </a>
              </div>
            </div>

            {/* Right Card: Quick Consultation Form */}
            <div className="w-full lg:w-[38%] bg-white text-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold font-serif text-[#020d1c]">Check Eligibility</h3>
                  <p className="text-xs text-gray-500">Free consultation & rate quote in 10 mins</p>
                </div>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full uppercase">
                  Zero Fees
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Required Loan Amount</label>
                  <select className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:border-[#de9e48] outline-none">
                    <option>₹15 Lakhs - ₹30 Lakhs</option>
                    <option>₹30 Lakhs - ₹50 Lakhs</option>
                    <option>₹50 Lakhs - ₹1 Crore</option>
                    <option>₹1 Crore - ₹3 Crores+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Property Location in Lucknow</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Gomti Nagar, Shaheed Path, Indira Nagar" 
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:border-[#de9e48] outline-none" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Property Type</label>
                  <select className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:border-[#de9e48] outline-none">
                    <option>Ready-to-move Flat / House</option>
                    <option>Plot Purchase + Construction</option>
                    <option>Under-construction Builder Floor</option>
                    <option>Non-Approved Society / Private Colony</option>
                    <option>Home Loan Balance Transfer</option>
                  </select>
                </div>

                <Link
                  to="/apply-online?category=home-loan"
                  className="w-full block text-center bg-[#020d1c] hover:bg-[#0a1930] text-white font-bold py-3 rounded-lg text-sm transition-all shadow"
                >
                  Proceed to Full Application →
                </Link>

                <p className="text-[11px] text-gray-500 text-center">
                  🔒 Data secured with 256-bit encryption. No spam guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Banks Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
          <div className="text-center mb-8">
            <span className="text-[#de9e48] font-bold text-xs uppercase tracking-widest">COMPARE & SAVE</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#020d1c] mt-1">
              Home Loan Interest Rates Across Leading Banks
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {banks.map((b, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-4 text-center hover:border-[#de9e48] hover:shadow-md transition-all bg-[#fafafa]">
                <h4 className="font-bold text-sm text-[#020d1c] mb-1">{b.name}</h4>
                <p className="text-xs text-[#de9e48] font-black">{b.rate}</p>
                <span className="text-[10px] text-gray-400 block mt-1">Processing fee waiver available</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Home Loans Offered */}
      <section className="py-14 lg:py-20 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#de9e48] font-bold text-xs uppercase tracking-widest">TAILORED SOLUTIONS</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#020d1c] mt-1">
              Types of Housing Loans in Lucknow
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Whether purchasing, constructing, or mortgaging, we arrange approvals tailored to your budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm hover:border-[#de9e48] transition-all">
              <div className="w-12 h-12 bg-[#020d1c] text-[#de9e48] flex items-center justify-center rounded-lg text-xl mb-4">
                🏠
              </div>
              <h3 className="font-bold text-lg text-[#020d1c] mb-2">Flat / House Purchase Loan</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Sanctions for ready-to-move and under-construction flats from LDA, Awas Vikas, and top Lucknow private builders with up to 90% financing.
              </p>
              <span className="text-xs font-bold text-[#de9e48]">Tenure up to 30 Years →</span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm hover:border-[#de9e48] transition-all">
              <div className="w-12 h-12 bg-[#020d1c] text-[#de9e48] flex items-center justify-center rounded-lg text-xl mb-4">
                🏗️
              </div>
              <h3 className="font-bold text-lg text-[#020d1c] mb-2">Home Construction Loan</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Own a residential plot in Lucknow? Get staged disbursements for constructing your home according to architect estimates with low rates.
              </p>
              <span className="text-xs font-bold text-[#de9e48]">Staged Fund Releases →</span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm hover:border-[#de9e48] transition-all">
              <div className="w-12 h-12 bg-[#020d1c] text-[#de9e48] flex items-center justify-center rounded-lg text-xl mb-4">
                📑
              </div>
              <h3 className="font-bold text-lg text-[#020d1c] mb-2">Non-Approved Society Loans</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Specialized liaisoning for registered properties in non-approved societies and private colonies across Lucknow subject to title validation.
              </p>
              <Link to="/non-approved-loans" className="text-xs font-bold text-[#de9e48] hover:underline">
                Explore Non-Approved Loans →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm hover:border-[#de9e48] transition-all">
              <div className="w-12 h-12 bg-[#020d1c] text-[#de9e48] flex items-center justify-center rounded-lg text-xl mb-4">
                🔄
              </div>
              <h3 className="font-bold text-lg text-[#020d1c] mb-2">Home Loan Balance Transfer</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Paying 9.5%+ on your existing home loan? Transfer to a lower rate starting from 8.35%* and unlock an additional Top-Up loan.
              </p>
              <span className="text-xs font-bold text-[#de9e48]">Save ₹₹ Thousands Monthly →</span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm hover:border-[#de9e48] transition-all">
              <div className="w-12 h-12 bg-[#020d1c] text-[#de9e48] flex items-center justify-center rounded-lg text-xl mb-4">
                🏛️
              </div>
              <h3 className="font-bold text-lg text-[#020d1c] mb-2">Loan Against Property (LAP)</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Mortgage your residential or commercial property in Lucknow to raise big funds for business expansion, child education, or debt consolidation.
              </p>
              <span className="text-xs font-bold text-[#de9e48]">Up to 70% Property Value →</span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm hover:border-[#de9e48] transition-all">
              <div className="w-12 h-12 bg-[#020d1c] text-[#de9e48] flex items-center justify-center rounded-lg text-xl mb-4">
                🛠️
              </div>
              <h3 className="font-bold text-lg text-[#020d1c] mb-2">Home Renovation & Extension</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Upgrade your existing house with modern interiors, add extra floors, or repair foundations with quick sanctioned home improvement loans.
              </p>
              <span className="text-xs font-bold text-[#de9e48]">Fast Approval in 3 Days →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lucknow Localities We Serve */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
          <div className="text-center mb-8">
            <span className="text-[#de9e48] font-bold text-xs uppercase tracking-widest">LOCAL COVERAGE</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#020d1c] mt-1">
              Doorstep Home Loan Service Across Lucknow
            </h2>
            <p className="text-xs text-gray-500 mt-1">Our loan officers visit your home or office for complete document pickup and verification.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {localities.map((loc, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-[#fafafa] rounded-lg border border-gray-200 text-xs font-medium text-gray-700">
                <span className="text-[#de9e48] font-bold">📍</span>
                <span>{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-14 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#de9e48] font-bold text-xs uppercase tracking-widest">DOCUMENTATION CHECKLIST</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#020d1c] mt-1">
              Simple Paperwork, Hassle-Free Sanctions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6 justify-center">
              <button
                type="button"
                onClick={() => setActiveTab('salaried')}
                className={`py-3 px-6 text-sm font-bold border-b-2 transition-all ${
                  activeTab === 'salaried'
                    ? 'border-[#de9e48] text-[#020d1c]'
                    : 'border-transparent text-gray-400 hover:text-gray-700'
                }`}
              >
                Salaried Applicants
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('business')}
                className={`py-3 px-6 text-sm font-bold border-b-2 transition-all ${
                  activeTab === 'business'
                    ? 'border-[#de9e48] text-[#020d1c]'
                    : 'border-transparent text-gray-400 hover:text-gray-700'
                }`}
              >
                Self-Employed / Business
              </button>
            </div>

            {/* Tab Contents */}
            <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
              {activeTab === 'salaried' ? (
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>KYC Proof:</strong> PAN Card, Aadhaar Card, Passport / Voter ID</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Income Proof:</strong> Latest 3 Months Salary Slips with deductions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Bank Records:</strong> Latest 6 Months Salary Bank Account Statement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Tax Records:</strong> Latest 2 Years Form 16 / ITR details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Property Papers:</strong> Agreement to sell, builder allotment letter, or registry deed</span>
                  </li>
                </ul>
              ) : (
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>KYC Proof:</strong> PAN Card, Aadhaar Card of partners/proprietor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Business Proof:</strong> GST Registration, MSME Udyam, Shop Act license</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Financial Statements:</strong> 2-3 Years CA audited balance sheet & P&L with computation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Bank Records:</strong> Latest 12 Months Current Account Statement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Property Papers:</strong> Chain deeds, khatauni, sanction map (if available)</span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* EMI Calculator Section */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#de9e48] font-bold text-xs uppercase tracking-widest">EMI CALCULATOR</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#020d1c] mt-1">
              Calculate Your Home Loan Monthly Installment
            </h2>
            <p className="text-xs text-gray-500 mt-1">Estimate exact monthly outflow, principal breakdown, and interest charges.</p>
          </div>

          <EMICalculator embedded={true} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 lg:py-20 bg-[#f8fafc] border-t border-gray-200">
        <div className="max-w-[1000px] mx-auto px-4 lg:px-6 xl:px-8">
          <div className="text-center mb-12">
            <span className="text-[#de9e48] font-bold text-xs uppercase tracking-widest">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#020d1c] mt-1">
              Home Loan Queries & Answers
            </h2>
            <p className="text-xs text-gray-500 mt-1">Everything you need to know about getting a home loan in Lucknow.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((f, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between font-bold text-sm sm:text-base text-[#020d1c] hover:text-[#de9e48] transition-colors"
                >
                  <span>{f.q}</span>
                  <span className="text-lg ml-4 text-[#de9e48]">{activeFaq === idx ? '−' : '+'}</span>
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    <p className="mt-3">{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Banner */}
      <section className="bg-[#020d1c] text-white py-14 border-t border-[#de9e48]/30">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif mb-4 text-white">
            Ready to Own Your Dream Home in Lucknow?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-8">
            Speak to Lucknow's top home loan specialists at KTR Consultants. Quick eligibility check, transparent advice, and 20+ partner banks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/apply-online?category=home-loan"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-black py-3.5 px-8 rounded-lg text-sm transition-all shadow-lg"
            >
              Apply Online Today
            </Link>
            <a
              href="tel:+919918699696"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-lg text-sm transition-all border border-white/20"
            >
              Call: +91 99186 99696
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeLoanLucknow;
