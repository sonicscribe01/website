import { Input, Textarea, Button } from '@nextui-org/react';

interface ContactFormProps {
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting?: boolean;
  required?: boolean;
  improvedStates?: boolean;
}

const ContactForm = ({ 
  handleSubmit, 
  isSubmitting = false, 
  required = true, 
  improvedStates = false 
}: ContactFormProps) => {
  const inputClasses = `mt-1 w-full px-3 py-2 bg-[#1A1A1A] border border-gray-600 rounded-md text-white shadow-sm
  focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-[#FF4500]
  hover:border-[#FF4500]/50
  ${improvedStates ? 'transition-colors duration-200' : ''}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact Form">
      <Input
        type="text"
        id="name"
        name="name"
        required={required}
        aria-required={required}
        className={inputClasses}
        placeholder="Your Name"
      />
      <Input
        type="email"
        id="email"
        name="email"
        required={required}
        aria-required={required}
        className={inputClasses}
        placeholder="Your Email"
      />
      <Textarea
        id="message"
        name="message"
        rows={4}
        required={required}
        aria-required={required}
        className={inputClasses}
        placeholder="Your Message"
      />
      <Button 
        type="submit" 
        disabled={isSubmitting} 
        className="bg-[#FF4500] hover:bg-[#FF6347] active:bg-[#E63900] text-white transition-colors duration-200 rounded-md" 
        aria-label="Send message"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
      <div aria-live="polite" className="sr-only">
        {isSubmitting ? 'Sending your message...' : ''}
      </div>
    </form>
  );
};

export default ContactForm;

