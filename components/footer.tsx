import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Little Sparrows</h3>
            <p className="mt-2 text-sm">
              Nurturing young minds in a safe and loving environment
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="https://facebook.com" className="hover:opacity-80">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="hover:opacity-80">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">32 Fisant Ave, Fourways</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+27 105 411 522</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@littlesparrows.co.za</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="mt-4 space-y-2">
              <Link href="/programs" className="block text-sm hover:opacity-80">
                Our Programs
              </Link>
              <Link href="/gallery" className="block text-sm hover:opacity-80">
                Gallery
              </Link>
              <Link href="/contact" className="block text-sm hover:opacity-80">
                Enroll Now
              </Link>
              <Link href="/about" className="block text-sm hover:opacity-80">
                About Us
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center text-sm">
          © {new Date().getFullYear()} Little Sparrows Nursery School. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
