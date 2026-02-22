'use client';

import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import SolutionGallery from './solution-gallery';

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  images: string[];
  video?: string;
}

interface SolutionModalProps {
  isOpen: boolean;
  solution: Solution | null;
  onClose: () => void;
}

export default function SolutionModal({
  isOpen,
  solution,
  onClose,
}: SolutionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-full w-full h-screen p-0 border-0">
        {solution && (
          <SolutionGallery
            title={solution.title}
            subtitle={solution.subtitle}
            description={solution.fullDescription}
            images={solution.images}
            onBack={onClose}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
