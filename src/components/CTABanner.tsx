import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="navy-gradient section-padding py-20 md:py-24 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        
        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/15 rounded-tl-xl" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/15 rounded-br-xl" />

        <div className="container-max text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Partner with a
              <br />
              <span className="text-gradient-gold">Trusted Contractor?</span>
            </h2>
            <p className="text-white/60 max-w-lg mx-auto mb-10 leading-relaxed">
              Whether you need manpower for your AAC plant or a reliable
              government tender partner, we deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <button className="bg-white text-primary font-semibold text-base px-10 py-4 rounded-lg flex items-center gap-3 mx-auto sm:mx-0 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Contact Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
              <a href="tel:+919876543210">
                <button className="border border-white/25 text-white/90 font-medium text-base px-10 py-4 rounded-lg flex items-center gap-3 mx-auto sm:mx-0 hover:bg-white/10 transition-all duration-300">
                  <Phone className="w-5 h-5 text-white/70" />
                  +91 98765 43210
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
