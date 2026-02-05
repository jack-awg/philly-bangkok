'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface DaySchedule {
  day: string;
  hours: string;
  isToday: boolean;
  isOpen: boolean;
}

interface HoursInfoProps {
  className?: string;
}

const HoursInfo = ({ className = '' }: HoursInfoProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [isCurrentlyOpen, setIsCurrentlyOpen] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      setCurrentTime(timeString);
      
      const isOpen = hours >= 11 && hours < 22;
      setIsCurrentlyOpen(isOpen);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  const schedule: DaySchedule[] = [
    { day: 'Monday', hours: '11:00 AM - 10:00 PM', isToday: false, isOpen: true },
    { day: 'Tuesday', hours: '11:00 AM - 10:00 PM', isToday: false, isOpen: true },
    { day: 'Wednesday', hours: '11:00 AM - 10:00 PM', isToday: false, isOpen: true },
    { day: 'Thursday', hours: '11:00 AM - 10:00 PM', isToday: false, isOpen: true },
    { day: 'Friday', hours: '11:00 AM - 11:00 PM', isToday: false, isOpen: true },
    { day: 'Saturday', hours: '11:00 AM - 11:00 PM', isToday: false, isOpen: true },
    { day: 'Sunday', hours: '11:00 AM - 10:00 PM', isToday: false, isOpen: true }
  ];

  if (!isHydrated) {
    return (
      <div className={`bg-card rounded-lg shadow-warm p-6 ${className}`}>
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon name="ClockIcon" size={24} variant="solid" className="text-primary" />
          </div>
          <div>
            <h3 className="font-headline text-2xl font-semibold text-foreground">
              Opening Hours
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              We're here to serve you
            </p>
          </div>
        </div>
        <div className="animate-pulse space-y-3">
          <div className="h-12 bg-muted rounded"></div>
          <div className="h-12 bg-muted rounded"></div>
          <div className="h-12 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  const todayIndex = new Date().getDay();
  const adjustedIndex = todayIndex === 0 ? 6 : todayIndex - 1;
  const updatedSchedule = schedule.map((day, index) => ({
    ...day,
    isToday: index === adjustedIndex
  }));

  return (
    <div className={`bg-card rounded-lg shadow-warm p-6 ${className}`}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon name="ClockIcon" size={24} variant="solid" className="text-primary" />
        </div>
        <div>
          <h3 className="font-headline text-2xl font-semibold text-foreground">
            Opening Hours
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            We're here to serve you
          </p>
        </div>
      </div>

      <div className={`p-4 rounded-lg mb-6 ${isCurrentlyOpen ? 'bg-success/10 border border-success/20' : 'bg-error/10 border border-error/20'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${isCurrentlyOpen ? 'bg-success' : 'bg-error'} animate-pulse`}></div>
            <div>
              <p className={`font-headline text-lg font-semibold ${isCurrentlyOpen ? 'text-success' : 'text-error'}`}>
                {isCurrentlyOpen ? 'Open Now' : 'Closed Now'}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Current time: {currentTime}
              </p>
            </div>
          </div>
          {isCurrentlyOpen && (
            <div className="text-right">
              <p className="font-body text-sm text-muted-foreground">Closes at</p>
              <p className="font-headline text-base font-semibold text-foreground">10:00 PM</p>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-2">
        {updatedSchedule.map((day, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-3 rounded-lg transition-smooth ${
              day.isToday
                ? 'bg-primary/10 border border-primary/20' :'bg-background border border-border'
            }`}
          >
            <div className="flex items-center space-x-3">
              {day.isToday && (
                <Icon name="CalendarIcon" size={18} variant="solid" className="text-primary" />
              )}
              <span className={`font-body text-base ${day.isToday ? 'font-semibold text-primary' : 'text-foreground'}`}>
                {day.day}
                {day.isToday && <span className="ml-2 text-xs">(Today)</span>}
              </span>
            </div>
            <span className={`font-body text-base ${day.isToday ? 'font-semibold text-primary' : 'text-muted-foreground'}`}>
              {day.hours}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-warning/10 rounded-lg border border-warning/20">
        <div className="flex items-start space-x-3">
          <Icon name="ExclamationTriangleIcon" size={20} variant="solid" className="text-warning-foreground mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-body text-sm text-foreground">
              <strong>Holiday Hours:</strong> We may have special hours during public holidays. Please call ahead or check our social media for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoursInfo;