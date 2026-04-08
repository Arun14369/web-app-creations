import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

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
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
            Get In Touch
          </span>
          <div className="accent-line mx-auto mt-4 mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground">
            Let's Discuss Your Project
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto leading-relaxed">
            Reach out for a free consultation. Our team responds within
            24 hours with a tailored proposal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-2xl p-8 md:p-10 shadow-card border border-border/40"
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 block">
                    Full Name
                  </label>
                  <input
                    placeholder="Your name"
                    className="w-full bg-muted/50 border border-border/60 rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 block">
                    Phone Number
                  </label>
                  <input
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-muted/50 border border-border/60 rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 block">
                  Email Address
                </label>
                <input
                  placeholder="you@company.com"
                  className="w-full bg-muted/50 border border-border/60 rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 block">
                  Subject
                </label>
                <input
                  placeholder="e.g. Manpower requirement for AAC plant"
                  className="w-full bg-muted/50 border border-border/60 rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your project requirements..."
                  rows={5}
                  className="w-full bg-muted/50 border border-border/60 rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-premium text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-3 text-base"
              >
                <Send className="w-4 h-4" />
                Send Enquiry
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4 p-4 rounded-xl hover:bg-primary/3 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}

            <div className="navy-gradient rounded-2xl p-7 mt-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h4 className="font-heading text-lg font-bold text-white mb-2">
                  Emergency Manpower?
                </h4>
                <p className="text-white/60 text-sm mb-5 leading-relaxed">
                  Need immediate workforce deployment? Call our 24/7 helpline.
                </p>
                <a
                  href="tel:+919876543210"
                  className="text-white font-bold text-2xl font-heading inline-block hover:opacity-80 transition-opacity"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
