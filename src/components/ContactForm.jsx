import React from 'react';

const ContactForm = () => {
  return (
    <section className="pb-20 lg:pb-28 px-6 md:px-8 max-w-[1240px] mx-auto font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        
        {/* Left Column: Send Us a Message */}
        <div className="bg-white rounded-[14px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 p-8 lg:p-10">
          
          <h3 className="text-[#020d1c] font-bold text-[22px] lg:text-[24px] font-serif mb-2">
            Send Us a Message
          </h3>
          <div className="w-10 h-[3px] bg-[#de9e48] mb-6"></div>
          
          <p className="text-gray-500 text-[14px] leading-relaxed mb-8 max-w-md">
            Fill out the form below and our team will get back to you 
            as soon as possible.
          </p>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name *" 
                  className="w-full bg-[#fcfcfc] border border-gray-200 rounded-lg px-4 py-3.5 text-[14px] text-gray-700 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-colors"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email *" 
                  className="w-full bg-[#fcfcfc] border border-gray-200 rounded-lg px-4 py-3.5 text-[14px] text-gray-700 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number *" 
                  className="w-full bg-[#fcfcfc] border border-gray-200 rounded-lg px-4 py-3.5 text-[14px] text-gray-700 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-colors"
                  required
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Subject *" 
                  className="w-full bg-[#fcfcfc] border border-gray-200 rounded-lg px-4 py-3.5 text-[14px] text-gray-700 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[13.5px] text-gray-600 mb-2 font-medium">Service Interested In</label>
              <div className="relative">
                <select className="w-full bg-[#fcfcfc] border border-gray-200 rounded-lg px-4 py-3.5 text-[14px] text-gray-600 appearance-none focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-colors">
                  <option value="">Select a Service</option>
                  <option value="business-strategy">Business Strategy</option>
                  <option value="digital-transformation">Digital Transformation</option>
                  <option value="operations">Operations Consulting</option>
                  <option value="data-analytics">Data & Analytics</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <textarea 
                placeholder="Your Message *" 
                rows="5"
                className="w-full bg-[#fcfcfc] border border-gray-200 rounded-lg px-4 py-3.5 text-[14px] text-gray-700 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-colors resize-none"
                required
              ></textarea>
            </div>

            <div>
              <button 
                type="button" 
                className="inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c88d3e] text-[#020d1c] font-bold text-[14.5px] px-8 py-3.5 rounded-lg transition-colors duration-300"
              >
                Send Message
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>

        </div>

        {/* Right Column: Office Location */}
        <div className="bg-white rounded-[14px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 p-8 lg:p-10 flex flex-col">
          
          <h3 className="text-[#020d1c] font-bold text-[22px] lg:text-[24px] font-serif mb-2">
            Our Office Location
          </h3>
          <div className="w-10 h-[3px] bg-[#de9e48] mb-8"></div>
          
          {/* Map Embed Placeholder */}
          <div className="w-full h-[240px] bg-gray-100 rounded-xl mb-8 overflow-hidden relative">
             {/* Using an iframe for the map to make it realistic. */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528001004!2d-74.14482813137996!3d40.69748809072494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
              {/* Optional custom overlay for the "KTR Consultants" tag if we wanted to fake it exactly */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full mb-4 bg-white px-4 py-3 rounded-lg shadow-lg hidden md:block z-10 w-[240px]">
                <h4 className="text-[#020d1c] font-bold text-[13px] mb-1">KTR Consultants</h4>
                <p className="text-gray-500 text-[11px] leading-tight">123 Business Avenue, Suite 100, New York, NY 10001, USA</p>
                {/* Pointer arrow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-[6px] border-transparent border-t-white"></div>
              </div>
          </div>

          <h4 className="text-[#020d1c] font-bold text-[16px] mb-4 font-sans">
            Other Offices
          </h4>

          {/* Offices List */}
          <div className="flex flex-col flex-grow divide-y divide-gray-100">
            
            {/* London Office */}
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#fbf5ed] flex items-center justify-center text-[#de9e48]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-[#020d1c] font-bold text-[14px]">London Office</h5>
                  <p className="text-gray-500 text-[12.5px]">45 King William Street,<br/>London, EC4R 9AN, UK</p>
                </div>
              </div>
              <div className="text-gray-500 text-[13px] font-medium text-right hidden sm:block">
                +44 20 7946 0958
              </div>
            </div>

            {/* Dubai Office */}
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#fbf5ed] flex items-center justify-center text-[#de9e48]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-[#020d1c] font-bold text-[14px]">Dubai Office</h5>
                  <p className="text-gray-500 text-[12.5px]">The Burlington Tower, Office 2001,<br/>Business Bay, Dubai, UAE</p>
                </div>
              </div>
              <div className="text-gray-500 text-[13px] font-medium text-right hidden sm:block">
                +971 4 123 4567
              </div>
            </div>

            {/* Singapore Office */}
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#fbf5ed] flex items-center justify-center text-[#de9e48]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-[#020d1c] font-bold text-[14px]">Singapore Office</h5>
                  <p className="text-gray-500 text-[12.5px]">10 Collyer Quay, #10-01,<br/>Ocean Financial Centre, Singapore 049315</p>
                </div>
              </div>
              <div className="text-gray-500 text-[13px] font-medium text-right hidden sm:block">
                +65 6808 5965
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;
