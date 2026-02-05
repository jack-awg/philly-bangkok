import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface SeasonalBannerProps {
  className?: string;
}

const SeasonalBanner: React.FC<SeasonalBannerProps> = ({ className = '' }) => {
  const endDate = new Date('2026-02-28');
  const today = new Date('2026-01-23');
  const daysLeft = Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className={`bg-gradient-to-r from-accent via-primary to-accent/80 ${className}`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-accent-foreground/10 rounded-full flex items-center justify-center">
              <Icon name="SparklesIcon" size={24} variant="solid" className="text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold text-accent-foreground">
                Winter Seasonal Specials Available Now!
              </h3>
              <p className="text-sm text-accent-foreground/80">
                Limited time only • Featuring local Bangkok winter vegetables
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-center px-4 py-2 bg-accent-foreground/10 rounded-lg">
              <div className="font-headline text-2xl font-bold text-accent-foreground">
                {daysLeft}
              </div>
              <div className="text-xs text-accent-foreground/80">Days Left</div>
            </div>
            <Icon name="ClockIcon" size={32} variant="outline" className="text-accent-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalBanner;