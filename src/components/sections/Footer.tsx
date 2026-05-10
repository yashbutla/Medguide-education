import { MessageCircle, Globe, Camera, X, Mail, Phone, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-primary/5 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="MedGuide Logo" className="w-10 h-10 object-contain rounded-xl" />
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-black text-2xl text-primary tracking-tighter">MedGuide</span>
                <span className="font-heading font-bold text-[11px] text-accent uppercase tracking-[0.25em] -mt-1">Education</span>
              </div>
            </div>
            <p className="text-text-muted max-w-sm mb-8 font-medium">
              Empowering Indian students to pursue high-quality, affordable medical education internationally. Your bridge to a global medical career.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/medguide_education?igsh=M2loZ2ZnZzMxMXlz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all group"
                title="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/medguideeducation/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all group"
                title="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a 
                href="https://jsdl.in/DT-99BP6Z1THSG" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-[#FF8C00] hover:text-white transition-all group"
                title="Justdial"
              >
                {/* Custom JD Initial Style */}
                <span className="font-black text-xs">JD</span>
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-bold mb-6 text-primary uppercase tracking-widest text-xs">Head Office</h4>
            <p className="text-text-muted font-medium text-sm leading-relaxed max-w-[250px]">
              Flat No.1 Shiv Parvati Appt, <br />
              Master Mind Career Academy, <br />
              Balikashram Road, Ahmednagar
            </p>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="font-bold mb-6 text-primary uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4 text-text-muted font-medium">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-brand" /> +91 72489 69681</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-brand" /> medguideeducation@gmail.com</li>
              <li className="flex items-center gap-3"><Globe className="w-4 h-4 text-brand" /> medguideeducation.com</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/5 text-xs text-text-muted font-bold tracking-wider gap-4">
          <p>© 2026 MedGuide Education. All rights reserved.</p>
        </div>
      </div>

      {/* Floating WhatsApp CTA */}
      <a 
        href="https://chat.whatsapp.com/EH34BO2QNOcBUQ9ZtTVufa" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-xl z-50 hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </footer>
  );
}
