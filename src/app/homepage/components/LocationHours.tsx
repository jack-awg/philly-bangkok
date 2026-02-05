'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface LocationHoursProps {
  onGetDirections: () => void;
}

const LocationHours = ({ onGetDirections }: LocationHoursProps) => {
  const [currentDay, setCurrentDay] = useState<number | null>(null);

  useEffect(() => {
    // Get current day (0 = Sunday, 1 = Monday, etc.)
    const today = new Date().getDay();
    setCurrentDay(today);
  }, []);

  const hours = [
    { day: 'Monday', time: '11:00 AM - 10:00 PM', dayIndex: 1 },
    { day: 'Tuesday', time: '11:00 AM - 10:00 PM', dayIndex: 2 },
    { day: 'Wednesday', time: '11:00 AM - 10:00 PM', dayIndex: 3 },
    { day: 'Thursday', time: '11:00 AM - 10:00 PM', dayIndex: 4 },
    { day: 'Friday', time: '11:00 AM - 11:00 PM', dayIndex: 5 },
    { day: 'Saturday', time: '11:00 AM - 11:00 PM', dayIndex: 6 },
    { day: 'Sunday', time: '11:00 AM - 10:00 PM', dayIndex: 0 },
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find us in the heart of Sukhumvit. Easy access by BTS, plenty of parking available.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map & Location Info */}
          <div className="space-y-6">
            <div className="bg-background rounded-xl overflow-hidden shadow-warm">
              <div className="h-80 relative">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Philly Bangkok Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=13.7563,100.5618&z=15&output=embed"
                  className="border-0"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPinIcon" size={24} variant="solid" className="text-primary mt-1" />
                  <div>
                    <h3 className="font-headline font-semibold text-lg text-foreground mb-1">
                      Address
                    </h3>
                    <p className="text-muted-foreground">
                      123 Sukhumvit Soi 23, Khlong Toei Nuea<br />
                      Watthana, Bangkok 10110, Thailand
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="BuildingOfficeIcon" size={24} variant="outline" className="text-primary mt-1" />
                  <div>
                    <h3 className="font-headline font-semibold text-lg text-foreground mb-1">
                      How to Find Us
                    </h3>
                    <p className="text-muted-foreground">
                      5-minute walk from BTS Asok Station (Exit 3)<br />
                      Street parking available on Soi 23
                    </p>
                  </div>
                </div>

                <button
                  onClick={onGetDirections}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-headline font-semibold transition-smooth hover:bg-primary/90 hover:shadow-warm active:scale-95"
                >
                  <Icon name="MapIcon" size={20} variant="solid" />
                  <span>Get Directions</span>
                </button>
              </div>
            </div>
          </div>

          {/* Hours & Contact */}
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-warm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline text-2xl font-bold text-foreground">
                  Opening Hours
                </h3>
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-success/10 rounded-full">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-success">Open Now</span>
                </div>
              </div>

              <div className="space-y-3">
                {hours.map((schedule) => {
                  const isToday = currentDay === schedule.dayIndex;
                  return (
                    <div
                      key={schedule.day}
                      suppressHydrationWarning
                      className={`flex items-center justify-between py-3 px-4 rounded-lg transition-smooth ${
                        isToday
                          ? 'bg-primary/10 border-l-4 border-primary' :'bg-muted/30'
                      }`}
                    >
                      <span className={`font-headline font-semibold ${
                        isToday ? 'text-primary' : 'text-foreground'
                      }`}>
                        {schedule.day}
                      </span>
                      <span className={`${
                        isToday ? 'text-primary font-semibold' : 'text-muted-foreground'
                      }`}>
                        {schedule.time}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-warm space-y-4">
              <h3 className="font-headline text-2xl font-bold text-foreground mb-4">
                Contact Us
              </h3>

              <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg">
                <Icon name="PhoneIcon" size={24} variant="solid" className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+6621234567"
                    className="font-headline font-semibold text-lg text-foreground hover:text-primary transition-smooth"
                  >
                    +66 2 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg">
                <Icon name="EnvelopeIcon" size={24} variant="outline" className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:hello@phillybangkok.com"
                    className="font-headline font-semibold text-lg text-foreground hover:text-primary transition-smooth"
                  >
                    hello@phillybangkok.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg">
                <Icon name="ChatBubbleLeftRightIcon" size={24} variant="outline" className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Social Media</p>
                  <div className="flex items-center space-x-3 mt-2">
                    <a
                      href="https://facebook.com/phillybangkok"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-smooth"
                      aria-label="Visit our Facebook page"
                    >
                      <Icon name="ShareIcon" size={20} variant="outline" />
                    </a>
                    <a
                      href="https://instagram.com/phillybangkok"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-smooth"
                      aria-label="Visit our Instagram page"
                    >
                      <Icon name="CameraIcon" size={20} variant="outline" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHours;