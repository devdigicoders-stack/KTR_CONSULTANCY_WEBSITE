import { Link } from 'react-router-dom';

const ContactHero = () => {
  return (
    <>
      {/* Dark Navy Background Area */}
      <section className="relative w-full bg-[#020d1c] min-h-[480px] lg:min-h-[500px] flex flex-col pt-20 pb-32 md:pb-40">
        
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Main Gradient overlay - left to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020d1c] via-[#020d1c]/95 to-[#020d1c]/10 z-10" />
          
          <img 
            src="/images/aboutus.png" 
            alt="Contact Us" 
            className="absolute right-0 top-0 h-full w-full md:w-[65%] object-cover object-center lg:object-right opacity-[0.35] mix-blend-luminosity"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-20 max-w-[1140px] mx-auto px-6 md:px-8 w-full mt-8 md:mt-12 flex-grow flex flex-col justify-center">
          
          {/* Breadcrumb */}
          <div className="flex items-center text-[14px] text-gray-300 mb-8 font-normal">
            <Link to="/" className="flex items-center hover:text-[#de9e48] transition-colors">
              <svg className="w-[16px] h-[16px] mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <span className="mx-2.5 text-gray-500">{'>'}</span>
            <span className="text-white">Contact Us</span>
          </div>

          {/* Title */}
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white font-serif leading-[1.3] mb-6">
              Let's Connect & <br className="hidden md:block" />
              Build Something <span className="text-[#de9e48]">Great Together</span>
            </h1>
            
            <div className="w-12 h-[3px] bg-[#de9e48] mb-8"></div>
            
            <p className="text-[15.5px] text-gray-200 font-light leading-[1.8] max-w-[600px]">
              We're here to answer your questions, understand your needs 
              and help you take the next step toward growth.
            </p>
          </div>
        </div>
      </section>

      {/* Overlapping Info Box */}
      <section className="relative z-30 px-6 md:px-8 max-w-[1200px] mx-auto -mt-16 md:-mt-20 lg:-mt-16 mb-20 lg:mb-24">
        <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-gray-100 py-6 lg:py-8 px-4 lg:px-2">
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0 relative">
            
            {/* Box 1: Call Us */}
            <div className="flex items-center gap-4 px-4 lg:px-7 relative lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-[10%] lg:after:h-[80%] lg:after:w-[1px] lg:after:bg-gray-200">
              <div className="flex-shrink-0 w-[58px] h-[58px] rounded-full bg-[#fcf6ee] flex items-center justify-center text-[#de9e48]">
                <svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[#020d1c] font-bold text-[17px] font-sans leading-tight mb-1.5">Call Us</h4>
                <p className="text-[#020d1c] font-bold text-[13.5px] leading-tight mb-1">+91 12345 67890</p>
                <p className="text-gray-500 text-[12.5px] font-medium leading-tight">Mon - Fri &nbsp;9:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Box 2: Email Us */}
            <div className="flex items-center gap-4 px-4 lg:px-7 relative lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-[10%] lg:after:h-[80%] lg:after:w-[1px] lg:after:bg-gray-200">
              <div className="flex-shrink-0 w-[58px] h-[58px] rounded-full bg-[#fcf6ee] flex items-center justify-center text-[#de9e48]">
                <svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[#020d1c] font-bold text-[17px] font-sans leading-tight mb-1.5">Email Us</h4>
                <p className="text-[#020d1c] font-bold text-[13.5px] leading-tight mb-1">info@ktrconsultants.com</p>
                <p className="text-gray-500 text-[12.5px] font-medium leading-tight">We reply within 24 hours</p>
              </div>
            </div>

            {/* Box 3: Visit Us */}
            <div className="flex items-center gap-4 px-4 lg:px-7 relative lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-[10%] lg:after:h-[80%] lg:after:w-[1px] lg:after:bg-gray-200">
              <div className="flex-shrink-0 w-[58px] h-[58px] rounded-full bg-[#fcf6ee] flex items-center justify-center text-[#de9e48]">
                <svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[#020d1c] font-bold text-[17px] font-sans leading-tight mb-1.5">Visit Us</h4>
                <p className="text-gray-600 text-[12.5px] font-medium leading-[1.6]">
                  123 Business Avenue, Suite 100,<br />
                  New York, NY 10001, USA
                </p>
              </div>
            </div>

            {/* Box 4: Office Hours */}
            <div className="flex items-center gap-4 px-4 lg:px-7">
              <div className="flex-shrink-0 w-[58px] h-[58px] rounded-full bg-[#fcf6ee] flex items-center justify-center text-[#de9e48]">
                <svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-col w-[150px]">
                <h4 className="text-[#020d1c] font-bold text-[17px] font-sans leading-tight mb-1.5">Office Hours</h4>
                <div className="text-[12.5px] font-medium flex flex-col gap-1">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Mon - Fri</span>
                    <span className="text-[#020d1c]">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Sat - Sun</span>
                    <span className="text-[#020d1c]">Closed</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHero;
