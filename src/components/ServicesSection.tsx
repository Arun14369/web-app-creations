import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import serviceAac from "@/assets/service-aac.jpg";
import serviceTender from "@/assets/service-tender.jpg";
import serviceManpower from "@/assets/service-manpower.jpg";

const services = [
  {
    image: serviceTender,
    title: "Government Tender Execution",
    description:
      "End-to-end management of government tenders including documentation, bidding strategy, compliance, and project delivery for infrastructure and industrial projects.",
    tags: ["Tender Bidding", "Documentation", "Compliance"],
  },
  {
    image: serviceManpower,
    title: "Manpower Supply & Management",
    description:
      "Skilled and semi-skilled workforce deployment for AAC plants, construction sites, and industrial operations. Fully managed with attendance, payroll, and compliance.",
    tags: ["Skilled Workers", "Payroll Managed", "Pan-India"],
  },
  {
    image: serviceAac,
    title: "AAC Block Plant Operations",
    description:
      "Complete operational support for AAC block manufacturing plants including plant setup consultation, production management, and quality assurance.",
    tags: ["Plant Operations", "Quality Control", "Production"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            Our Core Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive industrial solutions tailored for government projects
            and AAC block manufacturing operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center text-accent font-semibold text-sm hover:gap-3 gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
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
