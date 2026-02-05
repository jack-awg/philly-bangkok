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

interface PhotoGalleryGridProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

export default function PhotoGalleryGrid({ photos, onPhotoClick }: PhotoGalleryGridProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="aspect-square bg-muted rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  const filters = [
    { id: 'all', label: 'All Photos', icon: 'PhotoIcon' },
    { id: 'food', label: 'Food', icon: 'CakeIcon' },
    { id: 'atmosphere', label: 'Atmosphere', icon: 'SparklesIcon' },
    { id: 'community', label: 'Community', icon: 'UserGroupIcon' },
    { id: 'events', label: 'Events', icon: 'CalendarIcon' }
  ];

  const filteredPhotos = activeFilter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeFilter);

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full font-headline font-semibold whitespace-nowrap transition-smooth ${
              activeFilter === filter.id
                ? 'bg-primary text-primary-foreground shadow-warm'
                : 'bg-card text-foreground hover:bg-muted'
            }`}
          >
            <Icon name={filter.icon as any} size={18} variant={activeFilter === filter.id ? 'solid' : 'outline'} />
            <span>{filter.label}</span>
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => onPhotoClick(photo)}
            className="group relative aspect-square bg-card rounded-lg overflow-hidden cursor-pointer transition-smooth hover:shadow-warm-lg"
          >
            <AppImage
              src={photo.image}
              alt={photo.alt}
              className="w-full h-full object-cover transition-smooth group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
              <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="UserCircleIcon" size={20} variant="solid" className="text-primary" />
                  <span className="text-sm font-medium text-primary-foreground">
                    {photo.instagram ? `@${photo.instagram}` : photo.author}
                  </span>
                </div>
                <p className="text-sm text-primary-foreground line-clamp-2">{photo.caption}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-accent">
                    <Icon name="HeartIcon" size={16} variant="solid" />
                    <span className="text-sm font-medium">{photo.likes}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{photo.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPhotos.length === 0 && (
        <div className="text-center py-16">
          <Icon name="PhotoIcon" size={48} variant="outline" className="text-muted-foreground mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">No photos found in this category</p>
        </div>
      )}
    </div>
  );
}