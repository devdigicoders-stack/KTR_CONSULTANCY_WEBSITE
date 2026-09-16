import SEO from '../components/SEO';
import ContactHero from '../components/ContactHero';
import ContactFormSection from '../components/ContactFormSection';
import ContactFeatures from '../components/ContactFeatures';
import ContactLocations from '../components/ContactLocations';
import ContactFAQ from '../components/ContactFAQ';
import ContactBottomCTA from '../components/ContactBottomCTA';

const Contact = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="Contact Us - Office in Gomti Nagar, Lucknow"
        description="Get in touch with KTR Consultants (ktrconsultants.in). Located at Virat Khand, Gomti Nagar, Lucknow - 226010. Call +91 99186 99696 or email info@ktrconsultants.in for loans, CIBIL, and financial advisory."
        keywords="contact ktr consultants, ktr consultants lucknow phone number, ktr consultants gomti nagar address, ktrconsultants contact"
        canonicalUrl="https://www.ktrconsultants.in/contact"
      />
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
