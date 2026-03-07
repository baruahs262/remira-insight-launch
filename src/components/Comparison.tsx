import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparison = [
{
  label: "Glucose view",
  typical: "Dot chart view",
  remira: "Color-coded view integrated with calendar"
},
{
  label: "Trends",
  typical: "Long-term trends only",
  remira: "Short-term and long-term trends"
},
{
  label: "Adjustments",
  typical: "Changes every few weeks to months",
  remira: "Day-to-day actionable changes"
},
{
  label: "Interpretation",
  typical: "Up to you to interpret",
  remira: "Personalized, actionable insight"
}];


const Comparison = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14">
          
          <p className="font-display font-medium tracking-widest uppercase text-sm mb-3 text-blue-600">Why Remira</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            See the <span className="text-gradient text-blue-600">difference.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl overflow-hidden">
          
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-border/50 text-sm font-display font-semibold">
            <div className="text-muted-foreground">Feature</div>
            <div className="text-muted-foreground text-center">Current Apps</div>
            <div className="text-center text-blue-600">Remira</div>
          </div>
          {/* Rows */}
          {comparison.map((row, i) =>
          <motion.div
            key={row.label}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="grid grid-cols-3 gap-4 px-6 py-5 border-b border-border/30 last:border-b-0 text-sm">
            
              <div className="font-medium">{row.label}</div>
              <div className="text-muted-foreground text-center flex items-start justify-center gap-2">
                <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                <span>{row.typical}</span>
              </div>
              <div className="text-center flex items-start justify-center gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{row.remira}</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

};

export default Comparison;