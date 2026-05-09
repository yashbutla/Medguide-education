"use client";

import { motion } from "framer-motion";

const challenges = [
  {
    title: "Agent Traps",
    desc: "Greedy middlemen pushing low-quality colleges for commission.",
    image: "/problem/agent.png"
  },
  {
    title: "Information Overload",
    desc: "Confusion between CAP rounds, Spot admissions, and Quotas.",
    image: "/problem/info.png"
  },
  {
    title: "Budget Fears",
    desc: "Thinking MBBS is impossible without a massive donation.",
    image: "/problem/budget.png"
  }
];

export default function Problem() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary mb-6">
            NEET is over. <br />
            <span className="text-brand">The real challenge begins.</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto font-medium text-lg">
            Most students and parents fail to secure a seat not because of low marks, but because of these 3 critical factors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[40px] border border-primary/5 shadow-xl hover:shadow-2xl transition-all group overflow-hidden"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-black text-primary mb-4">{item.title}</h3>
                <p className="text-text-muted font-medium leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-primary rounded-[40px] text-center shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
           <p className="relative z-10 text-white text-xl md:text-3xl font-black italic">
             "The Solution: You don’t need an agent. You need a Mentor."
           </p>
        </div>
      </div>
    </section>
  );
}
