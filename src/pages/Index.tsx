import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AppShowcase from "@/components/AppShowcase";
import StatsSection from "@/components/StatsSection";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <AppShowcase />
      <StatsSection />
      <Features />
      <Comparison />
      <WaitlistCTA />
      <Footer />
    </div>
  );
};

export default Index;
