"use client";
import Link from 'next/link';
import { Phone, CheckCircle, Star, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';
import NumericText from './NumericText';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90dvh] md:h-screen flex items-center justify-center text-white overflow-hidden bg-[#002855]">
      
      {/* --- Video Background --- */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {/* Mobile: Video constrained to top (Landscape), Desktop: Full Cover */}
        <div className="relative w-full h-[60vh] md:h-full">
            <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/produced/hero-moving.png"
            className="w-full h-full object-cover md:object-cover pointer-events-none opacity-60 md:opacity-100" 
            >
            <source src="/hero-video.mp4" type="video/mp4" />
            <img 
                src="/images/produced/hero-moving.png" 
                alt="بيت العز لنقل العفش" 
                className="w-full h-full object-cover"
                fetchPriority="high"
            />
            </video>
            
            {/* Mobile Gradient: Blend video into blue background */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-b from-[#002855]/30 via-[#002855]/60 to-[#002855]"></div>
        </div>
        
        {/* Desktop Overlay */}
        <div 
           className="hidden md:block absolute inset-0"
           style={{
              background: `
                 linear-gradient(to bottom, rgba(0,26,56,0.4), transparent, rgba(0,26,56,0.8)),
                 radial-gradient(circle at center, rgba(212,175,55,0.15) 0%, transparent 70%)
              `,
              backgroundColor: 'rgba(0,26,56,0.6)'
           }}
        ></div>
      </div>

      {/* --- Content Section --- */}
      {/* Overlaay Content for BOTH Mobile and Desktop */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full pt-32 md:pt-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-10">
          
          {/* Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 md:gap-3 bg-[#D4AF37]/10 md:bg-[#D4AF37]/20 px-4 md:px-6 py-2 rounded-full border border-[#D4AF37]/30 md:border-[#D4AF37]/40 text-[#D4AF37] font-black text-xs md:text-base backdrop-blur-md">
              <Star size={14} className="fill-[#D4AF37] md:w-[18px]" />
              <span className="tracking-wide">الخيار الأول والآمن لنقل العفش في الرياض</span>
              <Star size={14} className="fill-[#D4AF37] md:w-[18px]" />
            </div>
          </motion.div>
          
          {/* Main Headline */}
          <div className="space-y-3 md:space-y-4">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-6xl lg:text-8xl font-black leading-tight tracking-tight"
            >
              نقل عفش <span className="text-[#D4AF37] md:drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">بضمان </span> <br/>
              وراحة بال تامة
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-base sm:text-2xl text-gray-300 md:text-gray-200 max-w-2xl mx-auto leading-relaxed font-light md:drop-shadow-lg px-2"
            >
              نوفر لك فريقاً محترفاً يتولى أدق التفاصيل من الفك والتغليف إلى التركيب، بأحدث تقنيات الحماية لضمان سلامة أثاثك.
            </motion.p>
          </div>
          
          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center pt-2 md:pt-4 w-full md:w-auto"
          >
            <Link 
              href="tel:0540668896" 
              className="group bg-[#D4AF37] text-[#002855] hover:bg-white transition-all duration-300 px-6 py-4 md:px-10 md:py-5 rounded-xl md:rounded-full font-black text-lg md:text-xl flex items-center justify-center gap-3 md:gap-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone size={20} className="group-hover:rotate-12 transition-transform md:w-[24px]" />
              <span>اتصل نصل : <NumericText>0540668896</NumericText></span>
            </Link>
            
            <Link 
              href="#services" 
              className="group px-6 py-4 md:px-10 md:py-5 rounded-xl md:rounded-full font-black text-lg md:text-xl border md:border-2 border-white/20 md:border-white/30 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 hover:border-white/60"
            >
              <span>اكتشف خدماتنا</span>
              <MousePointer2 size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform md:w-[20px]" />
            </Link>
          </motion.div>
          
          {/* Key Features Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="pt-6 md:pt-10 pb-8 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto"
          >
            {[
              { text: "خدمة على مدار الساعة", icon: <CheckCircle size={16} /> },
              { text: "تغليف بمواد عالمية", icon: <CheckCircle size={16} /> },
              { text: "أفضل الأسعار بالرياض", icon: <CheckCircle size={16} /> }
            ].map((feature, index) => (
              <div key={index} className="flex items-center justify-center gap-2 md:gap-3 text-gray-300 bg-[#001f42] md:bg-white/5 px-4 py-3 rounded-xl md:rounded-2xl border border-white/5 md:border-white/10 backdrop-blur-sm shadow-sm md:shadow-none hover:bg-white/10 transition-colors duration-300 cursor-default">
                <span className="text-[#D4AF37]">{feature.icon}</span>
                <span className="text-sm md:text-base font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator - Desktop Only */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
