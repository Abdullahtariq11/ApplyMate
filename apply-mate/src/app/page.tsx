import Features from "@/Components/ui/Features";
import Footer from "@/Components/ui/Footer";
import HeroSection from "@/Components/ui/HeroSection";
import HowItWorks from "@/Components/ui/HowItWorks";
import Pricing from "@/Components/ui/Pricing";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-amber-50" >
      <HeroSection />
      <HowItWorks/>
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
