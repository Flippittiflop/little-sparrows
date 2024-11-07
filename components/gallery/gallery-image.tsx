'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { GalleryItem } from '@/types/gallery';

interface GalleryImageProps {
  image: GalleryItem;
}

export function GalleryImage({ image }: GalleryImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="card group relative aspect-square overflow-hidden">
          <Image
            src={image.thumbnail}
            alt={image.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl rounded-2xl p-6">
        <DialogTitle className="sr-only">{image.title}</DialogTitle>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={image.fullSize}
            alt={image.title}
            fill
            className="object-cover"
          />
        </div>
        {/*<div className="p-4">*/}
        {/*  <h3 className="text-2xl font-semibold">{image.title}</h3>*/}
        {/*  <p className="mt-2 text-base text-muted-foreground">*/}
        {/*    {image.description}*/}
        {/*  </p>*/}
        {/*</div>*/}
      </DialogContent>
    </Dialog>
  );
}
