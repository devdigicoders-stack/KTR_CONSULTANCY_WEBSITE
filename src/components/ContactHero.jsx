import React from 'react';
import { Link } from 'react-router-dom';

const ContactHero = () => {
  return (
    <div className="bg-white relative">
      {/* Background with faint patterns */}
      <div className="absolute inset-0 bg-[#fafafa] z-0 overflow-hidden pointer-events-none">
         {/* Simulate faint city skyline in background if needed */}
         <div className="absolute bottom-16 right-0 w-2/3 h-full bg-[url('/city-skyline-placeholder.png')] bg-contain bg-bottom bg-no-repeat opacity-[0.05]"></div>
         {/* Subtle dot pattern top left */}
         <div className="absolute top-4 left-10 w-40 h-40" style={{ backgroundImage: 'radial-gradient(#ddd 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}></div>
      </div>

      <section className="relative z-10 pt-10 pb-16 lg:pt-14 lg:pb-8">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            {/* Left Content */}
            <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              
              {/* CONTACT US label */}
              <h3 className="text-[#de9e48] text-[13px] md:text-[14px] font-bold tracking-widest uppercase mb-4">
                CONTACT US
              </h3>
              
              {/* Main Heading */}
              <h1 className="text-[#020d1c] font-bold font-serif text-[42px] md:text-[52px] lg:text-[56px] leading-[1.1] mb-2">
                We're Here to <br />
                <span className="text-[#de9e48]">Help You</span>
              </h1>
              
              {/* Sub-heading cursive */}
              <div className="text-gray-700 text-[32px] md:text-[38px] lg:text-[42px] font-serif italic mb-6 opacity-90" style={{ fontFamily: 'Georgia, serif' }}>
                Every Step of the Way
              </div>
              
              {/* Divider */}
              <div className="w-16 h-[2px] bg-[#de9e48] mb-6"></div>
              
              {/* Paragraph */}
              <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed max-w-[420px]">
                Have questions or need expert advice? Our team is ready to assist you with the best financial and property solutions.
              </p>
              
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[55%] xl:w-[60%] flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] lg:max-w-[700px] xl:max-w-[800px]">
                <img 
                  src="/contact.png" 
                  alt="Contact Us" 
                  className="w-full h-auto object-contain drop-shadow-xl" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Contact Details Strip */}
      <div className="relative z-20 w-full border-t border-gray-100 bg-white shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
         <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 py-2 lg:py-6">
               
               {/* 1. Call Us */}
               <div className="flex items-start md:items-center gap-4 w-full px-4 py-5 lg:py-0 border-b sm:border-b-0 sm:border-r border-gray-100">
                 <div className="w-12 h-12 rounded-full bg-[#020d1c] flex items-center justify-center text-[#de9e48] flex-shrink-0 shadow-md">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                 </div>
                  <div>
                    <h4 className="text-[#020d1c] font-bold text-[14px]">Call Us</h4>
                    <a href="tel:+919918699696" className="text-gray-600 hover:text-[#de9e48] transition-colors text-[13px] font-medium mt-0.5 block">+91 99186 99696</a>
                  </div>
               </div>

               {/* 2. Email Us */}
               <div className="flex items-start md:items-center gap-4 w-full px-4 py-5 lg:py-0 border-b lg:border-b-0 lg:border-r border-gray-100">
                 <div className="w-12 h-12 rounded-full bg-[#020d1c] flex items-center justify-center text-[#de9e48] flex-shrink-0 shadow-md">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                 </div>
                  <div>
                    <h4 className="text-[#020d1c] font-bold text-[14px]">Email Us</h4>
                    <a href="mailto:info@ktrconsultants.in" className="text-gray-600 hover:text-[#de9e48] transition-colors text-[13px] font-medium mt-0.5 block">info@ktrconsultants.in</a>
                  </div>
               </div>

               {/* 3. Working Hours */}
               <div className="flex items-start md:items-center gap-4 w-full px-4 py-5 lg:py-0 border-b sm:border-b-0 sm:border-r lg:border-r border-gray-100">
                 <div className="w-12 h-12 rounded-full bg-[#020d1c] flex items-center justify-center text-[#de9e48] flex-shrink-0 shadow-md">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <div>
                   <h4 className="text-[#020d1c] font-bold text-[14px]">Working Hours</h4>
                   <p className="text-gray-600 text-[13px] font-medium mt-0.5">Mon - Sat: 10:00 AM - 7:00 PM</p>
                 </div>
               </div>

               {/* 4. Our Location */}
               <div className="flex items-start md:items-center gap-4 w-full px-4 py-5 lg:py-0">
                 <div className="w-12 h-12 rounded-full bg-[#020d1c] flex items-center justify-center text-[#de9e48] flex-shrink-0 shadow-md">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                   </svg>
                 </div>
                 <div>
                   <h4 className="text-[#020d1c] font-bold text-[14px]">Our Location</h4>
                   <p className="text-gray-600 text-[12px] font-medium leading-tight mt-0.5 max-w-[200px]">
                     Virat Khand, Gomti Nagar,<br/>Lucknow, Uttar Pradesh - 226010
                   </p>
                 </div>
               </div>

            </div>
         </div>

         {/* Right-side decorative dark blue curve from the screenshot */}
         <div className="hidden lg:block absolute bottom-0 right-0 w-[400px] h-[100px] overflow-hidden pointer-events-none">
            <svg viewBox="0 0 400 100" className="w-full h-full text-[#020d1c]" preserveAspectRatio="none">
              {/* Simple curve simulating the design */}
              <path d="M400,100 L400,0 C300,80 150,100 0,100 Z" fill="currentColor"></path>
              <path d="M400,0 C300,80 150,100 0,100 L400,100 Z" fill="none" stroke="#de9e48" strokeWidth="6"></path>
            </svg>
         </div>
      </div>

    </div>
  );
};

export default ContactHero;
