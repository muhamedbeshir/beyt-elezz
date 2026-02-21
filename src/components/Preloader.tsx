"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if preloader has already been shown in this session
    const hasPreloaded = sessionStorage.getItem('hasPreloaded');
    
    if (hasPreloaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('hasPreloaded', 'true');
    }, 800); // تقليل وقت الـ preloader
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden pointer-events-none"
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1f70cc]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                rotate: 0,
                transition: { 
                    duration: 0.8, 
                    ease: "easeOut" 
                }
              }}
              className="relative w-32 h-32 md:w-48 md:h-48 mb-6"
            >
              <Image 
                src="/logo.png" 
                alt="بيت العز" 
                fill 
                className="object-contain"
                priority
                sizes="(max-width: 768px) 128px, 192px"
              />
            </motion.div>

            {/* Glowing Ring around logo */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute w-40 h-40 md:w-56 md:h-56 border-2 border-[#D4AF37] rounded-full"
            />

            {/* Brand text */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center"
            >
                <h2 className="text-3xl md:text-4xl font-black text-[#1f70cc] tracking-tight">بيت العز</h2>
                <div className="flex items-center gap-2 mt-2">
                    <span className="h-[2px] w-8 bg-[#D4AF37] rounded-full"></span>
                    <p className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase">لنقل العفش</p>
                    <span className="h-[2px] w-8 bg-[#D4AF37] rounded-full"></span>
                </div>
            </motion.div>

            {/* Progress bar */}
            <div className="mt-12 w-48 h-1 bg-gray-100 rounded-full overflow-hidden relative">
                <motion.div 
                    initial={{ left: "-100%" }}
                    animate={{ left: "100%" }}
                    transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#1f70cc] to-[#D4AF37]"
                />
            </div>
          </div>

          <div className="absolute bottom-10 text-gray-400 font-medium text-sm">
             جاري تجهيز أفضل تجربة نقل...
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
