"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar, Zap } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(true);
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
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-3 md:p-4 pointer-events-none flex justify-center"
        >
          <div className="bg-white/95 backdrop-blur-md border border-primary/10 px-4 md:px-6 py-2 md:py-3 rounded-full w-full max-w-3xl flex items-center justify-between gap-4 pointer-events-auto shadow-xl">
            <div className="hidden sm:flex items-center gap-3 border-r border-primary/5 pr-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50">
                <Calendar className="w-4 h-4 text-blue-600" />
                <p className="text-[11px] md:text-xs font-black text-primary uppercase tracking-wider">
                  {activeWebinar ? new Date(activeWebinar.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : "13th May"}
                </p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50">
                <Zap className="w-4 h-4 text-amber-600 fill-amber-600" />
                <p className="text-[11px] md:text-xs font-black text-primary uppercase tracking-wider">
                  {activeWebinar ? formatTime(activeWebinar.time) : "11:00 AM"}
                </p>
              </div>
            </div>
            
            <div className="sm:hidden flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50">
              <Calendar className="w-4 h-4 text-blue-600" />
              <p className="text-[11px] font-black text-primary uppercase tracking-wider">
                {activeWebinar ? new Date(activeWebinar.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : "13th May"}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <a 
                href="https://chat.whatsapp.com/EH34BO2QNOcBUQ9ZtTVufa" 
                target="_blank" 
                className="p-2 md:px-4 md:py-2 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center gap-2 transition-all hover:bg-emerald-500 hover:text-white"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden md:inline text-[10px] font-black uppercase tracking-widest">Community</span>
              </a>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-registration-modal'))}
                className="px-5 md:px-8 py-2 md:py-2.5 bg-[#0F172A] text-white text-[10px] md:text-xs font-black rounded-full flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/10"
              >
                Secure Seat <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

