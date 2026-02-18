"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NumericText from './NumericText';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'أعمالنا', href: '#portfolio' },
    { name: 'المدونة', href: '/blog' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <header 
      className={`relative w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ rotate: 10 }}
            className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden"
          >
             <Image 
               src="/logo.png" 
               alt="Bayt Al-Ezz" 
               fill 
               className="object-contain" 
               priority 
               sizes="(max-width: 768px) 50px, 60px"
             />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black text-[#002855] leading-tight">بيت العز</span>
            <span className="text-xs md:text-sm text-[#D4AF37] font-medium tracking-wider">لنقل العفش</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 lg:gap-10 items-center text-[#002855] font-black text-lg">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="relative py-1 hover:text-[#D4AF37] transition-all duration-300 group"
            >
              {link.name}
              <span className="absolute -bottom-1 right-0 w-0 h-1 bg-[#D4AF37] rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex gap-3">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="tel:0540668896" 
            className="flex items-center gap-2 bg-gradient-to-r from-[#002855] to-[#004080] text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 font-black"
          >
            <Phone size={18} className="animate-pulse" />
            <NumericText className="font-mono text-lg font-bold">054 066 8896</NumericText>
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#002855] p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="py-4 px-4 hover:bg-[#D4AF37]/10 rounded-xl text-[#002855] font-black text-lg transition-all duration-300 flex justify-between items-center group"
                  onClick={(e) => {
                    setIsOpen(false);
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {link.name}
                  <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">←</span>
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                  <NumericText className="w-full text-center bg-[#002855] text-white py-3 rounded-lg font-black shadow-md block">
                   054 066 8896
                 </NumericText>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
