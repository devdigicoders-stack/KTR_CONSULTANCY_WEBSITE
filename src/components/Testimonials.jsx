import React from 'react';

const testimonials = [
  {
    text: "KTR Consultants transformed our business operations with their strategic insights and professional approach.",
    name: "John Doe",
    role: "CEO, TechVision Inc.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "Their team is highly professional and delivered results beyond our expectations.",
    name: "Jane Smith",
    role: "Director, GrowthPlus",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "Excellent support, in-depth knowledge and commitment to client success.",
    name: "Michael Brown",
    role: "Founder, InnoWorks",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-[#fcfbf9] py-16 md:py-24 font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h3 className="text-[#de9e48] text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            CLIENT TESTIMONIALS
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#020d1c] font-serif mb-4 leading-tight">
            Trusted by Businesses Like Yours
          </h2>
          {/* Small golden underline separator */}
          <div className="w-12 h-[2px] bg-[#de9e48] mt-2"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Quote Icon */}
              <svg className="w-8 h-8 text-[#de9e48] mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              {/* Testimonial Text */}
              <p className="text-gray-600 text-[15px] leading-relaxed font-light flex-grow mb-8">
                {testimonial.text}
              </p>
              
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#de9e48]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Client Info */}
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h4 className="text-[#020d1c] font-bold text-sm tracking-tight">{testimonial.name}</h4>
                  <p className="text-gray-500 text-[13px] font-light mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
