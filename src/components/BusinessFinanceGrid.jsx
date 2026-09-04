import React, { useState } from 'react';
import BusinessProductModal from './BusinessProductModal';

const businessSolutions = [
  {
    title: "Working Capital",
    desc: "Short term finance to manage your daily business operations.",
    fullDetails: "Working Capital Finance provides crucial short-term liquidity to maintain uninterrupted day-to-day operations, cover operational overheads, payroll, supplier liabilities, and inventory cycles without straining business cash flows.",
    keyHighlights: [
      "Customized limits aligned with sales turnover",
      "Flexible drawing power based on active receivables & stock",
      "Competitive interest rates with structured repayment",
      "Helps bridge the gap between payables and receivables"
    ],
    useCases: [
      "Bulk raw material purchase during high-demand seasons",
      "Managing routine operating expenses & vendor payments",
      "Sustaining sales credit cycles with corporate clients",
      "Emergency operational liquidity support"
    ],
    docsList: [
      "PAN & Aadhaar of Business & Promoters",
      "GST Returns (Past 12 Months)",
      "Bank Statements (Past 12 Months)",
      "Past 2–3 Years Financial Statements & ITR",
      "Stock & Debtors Statement (if applicable)"
    ],
    icon: (
      <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Equipment Finance",
    desc: "Finance for machinery, equipment and infrastructure needs.",
    fullDetails: "Equipment and Machinery Finance allows manufacturers, contractors, and service enterprises to purchase cutting-edge machinery, modern tools, vehicles, and plant equipment without exhausting liquid capital reserves.",
    keyHighlights: [
      "Up to 80%–90% funding on machinery invoice / quotation value",
      "Tenure extending from 3 to 7 years",
      "Machinery itself hypothecated as primary security",
      "Tax depreciation benefits on newly acquired capital assets"
    ],
    useCases: [
      "Industrial & manufacturing machinery installation",
      "Medical, diagnostic and hospital equipment acquisition",
      "Construction machinery (Excavators, Cranes, Mixers)",
      "Commercial printing, textile or packaging machinery"
    ],
    docsList: [
      "PAN & Aadhaar of Promoters & Entity",
      "Proforma Invoice / Quotation from Equipment Manufacturer",
      "12 Months Active Bank Statement",
      "Past 2–3 Years Audited Balance Sheet & P&L",
      "Business Profile & Factory / Workshop Proof"
    ],
    icon: (
      <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: "CC Limit",
    desc: "Cash Credit facility to support your working capital cycle.",
    fullDetails: "Cash Credit (CC) is a revolving credit facility extended by commercial banks against hypothecation of current assets (stock & book debts). Interest is levied strictly on the actual utilized balance rather than the entire sanctioned limit.",
    keyHighlights: [
      "Interest charged solely on daily utilized funds",
      "Annual renewal with periodic enhancement on turnover growth",
      "Seamless deposit and withdrawal facility anytime",
      "Backed by hypothecation of stock, raw materials & debtors"
    ],
    useCases: [
      "Maintaining buffer stock & warehouse raw materials",
      "Fulfilling recurring trade credit obligations",
      "Smoothing cyclical spikes in cash conversion cycles",
      "Continuous working capital cash stream"
    ],
    docsList: [
      "PAN, Aadhaar, GST Registration Certificate",
      "Latest 12 Months Current Account Bank Statements",
      "Past 3 Years Audited Financials with CMA Data",
      "Stock Statement & Debtors Aging Report",
      "Property Papers (for collateral security)"
    ],
    icon: (
      <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "OD Limit",
    desc: "Overdraft facility assistance where suitable.",
    fullDetails: "Overdraft (OD) facility provides pre-approved financial limits linked to current accounts or secured against collateral such as residential/commercial property, fixed deposits, or financial securities for prompt liquidity access.",
    keyHighlights: [
      "Immediate liquidity on demand with zero prepayment penalty",
      "Interest calculated purely on utilized tenure & amount",
      "Can be secured against property, FD, or clean business track",
      "Ideal for managing emergency liquidity deficits"
    ],
    useCases: [
      "Unplanned capital requirements or emergency business payments",
      "Short-term vendor settlements to capture cash discounts",
      "Bridging delay in customer invoice clearances",
      "Flexible standby fund buffer"
    ],
    docsList: [
      "PAN & Aadhaar of Promoters & Firm",
      "1 Year Current / CC Account Bank Statements",
      "Past 2–3 Years ITR with Computation",
      "Property / FD Security Proof Documents",
      "Business Registration Proof"
    ],
    icon: (
      <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "MSME Loans",
    desc: "Funding assistance for eligible micro, small and medium enterprises.",
    fullDetails: "Specialized government and bank-backed financing schemes tailored for eligible MSME enterprises. Offers concessional interest rates, subsidies under CGTMSE / credit guarantee schemes, and collateral-free loan options.",
    keyHighlights: [
      "Eligible for CGTMSE coverage (Collateral-free options available)",
      "Concessional interest rate structures for registered MSMEs",
      "Fast-track processing & structured term repayment",
      "Covers both capital expansion and operational fund needs"
    ],
    useCases: [
      "Setting up new workshop or business branch",
      "Technology adoption, digitalization and capacity building",
      "Scaling production lines & purchasing modern equipment",
      "Participation in government & corporate tenders"
    ],
    docsList: [
      "Udyam / MSME Registration Certificate",
      "PAN & Aadhaar of Promoters",
      "GST Returns & Bank Statements (Past 12 Months)",
      "Past 2–3 Years ITR & Balance Sheets",
      "Business Profile & Factory Lease / Ownership Proof"
    ],
    icon: (
      <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Mudra Loan",
    desc: "Loan assistance for eligible micro and small business requirements.",
    fullDetails: "Pradhan Mantri MUDRA Yojana (PMMY) facilitates loans up to ₹10–20 Lakhs for micro and small enterprises across Shishu, Kishore, and Tarun tiers without demanding immovable collateral security.",
    keyHighlights: [
      "No collateral / third-party guarantee required",
      "Three customized categories: Shishu, Kishore & Tarun",
      "Affordable interest rates with simple documentation",
      "Nominal processing charges with flexible repayment tenure"
    ],
    useCases: [
      "Micro manufacturing, retail shops and service setups",
      "Purchase of light commercial vehicles & small tools",
      "Initial business launch & working inventory",
      "Artisans, traders, workshops and rural enterprises"
    ],
    docsList: [
      "PAN & Aadhaar Card of Applicant",
      "Proof of Business Enterprise (Udyam / Shop Act)",
      "Bank Statement (Past 6 to 12 Months)",
      "Quotations of items / machinery to be purchased",
      "Passport Size Photographs"
    ],
    icon: (
      <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Project Finance",
    desc: "Finance assistance for new, expansion or eligible business projects.",
    fullDetails: "Structured long-term financing specifically arranged for capital-intensive industrial, infrastructural, commercial, educational, or manufacturing ventures based on projected cash flows and Detailed Project Reports (DPR).",
    keyHighlights: [
      "High-value funding capacity (Multi-Crore syndication)",
      "Comprehensive debt-equity structuring & moratorium period",
      "Structured disbursement tied to project construction milestones",
      "Expert CMA Data, TEV study and appraisal coordination"
    ],
    useCases: [
      "Setting up greenfield manufacturing plants / factories",
      "Commercial real estate, hotels, schools & hospitals setup",
      "Substantial industrial expansion or capacity multiplication",
      "Infrastructure development & industrial park projects"
    ],
    docsList: [
      "Comprehensive Detailed Project Report (DPR)",
      "Land Title Deeds & Government Clearances / Approvals",
      "Promoter Net Worth Certificates & KYC",
      "Provisional & Projected Financial Statements with TEV",
      "Quotations for Civil Works, Plant & Machinery"
    ],
    icon: (
      <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Term Loan",
    desc: "Business term loan for eligible business, expansion or asset requirements.",
    fullDetails: "Business Term Loans provide a lumpsum capital payout with structured Monthly Equated Installments (EMIs) over a specified tenure of 3 to 10 years for strategic expansion, factory upgrade, or asset procurement.",
    keyHighlights: [
      "Predictable EMI repayment structure for clean budgeting",
      "Competitive fixed or floating interest rate options",
      "Tenures ranging from 3 to 10 years",
      "Available under secured or partially secured arrangements"
    ],
    useCases: [
      "Long-term business capital expenditure (CapEx)",
      "Constructing commercial sheds, offices, or warehouse expansion",
      "Modernizing obsolete manufacturing infrastructure",
      "Strategic business acquisition or expansion"
    ],
    docsList: [
      "PAN & Aadhaar of Business & Promoters",
      "Past 3 Years Audited Financials with Tax Audit Reports",
      "Latest 12 Months Bank Statements (All Accounts)",
      "Collateral Property Documents / Registry Copies",
      "Sanction Letters of all ongoing loans (if any)"
    ],
    icon: (
      <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Machinery / Asset Finance",
    desc: "Finance assistance for eligible machinery and business assets.",
    fullDetails: "Tailored equipment asset loans designed to finance industrial production lines, heavy commercial equipment, CNC machines, and printing units with minimum equity contribution and customized EMI models.",
    keyHighlights: [
      "Funding up to 85% of machinery invoice cost",
      "Low processing turnaround with primary security on asset",
      "Flexible repayment aligned with business seasonal revenues",
      "Supports imported as well as domestic brand machinery"
    ],
    useCases: [
      "CNC, VMC & lathe machine acquisition",
      "Packaging, pharmaceutical, and food processing lines",
      "Automated printing presses and die cutters",
      "Solar plants, generators, and industrial transformers"
    ],
    docsList: [
      "KYC of Directors / Partners / Proprietor",
      "Detailed Machine Quotations / Proforma Invoices",
      "12 Months Active Bank Statements",
      "Past 2–3 Years ITR & Financials",
      "Electricity Bill of Factory / Premises"
    ],
    icon: (
      <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    )
  }
];

const BusinessFinanceGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="bg-[#fafbfc] py-16 lg:py-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="h-[1.5px] bg-[#de9e48]/40 w-8 md:w-12"></div>
          <h3 className="text-[#020d1c] text-[15px] md:text-[16px] font-bold tracking-[0.08em] uppercase">
            OUR BUSINESS FINANCE SOLUTIONS
          </h3>
          <div className="h-[1.5px] bg-[#de9e48]/40 w-8 md:w-12"></div>
        </div>

        {/* Grid / Flex Layout */}
        <div className="flex flex-wrap justify-center gap-5 lg:gap-6">
          {businessSolutions.map((solution, index) => {
            const isTopRow = index < 4;
            
            return (
              <div 
                key={index} 
                className={`w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-16px)] ${isTopRow ? 'xl:w-[calc(25%-18px)]' : 'xl:w-[calc(20%-20px)]'} bg-white border border-gray-100 rounded-xl p-5 md:p-6 hover:shadow-md transition-shadow duration-300 flex items-start gap-3 md:gap-4`}
              >
                {/* Icon Container */}
                <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-[#fef8f0] flex items-center justify-center relative">
                  {solution.icon}
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#de9e48] rounded-full hidden"></div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col h-full">
                  <h4 className="text-[#020d1c] font-bold text-[13px] md:text-[15px] mb-2 leading-tight">
                    {solution.title}
                  </h4>
                  <p className="text-gray-500 text-[11px] md:text-[12px] leading-relaxed mb-4 pr-2">
                    {solution.desc}
                  </p>
                  <button 
                    type="button"
                    onClick={() => setSelectedProduct(solution)}
                    className="inline-flex items-center text-[#de9e48] font-bold text-[12px] md:text-[13px] hover:text-[#c98e41] transition-colors mt-auto group w-max cursor-pointer"
                  >
                    Know More 
                    <svg className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Modal */}
      {selectedProduct && (
        <BusinessProductModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
        />
      )}
    </section>
  );
};

export default BusinessFinanceGrid;

