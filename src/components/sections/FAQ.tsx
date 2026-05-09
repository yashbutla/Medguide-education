"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is MBBS from abroad valid in India?",
    answer: "Yes, as long as the university is recognized by the World Health Organization (WHO) and the degree is valid in the country of study, you are eligible to appear for the NEXT/FMGE exam in India to practice as a doctor.",
  },
  {
    question: "What is the total cost of MBBS abroad?",
    answer: "The total cost (tuition + hostel) typically ranges from ₹15 Lakhs to ₹35 Lakhs depending on the country and university. This is significantly more affordable than private medical colleges in India.",
  },
  {
    question: "Do I need to qualify NEET for MBBS abroad?",
    answer: "Yes, qualifying NEET is mandatory for Indian students who wish to pursue MBBS abroad and later return to India to practice medicine.",
  },
  {
    question: "Which country is best for MBBS abroad?",
    answer: "Russia, Georgia, Uzbekistan, and Kazakhstan are popular choices due to their affordable fees, quality of education, and English-medium programs.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-32 relative bg-secondary/30 scroll-mt-24 md:scroll-mt-32">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 text-primary">Common <span className="text-brand">Questions</span></h2>
            <p className="text-text-muted font-medium text-lg leading-relaxed mb-8">
              Everything you need to know before taking the first step towards your international medical career.
            </p>
            <a href="#register" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
              Still have questions? Register for the masterclass <Plus className="w-4 h-4" />
            </a>
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
