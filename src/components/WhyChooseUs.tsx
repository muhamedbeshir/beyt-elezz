"use client";
import { ShieldCheck, Clock, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import NumericText from './NumericText';
import Link from 'next/link';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck size={48} className="text-[#1f70cc]" />,
      title: 'ضمان شامل 100%',
      slug: 'comprehensive-warranty',
      desc: 'نضمن لك سلامة المنقولات من أي خدش أو كسر، ونتحمل المسؤولية الكاملة في حال حدوث أي ضرر.'
    },
    {
      icon: <Clock size={48} className="text-[#1f70cc]" />,
      title: 'التزام بالمواعيد',
      slug: 'punctuality',
      desc: 'نقدر قيمة وقتك، لذا نلتزم بالوصول وإنجاز العمل في الوقت المتفق عليه بدقة متناهية.'
    },
    {
      icon: <ThumbsUp size={48} className="text-[#1f70cc]" />,
      title: 'عمالة فنية مدربة',
      slug: 'trained-technicians',
      desc: 'فريقنا مكون من فنيين محترفين ذوي خبرة طويلة في فك وتركيب جميع أنواع الأثاث والمكيفات.'
    },
    {
      icon: <ShieldCheck size={48} className="text-[#1f70cc]" />, 
      title: 'أسعار تنافسية',
      slug: 'competitive-pricing',
      desc: 'نقدم لك أفضل قيمة مقابل سعر في الرياض، مع باقات مرنة تناسب ميزانيتك واحتياجاتك.'
    }
  ];

  const stats = [
     { val: '+10', label: 'سنوات خبرة' },
     { val: '+2500', label: 'عمليات نقل ناجحة' },
     { val: '100%', label: 'رضا العملاء' },
  ];

  return (
    <section className="py-12 bg-[#1f70cc]/5">
      <div className="container mx-auto px-4">
        
        {/* Content Section (Image + Features) */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Visual Side - Hidden on Mobile */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="hidden md:block md:w-1/2 relative"
          >
             <div className="absolute -inset-4 bg-gradient-to-r from-[#1f70cc]/10 to-[#D4AF37]/10 rounded-full blur-2xl opacity-50"></div>
             <img 
               src="/images/produced/truck-service.png" 
               alt="شاحنة نقل عفش بيت العز في الرياض" 
               className="relative z-10 w-full hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
             />
          </motion.div>

          {/* Features Grid - 2 Cols on Mobile */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-3 md:gap-8">
            {features.map((feature, idx) => (
              <Link href={`/services/${feature.slug}`} key={idx} className="contents">
                <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 whileHover={{ y: -5 }}
                 className="bg-white p-4 md:p-10 rounded-2xl md:rounded-[2rem] text-center shadow-md hover:shadow-2xl transition-all duration-300 border-b-4 border-[#1f70cc] group flex flex-col items-center"
               >
                  <div className="bg-[#1f70cc]/5 w-12 h-12 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6 group-hover:bg-[#D4AF37] group-hover:scale-110 transition-all duration-300 shadow-inner">
                     <div className="scale-75 md:scale-100 group-hover:text-white transition-colors duration-300">
                       {feature.icon}
                     </div>
                  </div>
                  <h3 className="text-sm md:text-2xl font-black text-[#1f70cc] mb-2 md:mb-4">{feature.title}</h3>
                  <p className="text-gray-500 text-[10px] md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">
                     {feature.desc}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-0 mt-16 md:mt-24 pt-10 md:pt-12 border-t border-gray-200">
           {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className={`text-center ${idx === 0 && 'col-span-1 lg:col-span-1'} ${idx === 1 && 'col-span-1 lg:col-span-1'} ${idx === 2 && 'col-span-2 lg:col-span-1'} md:border-l md:border-gray-200 rtl:md:border-r rtl:md:border-l-0 first:border-0`}
              >
                 <span className="block text-4xl md:text-6xl font-black text-[#1f70cc] mb-1 md:mb-2">
                   <NumericText>{stat.val}</NumericText>
                 </span>
                 <span className="text-xs md:text-base text-gray-400 font-bold tracking-wider uppercase">{stat.label}</span>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
