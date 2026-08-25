import React from 'react';

const ContactFormSection = () => {
  const features = [
    {
      title: "100% Transparent Process",
      desc: "We believe in transparency at every step of your journey.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Expert Guidance",
      desc: "Get advice from experienced professionals for the best solutions.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Quick & Easy Support",
      desc: "We make the process simple, smooth and hassle-free.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Secure & Confidential",
      desc: "Your information is protected with highest security.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#fafafa] py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* Left Column: Form */}
          <div className="w-full lg:w-[42%] xl:w-[40%] bg-[#020d1c] rounded-2xl p-5 md:p-6 lg:p-8 shadow-2xl relative overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#de9e48]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-2 relative z-10">
              <h3 className="text-white font-bold font-serif text-[20px] md:text-[22px]">
                Send Us a Message
              </h3>
              <div className="h-[2px] w-8 bg-[#de9e48] mt-1"></div>
            </div>
            
            <p className="text-gray-400 text-[12.5px] mb-6 relative z-10">
              Fill out the form below and we'll get back to you.
            </p>

            <form className="flex flex-col gap-4 relative z-10">
              {/* Full Name */}
              <div className="flex flex-col gap-1">
                <label className="text-gray-300 text-[12px]">Full Name</label>
                <input type="text" placeholder="Enter your full name" className="w-full h-10 px-3.5 rounded-md bg-white border border-transparent outline-none focus:border-[#de9e48] transition-all text-gray-800 text-[13.5px] placeholder-gray-400" />
              </div>

              {/* Email & Phone */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-gray-300 text-[12px]">Email Address</label>
                  <input type="email" placeholder="Enter your email" className="w-full h-10 px-3.5 rounded-md bg-white border border-transparent outline-none focus:border-[#de9e48] transition-all text-gray-800 text-[13.5px] placeholder-gray-400" />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-gray-300 text-[12px]">Phone Number</label>
                  <input type="tel" placeholder="Enter your phone number" className="w-full h-10 px-3.5 rounded-md bg-white border border-transparent outline-none focus:border-[#de9e48] transition-all text-gray-800 text-[13.5px] placeholder-gray-400" />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1">
                <label className="text-gray-300 text-[12px]">Subject</label>
                <div className="relative">
                  <select className="w-full h-10 px-3.5 rounded-md bg-white border border-transparent outline-none focus:border-[#de9e48] transition-all text-gray-600 text-[13.5px] appearance-none cursor-pointer">
                    <option value="" disabled selected>Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Loan Assistance">Loan Assistance</option>
                    <option value="Property Consultation">Property Consultation</option>
                    <option value="CIBIL Services">CIBIL Services</option>
                  </select>
                  <svg className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1 mb-2">
                <label className="text-gray-300 text-[12px]">Message</label>
                <textarea 
                  placeholder="Type your message here..." 
                  className="w-full p-3.5 rounded-md bg-white border border-transparent outline-none focus:border-[#de9e48] transition-all text-gray-800 text-[13.5px] placeholder-gray-400 min-h-[90px] resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-1">
                <button type="button" className="bg-[#de9e48] hover:bg-[#c98e41] text-white font-bold text-[14px] px-8 py-2.5 rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm w-[220px]">
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Why Choose Us + Image Container */}
          <div className="w-full lg:w-[58%] xl:w-[60%] flex flex-col md:flex-row bg-white rounded-2xl shadow-[0_8px_30px_-5px_rgba(0,0,0,0.05)] overflow-hidden">
            
            {/* Info Section */}
            <div className="w-full md:w-[50%] p-6 lg:p-8 flex flex-col justify-center">
              <h3 className="text-[#020d1c] font-bold font-serif text-[18px] md:text-[20px] mb-2">
                Why Choose KTR Consultants?
              </h3>
              <div className="w-8 h-[2px] bg-[#de9e48] mb-6"></div>
              
              <div className="flex flex-col gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-3.5">
                    <div className="w-[36px] h-[36px] rounded-full bg-[#fdfaf5] flex items-center justify-center text-[#020d1c] flex-shrink-0 border border-[#de9e48]/20 shadow-sm">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-[#020d1c] font-bold text-[13px] mb-0.5 leading-tight">
                        {feature.title}
                      </h4>
                      <p className="text-gray-500 text-[12px] leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-[50%] h-[250px] md:h-auto relative">
              <img 
                src="/contactside.png" 
                alt="KTR Consultants Office" 
                className="w-full h-full object-cover"
              />
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
