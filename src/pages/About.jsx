import React from 'react';
import SEO from '../components/SEO';
import AboutHero from '../components/AboutHero';
import AboutWhoWeAre from '../components/AboutWhoWeAre';
import AboutWhyChooseUs from '../components/AboutWhyChooseUs';
import AboutJourney from '../components/AboutJourney';
import AboutTestimonials from '../components/AboutTestimonials';
import CTASection from '../components/CTASection';

const About = () => {
  return (
    <>
      <SEO 
        title="About Us - Leading Financial Advisory Firm"
        description="Learn about KTR Consultants (ktrconsultants.in) based in Lucknow. Our team of financial, legal, and CA experts provides end-to-end consulting for loans, CIBIL repair, and property assessments."
        keywords="about ktr consultants, ktrconsultants lucknow, ktr consultants team, financial advisory gomti nagar"
        canonicalUrl="https://www.ktrconsultants.in/about"
      />
      <AboutHero />
      <AboutWhoWeAre />
      <AboutWhyChooseUs />
      <AboutJourney />
      <AboutTestimonials />
      
      <div className="bg-white">
        <CTASection />
      </div>
    </>
  );
};

export default About;
