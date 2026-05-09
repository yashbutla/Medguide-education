import Hero from "@/components/sections/Hero";
import Marquee from "@/components/Marquee";
import TrustedBy from "@/components/sections/TrustedBy";
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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <TrustedBy />
      <Testimonials />
      <Speaker />
      <WhyAbroad />
      <Outcomes />
      <FAQ />
      <FinalCTA />
      <Footer />
      
      <StickyCTA />
      <ExitIntentPopup />
    </main>
  );
}
