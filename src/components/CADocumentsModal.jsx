import React, { useEffect } from 'react';

const serviceDocMap = {
  "Income Tax Return (ITR) Filing": [
    "PAN Card",
    "Aadhaar Card",
    "Previous ITR (if available)",
    "Form 16 / Salary Slips (for salaried individuals)",
    "Bank Account Statements (Past 6 to 12 months)",
    "Income & Investment Details (80C, 80D, LIC, PPF, etc.)",
    "Business / Professional Income & Expense Details (if applicable)"
  ],
  "GST Registration": [
    "PAN Card of Business / Proprietor / Directors",
    "Aadhaar Card of Applicant / Partners / Directors",
    "Mobile Number & Valid E-mail ID",
    "Passport Size Photograph",
    "Business Address Proof (Electricity bill / Rent agreement / NOC)",
    "Property Ownership / Lease Documents",
    "Bank Account Details / Cancelled Cheque",
    "Business Constitution Documents (Partnership Deed / COI / MOA-AOA, if applicable)"
  ],
  "GST Return Filing & Compliance": [
    "GSTIN Number & Portal Credentials (if available)",
    "Monthly / Quarterly Sales Invoices / Summary",
    "Purchase Invoices & Bills",
    "Sales & Purchase Excel Data / Tally Backup",
    "Bank Statements (for verification)",
    "Previous GST Returns (GSTR-1, GSTR-3B, if available)",
    "ITC (Input Tax Credit) Reconciliation Records"
  ],
  "Business Registration & Setup": [
    "PAN Card and Aadhaar Card of Directors / Partners / Proprietor",
    "Passport Size Photographs of all promoters",
    "Registered Office Address Proof (Electricity bill / Rent Agreement + NOC)",
    "Proposed Business Names (2-3 options in order of preference)",
    "Object & Nature of Business Activity",
    "Supporting Registration Specific Documents (Proprietorship / Partnership / LLP / Pvt Ltd / MSME Udyam)"
  ],
  "Financial Statements & CA Certification": [
    "Previous 2-3 Years Financial Statements (if available)",
    "Bank Statements (Past 12 months for all active accounts)",
    "GST Returns (GSTR-3B & GSTR-1 for the relevant period)",
    "Income Tax Returns (ITRs with Computation)",
    "Sales, Purchase & Expense Summary Records",
    "Fixed Assets & Depreciation Details",
    "PAN and GST Details of Business"
  ],
  "CMA Data & Loan Documentation": [
    "Audited / Provisional Financial Statements (Past 2-3 years)",
    "ITRs with Computation (Past 2-3 years)",
    "GST Returns (Past 12 months)",
    "Bank Statements of all active accounts (Past 12 months)",
    "Existing Loan Sanction Letters & Outstanding Repayment Track",
    "Current Year Business Turnover & Estimated Projections",
    "Proposed Loan Requirement (CC/OD, Term Loan, LAP, MSME)"
  ],
  "Project Report / DPR": [
    "Business Profile & Promoter Profiles / Resumes",
    "Project Concept & Estimated Project Cost Breakdown",
    "Machinery, Equipment & Infrastructure Quotations (if applicable)",
    "Land / Property Details / Civil Construction Estimates (if applicable)",
    "Existing Business Financial Statements (if applicable)",
    "Proposed Debt-Equity Funding Requirement",
    "Market Potential & Expected Revenue Assumptions"
  ],
  "Financial Projections": [
    "Existing Financial Statements / Provisional Accounts",
    "Past ITRs and GST Returns",
    "Current Turnover & Bank Statements",
    "Proposed Investment & Expansion Outlay",
    "Projected Revenue, Direct Costs & Operating Expenses",
    "Required Loan / Investor Requirement Timeline"
  ],
  "Income / Turnover / Net Worth Certificates": [
    "PAN Card & Aadhaar Card of Applicant / Entity",
    "Last 1 to 3 Years ITRs with Computation Sheets",
    "Financial Statements (Balance Sheet & P&L)",
    "Bank Statements & Fixed Deposit / Mutual Fund / Demat Proofs",
    "Property Valuation Reports / Land Registry Papers (for Net Worth)",
    "GST Returns / Sales Invoices (for Turnover Certificate)"
  ],
  "Tax & GST Compliance / Notice Assistance": [
    "PAN / GSTIN Credentials",
    "Copy of Income Tax / GST Notice, Order or Intimation received",
    "Relevant Previous Returns filed (ITR / GST)",
    "Books of Accounts / Ledger Records corresponding to notice points",
    "Relevant Banking & Transaction Proofs",
    "Any previous reply or correspondence submitted"
  ],
  "Audit Services": [
    "Full Books of Accounts (Tally / Busy / ERP Backup)",
    "Financial Statements (Balance Sheet, P&L, Trial Balance)",
    "Bank Statements of all bank accounts (Complete Year)",
    "GST Returns & Monthly ITC Reconciliation",
    "Statutory Registers, Minutes & ROC Filings (for Companies)",
    "TDS / TCS Return Records & Challans",
    "Fixed Asset Register, Stock Valuation Sheet & Inventory Records"
  ]
};

const CADocumentsModal = ({ isOpen, onClose, service, onApplyClick }) => {
  const serviceTitle = typeof service === 'string' ? service : (service?.title || 'CA Service');
  
  // Lookup documents list with fallback
  const docs = serviceDocMap[serviceTitle] || [
    "PAN Card",
    "Aadhaar Card",
    "Bank Statement (Past 6 to 12 months)",
    "Previous ITR or Financial Statements (if applicable)",
    "Business Proof / Address Proof (if applicable)"
  ];

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#020d1c]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-10 my-auto">
        
        {/* Header */}
        <div className="bg-[#020d1c] text-white px-6 sm:px-8 py-5 sm:py-6 relative border-b border-gray-800">
          <div className="absolute top-0 right-0 w-64 h-32 bg-[#de9e48]/15 blur-3xl pointer-events-none"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
            title="Close modal"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="inline-flex items-center gap-2 bg-[#de9e48]/20 text-[#de9e48] border border-[#de9e48]/40 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2">
            <span>📄 Required Documents Checklist</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white leading-snug">
            {serviceTitle}
          </h3>
          <p className="text-gray-300 text-xs sm:text-[13px] mt-1.5 leading-relaxed">
            Keep these documents ready or upload them directly during online application.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[calc(80vh-140px)] overflow-y-auto font-sans space-y-5">
          
          <div className="bg-[#fdfaf5] border border-[#f5e3cd] rounded-xl p-4 flex items-start gap-3">
            <svg className="w-5 h-5 text-[#de9e48] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-[12.5px] text-gray-700 leading-relaxed">
              Clear scanned copies or clear photos from your phone in <strong>PDF, JPG, PNG, or DOC</strong> format are accepted.
            </p>
          </div>

          <div>
            <h4 className="text-[13px] font-bold text-[#020d1c] uppercase tracking-wider mb-3 flex items-center gap-2">
              <span>List of Required Documents ({docs.length}):</span>
            </h4>

            <ul className="space-y-2.5">
              {docs.map((doc, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start gap-3 text-gray-700 text-xs sm:text-[13.5px] bg-gray-50/80 hover:bg-orange-50/30 border border-gray-100 p-3 rounded-xl transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-[#de9e48]/15 border border-[#de9e48]/40 text-[#de9e48] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium leading-relaxed">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer"
          >
            Close
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              if (onApplyClick) onApplyClick(service);
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] rounded-xl text-xs sm:text-sm font-black transition-all shadow-[0_4px_14px_rgba(222,158,72,0.35)] hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>Request Quote with Documents</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default CADocumentsModal;
