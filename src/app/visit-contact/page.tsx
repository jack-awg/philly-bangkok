import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import LocationMap from './components/LocationMap';
import TransportInfo from './components/TransportInfo';
import ParkingInfo from './components/ParkingInfo';
import ContactMethods from './components/ContactMethods';
import DeliveryPartners from './components/DeliveryPartners';
import HoursInfo from './components/HoursInfo';
import AccessibilityInfo from './components/AccessibilityInfo';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Visit & Contact - Philly Bangkok',
  description: 'Find Philly Bangkok restaurant in the heart of Bangkok. Get directions, parking information, public transport options, opening hours, and multiple ways to contact us for reservations and takeaway orders.',
};

export default function VisitContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Icon name="MapPinIcon" size={20} variant="solid" className="text-primary" />
                <span className="font-body text-sm font-semibold text-primary">
                  Easy to Find & Reach
                </span>
              </div>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Visit Us in Bangkok
              </h1>
              <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Located in the heart of Sukhumvit, we're easy to reach by BTS, MRT, or car. Multiple contact options available for your convenience.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:+6621234567"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-headline font-semibold text-lg transition-smooth hover:bg-accent/90 hover:shadow-warm-lg active:scale-95"
                >
                  <Icon name="PhoneIcon" size={24} variant="solid" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://www.google.com/maps?q=13.7563,100.5018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-headline font-semibold text-lg transition-smooth hover:bg-primary/90 hover:shadow-warm-lg active:scale-95"
                >
                  <Icon name="MapIcon" size={24} variant="solid" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-card border-y border-border py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPinIcon" size={24} variant="solid" className="text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Address</p>
                  <p className="font-body text-base font-semibold text-foreground">123 Sukhumvit Road</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="ClockIcon" size={24} variant="solid" className="text-success" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Open Daily</p>
                  <p className="font-body text-base font-semibold text-foreground">11:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="PhoneIcon" size={24} variant="solid" className="text-accent-foreground" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Phone</p>
                  <p className="font-body text-base font-semibold text-foreground">+66-2-123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <LocationMap />
          </div>
        </section>

        {/* Transport & Parking */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
                Getting Here
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Multiple convenient options to reach our restaurant
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <TransportInfo />
              <ParkingInfo />
            </div>
          </div>
        </section>

        {/* Contact & Hours */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
                Contact & Hours
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Reach out to us or plan your visit
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ContactMethods />
              <HoursInfo />
            </div>
          </div>
        </section>

        {/* Delivery Partners */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
                Order Delivery
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Can't visit? We deliver through these trusted partners
              </p>
            </div>
            <DeliveryPartners />
          </div>
        </section>

        {/* Accessibility */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
                Accessibility Information
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to welcoming everyone
              </p>
            </div>
            <AccessibilityInfo />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Experience Authentic Philly Cheesesteaks?
              </h2>
              <p className="font-body text-lg text-primary-foreground/90 mb-8">
                Visit us today or place your order for delivery. We're excited to serve you!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:+6621234567"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-headline font-semibold text-lg transition-smooth hover:bg-accent/90 hover:shadow-warm-lg active:scale-95"
                >
                  <Icon name="PhoneIcon" size={24} variant="solid" />
                  <span>Call for Takeaway</span>
                </a>
                <a
                  href="https://www.google.com/maps?q=13.7563,100.5018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-primary-foreground text-primary rounded-lg font-headline font-semibold text-lg transition-smooth hover:bg-primary-foreground/90 hover:shadow-warm-lg active:scale-95"
                >
                  <Icon name="MapIcon" size={24} variant="solid" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-headline text-xl font-semibold text-foreground mb-4">
                  Philly Bangkok
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Authentic Philadelphia cheesesteaks in the heart of Bangkok. Made with passion, served with pride.
                </p>
              </div>
              <div>
                <h4 className="font-headline text-lg font-semibold text-foreground mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/homepage" className="font-body text-sm text-muted-foreground hover:text-primary transition-smooth">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/menu" className="font-body text-sm text-muted-foreground hover:text-primary transition-smooth">
                      Menu
                    </a>
                  </li>
                  <li>
                    <a href="/about-us" className="font-body text-sm text-muted-foreground hover:text-primary transition-smooth">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/community-gallery" className="font-body text-sm text-muted-foreground hover:text-primary transition-smooth">
                      Gallery
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-headline text-lg font-semibold text-foreground mb-4">
                  Contact Info
                </h4>
                <ul className="space-y-2">
                  <li className="font-body text-sm text-muted-foreground">
                    123 Sukhumvit Road, Bangkok
                  </li>
                  <li>
                    <a href="tel:+6621234567" className="font-body text-sm text-muted-foreground hover:text-primary transition-smooth">
                      +66-2-123-4567
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@phillybangkok.com" className="font-body text-sm text-muted-foreground hover:text-primary transition-smooth">
                      hello@phillybangkok.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border pt-8 text-center">
              <p className="font-body text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Philly Bangkok. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}