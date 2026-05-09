"use client";

import { motion } from "framer-motion";

const marqueeItems = [
  "FREE WEBINAR",
  "FREE WEBINAR",
  "FREE WEBINAR",
  "FREE WEBINAR",
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
    <div className="h-10 md:h-14 bg-brand overflow-hidden border-b border-white/20 fixed top-0 left-0 right-0 z-[60] flex items-center shadow-[0_4px_30px_rgba(212,168,67,0.3)]">
      <div className="absolute inset-0 bg-gradient-to-r from-brand via-white/10 to-brand mix-blend-overlay animate-pulse pointer-events-none" />
      
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{ scale: 1.02 }}
        className="flex whitespace-nowrap gap-12 md:gap-20 items-center cursor-default"
      >
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={index} className="flex items-center gap-6 md:gap-10 group">
            <span className="text-white text-xs md:text-lg font-black uppercase tracking-[0.3em] drop-shadow-sm group-hover:text-[#0F172A] transition-colors duration-300">
              {item}
            </span>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/60 shadow-[0_0_10px_white] animate-pulse" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
