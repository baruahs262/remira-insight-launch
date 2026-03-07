import { motion } from "framer-motion";
import { Activity, Brain, Calendar, Moon, Target, TrendingUp } from "lucide-react";

const features = [
{
  icon: Brain,
  title: "AI-Powered Insights",
  description: "Detects patterns you can't see — then gives you actionable advice, not just data."
},
{
  icon: Activity,
  title: "CGM Integration",
  description: "Connects to your continuous glucose monitor for seamless, real-time data analysis."
},
{
  icon: Calendar,
  title: "Calendar Sync",
  description: "Integrates with Google Calendar to link blood glucose trends with your daily routine."
},
{
  icon: Moon,
  title: "Nighttime Planning",
  description: "Dedicated overnight analysis to prevent lows while you sleep."
},
{
  icon: Target,
  title: "Daily Score",
  description: "A personalized daily score based on your goals — track progress at a glance."
},
{
  icon: TrendingUp,
  title: "Trend Detection",
  description: "Short-term and long-term trend analysis with predictive alerts for highs and lows."
}];


const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const }
  })
};

const Features = () => {
  return (
    <section id="features" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          <p className="font-display font-medium tracking-widest uppercase text-sm mb-3 text-blue-600">Features</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            More than just <span className="text-gradient text-blue-600">charts.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Remira doesn't show you what you already know — 
It finds what you miss and helps you act on it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) =>
          <motion.div
            key={feature.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={cardVariants}
            className="glass-card rounded-xl p-7 group transition-colors border-blue-600">
            
              <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default Features;