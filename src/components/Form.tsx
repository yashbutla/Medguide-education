"use client";

import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle2, Users } from "lucide-react";
import confetti from "canvas-confetti";
import { supabase } from "@/lib/supabase";

export default function Form({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const { error } = await supabase
        .from('registrations')
        .insert([{ name, phone }]);

      if (error) throw error;

      setStatus("success");
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#133B7A", "#D4A843", "#ffffff"],
      });
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className={`text-center animate-in fade-in zoom-in duration-500 ${compact ? 'py-4' : 'py-8'}`}>
        <div className={`${compact ? 'w-12 h-12 mb-4' : 'w-16 h-16 mb-6'} bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto`}>
          <CheckCircle2 className={compact ? "w-6 h-6" : "w-8 h-8"} />
        </div>
        <h4 className={`${compact ? 'text-xl' : 'text-2xl'} font-bold text-primary mb-2`}>Registration Successful!</h4>
        <p className={`text-text-muted ${compact ? 'text-sm mb-4' : 'mb-6'}`}>We've sent the webinar details and guide to your WhatsApp.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="text-primary font-bold hover:underline"
        >
          Register another student
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "space-y-6"}>
      <div className={compact ? "space-y-1 text-left" : "space-y-2 text-left"}>
        <label className={`${compact ? 'text-[10px]' : 'text-xs'} font-bold text-primary uppercase tracking-widest ml-1`}>Full Name</label>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className={`w-full bg-secondary border border-primary/10 rounded-xl md:rounded-2xl px-4 md:px-6 ${compact ? 'py-3' : 'py-4'} text-primary placeholder:text-text-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm md:text-base`}
        />
      </div>
      <div className={compact ? "space-y-1 text-left" : "space-y-2 text-left"}>
        <label className={`${compact ? 'text-[10px]' : 'text-xs'} font-bold text-primary uppercase tracking-widest ml-1`}>WhatsApp Number</label>
        <input
          required
          type="tel"
          pattern="[0-9]{10}"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="10-digit mobile number"
          className={`w-full bg-secondary border border-primary/10 rounded-xl md:rounded-2xl px-4 md:px-6 ${compact ? 'py-3' : 'py-4'} text-primary placeholder:text-text-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm md:text-base`}
        />
      </div>
      
      <button
        disabled={status === "loading"}
        type="submit"
        className={`w-full ${compact ? 'py-4' : 'py-5'} bg-[#0F172A] text-white rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-primary/20`}
      >
        {status === "loading" ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            REGISTER FOR FREE <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </>
        )}
      </button>

      {!compact && (
        <a 
          href="https://chat.whatsapp.com/EH34BO2QNOcBUQ9ZtTVufa" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-5 bg-accent text-primary rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-accent/20 mt-4"
        >
          <Users className="w-5 h-5" />
          Join Community
        </a>
      )}
    </form>
  );
}


