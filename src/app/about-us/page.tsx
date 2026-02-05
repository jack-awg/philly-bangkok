import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import TeamSection from './components/TeamSection';
import IngredientsSection from './components/IngredientsSection';
import TimelineSection from './components/TimelineSection';
import PartnersSection from './components/PartnersSection';
import ValuesSection from './components/ValuesSection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'About Us - Philly Bangkok',
  description: 'Discover the story behind Philly Bangkok—authentic American comfort food brought to Bangkok with genuine care. Learn about our team, quality ingredients, Philadelphia connection, and community involvement.',
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <TeamSection />
        <IngredientsSection />
        <TimelineSection />
        <PartnersSection />
        <ValuesSection />
      </main>
      <Footer />
    </div>
  );
}