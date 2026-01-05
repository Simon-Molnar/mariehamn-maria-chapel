import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickInfoCards from "@/components/QuickInfoCards";
import WelcomeSection from "@/components/WelcomeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <QuickInfoCards />
        <WelcomeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
