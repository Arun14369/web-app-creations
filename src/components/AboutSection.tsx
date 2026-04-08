import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const highlights = [
  "Registered Government Contractor",
  "ISO 9001:2015 Certified",
  "Pan-India Operations",
  "Dedicated Workforce Management",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container-max relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-premium">
              <img
                src={aboutTeam}
                alt="Our professional team at a construction site"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-[520px] object-cover"
              />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-primary rounded-xl p-6 shadow-glow hidden md:block"
            >
              <p className="font-heading text-4xl font-bold text-white">15+</p>
              <p className="text-white/80 text-sm font-semibold mt-1">Years of Trust</p>
            </motion.div>
            {/* Decorative border */}
            <div className="absolute -inset-4 border-2 border-primary/10 rounded-2xl -z-10 hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
              Who We Are
            </span>
            <div className="accent-line mt-4 mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight mb-8">
              A Legacy of Industrial
              <br />
              <span className="text-primary">Excellence & Trust</span>
            </h2>
            <p className="text-muted-foreground leading-[1.8] mb-6 text-[15px]">
              Apex Industries is a leading government-registered contracting firm
              specializing in tender-based projects and comprehensive manpower
              supply for AAC block manufacturing plants across India. With over
              15 years of proven expertise, we have built a reputation for
              reliability, quality, and timely execution.
            </p>
            <p className="text-muted-foreground leading-[1.8] mb-10 text-[15px]">
              Our commitment to operational excellence and workforce management
              has earned us the trust of government bodies, industrial clients,
              and major infrastructure developers nationwide.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 bg-primary/5 rounded-lg px-4 py-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
