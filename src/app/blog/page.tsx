import Link from 'next/link';
import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: "مدونة بيت العز | نصائح في نقل العفش والديكور",
  description: "اطلع على أحدث المقالات والنصائح حول نقل العفش، تغليف الأثاث، واختيار أفضل شركات النقل في الرياض.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-[#D4AF37]">مدونة بيت العز</h1>
        <div className="w-24 h-1.5 bg-[#1f70cc] mx-auto rounded-full"></div>
        <p className="text-[#1f70cc] max-w-2xl mx-auto text-lg font-black">
          كل ما تحتاج معرفته عن نقل العفش، الديكور، والحياة في الرياض.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
            <article className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                   <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full font-black">{post.category}</span>
                   <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-black text-[#1f70cc] mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 text-sm font-medium line-clamp-3 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="text-[#D4AF37] font-black text-sm flex items-center gap-1 group-hover:gap-2 transition-all border-t border-gray-100 pt-4">
                   اقرأ المزيد <span className="text-lg">←</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
