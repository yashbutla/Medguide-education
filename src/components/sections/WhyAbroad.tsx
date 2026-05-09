"use client";

import { motion } from "framer-motion";
import { Globe, Award, BookOpen, GraduationCap, Zap, ShieldCheck, Users } from "lucide-react";
import { FloatingBlobs, SectionDivider, MedicalGrid } from "@/components/Decorative";

const reasons = [
  {
    title: "Led by Doctors, Not Agents",
    description: "Run by practicing doctors who have walked this path and know the ground reality.",
    icon: ShieldCheck,
  },
  {
    title: "8+ Years of Excellence",
    description: "We’ve seen the rules change and we know exactly how to navigate them safely.",
    icon: Award,
  },
  {
    title: "2,500+ Success Stories",
    description: "Our students study in top government and private universities globally.",
    icon: Users,
  },
  {
    title: "End-to-End Support",
    description: "From counseling to visa and hostel—we handle everything for you.",
    icon: GraduationCap,
  },
];

const stats = [
  { value: "8+", label: "Years of Excellence", sub: "We’ve seen the rules change and we know how to navigate them.", icon: Award },
  { value: "2,500+", label: "Success Stories", sub: "Our students are currently studying in top government and private universities globally.", icon: Users },
  { value: "End-to-End", label: "Support", sub: "From the first counseling session to getting your visa and hostel—we handle it all.", icon: GraduationCap },
];

export default function WhyAbroad() {
  return (
    <section id="why-abroad" className="py-12 md:py-20 bg-surface relative overflow-hidden scroll-mt-24 md:scroll-mt-32">
      <SectionDivider color="white" />
      <FloatingBlobs />
      <MedicalGrid />

      <div className="container max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center lg:items-center">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/5 border border-brand/10 mb-6"
            >
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-[10px] font-medium uppercase tracking-widest text-brand">Why MedGuide?</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6 md:mb-8"
            >
              Led by <br />
              <span className="text-brand">Doctors, Not Agents.</span>
            </motion.h2>
            <p className="text-base md:text-xl text-text-muted font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Medguide Education is the only institution run by practicing doctors. We bypass the "agent traps" to focus on your medical career success.
            </p>
          </div>
          
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ delay: i * 0.1 }}
                className={`group p-8 md:p-10 rounded-[32px] md:rounded-[48px] bg-white border border-primary/5 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(15,23,42,0.15)] transition-all duration-500 relative overflow-hidden ${i === 2 ? "sm:col-span-2" : ""}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-brand/5 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand/5 text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  
                  <p className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2 group-hover:text-brand transition-colors duration-500">{stat.value}</p>
                  <p className="text-xs md:text-sm font-medium text-primary uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-[10px] md:text-xs text-text-muted font-normal opacity-70">{stat.sub}</p>
                </div>

                {i === 2 && (
                  <div className="absolute bottom-4 right-8 hidden sm:block opacity-10">
                    <stat.icon className="w-24 h-24 text-brand" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
