"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Video, ArrowRight, Play, Zap, Globe2, MapPin, CheckCircle2, MessageCircle, Clock } from "lucide-react";
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
    <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-white">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 md:p-5 rounded-[24px] border-2 border-primary/5 shadow-xl flex items-center gap-4 group hover:border-brand/30 transition-all duration-300">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500">
                    <Calendar className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <p className="text-[9px] text-text-muted uppercase font-black tracking-[0.2em] mb-1">Webinar Date</p>
                    <p className="text-base md:text-xl font-black text-primary uppercase tracking-tight">
                      {activeWebinar ? new Date(activeWebinar.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : "13th May, 2026"}
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 md:p-5 rounded-[24px] border-2 border-primary/5 shadow-xl flex items-center gap-4 group hover:border-accent/30 transition-all duration-300">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                    <Clock className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <p className="text-[9px] text-text-muted uppercase font-black tracking-[0.2em] mb-1">Start Time</p>
                    <p className="text-base md:text-xl font-black text-primary uppercase tracking-tight">
                      {activeWebinar ? formatTime(activeWebinar.time) : "11:00 AM"}
                    </p>
                  </div>
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-heading font-black text-primary leading-[1.1] mb-4 tracking-tight">
                Your Career, <br />
                <span className="text-brand">Global.</span>
              </h1>

              <p className="text-sm md:text-base text-text-muted font-medium mb-6 md:mb-8 max-w-md leading-relaxed">
                Join Dr. Mrunal Gagare for an elite session on pursuing MBBS abroad with zero donations.
              </p>

              <div id="register" className="mb-6 md:mb-8">
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

              <div className="flex items-center gap-3 py-4 border-t border-primary/5">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Student" className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover" />
                  ))}
                </div>
                <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">
                  Trusted by <span className="text-brand">15,000+ students</span>
                </p>
              </div>
            </motion.div>


            {/* Floating Timing Badges - Only visible on Large Screens, more subtle */}
            <div className="hidden lg:flex flex-col absolute -right-6 top-1/2 -translate-y-1/2 gap-4">
              <div className="bg-white p-4 rounded-3xl shadow-xl border border-primary/5 flex flex-col items-center gap-1 group hover:-translate-x-2 transition-all duration-500">
                <Calendar className="w-5 h-5 text-accent" />
                <p className="text-[10px] font-black text-primary">{activeWebinar ? new Date(activeWebinar.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : "13th May"}</p>
              </div>
              <div className="bg-white p-4 rounded-3xl shadow-xl border border-primary/5 flex flex-col items-center gap-1 group hover:-translate-x-2 transition-all duration-500">
                <Zap className="w-5 h-5 text-accent fill-accent" />
                <p className="text-[10px] font-black text-primary">{activeWebinar ? formatTime(activeWebinar.time) : "11:00 AM"}</p>
              </div>
            </div>
          </div>


          {/* Mentor Visual Spotlight */}
          <div className="w-full lg:w-[45%] relative mt-8 lg:mt-0">
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
                  <p className="text-base md:text-lg font-black text-primary mb-0.5 leading-none">Dr. Mrunal Gagare</p>
                  <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-brand">CEO & Founder</p>
                </div>
              </div>
            </motion.div>

            {/* Direct Admission Circle (Responsive) */}
            <div className="absolute -top-6 -right-4 md:-top-10 md:-right-10 bg-accent w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-center p-3 md:p-4 shadow-2xl rotate-12 animate-pulse border-4 md:border-8 border-white z-30">
              <p className="text-primary text-[9px] md:text-[11px] font-black uppercase leading-tight">
                Direct <br /> Admission <br /> 2026
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
