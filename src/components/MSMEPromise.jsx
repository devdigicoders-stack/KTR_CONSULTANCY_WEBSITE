
const MSMEPromise = () => {
  return (
    <section className="bg-white pb-8 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        
        <div className="relative bg-gradient-to-r from-[#fffaf2] via-[#fff3de] to-[#fffaf2] border border-[#f5d098] rounded-[20px] overflow-hidden shadow-sm flex flex-col md:flex-row items-center min-h-[140px]">
          
          {/* Right Image Background */}
          <div className="absolute right-0 bottom-0 h-[80px] md:h-[100%] w-[80%] md:w-[45%] flex justify-end items-end opacity-40 md:opacity-90 pointer-events-none mix-blend-multiply">
            {/* 
              Using object-cover and alignment to make it sit properly 
              The screenshot shows the buildings aligned to the bottom right
            */}
             <img 
               src="/mahal.png" 
               alt="Cityscape Skyline" 
               className="h-full w-auto object-contain object-right-bottom" 
             />
          </div>

          {/* Left Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center p-6 pb-12 md:pb-7 md:p-7 lg:px-10 lg:py-8 gap-5 lg:gap-8 w-full md:w-[75%] lg:w-[70%]">
            
            {/* Handshake Icon */}
            <div className="flex-shrink-0 bg-white/50 p-2 rounded-full shadow-sm border border-[#de9e48]/20">
              <svg className="w-14 h-14 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 12.5L10 14L7 17L5.5 15.5M10.5 14.5L12 16L9 19L7.5 17.5M12.5 16.5L14 18L11 21L9.5 19.5M14.5 18.5L16 20L13.5 22.5L12 21M17 11.5L18.5 10C19.8807 8.61929 19.8807 6.38071 18.5 5C17.1193 3.61929 14.8807 3.61929 13.5 5L12 6.5M17 11.5L13 15.5L7.5 10L11.5 6M17 11.5L20.5 15L17.5 18L14 14.5M12 6.5L10.5 5C9.11929 3.61929 6.88071 3.61929 5.5 5C4.11929 6.38071 4.11929 8.61929 5.5 10L7 11.5M12 6.5L8.5 10.5M5.5 15.5L4 17L6.5 19.5L8 18" stroke="#de9e48" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 11.5L13 15.5M12 6.5L8.5 10.5" stroke="#020d1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 17L1.5 14.5M20.5 15L22.5 17" stroke="#020d1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-[3.5px] h-20 bg-[#d69f4c] rounded-full flex-shrink-0"></div>

            {/* Text */}
            <div className="flex-1">
              <h4 className="text-[#020d1c] font-bold text-[18px] lg:text-[20px] mb-1">
                Our Promise
              </h4>
              <h3 className="text-[#020d1c] font-bold text-[20px] lg:text-[24px] mb-3 leading-tight">
                You focus on your business. We manage the financing process.
              </h3>
              <p className="text-gray-900 text-[14px] lg:text-[15px] leading-relaxed font-medium">
                Simply submit your requirement to KTR Consultants, and our team will assess your case, explain the requirements, coordinate the documentation and manage the process with the concerned bank.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MSMEPromise;
