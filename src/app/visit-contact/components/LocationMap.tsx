'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface LocationMapProps {
  className?: string;
}

const LocationMap = ({ className = '' }: LocationMapProps) => {
  const [mapView, setMapView] = useState<'map' | 'street'>('map');
  
  const restaurantLat = 13.7563;
  const restaurantLng = 100.5018;
  
  const mapEmbedUrl = `https://www.google.com/maps?q=${restaurantLat},${restaurantLng}&z=16&output=embed`;
  const streetViewUrl = `https://www.google.com/maps/embed?pb=!4v1706000000000!6m8!1m7!1s${restaurantLat},${restaurantLng}!2m2!1d${restaurantLat}!2d${restaurantLng}!3f0!4f0!5f0.7820865974627469`;

  return (
    <div className={`bg-card rounded-lg overflow-hidden shadow-warm ${className}`}>
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h3 className="font-headline text-xl font-semibold text-foreground">
          Find Us on the Map
        </h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setMapView('map')}
            className={`px-4 py-2 rounded-md font-body text-sm transition-smooth ${
              mapView === 'map' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Map View
          </button>
          <button
            onClick={() => setMapView('street')}
            className={`px-4 py-2 rounded-md font-body text-sm transition-smooth ${
              mapView === 'street' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Street View
          </button>
        </div>
      </div>
      
      <div className="relative w-full h-96 md:h-[500px]">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Philly Bangkok Restaurant Location"
          referrerPolicy="no-referrer-when-downgrade"
          src={mapView === 'map' ? mapEmbedUrl : streetViewUrl}
          className="border-0"
        />
      </div>
      
      <div className="p-4 bg-muted/30">
        <div className="flex items-start space-x-3">
          <Icon name="MapPinIcon" size={20} variant="solid" className="text-primary mt-1 flex-shrink-0" />
          <div>
            <p className="font-body text-base text-foreground">
              123 Sukhumvit Road, Khlong Toei Nuea
            </p>
            <p className="font-body text-sm text-muted-foreground mt-1">
              Watthana, Bangkok 10110, Thailand
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;