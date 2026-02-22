import HeroSection from '@/components/hero-section';
import BenefitsSection from '@/components/benefits-section';
import ServicesSection from '@/components/services-section';
import ProcessSection from '@/components/process-section';
import PortfolioSection from '@/components/portfolio-section';
import ResultsSection from '@/components/results-section';
import PartnersSection from '@/components/partners-section';
import StatsCTASection from '@/components/stats-cta-section';
import TeamSection from '@/components/team-section';
import TestimonialsSection from '@/components/testimonials-section';
import BlogSection from '@/components/blog-section';
import NewsletterSection from '@/components/newsletter-section';
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header/>
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <ResultsSection />
      <PartnersSection />
      <StatsCTASection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
