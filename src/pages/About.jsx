import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutWhoWeAre from '../components/AboutWhoWeAre';
import AboutWhyChooseUs from '../components/AboutWhyChooseUs';
import AboutJourney from '../components/AboutJourney';
import AboutTestimonials from '../components/AboutTestimonials';
import CTASection from '../components/CTASection';

const About = () => {
  return (
    <>
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
