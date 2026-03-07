import { motion } from "framer-motion";
import appScore from "@/assets/app-score.jpeg";
import appInsights from "@/assets/app-insights.png";
import appInsightDetail from "@/assets/app-insight-detail.png";
import appRiskHour from "@/assets/app-risk-hour.jpeg";
import appCalendar from "@/assets/app-calendar.jpeg";
import appTypicalDay from "@/assets/app-typical-day.jpeg";

const screens = [
{ src: appScore, alt: "Daily Score", label: "Daily Score" },
{ src: appInsights, alt: "AI Insights", label: "Insights" },
{ src: appInsightDetail, alt: "Insight Detail", label: "Detail View" },
{ src: appRiskHour, alt: "Risk Hour Detail" },
{ src: appCalendar, alt: "Calendar Integration", label: "Calendar" },
{ src: appTypicalDay, alt: "Typical Day Heatmap", label: "Typical Day" }];


const AppShowcase = () => {
  return (
    <section className="relative py-20 section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto">
        







        
        







        

        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {screens.map((screen, i) =>
          <motion.div
            key={screen.alt}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group">
            
              <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-105">
                <img
                src={screen.src}
                alt={screen.alt}
                className="w-full h-auto"
                loading="lazy" />
              
              </div>
              {screen.label



            }
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default AppShowcase;