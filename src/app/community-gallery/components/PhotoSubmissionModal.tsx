'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface PhotoSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: SubmissionData) => void;
}

export interface SubmissionData {
  name: string;
  email: string;
  instagram: string;
  caption: string;
  hashtags: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INSTAGRAM_REGEX = /^[a-zA-Z0-9._]*$/;
const MAX_NAME_LENGTH = 100;
const MAX_CAPTION_LENGTH = 500;
const MAX_HASHTAGS_LENGTH = 200;

function sanitizeText(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove angle brackets to prevent HTML injection
    .trim();
}

function validateSubmissionData(data: SubmissionData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length === 0) {
    errors.push('Name is required');
  } else if (data.name.length > MAX_NAME_LENGTH) {
    errors.push(`Name must be less than ${MAX_NAME_LENGTH} characters`);
  }

  if (!data.email || !EMAIL_REGEX.test(data.email)) {
    errors.push('Valid email is required');
  }

  if (data.instagram && !INSTAGRAM_REGEX.test(data.instagram)) {
    errors.push('Instagram handle can only contain letters, numbers, periods, and underscores');
  }

  if (!data.caption || data.caption.trim().length === 0) {
    errors.push('Caption is required');
  } else if (data.caption.length > MAX_CAPTION_LENGTH) {
    errors.push(`Caption must be less than ${MAX_CAPTION_LENGTH} characters`);
  }

  if (data.hashtags.length > MAX_HASHTAGS_LENGTH) {
    errors.push(`Hashtags must be less than ${MAX_HASHTAGS_LENGTH} characters`);
  }

  return { valid: errors.length === 0, errors };
}

export default function PhotoSubmissionModal({ isOpen, onClose, onSubmit }: PhotoSubmissionModalProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
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

    const sanitizedData: SubmissionData = {
      name: sanitizeText(formData.name),
      email: formData.email.trim().toLowerCase(),
      instagram: sanitizeText(formData.instagram).replace(/^@/, ''),
      caption: sanitizeText(formData.caption),
      hashtags: sanitizeText(formData.hashtags),
    };

    const { valid, errors } = validateSubmissionData(sanitizedData);

    if (!valid) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors([]);
    onSubmit(sanitizedData);
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
          {validationErrors.length > 0 && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-md p-4">
              <ul className="list-disc list-inside text-sm text-destructive space-y-1">
                {validationErrors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
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