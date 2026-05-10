"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Video, ArrowRight, Play, Zap, Globe2, MapPin, CheckCircle2, MessageCircle, Clock, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Form from "@/components/Form";
import { FloatingBlobs, MedicalGrid, DNAHelix } from "@/components/Decorative";

export default function Hero() {
  const [activeWebinar, setActiveWebinar] = useState<any>(null);

  useEffect(() => {
    const fetchActiveWebinar = async () => {
      const { data } = await supabase
        .from('webinars')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (data) setActiveWebinar(data);
    };
    fetchActiveWebinar();
  }, []);

  const formatTime = (timeStr: string) => {
    if (!timeStr) return "11:00 AM";
    if (timeStr.includes('AM') || timeStr.includes('PM')) return timeStr.replace(' IST', '');
    try {
      const [hours, minutes] = timeStr.split(':').map(Number);
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const hours12 = hours % 12 || 12;
      return `${hours12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    } catch (e) {
      return timeStr.replace(' IST', '');
    }
  };

  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-white">
      <MedicalGrid />

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">

          {/* Content & Form Spotlight */}
          <div className="w-full lg:w-[55%] relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/95 backdrop-blur-xl p-6 md:p-8 rounded-[32px] md:rounded-[48px] border border-primary/10 shadow-[0_40px_100px_-20px_rgba(15,23,42,0.15)] relative"
            >
              {/* Ultra-Prominent Timing Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 relative">
                {/* Minimal Sleek Urgency Badge */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 8px 20px -4px rgba(220,38,38,0.4)",
                      "0 12px 30px -4px rgba(220,38,38,0.7)",
                      "0 8px 20px -4px rgba(220,38,38,0.4)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 left-4 md:left-6 flex items-center gap-2 px-3 py-1 bg-red-600 rounded-full z-40"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  <span className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-wider">Limited Spots Left</span>
                </motion.div>

                <div className="bg-white p-3.5 md:p-5 rounded-[24px] border border-primary/10 shadow-xl flex items-center gap-3 md:gap-4 group hover:border-brand/30 transition-all duration-300">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500 flex-shrink-0">
                    <Calendar className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[8px] md:text-[9px] text-text-muted uppercase font-bold tracking-[0.2em] mb-0.5">Webinar Date</p>
                    <p className="text-[13px] sm:text-base md:text-xl font-bold text-primary uppercase tracking-tight truncate">
                      {activeWebinar ? new Date(activeWebinar.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : "13th May, 2026"}
                    </p>
                  </div>
                </div>

                <div className="bg-white p-3.5 md:p-5 rounded-[24px] border border-primary/10 shadow-xl flex items-center gap-3 md:gap-4 group hover:border-accent/30 transition-all duration-300">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500 flex-shrink-0">
                    <Clock className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[8px] md:text-[9px] text-text-muted uppercase font-bold tracking-[0.2em] mb-0.5">Start Time</p>
                    <p className="text-[13px] sm:text-base md:text-xl font-bold text-primary uppercase tracking-tight truncate">
                      {activeWebinar ? formatTime(activeWebinar.time) : "11:00 AM"}
                    </p>
                  </div>
                </div>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold leading-[1.2] mb-6 tracking-tight text-primary text-balance">
                The Master Roadmap of <br className="hidden sm:block" />
                <span className="text-brand">Medical Admissions.</span>
              </h1>

              <p className="text-lg md:text-2xl text-text-muted font-medium mb-10 max-w-xl mx-auto lg:mx-0">
                By <span className="text-brand font-bold">Dr. Mrunal Gagare</span>
              </p>

              <div id="register" className="mb-6 md:mb-8 relative">
                <Form compact />
                <a
                  href="https://chat.whatsapp.com/EH34BO2QNOcBUQ9ZtTVufa"
                  target="_blank"
                  className="w-full mt-4 py-3 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-600 rounded-2xl border border-emerald-500/20 flex items-center justify-center gap-3 transition-all group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.1em]">Join Community</span>
                </a>
              </div>

            </motion.div>


          </div>


          {/* Mentor Visual Spotlight - Hidden on Mobile, Visible on Desktop */}
          <div className="hidden lg:block w-full lg:w-[45%] relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative aspect-square rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl border-[8px] md:border-[16px] border-white max-w-md mx-auto"
            >


              <img
                src="/mentor_mrunal_gagare_1778236818385.jpg"
                alt="Dr. Mrunal Gagare"
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-40" />

              {/* Floating Label inside Image */}
              <div className="absolute top-6 left-6 md:top-10 md:left-10">
                <div className="glass-light px-4 md:px-6 py-2 md:py-4 rounded-xl md:rounded-2xl border-white/20 shadow-xl">
                  <p className="text-base md:text-lg font-bold text-primary mb-0.5 leading-none">Dr. Mrunal Gagare</p>
                  <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-brand">CEO & Founder</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
