import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Building2, Users, Briefcase, Trophy } from "lucide-react";

const stats = [
  { value: 15, suffix: "+", label: "Years of Experience", icon: Building2 },
  { value: 500, suffix: "+", label: "Projects Completed", icon: Briefcase },
  { value: 5000, suffix: "+", label: "Workers Deployed", icon: Users },
  { value: 120, suffix: "+", label: "Tenders Won", icon: Trophy },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-heading text-4xl md:text-5xl font-bold text-gradient-gold inline-block">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsBar = () => {
  return (
    <section className="relative -mt-20 z-10 px-6 sm:px-8 lg:px-12 pb-12">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="navy-gradient rounded-2xl px-8 md:px-12 py-14 shadow-premium relative overflow-hidden texture-overlay"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-accent/20 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-accent/20 rounded-br-2xl" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center relative z-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <stat.icon className="w-6 h-6 text-accent/60 mx-auto mb-3" />
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-primary-foreground/50 mt-3 text-xs font-medium tracking-[0.15em] uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
