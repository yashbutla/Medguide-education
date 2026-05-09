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
    <section id="faqs" className="py-12 md:py-20 relative bg-secondary/30 scroll-mt-24 md:scroll-mt-32">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary">
            F<span className="text-brand">A</span>Q
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[24px] md:rounded-[32px] border border-primary/5 overflow-hidden transition-all shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-secondary/20 transition-colors"
              >
                <span className="font-semibold text-base md:text-lg pr-8 text-primary leading-tight">{faq.question}</span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeIndex === index ? 'bg-accent text-primary' : 'bg-secondary text-text-muted'}`}>
                  {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 text-text-muted font-normal text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
