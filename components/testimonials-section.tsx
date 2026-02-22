'use client';

import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'John Smith',
    role: 'Principal, Tech Academy',
    text: 'Vertex Blueprint transformed our school operations. The management system is intuitive and has saved us countless hours.',
    image: '/team.jpg',
    rating: 5,
  },
  {
    name: 'Maria Garcia',
    role: 'Owner, Fine Dining Co.',
    text: 'The restaurant management system is a game-changer. Our staff loves it and our customers appreciate the faster service.',
    image: '/team.jpg',
    rating: 5,
  },
  {
    name: 'David Lee',
    role: 'CEO, Business Solutions Inc.',
    text: 'Vertex Cards have elevated our brand presence. The smart technology impressed all our partners and clients.',
    image: '/team.jpg',
    rating: 5,
  },
  {
    name: 'Lisa Anderson',
    role: 'Founder, Education Hub',
    text: 'Outstanding support and continuous improvements. The team listens to feedback and delivers exactly what we need.',
    image: '/team.jpg',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in-down">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            What Our <span className="text-accent">Global Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from businesses we've helped succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className="p-8 border-0 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white group animate-scale-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full w-14 h-14 object-cover border-2 border-accent/20"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-primary text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-accent font-semibold">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
