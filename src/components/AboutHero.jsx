import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section className="bg-white py-10 lg:py-14 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 xl:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-[45%] flex flex-col items-start xl:pr-4">
            {/* Breadcrumbs */}
            <div className="text-[13px] text-gray-400 font-medium mb-6">
              <Link to="/" className="hover:text-[#de9e48] transition-colors">Home</Link>
              <span className="mx-2 font-light">›</span>
              <span className="text-[#de9e48]">About Us</span>
            </div>
            
            {/* Subtitle */}
            <h3 className="text-[#de9e48] font-bold text-[13px] tracking-[0.1em] uppercase mb-3">
              ABOUT KTR CONSULTANTS
            </h3>
            
            {/* Title */}
            <h1 className="text-[36px] md:text-[44px] lg:text-[48px] xl:text-[56px] font-bold font-serif text-[#020d1c] leading-[1.1] mb-5 tracking-tight">
              Your Growth,<br />Our <span className="text-[#de9e48]">Expertise.</span>
            </h1>
            
            {/* Paragraph */}
            <p className="text-gray-600 text-[14px] md:text-[15px] leading-[1.6] mb-8 max-w-[500px]">
              KTR Consultants is a single-window solution for all your financial & property needs. We are committed to provide fast, transparent and reliable services with complete dedication.
            </p>
            
            {/* Button */}
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#020d1c] hover:bg-[#031326] text-white font-semibold py-3.5 px-8 rounded-md transition-all duration-300 shadow-[0_4px_14px_0_rgba(2,13,28,0.39)] hover:-translate-y-0.5 text-[14px]"
            >
              Get Free Consultation
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[55%] relative mt-6 lg:mt-0">
            <div className="relative rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <img 
                src="/images/aboutus.png" 
                alt="KTR Consultants Office" 
                className="w-full h-auto max-h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
