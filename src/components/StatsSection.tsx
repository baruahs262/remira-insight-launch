import { motion } from "framer-motion";

const stats = [
{ value: "180–300", label: "extra decisions per day with Type-1" },
{ value: "75%", label: "experience diabetes-related anxiety" },
{ value: "2×", label: "higher rate of depression" }];


const StatsSection = () => {
  return (
    <section className="section-padding border-y border-border/30">
      <div className="max-w-5xl mx-auto">
        








        

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) =>
          <motion.div
            key={stat.label}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="text-center">
            
              <div className="text-5xl md:text-6xl font-display font-bold text-gradient mb-3">{stat.value}</div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default StatsSection;