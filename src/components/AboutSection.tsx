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
    <section id="about" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutTeam}
                alt="Our professional team at a construction site"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 gold-gradient rounded-xl p-6 shadow-xl hidden md:block">
              <p className="font-heading text-3xl font-bold text-primary">15+</p>
              <p className="text-primary text-sm font-semibold">Years of Trust</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">
              Who We Are
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              A Legacy of Industrial
              <br />
              <span className="text-primary">Excellence & Trust</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Apex Industries is a leading government-registered contracting firm
              specializing in tender-based projects and comprehensive manpower
              supply for AAC block manufacturing plants across India. With over
              15 years of proven expertise, we have built a reputation for
              reliability, quality, and timely execution.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our commitment to operational excellence and workforce management
              has earned us the trust of government bodies, industrial clients,
              and major infrastructure developers nationwide.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
