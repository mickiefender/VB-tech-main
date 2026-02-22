'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const heroImages = [
  '/hero/sch-system-presentation.jpeg',
  '/hero/Single-image.jpeg',
  '/hero/Team working.jpeg',
  '/hero/with team 2.jpeg',
  '/hero/with team.jpeg'
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sliding Background Images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentImageIndex && !isTransitioning ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Hero slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/75 to-primary/65 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="animate-slide-in-down mb-6">
         
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-in-up text-balance">
          Transform Your Business with <span className="text-accent">Vertex Blueprint</span>
        </h1>

        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-slide-in-up text-balance">
          Cutting-edge software solutions including smart business cards, comprehensive management systems, and custom mobile & web applications designed for modern institutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in-up">
          <Link href="#services">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white rounded-lg h-12 px-8"
            >
              Explore Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-lg h-12 px-8"
            >
              Get In Touch
            </Button>
          </Link>
        </div>

        

        {/* Image carousel indicators */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'w-8 bg-accent' : 'w-2 bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
