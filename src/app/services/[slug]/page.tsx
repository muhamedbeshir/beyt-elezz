import { servicesData } from '@/lib/services-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'الخدمة غير موجودة | بيت العز',
    };
  }

  return {
    title: `${service.title} | بيت العز لنقل العفش بالرياض`,
    description: service.description,
    keywords: service.keywords,
    openGraph: {
      title: service.title,
      description: service.description,
      type: 'article',
    },
  };
}

// Generate static params for all services
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "MovingCompany",
      "name": "بيت العز لنقل العفش",
      "image": "https://www.beit-elezz.com/logo.png",
      "url": "https://www.beit-elezz.com",
      "telephone": "0540668896"
    },
    "areaServed": {
      "@type": "City",
      "name": "Riyadh"
    },
    "description": service.description,
    "url": `https://www.beit-elezz.com/services/${service.slug}`
  };

  return (
    <article className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      
      <div className="mb-8 text-center max-w-4xl mx-auto">
         <Link href="/#services" className="text-[#D4AF37] hover:underline font-black mb-4 inline-block">← العودة للخدمات</Link>
         
          <div suppressHydrationWarning className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-8 shadow-2xl">
            <Image 
              src={service.image} 
              alt={service.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-[#D4AF37] leading-tight mb-4">{service.title}</h1>
          <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
             <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full font-black">خدماتنا</span>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
      </div>

      <div 
        className="prose prose-lg max-w-none prose-headings:text-[#002855] prose-li:marker:text-[#D4AF37]"
        dangerouslySetInnerHTML={{ __html: service.content }}
      ></div>

      <div className="mt-12 bg-[#1f70cc] text-white p-8 rounded-2xl text-center shadow-lg relative overflow-hidden group">
         <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
         <h3 className="text-2xl font-black mb-2 relative z-10">هل ترغب في {service.title}؟</h3>
         <p className="opacity-90 mb-6 relative z-10">تواصل معنا الآن للحصول على أفضل خدمة {service.title} في الرياض مع الضمان.</p>
         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="tel:0540668896" className="bg-white text-[#1f70cc] px-8 py-3 rounded-full font-black hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 shadow-md">
               اتصل الآن: 0540668896
            </a>
            <a href="https://wa.me/966540668896" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-3 rounded-full font-black hover:bg-[#128C7E] transition-colors duration-300 shadow-md flex items-center gap-2">
               واتساب
            </a>
         </div>
      </div>
    </article>
  );
}
