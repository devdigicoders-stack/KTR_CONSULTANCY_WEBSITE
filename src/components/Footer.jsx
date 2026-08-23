import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const servicesLinks = [
    { name: 'Loans', path: '/loans' },
    { name: 'Business Finance', path: '/business-finance' },
    { name: 'CIBIL Services', path: '/cibil-services' },
    { name: 'Fake Loan Removal', path: '/fake-loan-removal' },
    { name: 'Property Services', path: '/property-services' }
  ];

  const usefulLinks = [
    { name: 'Apply Online', path: '/apply-online' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms' }
  ];

  return (
    <footer className="bg-[#020d1c] font-sans pt-12 pb-6 relative border-t border-gray-800/50">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 lg:gap-0 lg:divide-x divide-gray-800/80 mb-8">
          
          {/* Column 1: Brand & About */}
          <div className="lg:pr-8 flex flex-col items-start">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/images/logo.png" 
                alt="Logo" 
                className="h-[72px] w-auto object-contain" 
              />
            </Link>
            <p className="text-gray-300 text-[12px] leading-relaxed mb-6 font-light max-w-[250px]">
              KTR Consultants is a one-window solution for all your financial & property needs. We are committed to provide fast, transparent and reliable services.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all">
                {/* Facebook */}
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M15.12 5.32H17V2.14A26.11 26.11 0 0014.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V5.71c0-1.03.29-1.73 1.76-1.73z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all">
                {/* Instagram */}
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.4 5.6 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.6 18.4 4 16.4 4H7.6m4.4 4a4 4 0 110 8 4 4 0 010-8m0 2a2 2 0 100 4 2 2 0 000-4m5.22-3.67a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all">
                {/* LinkedIn */}
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm15.11 13.02h-3.56v-5.56c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all">
                {/* YouTube */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21.58 7.2A2.7 2.7 0 0019.68 5.3C18.01 4.85 12 4.85 12 4.85s-6.01 0-7.68.45A2.7 2.7 0 002.42 7.2C1.97 8.87 1.97 12 1.97 12s0 3.13.45 4.8a2.7 2.7 0 001.9 1.9c1.67.45 7.68.45 7.68.45s6.01 0 7.68-.45a2.7 2.7 0 001.9-1.9c.45-1.67.45-4.8.45-4.8s0-3.13-.45-4.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="lg:px-8 xl:px-10">
            <h4 className="text-white font-bold text-[13px] mb-5 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="text-gray-300 hover:text-[#de9e48] text-[13px] transition-colors font-light">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Our Services */}
          <div className="lg:px-8 xl:px-10">
            <h4 className="text-white font-bold text-[13px] mb-5 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="text-gray-300 hover:text-[#de9e48] text-[13px] transition-colors font-light">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Useful Links */}
          <div className="lg:px-8 xl:px-10">
            <h4 className="text-white font-bold text-[13px] mb-5 uppercase tracking-wider">Useful Links</h4>
            <ul className="space-y-3">
              {usefulLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="text-gray-300 hover:text-[#de9e48] text-[13px] transition-colors font-light">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 5: Contact Info */}
          <div className="lg:pl-8 xl:pl-10">
            <h4 className="text-white font-bold text-[13px] mb-5 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#de9e48] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 text-[13px] font-light leading-snug">
                  Virat Khand, Gomti Nagar,<br />Lucknow, Uttar Pradesh - 226010
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#de9e48] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919918699696" className="text-gray-300 hover:text-[#de9e48] transition-colors text-[13px] font-light">+91 99186 99696</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#de9e48] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@ktrconsultants.in" className="text-gray-300 hover:text-[#de9e48] transition-colors text-[13px] font-light">info@ktrconsultants.in</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#de9e48] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300 text-[13px] font-light">Mon - Sat: 10:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gray-800/60 mb-6 mt-4"></div>
        
        {/* Copyright & Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left relative z-10">
          <p className="text-gray-400 text-[12px] font-light">
            © {new Date().getFullYear()} KTR Consultants. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-[12px] text-gray-400 font-light">
            <Link to="/privacy-policy" className="hover:text-[#de9e48] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-[#de9e48] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
