'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import PhotoSubmissionModal from './PhotoSubmissionModal';
import PhotoGalleryGrid from './PhotoGalleryGrid';
import PhotoDetailModal from './PhotoDetailModal';
import PartnershipShowcase from './PartnershipShowcase';
import EventCalendar from './EventCalendar';
import SocialFeed from './SocialFeed';

interface Photo {
  id: number;
  image: string;
  alt: string;
  author: string;
  instagram?: string;
  caption: string;
  likes: number;
  date: string;
  category: 'food' | 'atmosphere' | 'community' | 'events';
}

interface Partner {
  id: number;
  name: string;
  category: string;
  description: string;
  logo: string;
  alt: string;
  website?: string;
  collaboration: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'tasting' | 'community' | 'special' | 'partnership';
  spotsAvailable: number;
  totalSpots: number;
}

interface SocialPost {
  id: number;
  platform: 'instagram' | 'facebook';
  author: string;
  handle: string;
  avatar: string;
  avatarAlt: string;
  content: string;
  image?: string;
  imageAlt?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  hashtags: string[];
}

interface CommunityGalleryInteractiveProps {
  photos: Photo[];
  partners: Partner[];
  events: Event[];
  socialPosts: SocialPost[];
}

export default function CommunityGalleryInteractive({
  photos,
  partners,
  events,
  socialPosts
}: CommunityGalleryInteractiveProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="h-96 bg-muted rounded-lg animate-pulse" />
        </div>
      </div>
    );
  }

  const handlePhotoSubmit = (data: any) => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 5000);
  };

  const handleRSVP = (eventId: number) => {
    alert(`RSVP submitted for event ${eventId}! We'll send you a confirmation email shortly.`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full">
              <Icon name="SparklesIcon" size={20} variant="solid" className="text-primary" />
              <span className="text-sm font-headline font-semibold text-primary">Community Gallery</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-headline font-bold text-foreground">
              Our Philly Bangkok Family
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real moments, authentic experiences, and genuine connections—see how our community celebrates the love of great food together
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setIsSubmissionModalOpen(true)}
                className="flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-headline font-semibold text-lg transition-smooth hover:bg-primary/90 hover:shadow-warm-lg"
              >
                <Icon name="CameraIcon" size={24} variant="solid" />
                <span>Share Your Photo</span>
              </button>
              <a
                href="https://www.instagram.com/explore/tags/phillybangkok/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-8 py-4 bg-card text-foreground border-2 border-border rounded-lg font-headline font-semibold text-lg transition-smooth hover:border-primary hover:text-primary"
              >
                <Icon name="HashtagIcon" size={24} variant="outline" />
                <span>PhillyBangkok</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-24 right-4 z-50 bg-success text-success-foreground px-6 py-4 rounded-lg shadow-warm-lg flex items-center space-x-3 animate-slide-in">
          <Icon name="CheckCircleIcon" size={24} variant="solid" />
          <span className="font-medium">Thank you for sharing! We'll review your submission soon.</span>
        </div>
      )}

      {/* Photo Gallery */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <PhotoGalleryGrid
            photos={photos}
            onPhotoClick={setSelectedPhoto}
          />
        </div>
      </section>

      {/* Community Partners */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <PartnershipShowcase partners={partners} />
        </div>
      </section>

      {/* Events Calendar */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <EventCalendar events={events} onRSVP={handleRSVP} />
        </div>
      </section>

      {/* Social Feed */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <SocialFeed posts={socialPosts} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-accent to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-headline font-bold text-white">
              Join Our Community
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Share your Philly Bangkok moments, connect with fellow food lovers, and be part of our growing family
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setIsSubmissionModalOpen(true)}
                className="flex items-center space-x-2 px-8 py-4 bg-white text-primary rounded-lg font-headline font-semibold text-lg transition-smooth hover:bg-white/90 hover:shadow-warm-lg"
              >
                <Icon name="CameraIcon" size={24} variant="solid" />
                <span>Submit Your Photo</span>
              </button>
              <a
                href="/visit-contact"
                className="flex items-center space-x-2 px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-headline font-semibold text-lg transition-smooth hover:bg-white hover:text-primary"
              >
                <Icon name="MapPinIcon" size={24} variant="outline" />
                <span>Visit Us Today</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <PhotoSubmissionModal
        isOpen={isSubmissionModalOpen}
        onClose={() => setIsSubmissionModalOpen(false)}
        onSubmit={handlePhotoSubmit}
      />

      <PhotoDetailModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </div>
  );
}