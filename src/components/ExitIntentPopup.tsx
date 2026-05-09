"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import Form from "@/components/Form";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/20 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white max-w-lg w-[95%] md:w-full p-5 md:p-8 rounded-[32px] md:rounded-[40px] border border-primary/10 relative overflow-hidden text-center shadow-2xl no-scrollbar"
          >
            <div className="absolute top-0 left-0 w-full h-1 md:h-1.5 bg-accent" />
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 md:top-4 md:right-4 p-2 rounded-full hover:bg-secondary transition-colors text-text-muted z-10"
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <div className="w-12 h-12 md:w-16 md:h-16 bg-brand/5 text-brand rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 animate-pulse mt-2 md:mt-0">
              <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
            </div>

            <h2 className="text-xl md:text-2xl font-heading font-bold mb-2 md:mb-3 text-primary tracking-tight">Wait! Your Future Can't Wait</h2>
            <p className="text-xs md:text-sm text-text-muted mb-4 md:mb-6 font-medium leading-relaxed px-4">
              Don't leave without securing your spot. Join our next <span className="text-brand font-bold">Free Masterclass</span> and get the clear roadmap to your international medical career.
            </p>

            <Form compact />

            <p className="text-[8px] md:text-[10px] text-text-muted uppercase tracking-[0.2em] md:tracking-[0.3em] font-black mt-4 md:mt-6">
              Trusted by 15,000+ Future Doctors
            </p>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
