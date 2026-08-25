import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "How quickly will you respond to my inquiry?",
    answer: "We aim to respond to all inquiries within 24 hours during regular business days."
  },
  {
    question: "Can I schedule a meeting with your consultants?",
    answer: "Yes, you can easily schedule a meeting by clicking the 'Schedule a Meeting' button or calling us directly."
  },
  {
    question: "What information should I include in my message?",
    answer: "Please include a brief overview of your business, the challenges you're facing, and what you hope to achieve with our services."
  },
  {
    question: "Do you offer free initial consultations?",
    answer: "Yes, we offer a complimentary 30-minute initial consultation to understand your needs and see how we can help."
  }
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pb-20 lg:pb-28 px-6 md:px-8 max-w-[1240px] mx-auto font-sans">
      <div className="bg-[#fcf7ee] rounded-2xl p-8 md:p-12 lg:p-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content & Illustration */}
          <div className="flex flex-col md:flex-row gap-8 items-center lg:items-center text-center md:text-left">
            
            {/* Custom SVG Illustration (Headset & Speech Bubble) */}
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                {/* Headset Band */}
                <path d="M 20 55 C 20 20, 80 20, 80 55" fill="none" stroke="#020d1c" strokeWidth="6" strokeLinecap="round" />
                {/* Earcups */}
                <rect x="14" y="50" width="12" height="24" rx="6" fill="#020d1c" />
                <rect x="74" y="50" width="12" height="24" rx="6" fill="#020d1c" />
                <circle cx="20" cy="62" r="3" fill="#de9e48" />
                {/* Microphone Arm */}
                <path d="M 20 74 C 20 85, 30 85, 40 85" fill="none" stroke="#de9e48" strokeWidth="4" strokeLinecap="round" />
                <rect x="40" y="82" width="10" height="6" rx="3" fill="#de9e48" />
                {/* Speech Bubble */}
                <path d="M 60 40 C 60 25, 95 25, 95 40 C 95 55, 75 55, 75 55 L 65 65 L 68 52 C 62 48, 60 44, 60 40 Z" fill="#020d1c" />
                {/* Dots in Speech Bubble */}
                <circle cx="71" cy="40" r="2.5" fill="#ffffff" />
                <circle cx="78" cy="40" r="2.5" fill="#ffffff" />
                <circle cx="85" cy="40" r="2.5" fill="#ffffff" />
              </svg>
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-[#020d1c] font-bold text-[26px] md:text-[30px] font-serif leading-tight mb-4">
                Have Questions?<br />
                We're <span className="text-[#de9e48]">Here to Help!</span>
              </h3>
              
              <p className="text-[#020d1c] text-[14.5px] font-medium leading-relaxed max-w-[320px] mx-auto md:mx-0 mb-8">
                If you have any questions or need more information about our services, feel free to reach out to us anytime.
              </p>

              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center border-2 border-[#de9e48] text-[#020d1c] font-bold text-[14px] px-6 py-2.5 rounded-lg hover:bg-[#de9e48] transition-colors duration-300"
              >
                View FAQs
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="flex flex-col gap-3.5">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4.5 flex items-center justify-between focus:outline-none"
                >
                  <span className="text-[#020d1c] font-bold text-[14.5px] pr-4">
                    {faq.question}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-[#020d1c] transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Answer (expandable) */}
                <div 
                  className={`px-6 text-gray-600 text-[14px] leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
