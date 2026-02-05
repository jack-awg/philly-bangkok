'use client';

import { useRouter } from 'next/navigation';
import HeroSection from './HeroSection';
import LocationHours from './LocationHours';
import MenuHighlights from './MenuHighlights';
import AtmosphereShowcase from './AtmosphereShowcase';
import CustomerTestimonials from './CustomerTestimonials';
import NewsletterSignup from './NewsletterSignup';
import Footer from './Footer';

const HomepageInteractive = () => {
  const router = useRouter();

  const handleVisitClick = () => {
    router?.push('/visit-contact');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+6621234567';
  };

  const handleViewMenu = () => {
    router?.push('/menu');
  };

  const handleGetDirections = () => {
    window.open('https://www.google.com/maps?q=13.7563,100.5618', '_blank');
  };

  return (
    <>
      <HeroSection onVisitClick={handleVisitClick} onCallClick={handleCallClick} />
      <MenuHighlights onViewMenu={handleViewMenu} />
      <AtmosphereShowcase />
      <LocationHours onGetDirections={handleGetDirections} />
      <CustomerTestimonials />
      <NewsletterSignup />
      <Footer />
    </>
  );
};

export default HomepageInteractive;