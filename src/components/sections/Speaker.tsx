"use client";

import { motion } from "framer-motion";
import { Users, Globe, GraduationCap, ArrowRight, MessageCircle } from "lucide-react";

export default function Speaker() {
  return (
    <section id="mentorship" className="py-12 md:py-20 relative overflow-hidden bg-white scroll-mt-24 md:scroll-mt-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        {/* Centered Title at the Start */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-heading font-bold leading-tight text-primary"
          >
            Meet Your <span className="text-brand">Mentor.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 max-w-5xl mx-auto">
          {/* Smaller, More Compact Image Container */}
          <div className="w-full max-w-sm relative">
            <div className="relative aspect-[4/5] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl group">
              <img
                src="/mentor_mrunal_gagare_1778236818385.jpg"
                alt="Dr. Mrunal Gagare"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-40" />
            </div>
            
            {/* Pulsing Experience Badge */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8">
              <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl border border-primary/5 text-center">
                <p className="text-[8px] md:text-[10px] font-medium uppercase tracking-widest text-brand mb-1">Experience</p>
                <p className="text-base md:text-xl font-bold text-primary leading-none">4+ Years</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-2xl md:text-4xl font-bold text-primary mb-6">Dr. Mrunal Gagare</p>
            <p className="text-sm md:text-lg text-text-muted font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 text-justify md:text-left">
              Director, Medguide Education. A practicing doctor and education strategist who has dedicated 4 years to helping Indian students bypass donation culture and find quality medical education worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
