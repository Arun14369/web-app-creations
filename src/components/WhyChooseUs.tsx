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
    <section id="why-us" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
            Our Strengths
          </span>
          <div className="accent-line mx-auto mt-4 mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground">
            Why Leading Firms Trust Us
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto leading-relaxed">
            We combine decades of experience with modern workforce management
            to deliver unmatched value.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white border border-border/60 rounded-2xl p-8 hover:shadow-card-hover hover:border-primary/20 transition-all duration-500"
            >
              {/* Hover accent line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              
              <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-glow transition-all duration-500">
                <reason.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-[1.8]">
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
