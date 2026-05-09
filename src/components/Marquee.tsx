"use client";

import { motion } from "framer-motion";
import { Sparkles, Video } from "lucide-react";

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
    <div className="h-12 md:h-14 bg-brand overflow-hidden border-b border-white/10 fixed top-0 left-0 right-0 z-[60] flex items-center shadow-2xl">
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-brand to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-brand to-transparent z-10" />
      
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 40, 
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-12 md:gap-24 items-center"
      >
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={index} className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <motion.div 
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_15px_white]" 
              />
              <Video className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-lg md:text-xl font-black uppercase tracking-[0.1em] drop-shadow-md">
              {item}
            </span>
            <div className="w-2 h-2 rounded-full bg-white/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
