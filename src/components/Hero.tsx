import { motion } from "framer-motion";
import remiraIcon from "@/assets/remira-icon.png";
import remiraTextLogo from "@/assets/remira-text-logo.png";

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
          
          <img src={remiraIcon} alt="" className="w-32 h-32 mx-auto mb-4 animate-float" />
          <img src={remiraTextLogo} alt="Remira" className="h-12 mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-3xl md:text-5xl font-display font-bold leading-[0.95] mb-2 lg:text-4xl text-secondary-foreground">
          <span className="text-gradient text-blue-600">Your Personal Type-1 <br className="hidden md:inline lg:hidden" />AI Assistant</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-2xl md:text-3xl font-display font-normal mb-6 text-secondary-foreground">
          <span className="text-white">Designed by a Type-1 Diabetic</span>
        </motion.p>

        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }} className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">Remira uses AI to turn your CGM data into insights hour by hour — 
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