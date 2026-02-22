'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function StatsCTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/team.jpg"
          alt="Team background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - CTA text */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Let us build the <span className="text-accent">bridge</span> between your <span className="text-accent">brand</span> and <span className="text-accent">customer</span>
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                From concept to deployment, we create software solutions that connect your vision with customer needs. Our comprehensive services transform businesses across industries.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white border-0 group w-full sm:w-auto"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right side - Stats */}
          <div className="space-y-8 animate-slide-in-right">
            {[
              { number: '18K+', label: 'Projects Done', icon: '📊', target: 18000 },
              { number: '7K+', label: 'Happy Customers', icon: '😊', target: 7000 },
              { number: '4.7', label: 'Customer Rating', icon: '⭐', target: 4.7, isDecimal: true },
            ].map((stat, i) => (
              <StatItem key={i} stat={stat} delay={(i + 2) * 150} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({
  stat,
  delay,
}: {
  stat: { number: string; label: string; icon: string; target: number; isDecimal?: boolean };
  delay: number;
}) {
  const displayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = stat.target / steps;

    let currentStep = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        currentStep++;
        if (currentStep > steps) {
          if (displayRef.current) {
            displayRef.current.textContent = stat.isDecimal
              ? stat.target.toFixed(1)
              : Math.floor(stat.target).toLocaleString();
          }
          clearInterval(interval);
        } else {
          if (displayRef.current) {
            const value = increment * currentStep;
            displayRef.current.textContent = stat.isDecimal
              ? value.toFixed(1)
              : Math.floor(value).toLocaleString();
          }
        }
      }, stepDuration);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [stat, delay]);

  return (
    <div
      className="flex items-start gap-6 p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/15 transition-all duration-300 animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl flex-shrink-0">{stat.icon}</div>
      <div>
        <div
          ref={displayRef}
          className="text-4xl sm:text-5xl font-bold text-accent"
        >
          0
        </div>
        <p className="text-white text-lg mt-2">{stat.label}</p>
      </div>
    </div>
  );
}
