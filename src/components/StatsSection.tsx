import { motion } from "framer-motion";

const stats = [
{ value: "180–300", label: "extra decisions per day with Type-1" },
{ value: "75%", label: "experience diabetes-related anxiety" },
{ value: "2×", label: "higher rate of depression" }];


const StatsSection = () => {
  return (
    <section className="py-20 section-padding bg-muted/30">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="p-6"
          >
            <p className="text-4xl font-display font-bold text-primary mb-2">{stat.value}</p>
            <p className="text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;