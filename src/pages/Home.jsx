import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HomeUSPBanner from '../components/HomeUSPBanner';
import HomeGSTUSPBanner from '../components/HomeGSTUSPBanner';
import StatsBanner from '../components/StatsBanner';
import ServicesGrid from '../components/ServicesGrid';
import EMICalculator from '../components/EMICalculator';
import HowItWorks from '../components/HowItWorks';
import CompanyStats from '../components/CompanyStats';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import TrustedBy from '../components/TrustedBy';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <HomeGSTUSPBanner />
      <HomeUSPBanner />
      <StatsBanner />
      <ServicesGrid />

      {/* EMI & Financial Planning Calculator Section */}
      <section className="bg-white py-14 lg:py-20 border-t border-gray-100 font-sans relative">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="h-[2px] bg-[#de9e48]/40 w-10 md:w-16"></div>
              <span className="text-[#de9e48] font-bold text-xs md:text-sm tracking-[0.15em] uppercase">
                FINANCIAL PLANNING TOOL
              </span>
              <div className="h-[2px] bg-[#de9e48]/40 w-10 md:w-16"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#020d1c] tracking-tight">
              Plan Your Loan EMI & Total Interest
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-2 max-w-xl mx-auto leading-relaxed">
              Use our interactive calculator to estimate your exact monthly installments, total interest outgo, and complete yearly repayment schedule.
            </p>
          </div>

          <EMICalculator embedded={true} />
        </div>
      </section>

      <HowItWorks />
      <CompanyStats />
      <WhyChooseUs />
      <Testimonials />
      <TrustedBy />
      <CTASection />
    </>
  );
};

export default Home;
