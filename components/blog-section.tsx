'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of Smart Business Cards',
    excerpt: 'Discover how NFC technology is revolutionizing networking and professional connections.',
    category: 'Innovation',
    author: 'Sarah Johnson',
    date: 'Mar 15, 2024',
    image: '/vertex-card.jpg',
    readTime: '5 min read',
  },
  {
    title: 'Digital Transformation in Education',
    excerpt: 'How modern management systems are reshaping the educational landscape.',
    category: 'Technology',
    author: 'Michael Chen',
    date: 'Mar 12, 2024',
    image: '/school-system.jpg',
    readTime: '7 min read',
  },
  {
    title: 'Streamlining Restaurant Operations',
    excerpt: 'Best practices for implementing POS systems and improving customer experience.',
    category: 'Business',
    author: 'Emily Rodriguez',
    date: 'Mar 10, 2024',
    image: '/restaurant-system.jpg',
    readTime: '6 min read',
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in-down">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Latest News From Our <span className="text-accent">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and stories from our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <Card
              key={i}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 group cursor-pointer animate-slide-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent hover:bg-accent/90 text-white border-0">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="space-y-3 mb-4 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <span className="block">{post.readTime}</span>
                </div>

                <button className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                  Read More <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
