"use client";
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] p-4 pb-6 bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-sm pointer-events-none">
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="flex gap-3 pointer-events-auto"
      >
        <a 
          href="tel:0540668896" 
          className="flex-1 bg-[#1f70cc] text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-black shadow-xl active:scale-95 transition-transform"
        >
          <Phone size={20} className="animate-pulse" />
          <span>اتصل الآن</span>
        </a>
        <a 
          href="https://wa.me/966540668896" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-black shadow-xl active:scale-95 transition-transform"
        >
          <MessageCircle size={20} />
          <span>واتساب</span>
        </a>
      </motion.div>
    </div>
  );
}
