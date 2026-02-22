import { Metadata } from 'next';
import Link from 'next/link';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services-data';
import { ServiceGallery } from '@/components/service-gallery';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Exhibition`,
    description: service.longDescription,
    openGraph: {
      title: service.title,
      description: service.longDescription,
      images: [service.image],
    },
  };
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/#services">
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            {service.longDescription}
          </p>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <ServiceGallery
            media={service.media || service.gallery.map(img => ({ type: 'image' as const, src: img }))}
            serviceTitle={service.title}
          />
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">
              Key Features
            </h2>
            <ul className="space-y-4">
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 mt-1 p-1 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                    <Check className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-gray-700 text-lg font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-700 mb-6">
              Transform your business with our {service.title} solution. Contact our team today to learn how we can help.
            </p>
            <Link href="/#contact">
              <Button className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                Contact Us Today →
              </Button>
            </Link>
          </div>
        </div>

        {/* Related Services */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Other Services
          </h2>
          <p className="text-gray-600 mb-6">
            Explore our other solutions designed to drive your business forward.
          </p>
          <Link href="/#services">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
              View All Services
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
