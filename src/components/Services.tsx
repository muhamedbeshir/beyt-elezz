"use client";
import { Truck, Box, Settings, Warehouse } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    icon: <Truck size={40} />,
    title: 'نقل الأثاث',
    slug: 'furniture-moving',
    description: 'أسطول شاحنات حديث ومجهز لنقل جميع أنواع الأثاث المنزلي والمكتبي بأمان تام داخل وخارج الرياض.',
    color: 'from-[#1f70cc] to-[#164e8f]',
  },
  {
    icon: <Box size={40} />,
    title: 'التغليف الآمن',
    slug: 'secure-packaging',
    description: 'نستخدم أفضل مواد التغليف (كرتون، فقاعات، فلين) لحماية منقولاتك من الخدوش والكسر أثناء النقل.',
    color: 'from-[#D4AF37] to-[#B8860B]',
  },
  {
    icon: <Settings size={40} />,
    title: 'فك وتركيب متخصص',
    slug: 'disassembly-assembly',
    description: 'فنيون متخصصون في فك وتركيب المطابخ والمكيفات (سبليت وشباك) وغرف النوم لضمان سلامتها وتشغيلها بكفاءة.',
    color: 'from-[#1f70cc] to-[#164e8f]',
  },
  {
    icon: <Warehouse size={40} />,
    title: 'تخزين الأثاث',
    slug: 'furniture-storage',
    description: 'مستودعات آمنة ونظيفة لتخزين عفشك لفترات طويلة أو قصيرة مع نظام حماية ومراقبة.',
    color: 'from-[#D4AF37] to-[#B8860B]',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] font-black tracking-widest text-sm md:text-base uppercase"
          >
            ماذا نقدم
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-[#002855] mt-4 leading-tight"
          >
            خدماتنا المتميزة
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <Link href={`/services/${service.slug}`} key={index} className="contents">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-4 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-[1.5rem] md:rounded-[2.5rem] transition-opacity duration-300`}></div>
              
              <div className="relative z-10 flex flex-col items-center w-full">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#D4AF37]/10 rounded-xl md:rounded-2xl flex items-center justify-center text-[#D4AF37] mb-3 md:mb-6 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300">
                  <div className="scale-75 md:scale-100">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-sm md:text-2xl font-black text-[#1f70cc] mb-2 md:mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[10px] md:text-sm line-clamp-3 md:line-clamp-none">
                  {service.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      </div>
    </section>
  );
}
