import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const email = "arsrivastawa2710@gmail.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Email address copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-mono text-primary mb-2">// Let's Connect</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale?
          </h2>

          <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 font-mono text-xl md:text-2xl text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <Mail className="w-6 h-6 text-primary" />
            <span className="border-b border-dashed border-muted-foreground group-hover:border-primary transition-colors">
              {email}
            </span>
            {copied ? (
              <Check className="w-5 h-5 text-primary" />
            ) : (
              <Copy className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
            )}
          </motion.button>

          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/aditya-srivastawa/"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/arsrivastawa"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
