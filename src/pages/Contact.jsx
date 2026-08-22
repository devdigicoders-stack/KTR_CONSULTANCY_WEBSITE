import ContactHero from '../components/ContactHero';
import ContactFormSection from '../components/ContactFormSection';
import ContactFeatures from '../components/ContactFeatures';
import ContactLocations from '../components/ContactLocations';
import ContactFAQ from '../components/ContactFAQ';
import ContactBottomCTA from '../components/ContactBottomCTA';

const Contact = () => {
  return (
    <div className="bg-white">
      <ContactHero />
      <ContactFormSection />
      <ContactFeatures />
      <ContactLocations />
      <ContactFAQ />
      <ContactBottomCTA />
    </div>
  );
};

export default Contact;
