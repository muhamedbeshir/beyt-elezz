"use client";
import { Phone, Send, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import NumericText from './NumericText';

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-[#1f70cc] text-white relative overflow-hidden">
      {/* Background Elements */}
      {/* Background Elements - Optimized */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-[#D4AF37]/20 px-4 py-1.5 rounded-full text-[#D4AF37] font-black text-sm mb-4 border border-[#D4AF37]/30">
               تواصل معنا
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">اطلب عرض سعر <span className="text-[#D4AF37]">مجاني</span></h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              املأ النموذج أدناه وسيقوم فريقنا بالتواصل معك في أقرب وقت لتقديم عرض سعر مناسب لاحتياجاتك، أو اتصل بنا مباشرة.
            </p>

            <form className="space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="sr-only">الاسم الكريم</label>
                    <input id="name" type="text" placeholder="الاسم الكريم" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 text-white placeholder-gray-400 transition-all font-medium" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="sr-only">رقم الجوال</label>
                    <input id="phone" type="tel" placeholder="رقم الجوال" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 text-white placeholder-gray-400 transition-all font-medium text-left dir-ltr" style={{direction: 'ltr', textAlign: 'right'}} />
                  </div>
               </div>
               <div className="relative">
                  <label htmlFor="service-type" className="sr-only">نوع الخدمة المطلوبة</label>
                  <select id="service-type" defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 text-white transition-all appearance-none cursor-pointer" style={{ backgroundImage: 'none' }}>
                      <option className="bg-[#1f70cc] text-gray-300" value="" disabled>نوع الخدمة المطلوبة</option>
                      <option className="bg-[#1f70cc]" value="moving">نقل عفش كامل</option>
                      <option className="bg-[#1f70cc]" value="office">نقل مكتب/شركة</option>
                      <option className="bg-[#1f70cc]" value="storage">تخزين أثاث</option>
                      <option className="bg-[#1f70cc]" value="other">أخرى</option>
                  </select>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                     <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
               </div>
               
               <div className="flex flex-col gap-2">
                 <label htmlFor="details" className="sr-only">تفاصيل إضافية</label>
                 <textarea id="details" rows={4} placeholder="تفاصيل إضافية (أحياء النقل، الدور، وجود مصعد...)" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 text-white placeholder-gray-400 transition-all font-medium resize-none"></textarea>
               </div>
               
               <motion.button 
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 type="submit" 
                 className="w-full bg-[#D4AF37] hover:bg-[#c49f30] text-[#1f70cc] font-black py-4 rounded-xl transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-3 text-lg"
               >
                  <span>إرسال الطلب الآن</span>
                  <Send size={20} />
               </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
             <div className="bg-white/5 p-8 md:p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                   <div className="bg-[#D4AF37] p-2 rounded-lg text-[#1f70cc]">
                      <Phone size={24} />
                   </div>
                   أرقام التواصل المباشر
                </h3>
                <div className="flex flex-col gap-6">
                   {/* Contact Item 1 */}
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-white/10 pb-6 gap-4">
                      <div className="flex flex-col gap-1">
                         <span className="text-gray-300 text-sm">خدمة العملاء (1)</span>
                         <NumericText className="font-mono text-2xl font-black text-[#D4AF37]">054 066 8896</NumericText>
                      </div>
                      <div className="flex gap-3">
                         <a href="tel:0540668896" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors text-sm font-bold text-white border border-white/5">
                            <Phone size={18} />
                            <span>اتصال</span>
                         </a>
                         <a href="https://wa.me/966540668896" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 px-4 py-2 rounded-lg transition-colors text-sm font-bold text-[#25D366] border border-[#25D366]/20">
                            {/* WhatsApp SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-current"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
                            <span>واتساب</span>
                         </a>
                      </div>
                   </div>

                   {/* Contact Item 2 */}
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-2 gap-4">
                      <div className="flex flex-col gap-1">
                         <span className="text-gray-300 text-sm">خدمة العملاء (2)</span>
                         <NumericText className="font-mono text-2xl font-black text-[#D4AF37]">058 260 7971</NumericText>
                      </div>
                      <div className="flex gap-3">
                         <a href="tel:0582607971" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors text-sm font-bold text-white border border-white/5">
                            <Phone size={18} />
                            <span>اتصال</span>
                         </a>
                         <a href="https://wa.me/966582607971" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 px-4 py-2 rounded-lg transition-colors text-sm font-bold text-[#25D366] border border-[#25D366]/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-current"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
                            <span>واتساب</span>
                         </a>
                      </div>
                   </div>
                </div>
             </div>

             {/* Map Placeholder */}
             <div className="h-80 bg-gray-800 rounded-[2.5rem] overflow-hidden relative border border-white/10 group">
                <iframe 
                  title="موقع شركة بيت العز على الخريطة"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116032.55398282717!2d46.7214619!3d24.6970425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1644781744123!5m2!1sen!2seg" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy"
                  className="transition-all duration-700 hover:opacity-100" // Removed grayscale/opacity for performance
                ></iframe>
                
                <div className="absolute inset-0 pointer-events-none border-[6px] border-[#D4AF37]/0 group-hover:border-[#D4AF37]/20 transition-all duration-500 rounded-[2.5rem]"></div>
                
                <div className="absolute bottom-6 right-6 bg-white text-[#1f70cc] px-6 py-3 rounded-xl text-sm font-black shadow-2xl flex items-center gap-2 transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                   <MapPin size={18} className="text-[#D4AF37]" />
                   مقرنا: الرياض، المملكة العربية السعودية
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
