import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import serviceAac from "@/assets/service-aac.jpg";
import serviceTender from "@/assets/service-tender.jpg";
import serviceManpower from "@/assets/service-manpower.jpg";

const services = [
  {
    image: serviceTender,
    num: "01",
    title: "Government Tender Execution",
    description:
      "End-to-end management of government tenders including documentation, bidding strategy, compliance, and seamless project delivery for infrastructure and industrial projects.",
    tags: ["Tender Bidding", "Documentation", "Compliance"],
  },
  {
    image: serviceManpower,
    num: "02",
    title: "Manpower Supply & Management",
    description:
      "Skilled and semi-skilled workforce deployment for AAC plants, construction sites, and industrial operations. Fully managed with attendance, payroll, and complete compliance.",
    tags: ["Skilled Workers", "Payroll Managed", "Pan-India"],
  },
  {
    image: serviceAac,
    num: "03",
    title: "AAC Block Plant Operations",
    description:
      "Complete operational support for AAC block manufacturing plants including plant setup consultation, production management, and quality assurance systems.",
    tags: ["Plant Operations", "Quality Control", "Production"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold text-xs tracking-[0.25em] uppercase">
            What We Do
          </span>
          <div className="accent-line mx-auto mt-4 mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground">
            Our Core Services
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto leading-relaxed">
            Comprehensive industrial solutions tailored for government projects
            and AAC block manufacturing operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 group relative"
            >
              {/* Image */}
              <div className="overflow-hidden h-60 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002244]/50 to-transparent" />
                <span className="absolute bottom-4 left-5 font-heading text-4xl font-bold text-white/20">
                  {service.num}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-[1.8] mb-5">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-primary/5 text-primary text-[11px] font-medium tracking-wide uppercase rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary font-semibold text-sm group/link"
                >
                  <span className="border-b border-primary/30 group-hover/link:border-primary transition-colors">
                    Learn More
                  </span>
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
