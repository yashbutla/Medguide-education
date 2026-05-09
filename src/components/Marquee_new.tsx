"use client";

import { motion } from "framer-motion";
import { Video } from "lucide-react";

const marqueeItems = [
  "FREE WEBINAR",
  "FREE WEBINAR",
  "FREE WEBINAR",
  "FREE WEBINAR",
  "FREE WEBINAR",
  "FREE WEBINAR",
  "FREE WEBINAR",
  "FREE WEBINAR",
];

export default function Marquee() {
  return (
    <div className="h-10 md:h-12 bg-[#0F172A] overflow-hidden border-b border-brand/20 fixed top-0 left-0 right-0 z-[60] flex items-center shadow-2xl">
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-[#0F172A] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-[#0F172A] to-transparent z-10" />
      
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 40, // Elegant, slow speed
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
      >
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={index} className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <motion.div 
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-brand shadow-[0_0_10px_#D4A843]" 
              />
              <Video className="w-4 h-4 text-brand/80" />
            </div>
            <span className="text-brand text-[10px] md:text-xs font-black uppercase tracking-[0.4em] drop-shadow-[0_0_5px_rgba(212,168,67,0.2)]">
              {item}
            </span>
            <span className="text-white/20 font-light text-xl">|</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
