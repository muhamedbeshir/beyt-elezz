import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://baytalezz-sa.com'), // TODO: Update domain
  title: {
    default: "بيت العز لنقل العفش | 0540668896",
    template: "%s | بيت العز"
  },
  description: "شركة بيت العز لنقل الأثاث والعفش بالرياض مع الفك والتركيب والتغليف. خصم 30% على جميع الخدمات. فريق محترف، ضمان شامل، ونقل آمن. نغطي كافة أحياء الرياض: الياسمين، الملقا، النرجس، حي الصحافة وغيرها.",
  keywords: ["نقل عفش بالرياض", "نقل اثاث بالرياض", "افضل شركة نقل عفش بالرياض", "ارخص شركة نقل عفش بالرياض", "نقل عفش مع الفك والتركيب", "تخزين اثاث بالرياض", "بيت العز"],
  authors: [{ name: "بيت العز" }],
  creator: "بيت العز",
  publisher: "بيت العز",
  alternates: {
    canonical: 'https://baytalezz-sa.com',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "بيت العز - أفضل خدمة نقل عفش بالرياض",
    description: "نقل عفش آمن وسريع مع التغليف والفك والتركيب. اتصل بنا الآن 0540668896",
    url: 'https://baytalezz-sa.com',
    siteName: 'بيت العز',
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "بيت العز لنقل العفش",
    description: "شركة بيت العز لنقل الأثاث والعفش بالرياض مع الفك والتركيب والتغليف. خصم 30% على جميع الخدمات. فريق محترف، ضمان شامل، ونقل آمن. نغطي كافة أحياء الرياض: الياسمين، الملقا، النرجس، حي الصحافة وغيرها.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "name": "بيت العز لنقل العفش",
  "image": "https://baytalezz-sa.com/logo.png",
  "telephone": "0540668896",
  "url": "https://baytalezz-sa.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "الرياض، المملكة العربية السعودية",
    "addressLocality": "Riyadh",
    "addressRegion": "Riyadh",
    "addressCountry": "SA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.7136,
    "longitude": 46.6753
  },
  "areaServed": {
    "@type": "City",
    "name": "Riyadh"
  },
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250"
  }
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Preloader from "@/components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} antialiased font-[family-name:var(--font-cairo)] flex flex-col min-h-screen`}
      >
        <Preloader />
        <div className="sticky top-0 z-50 w-full shadow-lg">
          <AnnouncementBar />
          <Header />
        </div>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
