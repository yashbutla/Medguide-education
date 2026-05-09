"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is this webinar really free? Why?",
    answer: "Yes, it is 100% free. We believe that every student deserves the right information to avoid falling into 'agent traps.' Our goal is to empower you with the same knowledge we use to guide our successful students.",
  },
  {
    question: "I have a very low NEET score. Is there any point in attending?",
    answer: "Absolutely. This webinar is actually more important for you. We specialize in finding NMC-recognized colleges in India and Abroad that accept lower scores without requiring massive donations.",
  },
  {
    question: "Can my parents join?",
    answer: "We highly encourage parents to attend as the financial and documentation sections are vital for them.",
  },
  {
    question: "My parents are worried about the safety of studying abroad. Will you cover this?",
    answer: "Yes. Safety is our #1 priority. We will specifically discuss security measures, separate hostel facilities for girls, and the on-ground support we provide in countries like Russia, Georgia, and Uzbekistan.",
  },
  {
    question: "Will you explain the CAP round and Choice Filling process?",
    answer: "Yes. We will walk you through the 'Master Roadmap' of the counseling process. You’ll learn how a strategic choice-filling list can significantly increase your chances of getting a better college.",
  },
  {
    question: "Why should I trust Medguide over a local admission agent?",
    answer: "Because we are Practicing Doctors, not Agents. Agents are often driven by commissions from specific colleges. We are driven by your career success, backed by 8+ years of experience and 2,500+ success stories.",
  },
  {
    question: "Will I be able to practice in India after studying MBBS abroad?",
    answer: "Yes. We only recommend universities recognized by the WHO and the NMC (National Medical Commission). We also provide guidance on clearing the NEXT/FMGE exam required to practice in India.",
  },
  {
    question: "I’m confused between Repeating NEET and taking admission now. Can you help?",
    answer: "This is a major highlight of the webinar. We provide a 'Decision Matrix' to help you analyze if a drop year is worth it for you or if you should secure a seat in the current cycle.",
  },
  {
    question: "Will there be a live Q&A session?",
    answer: "Yes! At the end of the webinar, Dr. Mrunal Gagare will take live questions to address specific concerns regarding your score, budget, or college preferences.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-16 md:py-24 relative bg-secondary/30 scroll-mt-24 md:scroll-mt-32">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 text-primary">Common <span className="text-brand">Questions</span></h2>
            <p className="text-text-muted font-medium text-lg leading-relaxed mb-8">
              Everything you need to know before taking the first step towards your international medical career.
            </p>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-registration-modal'))}
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              Still have questions? Register for the masterclass <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl border border-primary/5 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-secondary/20 transition-colors"
                >
                  <span className="font-bold text-lg md:text-xl pr-8 text-primary">{faq.question}</span>
                  {activeIndex === index ? <Minus className="w-5 h-5 text-accent" /> : <Plus className="w-5 h-5 text-text-muted" />}
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-text-muted font-medium leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
