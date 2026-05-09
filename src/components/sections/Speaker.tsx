"use client";

import { motion } from "framer-motion";
import { Users, Globe, GraduationCap, ArrowRight, MessageCircle } from "lucide-react";

export default function Speaker() {
  return (
    <section id="mentorship" className="py-16 md:py-32 relative overflow-hidden bg-white scroll-mt-24 md:scroll-mt-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/5] rounded-[32px] md:rounded-[60px] overflow-hidden shadow-xl md:premium-shadow group">
              <img
                src="/mentor_mrunal_gagare_1778236818385.jpg"
                alt="Dr. Mrunal Gagare"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
                <div className="glass-light p-4 md:p-6 rounded-2xl md:rounded-[32px] border-white/20">
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-brand mb-1">CEO & Founder</p>
                  <p className="text-base md:text-xl font-black text-primary leading-none">10+ Years Experience</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-32 md:w-40 h-32 md:h-40 bg-brand/5 blur-3xl rounded-full -z-10" />
            <div className="absolute -bottom-10 -right-10 w-48 md:w-60 h-48 md:h-60 bg-accent/5 blur-3xl rounded-full -z-10" />
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand/5 border border-brand/10 mb-6 md:mb-8"
            >
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand">The Visionary</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 md:mb-8 text-primary leading-tight">
              Learn from <br />
              <span className="text-brand">The Best.</span>
            </h2>

            <p className="text-xl md:text-2xl font-black text-primary mb-4 md:mb-6">Dr. Mrunal Gagare</p>
            <p className="text-sm md:text-lg text-text-muted font-bold mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 text-justify md:text-left">
              Dr. Mrunal Gagare, our esteemed CEO, leads our organization with a vision to provide comprehensive support to students on their academic journey. With a wealth of experience and a passion for education, Dr. Gagare is dedicated to ensuring that students receive the guidance and resources they need to thrive in their academic pursuits.
              <br /><br className="hidden md:block" />
              We are committed to ensuring that every student receives the support they need to succeed, and with Dr. Gagare's leadership, we continue to make significant strides in fulfilling this commitment.
            </p>

            <div className="grid grid-cols-2 gap-6 md:gap-10 mb-8 md:mb-12">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-surface flex items-center justify-center text-brand shadow-sm shrink-0">
                  <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] text-text-muted uppercase font-black tracking-widest">Education</p>
                  <p className="text-xs md:text-sm font-black text-primary">MBBS</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-surface flex items-center justify-center text-brand shadow-sm shrink-0">
                  <Globe className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] text-text-muted uppercase font-black tracking-widest">Focus</p>
                  <p className="text-xs md:text-sm font-black text-primary">Career Strategy</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a href="#register" className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 btn-premium rounded-xl md:rounded-[20px] font-black uppercase tracking-widest text-[10px] md:text-sm flex items-center justify-center gap-3 group">
                Register Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://chat.whatsapp.com/EH34BO2QNOcBUQ9ZtTVufa" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white border border-primary/10 rounded-xl md:rounded-[20px] font-black uppercase tracking-widest text-[10px] md:text-sm flex items-center justify-center gap-3 hover:bg-secondary transition-all"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" /> Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
