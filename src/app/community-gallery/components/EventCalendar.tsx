'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

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

interface EventCalendarProps {
  events: Event[];
  onRSVP: (eventId: number) => void;
}

export default function EventCalendar({ events, onRSVP }: EventCalendarProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-48 bg-muted rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  const categories = [
    { id: 'all', label: 'All Events', icon: 'CalendarDaysIcon' },
    { id: 'tasting', label: 'Tastings', icon: 'CakeIcon' },
    { id: 'community', label: 'Community', icon: 'UserGroupIcon' },
    { id: 'special', label: 'Special Events', icon: 'SparklesIcon' },
    { id: 'partnership', label: 'Partnerships', icon: 'HandshakeIcon' }
  ];

  const filteredEvents = selectedCategory === 'all'
    ? events
    : events.filter(event => event.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      tasting: 'bg-accent/10 text-accent border-accent/20',
      community: 'bg-primary/10 text-primary border-primary/20',
      special: 'bg-secondary/10 text-secondary border-secondary/20',
      partnership: 'bg-success/10 text-success border-success/20'
    };
    return colors[category as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  return (
    <div className="space-y-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
          Upcoming Events
        </h2>
        <p className="text-lg text-muted-foreground">
          Join us for special tastings, community gatherings, and neighborhood celebrations
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full font-headline font-semibold whitespace-nowrap transition-smooth ${
              selectedCategory === category.id
                ? 'bg-primary text-primary-foreground shadow-warm'
                : 'bg-card text-foreground hover:bg-muted'
            }`}
          >
            <Icon name={category.icon as any} size={18} variant={selectedCategory === category.id ? 'solid' : 'outline'} />
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-card rounded-lg border border-border overflow-hidden transition-smooth hover:shadow-warm-lg"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border capitalize ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                    {event.spotsAvailable <= 5 && event.spotsAvailable > 0 && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-warning/10 text-warning border border-warning/20">
                        Only {event.spotsAvailable} spots left
                      </span>
                    )}
                    {event.spotsAvailable === 0 && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-error/10 text-error border border-error/20">
                        Fully Booked
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-headline font-bold text-foreground">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <button
                  onClick={() => onRSVP(event.id)}
                  disabled={event.spotsAvailable === 0}
                  className={`px-6 py-3 rounded-md font-headline font-semibold transition-smooth whitespace-nowrap ${
                    event.spotsAvailable === 0
                      ? 'bg-muted text-muted-foreground cursor-not-allowed'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-warm'
                  }`}
                >
                  {event.spotsAvailable === 0 ? 'Fully Booked' : 'RSVP Now'}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-foreground">
                  <Icon name="CalendarIcon" size={20} variant="outline" className="text-primary" />
                  <span className="text-sm font-medium">{event.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-foreground">
                  <Icon name="ClockIcon" size={20} variant="outline" className="text-primary" />
                  <span className="text-sm font-medium">{event.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-foreground">
                  <Icon name="MapPinIcon" size={20} variant="outline" className="text-primary" />
                  <span className="text-sm font-medium">{event.location}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2">
                  <Icon name="UserGroupIcon" size={20} variant="outline" className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {event.spotsAvailable} of {event.totalSpots} spots available
                  </span>
                </div>
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${((event.totalSpots - event.spotsAvailable) / event.totalSpots) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-16">
          <Icon name="CalendarDaysIcon" size={48} variant="outline" className="text-muted-foreground mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">No upcoming events in this category</p>
          <p className="text-sm text-muted-foreground mt-2">Check back soon for new events!</p>
        </div>
      )}
    </div>
  );
}