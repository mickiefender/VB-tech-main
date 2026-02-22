'use client';

import { Card } from '@/components/ui/card';
import {
  Zap,
  Shield,
  Users,
  TrendingUp,
  Smartphone,
  Clock,
} from 'lucide-react';
import Image from 'next/image';

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'High-performance solutions built for speed and efficiency',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime guarantee',
  },
  {
    icon: Users,
    title: 'User Friendly',
    description: 'Intuitive interfaces designed for seamless user experience',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    description: 'Solutions that grow with your business needs',
  },
  {
    icon: Smartphone,
    title: 'Multi-Platform',
    description: 'Works seamlessly across web, mobile, and desktop',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer support and maintenance',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in-down">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Why Choose <span className="text-accent">Vertex Blueprint?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We deliver innovative solutions with proven expertise and customer-first approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Left side - benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-left">
            {benefits.slice(0, 4).map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={i}
                  className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 border-0 bg-white"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Right side - image showcase */}
          <div className="animate-slide-in-right">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/procedure/Deploy, Monitor, and Improve.jpeg"
                alt="Our team working on solutions"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-up">
          {benefits.slice(4).map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={i + 4}
                className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 border-0 bg-white"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
