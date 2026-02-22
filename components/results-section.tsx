'use client';

import Image from 'next/image';
import { Award, Zap, Briefcase } from 'lucide-react';

export default function ResultsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with badge */}
          <div className="relative animate-slide-in-left">
            <div className="relative h-96 sm:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/hero/with team 2.jpeg"
                alt="Team delivering results"
                fill
                className="object-cover"
              />
              {/* Overlay curved shape */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-accent/10" />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-2xl p-6 shadow-xl animate-scale-in">
              <div className="text-4xl font-bold">25+</div>
              <div className="text-sm font-semibold">Years of Experience</div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h3 className="text-gray-500 uppercase tracking-wider text-sm font-semibold mb-4">
                WHO WE ARE
              </h3>
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight">
                Real people delivering <span className="text-accent">real results</span>.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Vertex Blueprint Technologies combines expertise, innovation, and dedication to deliver software solutions that transform businesses. Our team of skilled professionals brings decades of experience to every project.
              </p>
            </div>

            {/* Services grid */}
            <div className="space-y-4">
              {[
                {
                  icon: Award,
                  title: 'Strategic Solutions',
                  description: 'Custom software engineered to solve your unique business challenges',
                },
                {
                  icon: Zap,
                  title: 'Smart Business Cards',
                  description: 'Revolutionary NFC-enabled Vertex Cards for modern networking',
                },
                {
                  icon: Briefcase,
                  title: 'Enterprise Systems',
                  description: 'Scalable management systems for schools, restaurants, and beyond',
                },
              ].map((service, i) => {
                const Icon = service.icon;
                return (
                  <div key={i} className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{service.title}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
