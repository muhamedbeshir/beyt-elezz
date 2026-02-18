"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "هل يشمل السعر فك وتركيب المطابخ والمكيفات؟",
    answer: "نعم، نقدم باقات شاملة تتضمن فك وتركيب غرف النوم، المطابخ (الجاهزة والتفصيل)، والمكيفات (السبليت والشباك) والستائر. يتم تحديد السعر بناءً على حجم العمل، ولدينا عروض خاصة تشمل كل هذه الخدمات."
  },
  {
    question: "هل لديكم فنيين متخصصين للمطابخ والمكيفات؟",
    answer: "بالطبع! نحن نفخر بوجود طاقم فني متخصص ومحترف لفك وتركيب المطابخ بجميع أنواعها، وكذلك فنيين مكييفات لضمان فكها وتركيبها دون أي أضرار أو تسريب للفريون."
  },
  {
    question: "هل تقدمون ضمان على الأثاث أثناء النقل؟",
    answer: "نعم، نقدم ضماناً شاملاً يغطي أي أضرار قد تحدث (لا قدر الله) أثناء عملية النقل، لضمان راحة بالك وحماية ممتلكاتك."
  },
  {
    question: "كم تستغرق عملية نقل العفش؟",
    answer: "يعتمد ذلك على حجم الأثاث والمسافة، ولكن في الغالب يتم إنجاز نقل شقة بالكامل في نفس اليوم (خلال 6-8 ساعات) بفضل فريقنا الكبير."
  },
  {
    question: "هل توفرون كراتين وتغليف؟",
    answer: "بالتأكيد. نقوم بتوفير جميع مواد التغليف اللازمة مثل الكراتين المقوية، البلاستيك الفقاعي، والشرائط اللاصقة لحماية العفش."
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button 
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-right focus:outline-none"
                >
                  <span className={`text-lg md:text-xl font-black transition-colors ${activeIndex === idx ? 'text-[#D4AF37]' : 'text-[#1f70cc]'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`text-gray-400 transition-transform duration-300 ${activeIndex === idx ? 'rotate-180 text-[#D4AF37]' : ''}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-gray-50/50"
                    >
                      <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
