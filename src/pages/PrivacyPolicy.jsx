import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="font-sans bg-[#fafafa] pb-24">
      {/* Hero Section */}
      <section className="bg-[#020d1c] pt-28 pb-32 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-[1140px] mx-auto px-6 md:px-8 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center text-[14px] text-gray-300 mb-6 font-normal">
            <Link to="/" className="flex items-center hover:text-[#de9e48] transition-colors">
              <svg className="w-[16px] h-[16px] mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <span className="mx-2.5 text-gray-500">{'>'}</span>
            <span className="text-white">Privacy Policy</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-5 tracking-tight">Privacy Policy</h1>
          <div className="w-12 h-[3px] bg-[#de9e48] mb-6"></div>
          <p className="text-gray-300 text-[16px] max-w-xl mx-auto font-light leading-relaxed">
            We value your privacy. Learn how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-[840px] mx-auto px-6 md:px-8 -mt-16 relative z-20">
        <div className="bg-white rounded-[14px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 p-8 md:p-12 lg:p-16">
          
          <div className="text-[13.5px] font-medium text-gray-400 mb-8 border-b border-gray-100 pb-5">
            Last Updated: August 21, 2026
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-[#020d1c] font-bold text-[22px] font-serif mb-3 tracking-tight">1. Information We Collect</h2>
              <p className="text-gray-600 text-[15px] leading-[1.8]">
                We collect information you provide directly to us, such as when you fill out a form, request a consultation, or communicate with us. This may include your name, email address, phone number, company details, and any other information you choose to provide. We also automatically collect certain technical information when you visit our website, such as your IP address and browsing behavior.
              </p>
            </div>

            <div>
              <h2 className="text-[#020d1c] font-bold text-[22px] font-serif mb-3 tracking-tight">2. How We Use Your Information</h2>
              <p className="text-gray-600 text-[15px] leading-[1.8] mb-4">We use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-5 text-gray-600 text-[15px] space-y-2 marker:text-[#de9e48]">
                <li>Provide, maintain, and improve our consulting services.</li>
                <li>Respond to your comments, questions, and requests.</li>
                <li>Communicate with you about services, offers, and promotions.</li>
                <li>Monitor and analyze trends, usage, and activities on our website.</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#020d1c] font-bold text-[22px] font-serif mb-3 tracking-tight">3. Sharing of Information</h2>
              <p className="text-gray-600 text-[15px] leading-[1.8]">
                We do not sell or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when its release is appropriate to comply with the law or protect our rights.
              </p>
            </div>

            <div>
              <h2 className="text-[#020d1c] font-bold text-[22px] font-serif mb-3 tracking-tight">4. Data Security</h2>
              <p className="text-gray-600 text-[15px] leading-[1.8]">
                We implement a variety of security measures to maintain the safety of your personal information. However, please note that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-[#020d1c] font-bold text-[22px] font-serif mb-3 tracking-tight">5. Cookies and Tracking</h2>
              <p className="text-gray-600 text-[15px] leading-[1.8]">
                Our website uses "cookies" to enhance user experience and gather information about visitors and visits to our website. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings. If you turn cookies off, some features that make your site experience more efficient may not function properly.
              </p>
            </div>

            <div>
              <h2 className="text-[#020d1c] font-bold text-[22px] font-serif mb-3 tracking-tight">6. Your Rights and Choices</h2>
              <p className="text-gray-600 text-[15px] leading-[1.8]">
                Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. If you wish to exercise these rights or have questions about our privacy practices, please contact us at privacy@ktrconsultants.in.
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
