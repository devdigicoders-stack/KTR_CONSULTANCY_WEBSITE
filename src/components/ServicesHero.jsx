import { Link } from 'react-router-dom';

const ServicesHero = () => {
  return (
    <section className="bg-white pt-10 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 xl:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-[45%] xl:w-[50%] flex flex-col justify-center">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-gray-500 text-[13px] font-medium mb-10">
              <Link to="/" className="hover:text-[#de9e48] transition-colors">Home</Link>
              <span className="text-gray-400">›</span>
              <span className="text-[#020d1c]">Loans</span>
            </div>

            {/* Subtitle */}
            <h3 className="text-[#de9e48] text-[13px] font-bold tracking-wide uppercase mb-3">
              LOAN SERVICES
            </h3>
            
            {/* Title */}
            <h1 className="text-[#020d1c] text-4xl md:text-5xl lg:text-[42px] xl:text-[48px] font-bold font-serif leading-[1.15] mb-5">
              Find the Right Financing <br />
              <span className="text-[#de9e48]">for Your Needs</span>
            </h1>
            
            {/* Paragraph */}
            <p className="text-gray-600 text-[13.5px] lg:text-[15px] leading-relaxed mb-6 max-w-[500px]">
              From home loans to business funding, project finance and property-backed finance, KTR Consultants helps you identify the right financing structure for your requirement.
            </p>

            {/* Assessment Note */}
            <div className="bg-orange-50/50 border-l-2 border-[#de9e48] p-4 mb-8 max-w-[520px] rounded-r-md">
              <p className="text-[#020d1c] text-[13px] md:text-[13.5px] font-medium leading-relaxed">
                <span className="font-bold text-[#b57d32]">Not sure which loan is right for you?</span><br />
                Tell us your requirement. Our team will assess your case and guide you toward a suitable financing option.
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                to="/apply-online" 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-white font-bold text-[13.5px] py-3.5 px-8 rounded-md transition-all duration-300 shadow-sm"
              >
                Apply for Loan
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Right Image Content */}
          <div className="w-full lg:w-[55%] xl:w-[50%] flex justify-center lg:justify-end">
            <img 
              src="/hero.png" 
              alt="Loan Services" 
              className="w-full max-w-[600px] xl:max-w-[750px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
