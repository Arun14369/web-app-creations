import { motion } from "framer-motion";
import { ArrowRight, Shield, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="AAC Block Manufacturing Plant"
          width={1920}
          height={1080}
          className="w-full h-full object-cover scale-105"
        />
        {/* Multi-layer overlay — lighter blue tones */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#002244]/90 via-[#005DAA]/70 to-[#0077CC]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001a33]/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002244]/40 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />

      {/* Content */}
      <div className="relative container-max px-6 sm:px-8 lg:px-12 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-dark rounded-full px-5 py-2.5 mb-8"
          >
            <Shield className="w-4 h-4 text-white" />
            <span className="text-white/90 font-semibold text-xs tracking-[0.2em] uppercase">
              Trusted Government Contractor
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8"
          >
            Building the Future,
            <br />
            <span className="text-gradient-gold">One Block at a Time</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/70 text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
          >
            India's premier government tender contractor and manpower supply
            partner for AAC block plants. Delivering excellence with{" "}
            <span className="text-white font-medium">15+ years</span> of
            trusted operations.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a href="#contact">
              <button className="btn-premium text-white font-semibold text-base px-8 py-4 rounded-lg flex items-center gap-3">
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </button>
            </a>
            <a href="#services">
              <button className="glass-dark text-white/90 font-medium text-base px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/20">
                Explore Services
              </button>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-8 items-center"
          >
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-white/70" />
              <span className="text-white/50 text-sm">ISO 9001:2015</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-white/50 text-sm">500+ Projects Delivered</span>
            <div className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="text-white/50 text-sm hidden sm:block">Pan-India Operations</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
