"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Form from "./Form";
import { useState, useEffect } from "react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-registration-modal", handleOpen);
    return () => window.removeEventListener("open-registration-modal", handleOpen);
  }, []);
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[100] cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-xl rounded-[40px] shadow-2xl overflow-hidden pointer-events-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-secondary/50 hover:bg-secondary text-primary transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-12">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-heading font-black text-primary mb-4 leading-tight">
                    Secure Your <br />
                    <span className="text-brand">Webinar Seat</span>
                  </h2>
                  <p className="text-text-muted font-medium">
                    Join Dr. Mrunal Gagare and 15,000+ students in the Master Roadmap session.
                  </p>
                </div>

                <Form compact />

                <div className="mt-8 pt-8 border-t border-primary/5 flex items-center justify-center">
                  <div className="flex -space-x-2">
                    <img src="/students/s1.png" alt="Student" className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover" />
                    <img src="/students/s2.png" alt="Student" className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover" />
                    <img src="/students/s3.png" alt="Student" className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
