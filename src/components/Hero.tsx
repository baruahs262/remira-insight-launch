import { motion } from "framer-motion";
import remiraIcon from "@/assets/remira-icon.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden text-secondary">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />

      <div className="relative z-10 max-w-5xl mx-auto text-center text-primary">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8">
          
          <img src={remiraIcon} alt="" className="w-16 h-16 mx-auto mb-6 animate-float" />
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-display font-medium tracking-widest uppercase text-sm mb-4 text-blue-600">
          
          Personalized · Actionable · Intelligent
        </motion.p>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-5xl md:text-7xl font-display font-bold leading-[0.95] mb-6 lg:text-6xl text-secondary-foreground">
          
          <span className="text-gradient text-blue-600">Designed for Type-1 Diabetics</span>
        </motion.h1>

        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">Remira uses AI to turn your CGM data into insights hour by hour — 
Helping you spend less time managing diabetes and more time living.


        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}>
          
          <a
            href="#waitlist"
            className="inline-block px-8 py-4 rounded-full text-primary-foreground font-display font-semibold text-lg glow-primary hover:scale-105 transition-transform bg-[#79d9ec]">
            
            Join the Waitlist
          </a>
        </motion.div>
      </div>
    </section>);

};

export default Hero;