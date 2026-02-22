'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          
           <img src="/logos/VB full logo.png" alt="" 
           className="h-17 w-55 object-contain"/>

        
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-accent transition-colors duration-200 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex gap-2">
          <Link href="#contact">
            <Button
              className="bg-accent hover:bg-accent/90 text-white rounded-lg px-6"
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-accent transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
              <Button
                className="w-full bg-accent hover:bg-accent/90 text-white rounded-lg"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
