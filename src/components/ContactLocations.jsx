
const ContactLocations = () => {
  const offices = [
    {
      title: "Head Office: Lucknow",
      address: "Virat Khand, Gomti Nagar,\nLucknow, Uttar Pradesh - 226010",
      phone: "+91 99186 99696",
    },
    {
      title: "Branch Office: Kanpur",
      address: "Swaroop Nagar, Kanpur,\nUttar Pradesh - 208002",
      phone: "+91 99186 99696",
    },
    {
      title: "Branch Office: Noida",
      address: "Sector 62, Noida,\nUttar Pradesh - 201309",
      phone: "+91 99186 99696",
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-8 md:w-16 bg-[#de9e48]"></div>
            <h2 className="text-[#020d1c] text-[16px] md:text-[18px] font-bold tracking-wide uppercase font-serif">
              OUR OFFICE LOCATION
            </h2>
            <div className="h-px w-8 md:w-16 bg-[#de9e48]"></div>
          </div>
          <p className="text-gray-500 text-[14px] lg:text-[14.5px]">
            Visit us at our office or reach out to us anytime.
          </p>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10">
          
          {/* Left Column: Locations List */}
          <div className="w-full lg:w-[35%] xl:w-[32%] flex-shrink-0">
            <div className="bg-white rounded-xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] p-2">
              
              {offices.map((office, index) => (
                <div 
                  key={index} 
                  className={`flex gap-4 p-5 lg:p-6 ${index !== offices.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="w-[50px] h-[50px] rounded-full bg-[#020d1c] flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-6 h-6 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#de9e48] font-bold text-[14px] lg:text-[14.5px] mb-1.5 leading-tight">
                      {office.title}
                    </h4>
                    <p className="text-gray-500 text-[13px] leading-relaxed mb-1.5 whitespace-pre-line">
                      {office.address}
                    </p>
                    <p className="text-[#020d1c] font-bold text-[13px]">
                      Phone: {office.phone}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Right Column: Map */}
          <div className="w-full lg:w-[65%] xl:w-[68%] rounded-xl overflow-hidden shadow-sm border border-gray-100 h-[400px] lg:h-auto min-h-[400px] relative bg-gray-100">
             
            {/* Custom Interactive Map Overlay (Simulating the screenshot design) */}
            <iframe 
              title="Head Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.627764653555!2d80.99960765!3d26.8507742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2d7b5658e39%3A0xc39f21626f63459c!2sGomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'contrast(1.05) saturate(0.9) hue-rotate(-5deg)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-0"
            ></iframe>
            
            {/* Custom Marker Popup (Positioned in center simulating the screenshot) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[calc(50%+45px)] z-10 w-[240px] pointer-events-none">
              <div className="bg-white rounded-lg shadow-xl p-4 relative">
                <h4 className="text-[#020d1c] font-bold text-[14px] mb-1">KTR Consultants</h4>
                <p className="text-gray-600 text-[12px] leading-tight">
                  Virat Khand, Gomti Nagar,<br/>Lucknow, Uttar Pradesh - 226010
                </p>
                {/* Pointer down arrow */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-[2px_2px_4px_rgba(0,0,0,0.1)]"></div>
              </div>
              {/* Custom Red Marker */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center drop-shadow-md">
                <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactLocations;
