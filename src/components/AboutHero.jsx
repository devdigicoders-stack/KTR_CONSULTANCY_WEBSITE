import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section className="relative w-full bg-[#020d1c] min-h-[450px] lg:min-h-[500px] flex items-center py-16 md:py-20 font-sans">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-[center_15%] md:bg-[right_10%] bg-no-repeat"
        style={{ 
          backgroundImage: `url('/images/aboutushero.png')` 
        }}
      >
        {/* Gradient that fades from solid dark blue on the left to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020d1c] via-[#020d1c]/95 to-[#020d1c]/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="max-w-xl">
          {/* Subtitle */}
          <h3 className="text-[#de9e48] text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            ABOUT US
          </h3>
          
          {/* Title */}
          <h1 className="text-4xl lg:text-[3.5rem] font-bold font-serif text-white leading-tight mb-5 tracking-tight">
            We're Here to Help <br />
            You <span className="text-[#de9e48]">Grow Better</span>
          </h1>
          
          {/* Golden Separator */}
          <div className="w-12 h-[2px] bg-[#de9e48] mb-5"></div>
          
          {/* Paragraph */}
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-8 max-w-[480px]">
            At KTR Consultants, we partner with businesses to unlock their full potential with innovative strategies, technology and expert guidance.
          </p>
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm font-medium">
            <Link to="/" className="text-white hover:text-[#de9e48] transition-colors flex items-center gap-1.5 font-light text-[13px]">
              <svg className="w-4 h-4 mb-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <span className="text-[#de9e48] mx-1">›</span>
            <span className="text-gray-300 font-light text-[13px]">About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
