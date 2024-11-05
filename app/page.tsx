import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />

      <section className="bg-secondary py-16">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold">Our Learning Approach</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                At Little Sparrows, we believe in learning through play and
                discovery. Our curriculum is designed to nurture every aspect of
                your child's development.
              </p>
              <Button className="mt-6" asChild>
                <Link href="/programs">Learn More</Link>
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2069"
                alt="Children learning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}