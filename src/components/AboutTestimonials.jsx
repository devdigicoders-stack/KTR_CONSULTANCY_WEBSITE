
const testimonialsData = [
  {
    text: "KTR Consultants made our home loan process so easy. Their team is very professional, responsive and supportive.",
    name: "Ramesh Sharma",
    role: "Home Loan Client",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "Excellent support for our business loan. Everything was handled smoothly from documentation to funding.",
    name: "Sunita Verma",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "Detailed CIBIL report with bank name and account details. Very reliable and trustworthy service.",
    name: "Amit Kumar",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  }
];

const QuoteIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-[#de9e48]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4 md:w-[18px] md:h-[18px] text-[#de9e48]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const AboutTestimonials = () => {
  return (
    <section className="bg-[#fcfcfd] pb-12 md:pb-16 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 lg:mb-10">
          <h3 className="text-[#de9e48] font-bold text-[13px] tracking-wide uppercase">
            WHAT OUR CLIENTS SAY
          </h3>
          <div className="h-px bg-[#de9e48]/40 w-12"></div>
        </div>

        {/* Testimonials Grid / Carousel */}
        <div className="w-full overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory">
          <div className="flex gap-4 lg:gap-6 min-w-full w-max lg:w-auto">
            {testimonialsData.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-100 rounded-[20px] p-6 lg:p-8 xl:p-10 shadow-sm w-[300px] sm:w-[350px] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-center"
              >
                <div className="flex gap-4 md:gap-5 h-full">
                  
                  {/* Left Column (Quote & Avatar) */}
                  <div className="flex flex-col justify-between flex-shrink-0">
                    <div className="pt-1">
                      <QuoteIcon />
                    </div>
                    <div className="mt-8 lg:mt-auto">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-[42px] h-[42px] md:w-[48px] md:h-[48px] rounded-full object-cover border border-gray-100 shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Right Column (Text, Stars, Name) */}
                  <div className="flex flex-col h-full">
                    <p className="text-[#020d1c] text-[13px] xl:text-[14px] font-medium leading-relaxed mb-4 opacity-90">
                      {testimonial.text}
                    </p>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                    
                    <div className="mt-auto flex flex-col justify-center min-h-[42px] md:min-h-[48px]">
                      <h4 className="text-[#020d1c] font-bold text-[14px] md:text-[15px] tracking-tight leading-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-[11px] md:text-[12px] font-medium mt-1 leading-tight">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots (Visual only, matches screenshot) */}
        <div className="flex justify-center gap-2 mt-4 lg:mt-6">
          <div className="w-[6px] h-[6px] rounded-full bg-[#020d1c]"></div>
          <div className="w-[6px] h-[6px] rounded-full border border-gray-300"></div>
          <div className="w-[6px] h-[6px] rounded-full border border-gray-300"></div>
        </div>

      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default AboutTestimonials;
