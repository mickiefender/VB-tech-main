'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 text-white text-center animate-slide-in-up shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Mail className="h-8 w-8 text-white" />
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Join Our <span className="text-accent">Newsletter</span>
          </h2>

          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Stay updated with the latest news, insights, and updates from Vertex Blueprint. Subscribe today and never miss an opportunity.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent rounded-lg h-12 focus:ring-accent"
            />
            <Button
              type="submit"
              className="bg-accent hover:bg-accent/90 text-white rounded-lg h-12 px-8 whitespace-nowrap font-semibold"
            >
              Subscribe
            </Button>
          </form>

          {submitted && (
            <div className="mt-4 text-accent animate-slide-in-down">
              ✓ Thank you! Check your email for confirmation.
            </div>
          )}

          <p className="text-white/60 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
