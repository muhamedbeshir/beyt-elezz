import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { servicesData } from '@/lib/services-data';
import { projects } from '@/lib/portfolio-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.beit-elezz.com';

  const blogs = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const services = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));
  
  const portfolio = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...routes, ...services, ...portfolio, ...blogs];
}
