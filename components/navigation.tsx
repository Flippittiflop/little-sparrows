'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-primary">Little Sparrows</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden space-x-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button size="lg" className="rounded-full" asChild>
            <Link href="/contact">Enroll Now</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="container mx-auto pb-6 md:hidden">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button size="lg" className="rounded-full" asChild onClick={() => setIsOpen(false)}>
              <Link href="/contact">Enroll Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}