'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SolutionGalleryProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  onBack: () => void;
}

export default function SolutionGallery({
  title,
  subtitle,
  description,
  images,
  onBack,
}: SolutionGalleryProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>
          <h1 className="text-2xl font-bold text-primary">{title}</h1>
          <div className="w-20"></div>
        </div>

        {/* Navigation */}
        <nav className="flex gap-8 justify-center text-sm font-semibold text-gray-600">
          <a href="#" className="text-primary border-b-2 border-primary pb-1">
            GALLERY
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            ABOUT
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            DETAILS
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Masonry Gallery */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left side - Small images stacked */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {images.slice(0, 2).map((img, i) => (
                  <div
                    key={i}
                    className="relative h-48 sm:h-56 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                  >
                    <Image
                      src={img}
                      alt={`${title} gallery ${i + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              {/* Center - Large featured image */}
              <div className="lg:col-span-8">
                <div className="relative h-80 sm:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={images[1] || images[0]}
                    alt={`${title} featured`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Right side - Small images stacked */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {images.slice(2, 4).map((img, i) => (
                  <div
                    key={i}
                    className="relative h-48 sm:h-56 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                  >
                    <Image
                      src={img}
                      alt={`${title} gallery ${i + 3}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="text-center py-12 border-t border-gray-200">
            <h2 className="text-4xl font-bold text-primary mb-4">{title}</h2>
            <p className="text-gray-500 text-lg mb-6">{subtitle}</p>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto mb-8">
              {description}
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-white">
              Get Started with {title}
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4 sm:px-8 mt-auto">
        <div className="max-w-7xl mx-auto text-center text-gray-600 text-sm">
          <p>
            Copyright © 2024 All rights reserved | Vertex Blueprint Technologies
          </p>
        </div>
      </footer>
    </div>
  );
}
