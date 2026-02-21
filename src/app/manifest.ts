import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'شركة بيت العز لنقل الأثاث',
    short_name: 'بيت العز',
    description: 'أفضل شركة نقل عفش بالرياض مع الفك والتركيب والتغليف والضمان.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1f70cc',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
