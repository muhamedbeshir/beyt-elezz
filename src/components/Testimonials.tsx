"use client";
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "سعيد العتيبي",
    role: "عميل - حي الملقا",
    content: "تجربة ممتازة جداً. تعامل راقي وسرعة في الإنجاز. الشباب ما قصروا، فكوا ونقلوا وركبوا كل شيء باحترافية وبدون أي خدش.",
    rating: 5,
  },
  {
    name: "أم فهد",
    role: "عميلة - حي الياسمين",
    content: "كنت شايلة هم النقل جداً، لكن مع بيت العز ارتحت. دقة في المواعيد وأمانة في التعامل. الله يعطيهم العافية.",
    rating: 5,
  },
  {
    name: "محمد القحطاني",
    role: "مدير شركة",
    content: "نقلنا مكتبنا بالكامل عن طريقهم. أسعارهم منافسة جداً مقارنة بالجودة اللي يقدمونها. أنصح بهم وبشدة لأي أحد يبحث عن راحة البال.",
    rating: 5,
  },
   {
    name: "عبدالله الشمري",
    role: "عميل - حي النرجس",
    content: "سرعة استجابة غير عادية، طلبتهم الصباح وكانوا عندي الظهر. تغليفهم ممتاز والأثاث وصل سليم تماماً. شكراً لكم.",
    rating: 5,
  },
  {
    name: "أبو خالد",
    role: "عميل - حي الصحافة",
    content: "فريق محترم وأمين. الأسعار كانت واضحة من البداية بدون أي زيادات مخفية. تجربة نقل سلسة ومريحة.",
    rating: 5,
  },
  {
    name: "سارة الحمد",
    role: "عميلة - حي الحمراء",
    content: "خدمة العملاء عندهم ممتازة، تواصلوا معاي بعد النقل للتأكد من رضاي. شركة تهتم بعملائها فعلاً.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 bg-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1f70cc]/5 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {testimonials.map((t, idx) => (
            <motion.div
              key={`${t.name}-${idx}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="min-w-[85%] sm:min-w-[450px] md:min-w-0 snap-center bg-gray-50 p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative group"
            >
              <div className="absolute top-6 left-6 md:top-8 md:left-8 text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors">
                <Quote size={40} className="transform rotate-180" />
              </div>

              <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base leading-relaxed relative z-10">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                 <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1f70cc] rounded-full flex items-center justify-center text-white font-black text-base md:text-lg">
                    {t.name.charAt(0)}
                 </div>
                 <div>
                    <h4 className="font-black text-[#1f70cc] text-base md:text-lg">{t.name}</h4>
                    <p className="text-[#D4AF37] text-xs md:text-sm font-bold">{t.role}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
