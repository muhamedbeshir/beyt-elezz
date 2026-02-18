"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getAllPosts } from '@/lib/blog-data';

export default function BlogSlider() {
  const posts = getAllPosts();

  // Map categories/content to visual colors/icons since we don't have unique images for all yet
  // Once real images are produced, we would use post.image
  const getGradient = (index: number) => {
    const gradients = [
      'from-[#1f70cc] to-[#004080]',
      'from-[#D4AF37] to-[#B3932B]',
      'from-[#1a1a1a] to-[#333333]',
      'from-[#1f70cc] to-[#D4AF37]',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative max-w-5xl mx-auto">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            className="w-[280px] h-[360px] md:w-[600px] md:h-[400px]"
          >
            {[...posts, ...posts].map((post, idx) => (
              <SwiperSlide key={`${post.slug}-${idx}`} className="rounded-2xl shadow-lg overflow-hidden cursor-pointer">
                <Link href={`/blog/${post.slug}`} className="block w-full h-full relative group">
                  {/* Background Visualization */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(idx)} flex items-center justify-center`}>
                     {post.image ? (
                        <>
                           <img 
                              src={post.image} 
                              alt={post.title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                           {/* Overlay for text legibility */}
                           <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                        </>
                     ) : (
                        <>
                           {/* Abstract Decorative Elements */}
                           <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
                           <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                           
                           {/* Icon Fallback */}
                           <span className="text-8xl md:text-9xl opacity-20 filter blur-[1px] group-hover:blur-0 group-hover:scale-110 transition-all duration-700">
                              {idx % 3 === 0 ? '🚛' : idx % 3 === 1 ? '📦' : '🏠'}
                           </span>
                        </>
                     )}
                     
                     {/* Text Content */}
                     <div className="absolute bottom-0 left-0 p-6 text-white z-10 max-w-full">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 truncate">{post.title}</h3>
                        <p className="text-sm md:text-base opacity-90 line-clamp-2">{post.excerpt}</p>
                     </div>

                     {/* "Read More" Hint */}
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-xs font-bold border border-white/30 group-hover:bg-white group-hover:text-[#1f70cc] transition-all"
                     >
                        اقرأ المزيد
                     </motion.div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="mt-8 text-center md:hidden">
             <Link href="/blog" className="text-[#1f70cc] font-bold border-b-2 border-[#D4AF37]">
                تصفح جميع المقالات
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
