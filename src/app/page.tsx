import Hero from "@/components/sections/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/sections/Problem";
import WhyAbroad from "@/components/sections/WhyAbroad";
import Outcomes from "@/components/sections/Outcomes";
import Speaker from "@/components/sections/Speaker";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import StickyCTA from "@/components/StickyCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";

import Navbar from "@/components/Navbar";
import RegistrationModal from "@/components/RegistrationModal";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Problem />
      <Testimonials />
      <Speaker />
      <WhyAbroad />
      <Outcomes />
      <FAQ />
      <FinalCTA />
      <Footer />
      
      <RegistrationModal />
      <StickyCTA />
      <ExitIntentPopup />
    </main>
  );
}
