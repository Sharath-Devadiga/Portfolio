import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Download, Send, Mail, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Twitter, Github } from "lucide-react";
import emailjs from "@emailjs/browser"; 

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Send email using EmailJS
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_hu7r95t", // replace with your EmailJS service ID
        "template_4417e7d", // replace with your EmailJS template ID
        formData,
        "fr6PbZm6e4bLDGpYQ" // replace with your EmailJS public key
      )
      .then(
        () => {
          toast({
            title: "Message Sent",
            description: "Your message has been delivered. Expect a response within 24 hours.",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast({
            title: "Error",
            description: "Message could not be sent. Please try again later.",
          });
          console.error(error);
        }
      );
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/newResume.pdf"; 
    link.download = "Sharath_Devadiga_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="scroll-mt-[70px] md:scroll-mt-20 py-12 md:py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="font-typewriter text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-3 md:mb-4 text-primary tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          GET IN TOUCH
        </motion.h2>
        <motion.p
          className="font-serif text-center text-muted-foreground mb-8 md:mb-12 text-sm sm:text-base md:text-lg px-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Projects, collaborations, or just a hello — I’d love to hear from you.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-paper-cream text-ink-black p-4 sm:p-6 md:p-8 border-4 border-border relative overflow-hidden">
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                <Mail className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-ink-black/20 rotate-12" />
              </div>

              <h3 className="font-typewriter text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-ink-black">
                SEND A MESSAGE
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <Label htmlFor="name" className="font-typewriter text-xs sm:text-sm text-ink-black mb-2 block">
                    YOUR NAME:
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50 border-2 border-ink-black/30 text-ink-black font-serif text-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="font-typewriter text-xs sm:text-sm text-ink-black mb-2 block">
                    EMAIL ADDRESS:
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50 border-2 border-ink-black/30 text-ink-black font-serif text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="font-typewriter text-xs sm:text-sm text-ink-black mb-2 block">
                    MESSAGE:
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-background/50 border-2 border-ink-black/30 text-ink-black font-serif resize-none text-sm"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full font-typewriter text-sm sm:text-base bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Send className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    SEND MESSAGE
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Right Side */}
          <div className="space-y-6 md:space-y-8">
            {/* Resume Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-card p-4 sm:p-6 md:p-8 border-2 border-border">
                <h3 className="font-typewriter text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                  VIEW RESUME
                </h3>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    className="w-full font-typewriter text-sm sm:text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                    onClick={() => setIsResumeOpen(true)}
                  >
                    <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">CLICK TO VIEW RESUME</span>
                    <span className="sm:hidden">VIEW RESUME</span>
                  </Button>
                </motion.div>
              </Card>
            </motion.div>

            {/* Contact Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-card/50 p-4 sm:p-6 md:p-8 border-2 border-border">
                <h3 className="font-typewriter text-base sm:text-lg md:text-xl mb-3 md:mb-4 text-foreground">
                  CONTACT INFO
                </h3>
                <div className="space-y-3 font-serif text-sm sm:text-base text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <a
                      href="mailto:sharath13feb@gmail.com"
                      className="text-primary hover:underline break-all"
                    >
                      sharath13feb@gmail.com
                    </a>
                  </p>

                  <p className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-primary" />
                    <a
                      href="https://www.linkedin.com/in/sharath-devadiga-43471b2aa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      LinkedIn
                    </a>
                  </p>

                  <p className="flex items-center gap-2">
                    <Twitter className="w-4 h-4 text-primary" />
                    <a
                      href="https://x.com/Sharath__D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Twitter
                    </a>
                  </p>

                  <p className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-primary" />
                    <a
                      href="https://github.com/Sharath-Devadiga"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      GitHub
                    </a>
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-[90%] md:w-[70%] lg:w-[60%] max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-lg">
            {/* Close Button */}
            <button
              onClick={() => setIsResumeOpen(false)}
              className="absolute top-0 right-0 text-foreground hover:text-primary"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Download Button */}
            {/* <button
              onClick={downloadResume}
              className="absolute top-3 right-14 text-primary flex items-center gap-1 hover:underline"
            >
              <Download className="w-5 h-5" /> Download
            </button> */}

            {/* PDF iframe */}
            <iframe
              src="assets/newResume.pdf" // replace with your resume path
              className="w-full h-[80vh] border-0"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
