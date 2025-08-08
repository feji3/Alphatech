import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-14 sm:pt-16">
      <Header />
      <Hero />
      <Services />
      <Process />
      <Footer />
    </div>
  );
};

export default Index;
