"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, CheckCircle2 } from "lucide-react";

const row1 = ["r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9"];
const row2 = ["r10", "r11", "r12", "r13", "r14", "r15", "r16", "r17"];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative bg-[#F8FAFC] overflow-hidden scroll-mt-24 md:scroll-mt-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="Google" className="h-4 md:h-5" />
              <div className="flex items-center gap-1 ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest ml-1">4.9/5 Rating</span>
            </div>
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 text-primary">Student <span className="text-brand">Wall of Love</span></h2>
          <p className="text-text-muted max-w-2xl mx-auto font-medium">Actual screenshots of reviews from students and parents who trust MedGuide Education.</p>
        </div>
      </div>

      {/* Row 1: Sliding Left */}
      <div className="flex overflow-hidden gap-4 md:gap-6 mb-4 md:mb-6 select-none">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 md:gap-6 flex-nowrap"
        >
          {[...row1, ...row1].map((img, i) => (
            <div key={i} className="w-[280px] md:w-[400px] flex-shrink-0 group">
              <div className="bg-white p-2 rounded-2xl shadow-xl shadow-primary/[0.03] border border-primary/5 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
                <img 
                  src={`/testimonials/${img}.png`} 
                  alt="Review" 
                  className="w-full h-auto rounded-xl object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Sliding Right */}
      <div className="flex overflow-hidden gap-4 md:gap-6 select-none">
        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 md:gap-6 flex-nowrap"
        >
          {[...row2, ...row2].map((img, i) => (
            <div key={i} className="w-[280px] md:w-[400px] flex-shrink-0 group">
              <div className="bg-white p-2 rounded-2xl shadow-xl shadow-primary/[0.03] border border-primary/5 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
                <img 
                  src={`/testimonials/${img}.png`} 
                  alt="Review" 
                  className="w-full h-auto rounded-xl object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Fades for Smooth Edges */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

      <div className="mt-16 text-center">
        <a 
          href="https://www.google.com/maps/place/MedGuide+Education+consultancy/@19.100704,74.7282234,16.75z/data=!4m8!3m7!1s0x3bdcb1e4dcbd21fd:0x1be2523a69263ab0!8m2!3d19.1012411!4d74.7312774!9m1!1b1!16s%2Fg%2F11y4vdl4cm?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-primary/10 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-primary font-black uppercase tracking-widest text-[10px]"
        >
          <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="Google" className="h-4" />
          See All Verified Reviews
          <ArrowRight className="w-4 h-4 text-brand" />
        </a>
      </div>
    </section>
  );
}
