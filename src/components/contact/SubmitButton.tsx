
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => (
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

export default SubmitButton;
