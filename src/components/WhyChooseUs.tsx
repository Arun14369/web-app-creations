import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Award,
  Clock,
  FileCheck,
  Truck,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Government Registered",
    description: "Fully registered and compliant with all government regulations for tender-based projects.",
  },
  {
    icon: Users,
    title: "5000+ Skilled Workers",
    description: "Access to a large pool of trained and verified workforce ready for immediate deployment.",
  },
  {
    icon: Award,
    title: "ISO Certified",
    description: "ISO 9001:2015 certified operations ensuring world-class quality standards in every project.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Proven track record of completing projects within deadlines with zero compromise on quality.",
  },
  {
    icon: FileCheck,
    title: "Full Compliance",
    description: "Complete labor law compliance including PF, ESI, insurance, and statutory requirements.",
  },
  {
    icon: Truck,
    title: "Pan-India Operations",
    description: "Operational presence across multiple states with dedicated regional management teams.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Our Strengths
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Why Leading Firms Trust Us
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We combine decades of experience with modern workforce management
            to deliver unmatched value to government and industrial clients.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg navy-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
