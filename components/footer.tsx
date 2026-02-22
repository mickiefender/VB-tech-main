'use client';

import { Separator } from '@/components/ui/separator';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="animate-slide-in-up">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-accent">Vertex</span> Blueprint Technologies
            </h3>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              Transforming businesses with innovative software solutions and cutting-edge technology.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="p-2 bg-white/10 hover:bg-accent rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Products */}
          <div className="animate-slide-in-up" style={{ animationDelay: '100ms' }}>
            <h4 className="font-bold mb-4 text-lg">Products</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                'Vertex Cards',
                'School Management',
                'Restaurant Management',
                'Mobile Apps',
                'Web Development',
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="animate-slide-in-up" style={{ animationDelay: '200ms' }}>
            <h4 className="font-bold mb-4 text-lg">Company</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                { label: 'About Us', href: '#' },
                { label: 'Blog', href: '#' },
                { label: 'Careers', href: '#' },
                { label: 'Press', href: '#' },
                { label: 'Contact', href: '#' },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-up" style={{ animationDelay: '300ms' }}>
            <h4 className="font-bold mb-4 text-lg">Get In Touch</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>123 Tech Boulevard, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span>+233 208517482</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span>vertexblueprinttechnologies@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white/60 gap-4">
          <p>&copy; 2024 Vertex Blueprint Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
