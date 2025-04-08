
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-portfolio-blue mx-auto"></div>
          <p className="mt-6 text-lg text-portfolio-gray max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            Feel free to reach out and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 animate-slide-up">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold text-portfolio-dark mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-blue p-3 rounded-full text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-portfolio-dark">Email</h4>
                    <a href="mailto:momihamm@example.com" className="text-portfolio-gray hover:text-portfolio-blue transition-colors">
                      momihamm@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-blue p-3 rounded-full text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-portfolio-dark">Phone</h4>
                    <a href="tel:+1234567890" className="text-portfolio-gray hover:text-portfolio-blue transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-blue p-3 rounded-full text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-portfolio-dark">Location</h4>
                    <p className="text-portfolio-gray">
                      San Francisco, California
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-medium text-portfolio-dark mb-4">Resume</h4>
                <Button
                  className="w-full bg-portfolio-blue hover:bg-portfolio-darkBlue text-white transition-colors"
                  asChild
                >
                  <a href="/resume.pdf" download="resume.pdf">Download Resume</a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 animate-slide-up">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-portfolio-dark mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-portfolio-gray mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="MOHAMED MIHAMMI"
                      required
                      className="w-full border-gray-300 focus:border-portfolio-blue focus:ring-portfolio-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-portfolio-gray mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="momihamm@example.com"
                      required
                      className="w-full border-gray-300 focus:border-portfolio-blue focus:ring-portfolio-blue"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-portfolio-gray mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="w-full border-gray-300 focus:border-portfolio-blue focus:ring-portfolio-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-portfolio-gray mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    className="w-full min-h-[150px] border-gray-300 focus:border-portfolio-blue focus:ring-portfolio-blue"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-portfolio-blue hover:bg-portfolio-darkBlue text-white transition-colors flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
