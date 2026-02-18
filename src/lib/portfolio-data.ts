export interface Project {
  id: string;
  title: string;
  category: string;
  images: string[];
  description: string;
  details: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "villa-moving",
    title: "نقل فيلا متكاملة في الرياض",
    category: "نقل سكني",
    images: [
      "/images/photos/WhatsApp Image 2026-02-03 at 8.33.10 PM.jpeg",
      "/images/photos/WhatsApp Image 2026-02-03 at 8.33.11 PM.jpeg",
      "/images/photos/WhatsApp Image 2026-02-03 at 8.33.12 PM.jpeg",
      "/images/photos/WhatsApp Image 2026-02-03sdf at 8.33.14 PM.jpeg",
      "/images/photos/WhatsApp Image 2026-02-ujk03 at 8.33.14 PM.jpeg"
    ],
    description: "تعد عملية نقل الفلل من أكثر الخدمات دقة لدينا. قمنا بنقل فيلا متكاملة بحي الياسمين مع الحفاظ على كافة قطع الأثاث الثقيلة والتحف الزجاجية باستخدام أحدث تقنيات الرفع والتغليف.",
    details: []
  },
  {
    id: "furniture-assembly",
    title: "فك وتركيب أثاث مودرن",
    category: "فك وتركيب",
    images: [
      "/images/vella/17.02.2026_15.54.10_REC.png",
      "/images/vella/17.02.2026_15.57.31_REC.png",
      "/images/vella/17.02.2026_15.59.43_REC.png",
      "/images/vella/17.02.2026_16.03.12_REC.png",
      "/images/vella/17.02.2026_16.07.22_REC.png",
      "/images/vella/17.02.2026_16.08.22_REC.png",
      "/images/vella/17.02.2026_16.09.32_REC.png",
      "/images/vella/17.02.2026_16.11.29_REC.png",
      "/images/vella/17.02.2026_16.12.37_REC.png"
    ],
    description: "فريق النجارين لدينا محترف في التعامل مع أرقى ماركات الأثاث العالمي. قمنا بفك غرف نوم وغرف معيشة مع إعادة تركيبها بدقة متناهية في الموقع الجديد.",
    details: []
  },
  {
    id: "packing-protection",
    title: "تغليف وحماية الأثاث الحساس",
    category: "تغليف",
    images: [
      "/images/photos/WhatsApp Image 2026-02-03 adrgt 8.33.17 PM.jpeg",
      "/images/photos/WhatsApp Image 2026-02-03y8 at 8.33.18 PM.jpeg",
      "/images/photos/WhatsApp Imagefgh 2026-02-03 at 8.33.20 PM.jpeg",
      "/images/photos/WhatsApp Image 2026-0fd2-03 at 8.33.17 PM.jpeg",
      "/images/photos/WhatsApp Image 2026-02-03 at 8.gh33.17 PM.jpeg"
    ],
    description: "نستخدم أفضل خامات التغليف من الفقاعات (Bubble Wrap) والكرتون المقوى لضمان عدم حدوث أي خدش بسيط أثناء عملية النقل، خاصة للقطع القابلة للكسر.",
    details: []
  },
  {
    id: "office-moving",
    title: "نقل وتجهيز مكاتب شركات",
    category: "نقل تجاري",
    images: [
      "/images/Company/com1.png",
      "/images/Company/com2.png",
      "/images/Company/com3.png",
      "/images/Company/com4.png",
      "/images/Company/com5.png"
    ],
    description: "خدماتنا تمتد للقطاع التجاري حيث قمنا بنقل مقر شركة تقنية بالكامل في وقت قياسي لضمان عدم تعطل العمل، مع ترتيب الأجهزة والمكاتب بدقة.",
    details: []
  }
];
