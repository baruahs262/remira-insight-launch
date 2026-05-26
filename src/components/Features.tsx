import { motion } from "framer-motion";
import { Brain, CloudSun, FileText, Orbit, Target, TrendingUp } from "lucide-react";
import dailyReportNew from "@/assets/daily_report_new.png";
import forecastNew from "@/assets/forecast_new.png";
import insightDetailNew from "@/assets/insight_detail_new.png";
import insightsNew from "@/assets/insights_new.png";
import orbitNew from "@/assets/orbit_new.png";
import homeNew from "@/assets/home_new.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const features = [
{
  icon: FileText,
  title: "Daily Report",
  description: "Every morning, get a personalized report predicting the patterns most likely to show up today — so you know exactly what to look out for.",
  image: dailyReportNew
},
{
  icon: CloudSun,
  title: "Glucose Forecast",
  description: "We forecast your glucose hour by hour so you can see the highs and lows coming before they happen.",
  image: forecastNew
},
{
  icon: TrendingUp,
  title: "Trend Detection",
  description: "Short-term and long-term trend analysis with predictive alerts for highs and lows.",
  image: insightDetailNew
},
{
  icon: Brain,
  title: "AI-Powered Insights",
  description: "Surface patterns you'd never spot on your own. Each day brings a fresh constellation of insights, revealing the new trends hidden in your data.",
  image: insightsNew
},
{
  icon: Orbit,
  title: "Orbit",
  description: "Connects to your continuous glucose monitor for seamless, real-time data — and helps you align your daily routine with your glucose.",
  image: orbitNew
},
{
  icon: Target,
  title: "Daily Score",
  description: "A personalized daily score based on your goals — track progress at a glance.",
  image: homeNew
}];

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
            Not reflective. <span className="text-gradient text-blue-600">Predictive.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Remira forecasts your glucose, predicts the patterns coming next, and tells you what to look out for — before it happens.
          </p>
        </motion.div>

        <div className="px-12">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {features.map((feature) =>
              <CarouselItem key={feature.title} className="md:basis-1/2 lg:basis-1/3">
                <div className="glass-card rounded-xl p-7 group transition-colors border-blue-600 h-full">
                  <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  {'image' in feature && feature.image && (
                    <img src={feature.image} alt={feature.title} className="mt-4 rounded-lg w-full h-auto border border-border/30" loading="lazy" />
                  )}
                </div>
              </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>);

};

export default Features;
