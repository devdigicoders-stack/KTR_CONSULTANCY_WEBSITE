import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutWhoWeAre from '../components/AboutWhoWeAre';
import StatsBanner from '../components/StatsBanner';
import AboutApproach from '../components/AboutApproach';
import AboutWhyChooseUs from '../components/AboutWhyChooseUs';
import AboutTeam from '../components/AboutTeam';

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutWhoWeAre />
      
      {/* We reuse the StatsBanner from the Home page since it's identical */}
      <div className="bg-[#fafafa]">
        <StatsBanner />
      </div>

      <AboutApproach />
      <AboutWhyChooseUs />
      <AboutTeam />
    </>
  );
};

export default About;
