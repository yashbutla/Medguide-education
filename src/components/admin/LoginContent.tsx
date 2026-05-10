"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, ArrowRight, ShieldCheck, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginContent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate login logic
    setTimeout(() => {
      if (email === "admin@medguide.edu" && password === "admin123") {
        setLoading(false);
        localStorage.setItem("medguide_admin_auth", "true");
        router.push("/admin");
      } else {
        setLoading(false);
        setError("Invalid email or password. Please try again.");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md px-6 relative z-10"
      >
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-brand rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-brand/20">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          <div className="flex flex-col items-center leading-tight">
            <h1 className="text-4xl font-heading font-black text-primary tracking-tighter">MedGuide</h1>
            <span className="text-sm font-heading font-bold text-accent uppercase tracking-[0.3em] -mt-1">Education Admin</span>
          </div>
          <p className="text-text-muted font-bold tracking-tight">Access the student control center</p>
        </div>

        <div className="bg-white p-10 rounded-[40px] border border-primary/5 shadow-[0_40px_100px_-20px_rgba(15,23,42,0.1)] relative overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
          
          <form onSubmit={handleLogin} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="text-xs font-black text-primary uppercase tracking-widest ml-1">Admin Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@medguide.edu"
                  className="w-full bg-surface border border-primary/5 rounded-2xl pl-12 pr-4 py-4 text-primary focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-primary uppercase tracking-widest ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input 
                  required
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-surface border border-primary/5 rounded-2xl pl-12 pr-4 py-4 text-primary focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all font-medium"
                />
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-500 font-bold ml-1">{error}</p>
            )}

            <button
              disabled={loading}
              type="submit"
              className="w-full py-5 bg-[#0F172A] text-white rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 shadow-xl"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Sign In <ArrowRight className="w-5 h-5" /></>}
            </button>
          </form>
        </div>

        <p className="text-center mt-10 text-xs text-text-muted font-bold">
          Protected by MedGuide Security Protocol
        </p>
      </motion.div>
    </div>
  );
}
