import { motion } from "framer-motion";
import { useState } from "react";

const WaitlistCTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}>
          
          <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-3">Early Access</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Be the first to try <span className="text-gradient">Remira</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Sign up for early access and help us build the future of Type-1 management.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}>
          
          {submitted ?
          <div className="glass-card rounded-2xl p-8 glow-primary">
              <div className="text-4xl mb-3">🎉</div>
              <p className="font-display font-semibold text-xl mb-1">You're on the list!</p>
              <p className="text-muted-foreground">We'll reach out when Remira is ready for you.</p>
            </div> :

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-full bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body" />
            
              <button
              type="submit"
              className="px-7 py-3.5 rounded-full text-primary-foreground font-display font-semibold hover:scale-105 transition-transform glow-primary shrink-0 bg-teal-300 hover:bg-teal-200">
              
                Join Waitlist
              </button>
            </form>
          }
        </motion.div>
      </div>
    </section>);

};

export default WaitlistCTA;