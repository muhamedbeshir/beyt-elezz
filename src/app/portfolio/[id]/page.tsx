"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/portfolio-data';
import Link from 'next/link';
import NumericText from '@/components/NumericText';

export default function ProjectDetail() {
  const params = useParams();

  const id = params.id as string;
  const project = projects.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#1f70cc] mb-4">المشروع غير موجود</h1>
          <Link href="/#portfolio" className="text-[#D4AF37] font-bold border-b-2 border-[#D4AF37]">العودة للأعمال</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fbff] pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link 
          href="/#portfolio"
          className="flex items-center gap-2 text-[#1f70cc] font-bold mb-8 hover:gap-4 transition-all group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          رجوع
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div 
               layoutId={`project-img-${project.id}`}
               className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-200 relative"
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  src={project.images[activeImage]} 
                  alt={project.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </motion.div>

            <div className="grid grid-cols-3 gap-4">
              {project.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-video rounded-2xl overflow-hidden border-4 transition-all ${activeImage === idx ? 'border-[#D4AF37] scale-95' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${project.title} ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border border-gray-100">
            <span className="inline-block px-4 py-1.5 bg-[#f0f7ff] text-[#1f70cc] text-xs font-black tracking-widest uppercase rounded-full mb-6 italic">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              {project.title}
            </h1>
            
            <p className="text-gray-500 text-lg leading-relaxed mb-12 font-medium">
              {project.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t border-gray-100">
               <a 
                 href="https://wa.me/966540668896" 
                 target="_blank" 
                 className="flex-1 bg-[#1f70cc] text-white text-center py-5 rounded-2xl font-black text-lg hover:shadow-lg hover:shadow-[#1f70cc]/30 transition-all active:scale-95"
               >
                 اطلب خدمة مماثلة
               </a>
               <a 
                 href="tel:966540668896" 
                 className="flex-1 bg-white border-2 border-[#1f70cc] text-[#1f70cc] text-center py-5 rounded-2xl font-black text-lg hover:bg-[#f0f7ff] transition-all active:scale-95"
               >
                 اتصل بنا
               </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
