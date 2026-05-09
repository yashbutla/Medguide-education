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
  { value: "8+", label: "Years Excellence", sub: "Navigating Admissions", icon: ShieldCheck },
  { value: "2,500+", label: "Success Stories", sub: "Studying Globally", icon: Users },
  { value: "Doctors", label: "Led Institution", sub: "Not Commissions Driven", icon: Award },
];

export default function WhyAbroad() {
  return (
    <section id="why-abroad" className="py-16 md:py-24 bg-surface relative overflow-hidden scroll-mt-24 md:scroll-mt-32">
      <SectionDivider color="white" />
      <FloatingBlobs />
      <MedicalGrid />

      <div className="container max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-center mb-20 md:mb-32">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/5 border border-brand/10 mb-6"
            >
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-[10px] font-black uppercase tracking-widest text-brand">Why MedGuide?</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-3xl md:text-5xl font-heading font-black text-primary mb-6 md:mb-8"
            >
              Led by <br />
              <span className="text-brand">Doctors, Not Agents.</span>
            </motion.h2>
            <p className="text-base md:text-xl text-text-muted font-bold leading-relaxed max-w-xl mx-auto lg:mx-0">
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
                  
                  <p className="text-4xl md:text-6xl font-heading font-black text-primary mb-2 group-hover:text-brand transition-colors duration-500">{stat.value}</p>
                  <p className="text-xs md:text-sm font-black text-primary uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-[10px] md:text-xs text-text-muted font-bold opacity-70">{stat.sub}</p>
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


        {/* Circular Icons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center p-6 md:p-8 rounded-[32px] md:rounded-[40px] hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white border border-primary/5 flex items-center justify-center mb-6 md:mb-8 shadow-xl group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                <reason.icon className="w-8 h-8 md:w-10 md:h-10 transition-colors" />
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-black text-primary mb-3 md:mb-4 leading-tight">{reason.title}</h3>
              <p className="text-text-muted text-xs md:text-sm font-bold leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
