import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Financial Blogs & Guides', path: '/blogs' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const servicesLinks = [
    { name: 'Home Loans in Lucknow', path: '/home-loan-in-lucknow' },
    { name: 'Non-Approved Society Loans', path: '/non-approved-loans' },
    { name: 'Fake Loan Removal from CIBIL', path: '/fake-loan-removal' },
    { name: 'Business Loans in Lucknow', path: '/business-finance' },
    { name: 'CIBIL Score Improvement', path: '/cibil-services' },
    { name: 'Property Legal Verification', path: '/property-services' },
    { name: 'Insurance & Investment', path: '/insurance-services' }
  ];

  const usefulLinks = [
    { name: 'Apply Online', path: '/apply-online' },
    { name: 'Loan EMI Calculator', path: '/emi-calculator' },
    { name: 'Blogs & Articles', path: '/blogs' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms' }
  ];

  return (
    <footer className="bg-[#020d1c] font-sans pt-12 pb-6 relative border-t border-gray-800/50">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-6 lg:gap-x-0 lg:divide-x divide-gray-800/80 mb-8">
          
          {/* Column 1: Brand & About */}
          <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-1 lg:pr-8 flex flex-col items-start">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/images/logo.png" 
                alt="Logo" 
                className="h-[60px] md:h-[72px] w-auto object-contain" 
              />
            </Link>
            <p className="text-gray-300 text-[12px] md:text-[13px] leading-relaxed mb-6 font-light max-w-sm lg:max-w-[250px]">
              KTR Consultants is a one-window solution for all your financial & property needs. We are committed to provide fast, transparent and reliable services.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a 
                href="https://www.facebook.com/share/19eS4dJ2UH/" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Follow KTR Consultants on Facebook"
                aria-label="KTR Consultants Facebook Page"
                className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all"
              >
                {/* Facebook */}
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M15.12 5.32H17V2.14A26.11 26.11 0 0014.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V5.71c0-1.03.29-1.73 1.76-1.73z"/></svg>
              </a>
              <a 
                href="https://www.instagram.com/ktrconsultant?mdxt=MWZueG9xNnppaGJwbQ==" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Follow KTR Consultants on Instagram (@ktrconsultant)"
                aria-label="KTR Consultants Instagram Profile"
                className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#E4405F] hover:border-[#E4405F] transition-all"
              >
                {/* Instagram */}
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.4 5.6 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.6 18.4 4 16.4 4H7.6m4.4 4a4 4 0 110 8 4 4 0 010-8m0 2a2 2 0 100 4 2 2 0 000-4m5.22-3.67a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/></svg>
              </a>
              <a 
                href="https://www.justdial.com/Lucknow/Ktr-Consultants-Pvt-Ltd-Near-Phoenix-Palassio-Mall-Gomti-Nagar/0522PX522-X522-230911181822-N8V5_BZDET" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="KTR Consultants on Justdial"
                aria-label="KTR Consultants Justdial"
                className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#ff7a00] hover:border-[#ff7a00] transition-all text-[10px] font-black"
              >
                JD
              </a>
              <a 
                href="https://wa.me/919918699696" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Chat with KTR Consultants on WhatsApp"
                aria-label="KTR Consultants WhatsApp"
                className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all"
              >
                {/* WhatsApp */}
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="col-span-1 lg:px-8 xl:px-10">
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
          <div className="col-span-1 lg:px-8 xl:px-10">
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
          <div className="col-span-1 lg:px-8 xl:px-10">
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
          <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:pl-8 xl:pl-10">
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
