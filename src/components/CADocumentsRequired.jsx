import React, { useState } from 'react';

const CADocumentsRequired = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const docData = [
    {
      title: "1. GST Registration (Same Day GST Certificate)",
      docs: [
        "PAN Card of Business / Proprietor / Directors",
        "Aadhaar Card of Applicant / Partners / Directors",
        "Mobile Number & Valid E-mail ID",
        "Passport Size Photograph",
        "Business Address Proof (Electricity bill / Rent agreement / NOC)",
        "Property Ownership / Lease Documents",
        "Bank Account Details / Cancelled Cheque",
        "Business Constitution Documents (Partnership Deed / COI / MOA-AOA, if applicable)"
      ]
    },
    {
      title: "2. Income Tax Return (ITR) Filing",
      docs: [
        "PAN Card",
        "Aadhaar Card",
        "Previous ITR (if available)",
        "Form 16 / Salary Slips (for salaried individuals)",
        "Bank Account Statements (Past 6 to 12 months)",
        "Income & Investment Details (80C, 80D, LIC, PPF, etc.)",
        "Business / Professional Income & Expense Details (if applicable)"
      ]
    },
    {
      title: "3. GST Return Filing & Compliance",
      docs: [
        "GSTIN",
        "Sales invoices",
        "Purchase invoices",
        "Sales & purchase data",
        "Bank statements, where required",
        "Previous GST returns, if available",
        "Other business records as required"
      ]
    },
    {
      title: "4. Business Registration & Setup",
      docs: [
        "PAN Card and Aadhaar Card",
        "Photographs of directors/partners/proprietor",
        "Business address proof",
        "Business details (name, nature of business)",
        "Other documents depending on the type of registration (Proprietorship, Partnership, LLP, Pvt Ltd, MSME)"
      ]
    },
    {
      title: "5. Financial Statements & CA Certification",
      docs: [
        "Previous financial statements, if available",
        "Bank statements",
        "GST returns, if applicable",
        "ITRs (Income Tax Returns)",
        "Sales & purchase details",
        "Business financial records",
        "PAN/GST details"
      ]
    },
    {
      title: "6. CMA Data & Loan Documentation",
      docs: [
        "Previous 2–3 years financial statements, where available",
        "ITRs and GST returns",
        "Bank statements",
        "Existing loan details & Current outstanding liabilities",
        "Business turnover details",
        "Proposed loan requirement",
        "Other documents as required for the case"
      ]
    },
    {
      title: "7. Project Report / DPR",
      docs: [
        "Business details & Promoter details",
        "Project details & Estimated project cost",
        "Machinery/equipment quotations, if applicable",
        "Land/property details, if applicable",
        "Existing financial statements, if applicable",
        "Proposed funding requirement",
        "Other supporting documents as required"
      ]
    },
    {
      title: "8. Financial Projections",
      docs: [
        "Existing financial statements, if available",
        "ITRs and GST returns",
        "Current turnover details & Bank statements",
        "Proposed investment/project details",
        "Expected sales and expenses",
        "Loan requirement"
      ]
    },
    {
      title: "9. Income / Turnover / Net Worth Certificates",
      docs: [
        "PAN Card & Aadhaar Card",
        "ITRs",
        "Financial statements",
        "Bank statements",
        "GST returns, if applicable",
        "Relevant supporting documents"
      ]
    },
    {
      title: "10. Tax & GST Compliance / Notice Assistance",
      docs: [
        "PAN/GSTIN",
        "Notice/order received",
        "Previous returns",
        "Financial records",
        "Relevant correspondence/documents",
        "Other documents as required"
      ]
    },
    {
      title: "11. Audit Services",
      docs: [
        "Financial statements",
        "Books of accounts",
        "Bank statements",
        "GST/IT records",
        "Other documents as required based on the nature of the audit (Tax Audit, Statutory Audit, Internal Audit)"
      ]
    }
  ];

  return (
    <section className="bg-white py-16 font-sans border-t border-gray-100">
      <div className="max-w-[900px] mx-auto px-4 lg:px-6">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-[#020d1c] text-2xl md:text-[30px] font-bold mb-3">
            Documents Required for CA Services
          </h2>
          <p className="text-gray-600 text-[14.5px] md:text-[15px] font-medium max-w-2xl mx-auto">
            Please keep the following documents ready for a smooth and quick process.
          </p>
          <div className="w-16 h-1 bg-[#de9e48] rounded-full mx-auto mt-4 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full border border-[#de9e48]"></div>
          </div>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {docData.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-lg overflow-hidden transition-colors shadow-sm ${
                openIndex === index ? 'border-[#de9e48] bg-[#fffdfa]' : 'border-gray-200 bg-white hover:border-[#f0dfc8]'
              }`}
            >
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-4 md:px-6 md:py-4.5 text-left transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    openIndex === index ? 'bg-orange-100' : 'bg-gray-50'
                  }`}>
                    <svg className={`w-4 h-4 ${openIndex === index ? 'text-[#de9e48]' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className={`font-bold text-[15px] md:text-[16px] ${
                    openIndex === index ? 'text-[#a15f12]' : 'text-[#020d1c]'
                  }`}>
                    {item.title}
                  </span>
                </div>
                <span className={`transform transition-transform duration-300 ml-4 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className={`w-5 h-5 ${openIndex === index ? 'text-[#de9e48]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-[68px] pb-5 pt-1">
                  <p className="text-[13.5px] font-semibold text-gray-700 mb-3 border-b border-gray-100 pb-2">
                    Required Documents:
                  </p>
                  <ul className="space-y-2.5">
                    {item.docs.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-gray-600 text-[13.5px] md:text-[14px] leading-relaxed">
                        <svg className="w-4 h-4 text-[#de9e48] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CADocumentsRequired;
