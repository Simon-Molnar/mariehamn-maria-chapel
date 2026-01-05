import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestSection from "@/components/LatestSection";
import AboutSection from "@/components/AboutSection";
import QuoteSection from "@/components/QuoteSection";
import MassSchedule from "@/components/MassSchedule";
import SacramentsSection from "@/components/SacramentsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <LatestSection />
        <AboutSection />
        <QuoteSection />
        <MassSchedule />
        <SacramentsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
