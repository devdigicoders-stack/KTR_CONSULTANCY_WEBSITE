import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Loans', 
      path: '/loans',
      dropdown: [
        { name: 'All Loan Services', path: '/loans' },
        { name: 'Non-Approved Society Loans', path: '/non-approved-loans' }
      ]
    },
    { 
      name: 'Business Finance', 
      path: '/business-finance',
      dropdown: [
        { name: 'General Business Finance', path: '/business-finance' },
        { name: 'CA Services', path: '/ca-services' }
      ]
    },
    { 
      name: 'CIBIL Services', 
      path: '/cibil-services'
    },
    { 
      name: 'Property Services', 
      path: '/property-services',
      dropdown: [
        { name: 'General Property Services', path: '/property-services' },
        { name: 'Property Legal Services', path: '/property-legal-services' },
        { name: 'Assessment & Map Services', path: '/property-assessment-map' }
      ]
    },
    { 
      name: 'Contact Us', 
      path: '/contact'
    },
  ];

  return (
    <header className="w-full bg-white shadow-sm relative z-50">
      {/* Top Bar */}
      <div className="bg-[#020d1c] w-full hidden lg:block border-b border-gray-800">
        <div className="max-w-[1400px] w-full mx-auto px-4 lg:px-6 xl:px-8 flex justify-between items-center h-10 text-[12px] xl:text-[13px] text-gray-300 font-sans tracking-wide">
          {/* Left Info */}
          <div className="flex items-center gap-4 xl:gap-8">
            <div className="flex items-center gap-2">
              <svg className="w-[14px] h-[14px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="whitespace-nowrap">Virat Khand, Gomti Nagar, Lucknow, UP</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-[14px] h-[14px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="whitespace-nowrap">Mon - Sat: 10:00 AM - 7:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-[14px] h-[14px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@ktrconsultants.in" className="whitespace-nowrap hover:text-[#de9e48] transition-colors">info@ktrconsultants.in</a>
            </div>
          </div>
          
          {/* Right Socials */}
          <div className="flex items-center gap-3">
            <span className="text-gray-300 font-medium whitespace-nowrap">Follow Us:</span>
            <div className="flex items-center gap-2">
              <a href="#" className="w-[24px] h-[24px] rounded-full border border-[#de9e48] flex items-center justify-center text-[#de9e48] hover:bg-[#de9e48] hover:text-[#020d1c] transition-colors">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-[24px] h-[24px] rounded-full border border-[#de9e48] flex items-center justify-center text-[#de9e48] hover:bg-[#de9e48] hover:text-[#020d1c] transition-colors">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-[24px] h-[24px] rounded-full border border-[#de9e48] flex items-center justify-center text-[#de9e48] hover:bg-[#de9e48] hover:text-[#020d1c] transition-colors">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-[24px] h-[24px] rounded-full border border-[#de9e48] flex items-center justify-center text-[#de9e48] hover:bg-[#de9e48] hover:text-[#020d1c] transition-colors">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="max-w-[1400px] w-full mx-auto px-4 lg:px-6 xl:px-8 flex items-center justify-between h-[75px] md:h-[85px] font-sans">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center h-full py-2 xl:pr-4">
          <Link to="/" className="flex items-center h-full">
            <img 
              src="/logo-dark.png" 
              alt="KTR Consultants" 
              className="h-full w-auto object-contain max-h-[55px] md:max-h-[65px]" 
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-4 xl:gap-5 h-full flex-1 justify-center">
          {navLinks.map((link, index) => {
            const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
            
            return link.dropdown ? (
              <div key={index} className="relative group h-full flex items-center">
                <Link 
                  to={link.path} 
                  className={`${
                    isActive
                      ? 'text-[#de9e48]' 
                      : 'text-gray-800 hover:text-[#de9e48]'
                  } font-semibold text-[13.5px] xl:text-[14.5px] flex items-center transition-colors duration-200 h-full whitespace-nowrap`}
                >
                  {link.name}
                  <svg className="w-3.5 h-3.5 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  
                  {isActive && (
                    <span className="absolute left-0 bottom-[26px] w-5 h-[3px] rounded-full bg-[#de9e48]"></span>
                  )}
                </Link>

                {/* Dropdown Menu */}
                <div className="absolute top-[80%] left-0 w-56 bg-white border border-gray-100 shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  {link.dropdown.map((dropItem, idx) => (
                    <Link 
                      key={idx}
                      to={dropItem.path}
                      className="block px-4 py-2.5 text-[14px] font-medium text-gray-700 hover:bg-orange-50 hover:text-[#de9e48] transition-colors"
                    >
                      {dropItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div key={index} className="relative group h-full flex items-center">
                <Link 
                  to={link.path} 
                  className={`${
                    isActive
                      ? 'text-[#de9e48]' 
                      : 'text-gray-800 hover:text-[#de9e48]'
                  } font-semibold text-[13.5px] xl:text-[14.5px] flex items-center transition-colors duration-200 h-full whitespace-nowrap`}
                >
                  {link.name}
                  
                  {isActive && (
                    <span className="absolute left-0 bottom-[26px] w-5 h-[3px] rounded-full bg-[#de9e48]"></span>
                  )}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
          {/* Phone block */}
          <a href="tel:+919918699696" className="flex items-center gap-2 px-3 py-2 border-2 border-gray-100 rounded-lg text-gray-800 hover:border-[#de9e48] hover:text-[#de9e48] transition-all group shadow-sm bg-white whitespace-nowrap">
            <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#de9e48] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-bold text-[13px] xl:text-[14px] tracking-wide">+91 99186 99696</span>
          </a>

          {/* CTA Button */}
          <Link 
            to="/apply-online" 
            className="flex items-center gap-1.5 bg-[#d69f4c] hover:bg-[#c98e41] text-[#020d1c] font-bold text-[13px] xl:text-[14px] py-2.5 px-4 xl:px-5 rounded-lg transition-all duration-300 shadow-[0_4px_14px_0_rgba(214,159,76,0.39)] hover:shadow-[0_6px_20px_rgba(214,159,76,0.23)] hover:-translate-y-0.5 whitespace-nowrap"
          >
            Apply Online
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center gap-3">
          <Link 
            to="/apply-online" 
            className="hidden sm:flex items-center gap-2 bg-[#d69f4c] text-[#020d1c] font-bold text-sm py-2 px-4 rounded-lg"
          >
            Apply
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 hover:text-[#de9e48] focus:outline-none p-1 rounded-md"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl z-50 max-h-[calc(100vh-135px)] overflow-y-auto pb-6">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link, index) => {
              const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <div key={index}>
                  <div className="flex flex-col">
                    <Link 
                      to={link.path} 
                      className={`block px-4 py-3.5 text-[15px] font-semibold rounded-lg transition-colors ${
                        isActive && !link.dropdown
                          ? 'bg-orange-50 text-[#de9e48]' 
                          : 'text-gray-800 hover:bg-gray-50 hover:text-[#de9e48]'
                      }`}
                      onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        {link.name}
                      </div>
                    </Link>
                    
                    {/* Mobile Dropdown items */}
                    {link.dropdown && (
                      <div className="pl-6 mt-1 mb-2 space-y-1 border-l-2 border-gray-100 ml-4">
                        {link.dropdown.map((dropItem, idx) => (
                          <Link 
                            key={idx}
                            to={dropItem.path}
                            className={`block px-4 py-2.5 text-[14px] font-medium rounded-lg transition-colors ${
                              currentPath === dropItem.path 
                                ? 'text-[#de9e48] bg-orange-50/50' 
                                : 'text-gray-600 hover:text-[#de9e48] hover:bg-gray-50'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            <div className="pt-6 mt-6 border-t border-gray-100 px-2 space-y-3">
              <a href="tel:+919918699696" className="flex items-center justify-center gap-2 w-full px-4 py-3.5 border-2 border-gray-100 rounded-lg text-gray-800 font-bold bg-white hover:border-[#de9e48] hover:text-[#de9e48] transition-colors">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 99186 99696
              </a>
              <Link 
                to="/apply-online" 
                className="flex items-center justify-center gap-2 w-full bg-[#d69f4c] hover:bg-[#c98e41] text-[#020d1c] font-bold py-3.5 rounded-lg transition-colors shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apply Online
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
