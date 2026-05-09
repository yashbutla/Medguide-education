"use client";

import { motion } from "framer-motion";

const partners = [
  "National Medical Commission",
  "World Directory of Medical Schools",
  "ECFMG Certified",
  "UNESCO Recognized",
  "WHO Approved Universities",
  "Ministry of Education",
];

export default function TrustedBy() {
  return (
    <section className="py-12 md:py-20 border-y border-primary/5 relative bg-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-text-muted/40 mb-8 md:mb-12">
          Recognized & Trusted By Global Institutions
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 opacity-40 hover:opacity-100 transition-all duration-700">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-base md:text-xl font-heading font-black text-primary hover:text-brand transition-colors cursor-default"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
