'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'NexSchool - Digital Learning Hub',
    category: 'Education Technology',
    description:
      'Complete school management system serving 50+ institutions with 10,000+ students',
    image: '/school-system.jpg',
    tags: ['Web App', 'Mobile', 'Backend'],
    link: '',
  },
  {
    title: 'ChefFlow - Restaurant POS',
    category: 'Restaurant Management',
    description:
      'Point of sale and inventory system for 100+ restaurants across the region',
    image: '/services-images/Chefflow/Real-time Metrics Dashboard.png',
    tags: ['POS System', 'Analytics', 'Inventory'],
    link: 'https://chefflow.vercel.app/',
  },
  {
    title: 'Vertex Smart Card Platform',
    category: 'Smart Technology',
    description:
      'NFC-enabled business card system with cloud dashboard and analytics',
    image: '/card-img.png',
    tags: ['Hardware', 'Cloud', 'Mobile'],
    link: 'https://vertexcards.tech/',
  },
  {
    title: 'MediTrack - Health Management',
    category: 'Healthcare',
    description:
      'Patient management and appointment scheduling system for clinics',
    image: '/services-images/Meditacker/Screenshot 2026-02-22 at 12.34.51 PM.png',
    tags: ['Healthcare', 'Appointment', 'Records'],
    link: 'https://mickiefender.github.io/meditracker/',
  },
  {
    title: 'Election Campaign Website for NPP(New Patriotic Party)',
    category: 'Campaign Management',
    description:
      'Dynamic campaign website with event management, volunteer coordination, and donation processing',
    image: '/services-images/Election-campaign/Screenshot 2026-02-22 at 1.40.51 PM.png',
    tags: ['Election', 'Donation', 'Analytics'],
    link: 'https://drdwamenaelections.org/',
  },
  {
    title: 'Ecommerce website for a boutique-KimverseLuxe',
    category: 'Ecommerce',
    description:
      'Custom ecommerce platform with product management, shopping cart, and payment integration',
    image: '/services-images/kimverse/Screenshot 2026-02-22 at 1.48.23 PM.png',
    tags: ['Retail', 'Multi-branch', 'Analytics'],
    link: 'https://mickiefender.github.io/kimverseluxe/',
  },
  {
    title: 'Website for a real estate company-Baltic Properties',
    category: 'Real Estate',
    description:  'Custom real estate listing website with property management, search functionality, and contact forms ',
    image: '/services-images/Baltic.png',
    tags: ['Retail', 'Multi-branch', 'Analytics'],    
    link: 'https://mickiefender.github.io/Baltic-Properties/',
  }
];

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-down">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Our <span className="text-accent">Successful Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Check out the amazing work we've delivered for our clients
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Link key={i} href={project.link} className="block">
              <Card
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 group animate-scale-in cursor-pointer"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <ExternalLink className="text-white h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-accent/10 text-accent border-0 hover:bg-accent/20"
                    >
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-primary mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}