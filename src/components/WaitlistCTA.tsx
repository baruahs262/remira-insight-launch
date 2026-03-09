import { motion } from "framer-motion";
import { useState } from "react";

const SocialLinks = () =>
<div className="mt-6">
    <p className="text-sm mb-4 text-primary font-bold">Follow us for updates</p>
    <div className="flex items-center justify-center gap-5">
      <a href="https://instagram.com/remira.app" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
        <svg className="w-7 h-7 text-foreground" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      </a>
      <a href="https://tiktok.com/@remira.app" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
        <svg className="w-7 h-7 text-foreground" viewBox="0 0 448 512" fill="currentColor">
          <path d="M448 209.91a210.06 210.06 0 01-122.77-39.25v178.72A162.55 162.55 0 11185 188.31v89.89a74.62 74.62 0 1052.23 71.18V0h88a121.18 121.18 0 001.86 22.17A122.18 122.18 0 00381 102.39a121.43 121.43 0 0067 20.14z" />
        </svg>
      </a>
      <a href="https://x.com/RemiraApp" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
        <svg className="w-6 h-6 text-foreground" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
    </div>
  </div>;


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
              <p className="text-destructive-foreground">We'll reach out when Remira is ready for you.</p>
              <SocialLinks />
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
              className="px-7 py-3.5 rounded-full text-primary-foreground font-display font-semibold hover:scale-105 transition-transform glow-primary shrink-0 bg-[#70c5d7]">
              
                Join Waitlist
              </button>
            </form>
          }
        </motion.div>
      </div>
    </section>);

};

export default WaitlistCTA;