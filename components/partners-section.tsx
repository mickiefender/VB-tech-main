'use client';

import { useState } from 'react';
import Image from 'next/image';

const partners = [
  { name: 'Baltic', logo: '/logos/Baltic-properties-logo.png' },
  { name: 'Snaptic', logo: '/logos/snaptic-logo.png' },
  { name: 'Mico Herbal', logo: '/logos/Micoherbal-logo.jpg' },
  { name: 'Vertex Cards', logo: '/logos/vertex-logo.png' },
  { name: 'KimverseLuxe', logo: '/logos/kimverse-logo.png' },
  { name: 'MediTracker', logo: '/logos/medi-tracker.png' },

];

export default function PartnersSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-down">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Trusted by <span className="text-accent">Leading Brands</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We partner with industry leaders to deliver world-class solutions
          </p>
        </div>

        {/* ✅ PREMIUM MARQUEE */}
        <div className="relative mb-20 overflow-hidden">
          <div className="marquee">
            <div className="marquee-track">
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={i}
                  className="logo-card flex items-center justify-center h-24 sm:h-28 bg-white rounded-xl border border-gray-200 flex-shrink-0 w-48 sm:w-56"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats remain unchanged */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 sm:p-12 text-white">
          {[
            { number: '500+', label: 'Happy Clients', target: 500 },
            { number: '1000+', label: 'Projects Delivered', target: 1000 },
            { number: '25+', label: 'Years Experience', target: 25 },
          ].map((stat, i) => (
            <StatCounter key={i} stat={stat} delay={i * 150} />
          ))}
        </div>
      </div>

      {/* 🔥 MARQUEE STYLES */}
      <style jsx>{`
        .marquee {
          overflow: hidden;
          position: relative;
        }

        .marquee-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: marqueeScroll 25s linear infinite;
        }

        /* pause on hover */
        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

function StatCounter({
  stat,
  delay,
}: {
  stat: { number: string; label: string; target: number };
  delay: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useState(() => {
    const numericValue = parseInt(stat.number);
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = numericValue / steps;

    let currentStep = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        currentStep++;
        if (currentStep > steps) {
          setDisplayValue(numericValue);
          clearInterval(interval);
        } else {
          setDisplayValue(Math.floor(increment * currentStep));
        }
      }, stepDuration);
    }, delay);

    return () => clearTimeout(timer);
  });

  return (
    <div className="text-center animate-scale-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
        {displayValue}
        {stat.number.includes('+') ? '+' : ''}
      </div>
      <p className="text-white/80 text-lg">{stat.label}</p>
    </div>
  );
}