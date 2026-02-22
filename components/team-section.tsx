'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Michael Coleman',
    role: 'Chief Executive Officer',
    bio: 'Visionary leader with 7+ years in enterprise software',
    image: '/hero/Single-image.jpeg',
  },
  {
    name: 'Samuel Chen',
    role: 'Chief Technology Officer',
    bio: 'Expert in cloud architecture and system design',
    image: '/team.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Director',
    bio: 'Focused on creating products that solve real problems',
    image: '/team.jpg',
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in-down">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            We Have An <span className="text-accent">Expert Team</span> To Serve You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate professionals dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <Card
              key={i}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 group animate-slide-in-up"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-accent to-accent/60">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-semibold mb-3 text-sm">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-6 text-sm">
                  {member.bio}
                </p>

                <div className="flex gap-3">
                  <button className="p-2 hover:bg-accent/10 rounded-lg transition-colors group/icon">
                    <Linkedin className="h-5 w-5 text-accent group-hover/icon:scale-110 transition-transform" />
                  </button>
                  <button className="p-2 hover:bg-accent/10 rounded-lg transition-colors group/icon">
                    <Twitter className="h-5 w-5 text-accent group-hover/icon:scale-110 transition-transform" />
                  </button>
                  <button className="p-2 hover:bg-accent/10 rounded-lg transition-colors group/icon">
                    <Mail className="h-5 w-5 text-accent group-hover/icon:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
