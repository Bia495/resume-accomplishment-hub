
import { useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "../ui/AnimatedText";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
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
              className="w-full px-4 py-3 rounded-lg border border-muted bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              placeholder="John Doe"
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
              className="w-full px-4 py-3 rounded-lg border border-muted bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              placeholder="john@example.com"
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
              className="w-full px-4 py-3 rounded-lg border border-muted bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
              placeholder="Hello, I'd like to talk about..."
            />
          </div>

          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      )}
    </AnimatedText>
  );
};

const SuccessMessage = () => (
  <div className="text-center py-8">
    <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h4 className="text-lg font-medium mb-2">Message Sent!</h4>
    <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you as soon as possible.</p>
  </div>
);

const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className={cn(
      "button-transition w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center",
      isSubmitting
        ? "bg-muted text-muted-foreground cursor-not-allowed"
        : "bg-accent text-white hover:bg-accent/90"
    )}
  >
    {isSubmitting ? (
      <>
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
      </>
    ) : (
      <>
        Send Message
        <Send size={16} className="ml-2" />
      </>
    )}
  </button>
);

export default ContactForm;
