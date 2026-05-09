"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const outcomes = [
  "The Score-to-College Formula: Pick the best-fit for your NEET score",
  "India vs. Abroad: The honest comparison of quality, cost, and validity",
  "The 'Should I Repeat?' Test: Decide if a drop year is worth it",
  "Financial Blueprint: MBBS from ₹2 Lakhs/year with zero donation",
  "The NEXT/FMGE Reality: Prepare for Indian practice from Day 1",
];

export default function Outcomes() {
  return (
    <section className="py-12 md:py-20 relative bg-secondary/50">
      <div className="container max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 md:mb-8 text-primary">
              What You'll <br />
              <span className="text-brand">Master in this Webinar</span>
            </h2>
            <p className="text-text-muted mb-8 md:mb-12 text-base md:text-lg font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              We've condensed years of consultancy expertise into a 90-minute high-value masterclass to help you make the most informed decision of your life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 text-left">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={outcome}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 md:gap-4"
                >
                  <div className="mt-1 p-1 bg-primary/5 rounded-lg shrink-0">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <span className="text-primary font-medium text-xs md:text-sm leading-tight">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="relative z-10 rounded-[24px] md:rounded-[40px] overflow-hidden card-premium p-2 md:p-3 bg-white">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                alt="Medical Education" 
                className="rounded-[20px] md:rounded-[32px] w-full h-[300px] md:h-[500px] object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-24 md:w-40 h-24 md:h-40 bg-accent/10 blur-2xl md:blur-3xl rounded-full" />
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-24 md:w-40 h-24 md:h-40 bg-primary/10 blur-2xl md:blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
