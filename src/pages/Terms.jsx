import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
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
            <span className="text-white">Terms & Conditions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-5 tracking-tight">Terms & Conditions</h1>
          <div className="w-12 h-[3px] bg-[#de9e48] mb-6"></div>
          <p className="text-gray-300 text-[16px] max-w-xl mx-auto font-light leading-relaxed">
            Please read these terms and conditions carefully before using our services.
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
              <h2 className="text-[#020d1c] font-bold text-[22px] font-serif mb-3 tracking-tight">1. Introduction</h2>
              <p className="text-gray-600 text-[15px] leading-[1.8]">
                Welcome to KTR Consultants. These Terms & Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service. Our services are intended solely for professional and business use.
              </p>
            </div>

            <div>
              <h2 className="text-[#020d1c] font-bold text-[22px] font-serif mb-3 tracking-tight">2. Intellectual Property Rights</h2>
              <p className="text-gray-600 text-[15px] leading-[1.8]">
                Other than the content you own, under these Terms, KTR Consultants and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website. You may not copy, modify, distribute, or use our intellectual property for commercial purposes without our explicit written consent.
              </p>
            </div>

            <div>
              <h2 className="text-[#020d1c] font-bold text-[22px] font-serif mb-3 tracking-tight">3. Restrictions</h2>
              <p className="text-gray-600 text-[15px] leading-[1.8] mb-4">You are specifically restricted from all of the following:</p>
              <ul className="list-disc pl-5 text-gray-600 text-[15px] space-y-2 marker:text-[#de9e48]">
                <li>Publishing any Website material in any other media without credit.</li>
                <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
                <li>Publicly performing and/or showing any Website material.</li>
                <li>Using this Website in any way that is or may be damaging to this Website.</li>
                <li>Using this Website in any way that impacts user access to this Website.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#020d1c] font-bold text-[22px] font-serif mb-3 tracking-tight">4. No Warranties</h2>
              <p className="text-gray-600 text-[15px] leading-[1.8]">
                This Website is provided "as is," with all faults, and KTR Consultants expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you. We reserve the right to modify or discontinue services without notice.
              </p>
            </div>

            <div>
              <h2 className="text-[#020d1c] font-bold text-[22px] font-serif mb-3 tracking-tight">5. Limitation of Liability</h2>
              <p className="text-gray-600 text-[15px] leading-[1.8]">
                In no event shall KTR Consultants, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract. KTR Consultants, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
              </p>
            </div>

            <div>
              <h2 className="text-[#020d1c] font-bold text-[22px] font-serif mb-3 tracking-tight">6. Governing Law & Jurisdiction</h2>
              <p className="text-gray-600 text-[15px] leading-[1.8]">
                These Terms will be governed by and interpreted in accordance with the laws of the State of New York, and you submit to the non-exclusive jurisdiction of the state and federal courts located in New York for the resolution of any disputes. Any claim related to KTR Consultants's Website shall be governed by the laws of the State of New York without regard to its conflict of law provisions.
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Terms;
