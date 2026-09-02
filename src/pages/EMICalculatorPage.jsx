import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import EMICalculator from '../components/EMICalculator';
import LoansBottomCTA from '../components/LoansBottomCTA';

const EMICalculatorPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "What is an EMI and how is it calculated?",
      a: "EMI stands for Equated Monthly Installment. It is a fixed monthly payment made by a borrower to a bank or financial institution on a specified date each calendar month until the loan is fully repaid. It comprises both principal and interest components calculated using the standard reducing balance method."
    },
    {
      q: "How does loan tenure affect my monthly EMI and total interest?",
      a: "A longer loan tenure (e.g. 20–30 years) reduces your monthly EMI amount, making it easier on your monthly cash flow. However, it significantly increases the total interest paid over the life of the loan. A shorter tenure increases monthly EMI but minimizes overall interest outgo."
    },
    {
      q: "Can I get a loan for a property in a Non-Approved Society?",
      a: "Yes! KTR Consultants specializes in arranging property loans for eligible properties located in non-approved societies through Nationalized Banks, subject to clear title verification and technical bank assessment."
    },
    {
      q: "Does prepaying part of the loan reduce EMI or tenure?",
      a: "When you make part-prepayments, banks generally allow you to either reduce the remaining loan tenure (keeping EMI constant) to save maximum interest, or reduce the monthly EMI amount to ease your monthly budget."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans">
      
      {/* Hero Header Section */}
      <section className="bg-[#020d1c] text-white pt-10 pb-16 md:pt-14 md:pb-20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#de9e48]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-4">
            <Link to="/" className="hover:text-[#de9e48] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/loans" className="hover:text-[#de9e48] transition-colors">Loans</Link>
            <span>/</span>
            <span className="text-[#de9e48] font-bold">EMI & Financial Calculator</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#de9e48]/20 text-[#de9e48] border border-[#de9e48]/30 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-[#de9e48] animate-pulse"></span>
              Free Official Banking Calculator
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight mb-4">
              Loan EMI & <span className="text-[#de9e48]">Financial Planning Calculator</span>
            </h1>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
              Calculate your exact monthly installments, total interest payable, and full yearly amortization schedule for Home Loans, LAP, Business Finance, and Construction Loans.
            </p>

            {/* Quick Assurance Tags */}
            <div className="flex items-center gap-3 flex-wrap mt-6 text-xs text-gray-300">
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                <span className="text-emerald-400 font-bold">✓</span> 100% Accurate Banking Formula
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                <span className="text-[#de9e48] font-bold">✓</span> Full Amortization Table
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                <span className="text-emerald-400 font-bold">✓</span> Instant Bank Application
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Main EMI Calculator Section */}
      <section className="-mt-8 md:-mt-12 relative z-20">
        <EMICalculator embedded={true} />
      </section>

      {/* Educational & Financial Insights Section */}
      <section className="py-14 md:py-18 bg-white border-t border-gray-200/80 mt-12">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#020d1c] mb-3">
              How Loan EMI is Calculated
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Banks and housing finance companies use the standard mathematical reducing balance formula to compute your Equated Monthly Installment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#fcfbf9] border border-[#e8d5b7] p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#020d1c] text-[#de9e48] font-black flex items-center justify-center mb-4 text-sm">
                P
              </div>
              <h3 className="font-bold text-[#020d1c] text-base mb-2">1. Principal (Loan Amount)</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                The total amount borrowed from the bank. Higher principal amounts result in proportionately higher monthly EMIs and interest.
              </p>
            </div>

            <div className="bg-[#fcfbf9] border border-[#e8d5b7] p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#020d1c] text-[#de9e48] font-black flex items-center justify-center mb-4 text-sm">
                R
              </div>
              <h3 className="font-bold text-[#020d1c] text-base mb-2">2. Rate of Interest</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                The annual interest rate charged by the bank. Even a 0.5% difference in interest rate can save lakhs over a 20-year tenure.
              </p>
            </div>

            <div className="bg-[#fcfbf9] border border-[#e8d5b7] p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#020d1c] text-[#de9e48] font-black flex items-center justify-center mb-4 text-sm">
                N
              </div>
              <h3 className="font-bold text-[#020d1c] text-base mb-2">3. Tenure (Duration)</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                The number of months or years chosen to repay the loan. Longer tenures reduce monthly burden but accumulate higher interest.
              </p>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold font-serif text-[#020d1c] mb-6 text-center">
              Frequently Asked Questions on Loan EMI
            </h3>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-[#020d1c] text-sm mb-2 flex items-start gap-2">
                    <span className="text-[#de9e48] font-black">Q.</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed pl-5">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <LoansBottomCTA />

    </div>
  );
};

export default EMICalculatorPage;
