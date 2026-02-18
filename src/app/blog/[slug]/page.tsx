import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPostBySlug } from '@/lib/blog-data';
import Image from 'next/image';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) return { title: 'المقال غير موجود' };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: ['Bayt Al-Ezz'],
      tags: [post.category, ...post.keywords],
    }
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Article Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image ? `https://baytalezz-sa.com${post.image}` : "https://baytalezz-sa.com/logo.png",
    "author": {
      "@type": "Organization",
      "name": "بيت العز"
    },
    "publisher": {
      "@type": "Organization",
      "name": "بيت العز",
      "logo": {
        "@type": "ImageObject",
        "url": "https://baytalezz-sa.com/logo.png"
      }
    },
    "datePublished": post.date,
    "description": post.description
  };

  return (
    <article className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
      
      <div className="mb-8 text-center max-w-5xl mx-auto">
         <Link href="/blog" className="text-[#D4AF37] hover:underline font-black mb-4 inline-block">← العودة للمدونة</Link>
         
          <div suppressHydrationWarning className="relative w-full h-auto rounded-3xl overflow-hidden mb-8 shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-auto"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-[#D4AF37] leading-tight mb-4">{post.title}</h1>
          <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
             <span>{post.date}</span>
             <span>•</span>
             <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full font-black">{post.category}</span>
          </div>
          
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
      </div>

      <div 
        className="prose prose-lg max-w-none prose-headings:text-[#002855] prose-li:marker:text-[#D4AF37]"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>

      <div className="mt-12 bg-[#1f70cc] text-white p-8 rounded-2xl text-center shadow-lg relative overflow-hidden group">
         <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
         <h3 className="text-2xl font-black mb-2 relative z-10">هل تبحث عن نقل عفش آمن؟</h3>
         <p className="opacity-90 mb-6 relative z-10">اتصل بنا الآن واحصل على عرض سعر خاص لزوار المدونة.</p>
         <a href="tel:0540668896" className="inline-block bg-white text-[#1f70cc] px-8 py-3 rounded-full font-black hover:bg-[#D4AF37] hover:text-white transition-colors shadow-md relative z-10">
            اتصل الآن: 0540668896
         </a>
      </div>
    </article>
  );
}
