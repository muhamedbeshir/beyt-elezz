"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';
import { projects as portfolioProjects, Project } from '@/lib/portfolio-data';
import Image from 'next/image';

const ProjectCard = ({ project, idx }: { project: Project; idx: number }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 4000 + (idx * 300));
    
    return () => clearInterval(timer);
  }, [project.images.length, idx, isInView]);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: idx * 0.1 }}
      className="group relative h-[450px] overflow-hidden rounded-[2.5rem] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 will-change-transform"
    >
      <Link href={`/portfolio/${project.id}`}>
        <div className="absolute inset-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image 
                src={project.images[currentImageIndex]} 
                alt={project.title} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-[4000ms] group-hover:scale-105"
                loading={idx < 2 ? "eager" : "lazy"}
                quality={85}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f70cc]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-8 text-white z-20 transition-transform duration-500">
           <span className="inline-block px-3 py-1 bg-[#D4AF37] text-[#1f70cc] text-[10px] font-black tracking-widest uppercase rounded-full mb-3">
             {project.category}
           </span>
           <h4 className="font-black text-2xl mb-2 leading-tight">{project.title}</h4>
           <div className="flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
             <span className="text-sm font-bold text-gray-200">عرض التفاصيل</span>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]">
               <path d="M5 12h14M12 5l7 7-7 7"/>
             </svg>
           </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 bg-[#f8fbff]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {portfolioProjects.map((project, idx) => (
             <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
