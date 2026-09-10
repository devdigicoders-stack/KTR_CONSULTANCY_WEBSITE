import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const testimonialsData = [
  {
    text: "KTR Consultants made our home loan process so easy. Their team is very professional and supportive.",
    name: "Ramesh Sharma",
    role: "Home Loan Client",
    image: "/ramesh_sharma.jpg"
  },
  {
    text: "We got Mudra loan for our business within few days. Great experience with KTR team.",
    name: "Sunita Verma",
    role: "Business Owner",
    image: "/sunita_verma.jpg"
  },
  {
    text: "Excellent service for CIBIL report. Detailed information with bank names and account numbers.",
    name: "Amit Kumar",
    role: "Entrepreneur",
    image: "/amit_kumar.jpg"
  }
];

const faqsData = [
  {
    q: "What types of loans do you offer?",
    a: "We offer Home Loans, Mortgage Loans (LAP), Business & MSME Loans, Mudra Loans, Personal Loans, and Loans against Lal Dora / Non-approved / Chain Deed properties across 50+ partner banks & NBFCs."
  },
  {
    q: "Do you provide loan for non-approved society property?",
    a: "Yes, we specialize in funding for unapproved colony properties, Gram Sabha land, lal dora properties, and chain deed properties through select specialized NBFCs and private funding partners."
  },
  {
    q: "How long does the loan process take?",
    a: "Standard loan approvals typically take 3 to 7 working days depending on the property type and verification. Unsecured business and personal loans can be processed in as fast as 48 to 72 hours."
  },
  {
    q: "What documents are required for loan?",
    a: "Primary documents include PAN Card, Aadhaar Card, Income Proof (Salary Slips / ITR), 6-month Bank Statements, and Complete Property Chain Documents (Registry, Mutation, Electricity Bill)."
  }
];

const Testimonials = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(prevIndex => prevIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white py-16 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-12">
          
          {/* Left Side: Testimonials Carousel */}
          <div className="w-full xl:w-[65%] 2xl:w-[70%]">
            <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar">
              {testimonialsData.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-100 rounded-xl p-6 md:p-8 flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center flex flex-col shadow-sm"
                >
                  {/* Quote Icon */}
                  <div className="text-[#de9e48] mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-[#020d1c] text-[13px] md:text-[14px] font-medium leading-relaxed flex-grow mb-8 opacity-90">
                    {testimonial.text}
                  </p>
                  
                  {/* Client Info */}
                  <div className="flex items-center gap-3 mt-auto">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-gray-100"
                    />
                    <div>
                      <h4 className="text-[#020d1c] font-bold text-[13px] md:text-[14px] tracking-tight">{testimonial.name}</h4>
                      <p className="text-gray-500 text-[11px] md:text-[12px] font-medium mt-0.5">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#020d1c]"></div>
              <div className="w-2 h-2 rounded-full bg-gray-200"></div>
              <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            </div>
          </div>

          {/* Right Side: FAQ Accordion */}
          <div className="w-full xl:w-[35%] 2xl:w-[30%] flex flex-col pt-2 xl:pt-0">
            <h3 className="text-[#de9e48] text-[15px] font-bold tracking-wide uppercase mb-6 pl-1">
              FREQUENTLY ASKED QUESTIONS
            </h3>
            
            <div className="flex flex-col gap-3 mb-6">
              {faqsData.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`bg-white border rounded-xl transition-all duration-200 overflow-hidden ${
                      isOpen ? 'border-[#de9e48]/60 shadow-sm ring-1 ring-[#de9e48]/20' : 'border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-5 py-3.5 flex items-center justify-between gap-3 cursor-pointer"
                    >
                      <span className={`text-[13px] md:text-[14px] font-semibold transition-colors ${
                        isOpen ? 'text-[#020d1c] font-bold' : 'text-[#020d1c]'
                      }`}>
                        {faq.q}
                      </span>
                      <div className={`text-[#de9e48] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-[12.5px] text-gray-600 leading-relaxed border-t border-gray-50 animate-fadeIn">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
