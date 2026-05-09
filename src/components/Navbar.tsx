"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-14 md:top-16 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2 md:py-4" : "py-4 md:py-6"
        }`}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className={`flex items-center justify-between px-4 md:px-6 py-2 md:py-3 rounded-full border transition-all ${scrolled
            ? "glass-light border-primary/10 shadow-lg"
            : "bg-transparent border-transparent"
          }`}>
          <div className="flex items-center gap-2 md:gap-3">
            <img src="/logo.png" alt="MedGuide Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-lg md:rounded-xl" />
            <span className="font-heading font-black text-lg md:text-2xl text-primary tracking-tighter">MedGuide</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {["Why MedGuide", "Testimonials", "Mentorship", "FAQs"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-bold text-text-muted hover:text-brand transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <a
              href="#register"
              className="px-4 md:px-6 py-1.5 md:py-2.5 bg-primary text-white text-[10px] md:text-sm font-bold rounded-full whitespace-nowrap shadow-md hover:bg-brand transition-all flex items-center justify-center"
            >
              Join <span className="hidden xs:inline ml-1">Masterclass</span>
            </a>
            <a
              href="https://chat.whatsapp.com/EH34BO2QNOcBUQ9ZtTVufa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 md:p-2.5 bg-emerald-500/10 text-emerald-600 rounded-full hover:bg-emerald-500 hover:text-white transition-all"
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
