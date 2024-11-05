import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2070"
        alt="Children playing"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container text-center text-white">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to Little Sparrows
          </h1>
          <p className="mt-6 text-xl md:text-2xl">
            Where young minds soar and dreams take flight
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <Button 
              size="lg" 
              className="rounded-full text-lg"
              asChild
            >
              <Link href="/contact">Enroll Now</Link>
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="rounded-full text-lg"
              asChild
            >
              <Link href="/programs">Our Programs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}