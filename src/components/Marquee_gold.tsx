"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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
    <div className="h-10 md:h-12 bg-brand overflow-hidden border-b border-black/5 fixed top-0 left-0 right-0 z-[60] flex items-center shadow-lg">
      {/* Subtle Texture/Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none dot-pattern" />
      
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
      >
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={index} className="flex items-center gap-4 md:gap-6">
            <Sparkles className="w-4 h-4 text-primary/40" />
            <span className="text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.5em]">
              {item}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
