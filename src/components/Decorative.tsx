"use client";

import { motion } from "framer-motion";

export const FloatingBlobs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    <motion.div
      animate={{
        x: [0, 50, 0],
        y: [0, 30, 0],
        rotate: [0, 180, 360],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px]"
    />
    <motion.div
      animate={{
        x: [0, -30, 0],
        y: [0, 50, 0],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 -left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]"
    />
  </div>
);

export const MedicalGrid = () => (
  <div className="absolute inset-0 pointer-events-none -z-10 opacity-[0.03]">
    <svg width="100%" height="100%" className="text-brand">
      <defs>
        <pattern id="medical-grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#medical-grid)" />
    </svg>
  </div>
);

export const SectionDivider = ({ color = "white", flip = false }: { color?: string, flip?: boolean }) => (
  <div className={`absolute left-0 w-full overflow-hidden leading-[0] ${flip ? 'bottom-0 rotate-180' : 'top-0'}`}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`relative block w-full h-[60px] text-${color}`}>
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
    </svg>
  </div>
);
export const DNAHelix = () => (
  <div className="absolute top-20 right-10 w-64 h-[600px] text-brand/[0.03] pointer-events-none -z-10 rotate-12">
    <svg viewBox="0 0 100 800" className="w-full h-full" stroke="currentColor" strokeWidth="2" fill="none">
      <path d="M10 0 Q 90 100 10 200 Q 90 300 10 400 Q 90 500 10 600 Q 90 700 10 800" />
      <path d="M90 0 Q 10 100 90 200 Q 10 300 90 400 Q 10 500 90 600 Q 10 700 90 800" />
      {[...Array(20)].map((_, i) => (
        <line key={i} x1="20" y1={i * 40 + 20} x2="80" y2={i * 40 + 20} strokeDasharray="4 4" />
      ))}
    </svg>
  </div>
);
