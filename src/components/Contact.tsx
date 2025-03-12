
import SectionTitle from "./ui/SectionTitle";
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="section bg-secondary/30">
      <div className="container">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's talk about your project or job opportunities"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
