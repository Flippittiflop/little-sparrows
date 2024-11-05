import { PageHeader } from '@/components/sections/page-header';
import { GalleryGrid } from '@/components/gallery/gallery-grid';
import galleryData from '@/data/gallery.json';

export default function Gallery() {
  return (
    <>
      <PageHeader
        title="Our Gallery"
        description="Take a peek into life at Little Sparrows"
      />
      <section className="container py-12">
        <GalleryGrid images={galleryData.images} />
      </section>
    </>
  );
}