'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface PhotoSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: SubmissionData) => void;
}

interface SubmissionData {
  name: string;
  email: string;
  instagram: string;
  caption: string;
  hashtags: string;
}

export default function PhotoSubmissionModal({ isOpen, onClose, onSubmit }: PhotoSubmissionModalProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<SubmissionData>({
    name: '',
    email: '',
    instagram: '',
    caption: '',
    hashtags: '#PhillyBangkok'
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isHydrated]);

  if (!isHydrated) {
    return null;
  }

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      email: '',
      instagram: '',
      caption: '',
      hashtags: '#PhillyBangkok'
    });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-card rounded-lg shadow-warm-lg max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-headline font-bold text-foreground">Share Your Philly Bangkok Moment</h2>
          <button
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-muted"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} variant="outline" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="instagram" className="block text-sm font-medium text-foreground mb-2">
                Instagram Handle (Optional)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">@</span>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full pl-8 pr-4 py-3 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                  placeholder="yourusername"
                />
              </div>
            </div>

            <div>
              <label htmlFor="caption" className="block text-sm font-medium text-foreground mb-2">
                Photo Caption *
              </label>
              <textarea
                id="caption"
                name="caption"
                required
                value={formData.caption}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none"
                placeholder="Tell us about your experience..."
              />
            </div>

            <div>
              <label htmlFor="hashtags" className="block text-sm font-medium text-foreground mb-2">
                Hashtags
              </label>
              <input
                type="text"
                id="hashtags"
                name="hashtags"
                value={formData.hashtags}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                placeholder="#PhillyBangkok #Cheesesteak"
              />
            </div>

            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <div className="flex items-start space-x-2">
                <Icon name="InformationCircleIcon" size={20} variant="outline" className="text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  By submitting, you agree to let Philly Bangkok feature your photo on our website and social media channels with proper credit.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-3 pt-4 border-t border-border">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 text-foreground hover:text-primary transition-smooth font-headline font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-md font-headline font-semibold transition-smooth hover:bg-primary/90 hover:shadow-warm"
            >
              Submit Photo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}