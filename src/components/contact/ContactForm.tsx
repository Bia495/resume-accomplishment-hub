
import { useState } from "react";
import emailjs from '@emailjs/browser';
import AnimatedText from "../ui/AnimatedText";
import SuccessMessage from "./SuccessMessage";
import SubmitButton from "./SubmitButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_6km5zro';
  const EMAILJS_TEMPLATE_ID = 'template_hqius5n'; // You'll need to create this
  const EMAILJS_PUBLIC_KEY = 'Ru5lA9SMFvdzWKaQh'; // You'll need to get this from EmailJS

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Mico Banzuela', // Your name
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully!");
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSubmitting(false);
      // You could add error handling here
      alert("Failed to send message. Please try again or contact me directly.");
    }
  };

  return (
    <AnimatedText
      className="neo-card p-6 md:p-8"
      animation="fade-in"
      delay={100}
    >
      <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>

      {isSubmitted ? (
        <SuccessMessage />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              placeholder="Mico Banzuela"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              placeholder="mico@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
              placeholder="Hello, I'd like to talk about..."
            />
          </div>

          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      )}
    </AnimatedText>
  );
};

export default ContactForm;
