'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

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

interface PhotoDetailModalProps {
  photo: Photo | null;
  onClose: () => void;
}

export default function PhotoDetailModal({ photo, onClose }: PhotoDetailModalProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    
    if (photo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [photo, isHydrated]);

  if (!isHydrated || !photo) {
    return null;
  }

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Photo by ${photo.author}`,
        text: photo.caption,
        url: window.location.href
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-card rounded-lg shadow-warm-lg overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0 h-full">
          {/* Image Section */}
          <div className="relative bg-background flex items-center justify-center p-4 lg:p-8">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-card/80 backdrop-blur-sm text-foreground hover:bg-card transition-smooth rounded-full shadow-warm"
              aria-label="Close modal"
            >
              <Icon name="XMarkIcon" size={24} variant="outline" />
            </button>
            <div className="relative w-full h-full max-h-[600px]">
              <AppImage
                src={photo.image}
                alt={photo.alt}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col h-full max-h-[90vh] lg:max-h-none overflow-y-auto">
            {/* Header */}
            <div className="border-b border-border px-6 py-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="UserCircleIcon" size={28} variant="solid" className="text-primary" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-foreground">{photo.author}</h3>
                  {photo.instagram && (
                    <p className="text-sm text-muted-foreground">@{photo.instagram}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="flex-1 px-6 py-6 space-y-4">
              <p className="text-foreground leading-relaxed">{photo.caption}</p>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span className="flex items-center space-x-1">
                  <Icon name="CalendarIcon" size={16} variant="outline" />
                  <span>{photo.date}</span>
                </span>
                <span className="flex items-center space-x-1 capitalize">
                  <Icon name="TagIcon" size={16} variant="outline" />
                  <span>{photo.category}</span>
                </span>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="font-headline font-semibold text-foreground mb-3">Share Your Experience</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Tag us with <span className="text-primary font-medium">#PhillyBangkok</span> to be featured!
                </p>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-smooth">
                    <Icon name="CameraIcon" size={18} variant="outline" />
                    <span className="text-sm font-medium">Instagram</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-smooth">
                    <Icon name="ChatBubbleLeftIcon" size={18} variant="outline" />
                    <span className="text-sm font-medium">Facebook</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="border-t border-border px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleLike}
                    className="flex items-center space-x-2 transition-smooth group"
                  >
                    <Icon
                      name="HeartIcon"
                      size={24}
                      variant={isLiked ? 'solid' : 'outline'}
                      className={isLiked ? 'text-error' : 'text-foreground group-hover:text-error'}
                    />
                    <span className="font-medium text-foreground">
                      {isLiked ? photo.likes + 1 : photo.likes}
                    </span>
                  </button>
                  <button
                    onClick={handleShare}
                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-smooth"
                  >
                    <Icon name="ShareIcon" size={24} variant="outline" />
                    <span className="font-medium">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}