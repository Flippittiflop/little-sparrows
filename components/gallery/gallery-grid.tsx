import { GalleryImage } from './gallery-image';
import type { GalleryItem } from '@/types/gallery';

interface GalleryGridProps {
  images: GalleryItem[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {images.map((image, index) => (
        <GalleryImage key={index} image={image} />
      ))}
    </div>
  );
}