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
    <div className="h-8 md:h-10 bg-brand overflow-hidden border-b border-white/10 fixed top-0 left-0 right-0 z-[60] flex items-center">
      <motion.div
        animate={{
          x: [0, -400],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-12 md:gap-24 items-center"
      >
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-white text-[10px] md:text-sm font-black uppercase tracking-[0.2em]">
              {item}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
