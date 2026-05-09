"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Zap, Star, Users } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-white">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main CTA Card with explicit Navy Background for contrast */}
        <div className="relative p-8 md:p-28 rounded-[40px] md:rounded-[60px] overflow-hidden bg-[#0F172A] text-center shadow-2xl">
          {/* Subtle Dynamic Gradients for Depth */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-64 h-64 md:w-96 md:h-96 bg-[#D4A843]/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 md:w-96 md:h-96 bg-[#133B7A]/30 blur-[120px] rounded-full pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-6 md:mb-10">
              <Star className="w-3 h-3 fill-accent" /> Enrollment Open for 2026
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 md:mb-10 leading-[1.1] tracking-tight">
              One wrong decision <br />
              <span className="text-[#D4A843]">Costs a Year.</span>
            </h2>
            
            <p className="text-sm md:text-xl text-white/60 font-bold mb-8 md:mb-14 leading-relaxed max-w-xl mx-auto px-4">
              One wrong decision during counseling can cost you an entire academic year. Join our webinar to secure your seat and your future.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4 md:px-0">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-registration-modal'))}
                className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-white text-[#0F172A] text-sm md:text-base font-black rounded-2xl md:rounded-3xl flex items-center justify-center gap-3 transition-all hover:scale-105 hover:bg-[#D4A843] hover:text-white"
              >
                Reserve My Seat <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <a href="https://chat.whatsapp.com/EH34BO2QNOcBUQ9ZtTVufa" target="_blank" className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-white/5 backdrop-blur-xl border border-white/10 text-white text-sm md:text-base font-black rounded-2xl md:rounded-3xl flex items-center justify-center gap-3 transition-all hover:bg-white/10">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" /> Join Community
              </a>
            </div>

            <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 md:pt-12 border-t border-white/5">
              {[
                { icon: ShieldCheck, label: "NMC Verified" },
                { icon: Zap, label: "Instant Support" },
                { icon: Star, label: "Top Mentorship" },
                { icon: Users, label: "15k+ Students" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-[#D4A843]" />
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white/30">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
