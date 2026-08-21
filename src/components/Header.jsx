import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="w-full bg-[#020d1c] py-4 border-b border-gray-800/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between font-sans">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              className="h-12 md:h-14 w-auto object-contain" 
            />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          <Link 
            to="/" 
            className={`${currentPath === '/' ? 'text-[#de9e48]' : 'text-gray-200 hover:text-[#de9e48]'} font-medium text-sm md:text-base relative pb-1 transition-colors duration-200`}
          >
            Home
            {currentPath === '/' && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#de9e48]"></span>
            )}
          </Link>
          <Link 
            to="/about" 
            className={`${currentPath === '/about' ? 'text-[#de9e48]' : 'text-gray-200 hover:text-[#de9e48]'} font-medium text-sm md:text-base relative pb-1 transition-colors duration-200`}
          >
            About Us
            {currentPath === '/about' && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#de9e48]"></span>
            )}
          </Link>
          {/* Services Dropdown */}
          <div className="relative group">
            <Link 
              to="/services" 
              className={`${currentPath.startsWith('/services') ? 'text-[#de9e48]' : 'text-gray-200 hover:text-[#de9e48]'} font-medium text-sm md:text-base flex items-center relative pb-1 transition-colors duration-200`}
            >
              Services
              <svg 
                className={`w-4 h-4 ml-1.5 ${currentPath.startsWith('/services') ? 'text-[#de9e48]' : 'text-gray-400 group-hover:text-[#de9e48]'} transition-transform duration-300 group-hover:rotate-180`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              {currentPath.startsWith('/services') && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#de9e48]"></span>
              )}
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
              <ul className="py-2">
                {[
                  { name: 'Business Strategy', path: '/services/business-strategy' },
                  { name: 'Digital Transformation', path: '/services/digital-transformation' },
                  { name: 'Operations Consulting', path: '/services/operations-consulting' },
                  { name: 'Data & Analytics', path: '/services/data-analytics' },
                  { name: 'Risk Management', path: '/services/risk-management' },
                  { name: 'Change Management', path: '/services/change-management' },
                  { name: 'Human Capital Advisory', path: '/services/human-capital-advisory' },
                  { name: 'M&A Advisory', path: '/services/ma-advisory' },
                ].map((service, i) => (
                  <li key={i}>
                    <Link 
                      to={service.path} 
                      className="block px-5 py-2.5 text-sm text-[#020d1c] hover:bg-[#fbf5ed] hover:text-[#de9e48] transition-colors font-medium border-b border-gray-50 last:border-0"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link 
            to="/contact" 
            className={`${currentPath === '/contact' ? 'text-[#de9e48]' : 'text-gray-200 hover:text-[#de9e48]'} font-medium text-sm md:text-base relative pb-1 transition-colors duration-200`}
          >
            Contact Us
            {currentPath === '/contact' && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#de9e48]"></span>
            )}
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="flex-shrink-0 hidden sm:block">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-semibold text-sm md:text-base py-2.5 px-5 md:px-7 rounded transition-colors duration-200"
          >
            Get In Touch
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        
        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-200 hover:text-[#de9e48]">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
