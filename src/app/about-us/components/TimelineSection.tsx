'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
}

interface TimelineSectionProps {
  className?: string;
}

const TimelineSection = ({ className = '' }: TimelineSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const timelineEvents: TimelineEvent[] = [
    {
      year: '2017',
      title: 'The Dream Begins',
      description: 'After years in Philadelphia, our founder decided to bring authentic cheesesteak culture to Bangkok\'s vibrant food scene.',
      icon: 'LightBulbIcon'
    },
    {
      year: '2018',
      title: 'Recipe Perfection',
      description: 'Spent months perfecting recipes, sourcing ingredients, and building relationships with Philadelphia suppliers.',
      icon: 'BeakerIcon'
    },
    {
      year: '2019',
      title: 'Grand Opening',
      description: 'Opened our doors in Bangkok, introducing the neighborhood to authentic Philly cheesesteaks made with genuine care.',
      icon: 'HomeIcon'
    },
    {
      year: '2020',
      title: 'Community Growth',
      description: 'Despite challenges, our community rallied around us. We adapted and strengthened our local partnerships.',
      icon: 'UserGroupIcon'
    },
    {
      year: '2021',
      title: 'Recognition',
      description: 'Featured by local food bloggers and critics as Bangkok\'s most authentic American sandwich destination.',
      icon: 'StarIcon'
    },
    {
      year: '2026',
      title: 'Thriving Today',
      description: 'Proud to be a neighborhood favorite, serving thousands of satisfied customers and building lasting relationships.',
      icon: 'HeartIcon'
    }
  ];

  if (!isHydrated) {
    return (
      <section className={`py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-accent text-2xl text-accent">Our Journey</span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mt-4">
              From Concept to Community Favorite
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-accent text-2xl text-accent">Our Journey</span>
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-6">
            From Concept to Community Favorite
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every great restaurant has a story. Here's ours—a journey of passion, perseverance, and genuine love for authentic food culture.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary" />

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-card p-6 rounded-xl shadow-warm transition-smooth hover:shadow-warm-lg hover:-translate-y-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name={event.icon as any} size={24} variant="solid" className="text-primary" />
                        </div>
                        <span className="font-headline text-2xl font-bold text-accent">
                          {event.year}
                        </span>
                      </div>
                      <h3 className="font-headline text-xl font-bold text-foreground mb-3">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-warm z-10" />

                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;