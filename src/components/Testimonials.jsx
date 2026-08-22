import React from 'react';
import { Link } from 'react-router-dom';

const testimonialsData = [
  {
    text: "KTR Consultants made our home loan process so easy. Their team is very professional and supportive.",
    name: "Ramesh Sharma",
    role: "Home Loan Client",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "We got Mudra loan for our business within few days. Great experience with KTR team.",
    name: "Sunita Verma",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "Excellent service for CIBIL report. Detailed information with bank names and account numbers.",
    name: "Amit Kumar",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  }
];

const faqsData = [
  "What types of loans do you offer?",
  "Do you provide loan for non-approved society property?",
  "How long does the loan process take?",
  "What documents are required for loan?"
];

const Testimonials = () => {
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

          {/* Right Side: FAQ */}
          <div className="w-full xl:w-[35%] 2xl:w-[30%] flex flex-col pt-2 xl:pt-0">
            <h3 className="text-[#de9e48] text-[15px] font-bold tracking-wide uppercase mb-6 pl-1">
              FREQUENTLY ASKED QUESTIONS
            </h3>
            
            <div className="flex flex-col gap-3 mb-6">
              {faqsData.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-100 rounded-lg px-5 py-4 flex items-center justify-between cursor-pointer hover:border-gray-200 hover:shadow-sm transition-all"
                >
                  <span className="text-[#020d1c] text-[13px] md:text-[14px] font-semibold pr-4">
                    {faq}
                  </span>
                  <div className="text-[#de9e48] flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              ))}
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
