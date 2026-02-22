'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CreditCard,
  GraduationCap,
  UtensilsCrossed,
  Code,
  Smartphone,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CreditCard,
  GraduationCap,
  UtensilsCrossed,
  Smartphone,
  Code,
};

const services = [
  {
    id: 'vertex-cards',
    icon: 'CreditCard',
    title: 'Vertex Cards',
    description:
      'Smart business cards with NFC technology, digital contact sharing, and cloud integration',
    image: '/card-img.png',
  },
  {
    id: 'school-management',
    icon: 'GraduationCap',
    title: 'School Management',
    description:
      'Complete academic management system for enrollment, grades, attendance, and parent communication',
    image: '/school-system.jpg',
  },
  {
    id: 'restaurant-management',
    icon: 'UtensilsCrossed',
    title: 'Restaurant Management',
    description:
      'Comprehensive POS system, inventory management, order tracking, and customer analytics',
    image: '/restaurant-system.jpg',
  },
  {
    id: 'mobile-apps',
    icon: 'Smartphone',
    title: 'Mobile Apps',
    description:
      'Custom-built native and cross-platform mobile applications for iOS and Android',
    image: '/hero-bg.jpg',
  },
  {
    id: 'web-development',
    icon: 'Code',
    title: 'Web Development',
    description:
      'Modern responsive websites and web applications using latest technologies',
    image: '/hero-bg.jpg',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in-down">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Our Company Provides The <span className="text-accent">Best Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive services designed to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 group animate-scale-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    {Icon && <Icon className="h-8 w-8 mb-2 text-accent" />}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link href={`/services/${service.id}`}>
                    <Button
                      variant="outline"
                      className="w-full border-accent text-accent hover:bg-accent/10 rounded-lg"
                    >
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
