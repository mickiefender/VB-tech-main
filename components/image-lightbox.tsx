'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  serviceName: string;
  initialIndex?: number;
  isOpen?: boolean;
}

export function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
  serviceName,
  isOpen = true,
}: ImageLightboxProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const handlePrevious = () => {
    onPrevious();
    setDragOffset(0);
  };

  const handleNext = () => {
    onNext();
    setDragOffset(0);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    setDragOffset((currentX - dragStart) * 0.5);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(dragOffset) > 50) {
      dragOffset < 0 ? handleNext() : handlePrevious();
    }
    setDragOffset(0);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    setDragOffset((currentX - dragStart) * 0.5);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(dragOffset) > 50) {
      dragOffset < 0 ? handleNext() : handlePrevious();
    }
    setDragOffset(0);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Get indices for side images (3 on each side)
  const getSideIndices = (side: 'left' | 'right') => {
    const imageCount = images.length;
    const indices = [];
    if (side === 'left') {
      for (let i = 3; i >= 1; i--) {
        indices.push(((currentIndex - i) % imageCount + imageCount) % imageCount);
      }
    } else {
      for (let i = 1; i <= 3; i++) {
        indices.push(((currentIndex + i) % imageCount + imageCount) % imageCount);
      }
    }
    return indices;
  };

  const leftIndices = getSideIndices('left');
  const rightIndices = getSideIndices('right');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-amber-50 via-stone-50 to-amber-50 overflow-hidden"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full flex items-center justify-center px-4 md:px-8"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 rounded-full bg-gray-800 hover:bg-gray-900 transition-colors duration-200"
          aria-label="Close lightbox"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        {/* Main Container */}
        <div className="relative w-full h-full max-h-[90vh] flex items-center justify-center">
          {/* Left Stack of Images */}
          <div className="absolute left-0 md:left-4 lg:left-12 h-full flex items-center justify-center">
            <div className="relative w-24 md:w-32 lg:w-40 h-40 md:h-56 lg:h-72">
              {leftIndices.map((index, stackPos) => (
                <div
                  key={index}
                  className="absolute bg-white p-2 md:p-3 rounded-lg shadow-2xl transition-all duration-300 hover:shadow-3xl"
                  style={{
                    width: '100%',
                    height: '90%',
                    left: `${(stackPos - 1) * 6}px`,
                    top: `${(stackPos - 1) * 6}px`,
                    zIndex: 40 - stackPos,
                    transform: `rotate(${(stackPos - 1) * -4}deg)`,
                    opacity: 0.75 - stackPos * 0.08,
                  }}
                >
                  <div className="relative w-full h-full bg-gray-100 rounded">
                    <Image
                      src={images[index]}
                      alt={`Left image ${stackPos}`}
                      fill
                      className="object-cover rounded"
                      quality={85}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Large Image */}
          <div className="relative z-50 w-1/3 md:w-2/5 lg:w-96 h-64 md:h-80 lg:h-96 bg-white p-4 md:p-6 rounded-2xl shadow-2xl">
            <div className="relative w-full h-full bg-gray-100 cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
              <Image
                src={images[currentIndex]}
                alt={`${serviceName} main image`}
                fill
                className="object-cover"
                quality={95}
                priority
              />
            </div>
          </div>

          {/* Right Stack of Images */}
          <div className="absolute right-0 md:right-4 lg:right-12 h-full flex items-center justify-center">
            <div className="relative w-24 md:w-32 lg:w-40 h-40 md:h-56 lg:h-72">
              {rightIndices.map((index, stackPos) => (
                <div
                  key={index}
                  className="absolute bg-white p-2 md:p-3 rounded-lg shadow-2xl transition-all duration-300 hover:shadow-3xl"
                  style={{
                    width: '100%',
                    height: '90%',
                    right: `${(stackPos - 1) * 6}px`,
                    top: `${(stackPos - 1) * 6}px`,
                    zIndex: 40 - stackPos,
                    transform: `rotate(${(stackPos - 1) * 4}deg)`,
                    opacity: 0.75 - stackPos * 0.08,
                  }}
                >
                  <div className="relative w-full h-full bg-gray-100 rounded">
                    <Image
                      src={images[index]}
                      alt={`Right image ${stackPos}`}
                      fill
                      className="object-cover rounded"
                      quality={85}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-800 hover:bg-gray-900 text-white transition-colors duration-200"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-800 hover:bg-gray-900 text-white transition-colors duration-200"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Bottom Info */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          <div className="px-4 py-2 rounded-full bg-gray-800 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
          <p className="text-gray-600 text-sm font-light tracking-widest uppercase">{serviceName}</p>
        </div>

        {/* Thumbnail Navigation */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-2xl px-4 z-20 pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                const diff = idx - currentIndex;
                if (diff > 0) {
                  for (let i = 0; i < diff; i++) onNext();
                } else if (diff < 0) {
                  for (let i = 0; i < Math.abs(diff); i++) onPrevious();
                }
              }}
              className={`relative h-14 w-16 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 border-2 ${
                idx === currentIndex ? 'border-gray-800 scale-110' : 'border-gray-300 opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
