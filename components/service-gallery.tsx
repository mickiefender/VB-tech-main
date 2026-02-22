'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { MediaLightbox } from './media-lightbox';

interface ServiceGalleryProps {
  media: Array<{
    type: 'image' | 'video';
    src: string;
    thumbnail?: string;
  }>;
  serviceTitle: string;
}

export function ServiceGallery({ media, serviceTitle }: ServiceGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentMedia = media[selectedIndex];
  const isVideo = currentMedia.type === 'video';

  return (
    <div className="w-full space-y-6">
      {/* Main Display Area */}
      <div
        className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg cursor-pointer group"
        onClick={() => setLightboxOpen(true)}
      >
        {isVideo ? (
          <>
            <video
              src={currentMedia.src}
              className="w-full h-full object-cover"
              poster={currentMedia.thumbnail}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <Play className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
          </>
        ) : (
          <>
            <Image
              src={currentMedia.src}
              alt={`${serviceTitle} media ${selectedIndex + 1}`}
              fill
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </>
        )}
      </div>

      {/* Media Grid - Thumbnail Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {media.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 group ${
              index === selectedIndex
                ? 'ring-2 ring-accent shadow-lg'
                : 'hover:shadow-md'
            }`}
          >
            <Image
              src={item.type === 'video' ? (item.thumbnail || item.src) : item.src}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {item.type === 'video' && (
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <Play className="h-6 w-6 text-white opacity-80 group-hover:opacity-100" />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Media Counter */}
      <div className="flex items-center justify-between px-2">
        <span className="text-sm text-gray-600">
          {selectedIndex + 1} / {media.length}
        </span>
        <span className="text-xs text-gray-500 uppercase tracking-wide">
          {currentMedia.type === 'video' ? 'Video' : 'Image'}
        </span>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <MediaLightbox
          media={media}
          currentIndex={selectedIndex}
          onClose={() => setLightboxOpen(false)}
          onPrevious={() =>
            setSelectedIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1))
          }
          onNext={() =>
            setSelectedIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1))
          }
          serviceName={serviceTitle}
        />
      )}
    </div>
  );
}
