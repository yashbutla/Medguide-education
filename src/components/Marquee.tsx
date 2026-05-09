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
    <div className="h-10 md:h-12 bg-[#0F172A] overflow-hidden border-b border-white/10 fixed top-0 left-0 right-0 z-[60] flex items-center shadow-lg">
      {/* Background Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none" />
      
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 30, // Much slower for better readability
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{ x: "0%", transition: { duration: 0.5 } }} // Optional: slows down on hover
        className="flex whitespace-nowrap gap-12 md:gap-24 items-center"
      >
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={index} className="flex items-center gap-6 md:gap-10">
            <span className="text-brand text-xs md:text-sm font-black uppercase tracking-[0.4em] relative group cursor-default">
              {item}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent bg-[length:200%_100%] animate-[shimmer_2s_infinite] bg-clip-text text-transparent">
                {item}
              </span>
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-brand/40 shadow-[0_0_8px_#D4A843]" />
          </div>
        ))}
      </motion.div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
