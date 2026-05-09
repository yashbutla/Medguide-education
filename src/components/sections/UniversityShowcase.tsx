"use client";

import { motion } from "framer-motion";
import { Star, ArrowUpRight, Landmark } from "lucide-react";
import { FloatingBlobs, SectionDivider, MedicalGrid } from "@/components/Decorative";

const universities = [
  { 
    name: "Kursk State Medical University", 
    price: "31 L", 
    features: ["English Medium", "Est. 1935", "6 Years Course"],
    image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe1?auto=format&fit=crop&q=80&w=600" 
  },
  { 
    name: "Far Eastern Federal University", 
    price: "26 L", 
    features: ["Modern Campus", "Est. 1899", "6 Years Course"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600" 
  },
  { 
    name: "Northern State Medical University", 
    price: "26 L", 
    features: ["Best Campus", "Est. 1932", "6 Years Course"],
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=600" 
  },
];

export default function UniversityShowcase() {
  return (
    <section id="universities" className="py-32 bg-white relative overflow-hidden scroll-mt-24 md:scroll-mt-32">
      <SectionDivider color="surface" />
      <FloatingBlobs />
      
      {/* Architectural Line Art */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none -z-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary" preserveAspectRatio="none">
          <path d="M10 100 L10 20 M20 100 L20 20 M30 100 L30 20 M40 100 L40 20 M50 100 L50 20 M60 100 L60 20 M70 100 L70 20 M80 100 L80 20 M90 100 L90 20" stroke="currentColor" strokeWidth="0.5" />
          <path d="M5 20 L95 20 M5 15 L95 15 M5 10 L95 10" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/5 border border-brand/10 mb-6"
            >
              <Landmark className="w-4 h-4 text-brand" />
              <span className="text-[10px] font-black uppercase tracking-widest text-brand">Institutional Excellence</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-primary mb-6">
              Global <span className="text-brand">Excellence.</span>
            </h2>
            <p className="text-xl text-text-muted font-bold leading-relaxed">
              We exclusively partner with top-tier government medical universities recognized globally by WHO and NMC.
            </p>
          </div>
          <button className="btn-premium">
            Explore All <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {universities.map((uni, index) => (
            <motion.div
              key={uni.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(19,59,122,0.1)] group hover:-translate-y-2 transition-all duration-500 border border-primary/5"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={uni.image} 
                  alt={uni.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 right-6 bg-accent text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Top Rated
                </div>
              </div>

              <div className="p-10">
                <h3 className="text-2xl font-heading font-black text-primary mb-6 leading-tight min-h-[64px]">
                  {uni.name}
                </h3>

                <div className="flex flex-wrap gap-2 mb-8">
                  {uni.features.map((f, i) => (
                    <span key={i} className="px-3 py-1 bg-surface rounded-full text-[10px] font-black text-brand uppercase tracking-tighter">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-primary/5">
                  <div>
                    <p className="text-[10px] text-text-muted uppercase font-black tracking-widest mb-1">Total Budget</p>
                    <p className="text-2xl font-black text-primary">₹{uni.price}</p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <SectionDivider color="surface" flip />
    </section>
  );
}
