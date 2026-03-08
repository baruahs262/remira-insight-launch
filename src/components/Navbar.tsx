import { motion } from "framer-motion";
import remiraLogo from "@/assets/remira-logo.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-background/80 backdrop-blur-xl border-b border-border/30">
      
      <img src={remiraLogo} alt="Remira" className="h-8 md:h-10" />
      <a
        href="#waitlist"
        className="px-5 py-2.5 rounded-full text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity bg-[#79d9ec]">
        
        Join Waitlist
      </a>
    </motion.nav>);

};

export default Navbar;