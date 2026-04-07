import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Head Office",
    detail: "Plot No. 42, Industrial Area Phase-II, New Delhi – 110020",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "+91 98765 43210",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "info@apexindustries.in",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon – Sat: 9:00 AM – 6:00 PM",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Let's Discuss Your Project
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Reach out for a free consultation. Our team will respond within 24
            hours with a tailored proposal for your requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-card rounded-2xl p-8 shadow-lg"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Full Name
                  </label>
                  <Input placeholder="Your name" className="bg-secondary border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Phone Number
                  </label>
                  <Input placeholder="+91 XXXXX XXXXX" className="bg-secondary border-border" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Email Address
                </label>
                <Input placeholder="you@company.com" className="bg-secondary border-border" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Subject
                </label>
                <Input placeholder="e.g. Manpower requirement for AAC plant" className="bg-secondary border-border" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your project requirements..."
                  rows={5}
                  className="bg-secondary border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full gold-gradient text-primary font-semibold hover:opacity-90 transition-opacity"
              >
                Send Enquiry
              </Button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg navy-gradient flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{item.detail}</p>
                </div>
              </div>
            ))}

            <div className="navy-gradient rounded-xl p-6 mt-8">
              <h4 className="font-heading text-lg font-bold text-primary-foreground mb-2">
                Emergency Manpower?
              </h4>
              <p className="text-primary-foreground/70 text-sm mb-4">
                Need immediate workforce deployment? Call our 24/7 helpline.
              </p>
              <a
                href="tel:+919876543210"
                className="text-accent font-bold text-xl hover:underline"
              >
                +91 98765 43210
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
