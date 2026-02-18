import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Map, Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import NumericText from './NumericText';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-full w-12 h-12 flex items-center justify-center">
                 <Image src="/logo.png" alt="Bayt Al-Ezz" width={40} height={40} className="object-contain" />
              </div>
              <h3 className="text-2xl font-black text-primary">بيت العز</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              شريككم الموثوق في نقل الأثاث بالرياض والمملكة. نقدم خدمات احترافية تضمن سلامة ممتلكاتكم مع الضمان الشامل.
            </p>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <a href="#" aria-label="فيسبوك" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-secondary transition-colors"><Facebook size={20} /></a>
               <a href="#" aria-label="تويتر" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-secondary transition-colors"><Twitter size={20} /></a>
               <a href="#" aria-label="انستجرام" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-secondary transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-black mb-6 border-b-2 border-[#D4AF37] pb-2 inline-block">روابط سريعة</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span>←</span> الرئيسية</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors flex items-center gap-2"><span>←</span> خدماتنا</Link></li>
              <li><Link href="#portfolio" className="hover:text-primary transition-colors flex items-center gap-2"><span>←</span> أعمالنا السابقة</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors flex items-center gap-2"><span>←</span> اطلب عرض سعر</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-black mb-6 text-primary">تواصل معنا</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                <span>الرياض، المملكة العربية السعودية<br/>تغطية شاملة لجميع الأحياء</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <div className="flex flex-col gap-2 items-end">
                  <div className="flex items-center gap-2">
                     <a href="tel:0540668896" className="hover:text-primary transition-colors flex items-center gap-2"><Phone size={14} /><NumericText>054 066 8896</NumericText></a>
                     <span className="text-gray-600">|</span>
                     <a href="https://wa.me/966540668896" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors text-xs bg-white/5 px-2 py-1 rounded" aria-label="WhatsApp">واتساب</a>
                  </div>
                  <div className="flex items-center gap-2">
                     <a href="tel:0582607971" className="hover:text-primary transition-colors flex items-center gap-2"><Phone size={14} /><NumericText>058 260 7971</NumericText></a>
                     <span className="text-gray-600">|</span>
                     <a href="https://wa.me/966582607971" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors text-xs bg-white/5 px-2 py-1 rounded" aria-label="WhatsApp">واتساب</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© <NumericText>{new Date().getFullYear()}</NumericText> بيت العز لنقل العفش. جميع الحقوق محفوظة.</p>
          <p>تم التصميم والتطوير بواسطة <span className="text-primary">DevNova</span></p>
        </div>
      </div>
    </footer>
  );

















  
}
