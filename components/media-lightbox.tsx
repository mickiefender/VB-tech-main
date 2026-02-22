'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface Media {
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
}

interface MediaLightboxProps {
  media: Media[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  serviceName: string;
}

export function MediaLightbox({
  media,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
  serviceName,
}: MediaLightboxProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const currentMedia = media[currentIndex];
  const isVideo = currentMedia.type === 'video';

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
      dragOffset < 0 ? onNext() : onPrevious();
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
      dragOffset < 0 ? onNext() : onPrevious();
    }
    setDragOffset(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrevious();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrevious, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full flex items-center justify-center"
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
          className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
          aria-label="Close lightbox"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        {/* Media Display */}
        <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center px-4 md:px-12">
          {isVideo ? (
            <video
              src={currentMedia.src}
              controls
              className="w-full h-full max-h-[90vh] object-contain rounded-lg"
              poster={currentMedia.thumbnail}
              autoPlay
            />
          ) : (
            <Image
              src={currentMedia.src}
              alt={`${serviceName} image ${currentIndex + 1}`}
              fill
              className="w-full h-full object-contain"
              quality={95}
              priority
            />
          )}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
          aria-label="Previous media"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
          aria-label="Next media"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Media Counter and Type */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
          <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white text-sm">
            {currentIndex + 1} / {media.length}
          </div>
          <span className="text-white/60 text-xs uppercase tracking-widest">
            {isVideo ? 'Video' : 'Image'}
          </span>
        </div>

        {/* Thumbnail Strip */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-2xl px-4 z-20">
          {media.map((item, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                // Navigate to this index
                const diff = idx - currentIndex;
                if (diff > 0) {
                  for (let i = 0; i < diff; i++) onNext();
                } else if (diff < 0) {
                  for (let i = 0; i < Math.abs(diff); i++) onPrevious();
                }
              }}
              className={`relative h-16 w-20 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 border-2 ${
                idx === currentIndex ? 'border-white opacity-100' : 'border-white/30 opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={item.type === 'video' ? (item.thumbnail || item.src) : item.src}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="w-full h-full object-cover"
              />
              {item.type === 'video' && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="h-4 w-4 text-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
