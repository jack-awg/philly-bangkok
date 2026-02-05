'use client';

import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface DeliveryPartner {
  id: string;
  name: string;
  logo: string;
  alt: string;
  deliveryTime: string;
  minOrder: string;
  deliveryFee: string;
  rating: number;
  orderUrl: string;
  features: string[];
}

interface DeliveryPartnersProps {
  className?: string;
}

const DeliveryPartners = ({ className = '' }: DeliveryPartnersProps) => {
  const deliveryPartners: DeliveryPartner[] = [
    {
      id: '1',
      name: 'Grab Food',
      logo: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400',
      alt: 'Green Grab Food delivery app logo with motorcycle icon',
      deliveryTime: '25-35 min',
      minOrder: '฿100',
      deliveryFee: '฿25-45',
      rating: 4.8,
      orderUrl: 'https://food.grab.com/th/en/restaurant/philly-bangkok',
      features: ['Real-time tracking', 'Multiple payment options', 'Promo codes available']
    },
    {
      id: '2',
      name: 'Foodpanda',
      logo: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
      alt: 'Pink Foodpanda delivery app logo with panda mascot',
      deliveryTime: '30-40 min',
      minOrder: '฿150',
      deliveryFee: '฿20-40',
      rating: 4.7,
      orderUrl: 'https://www.foodpanda.co.th/restaurant/philly-bangkok',
      features: ['Scheduled delivery', 'Contactless delivery', 'Loyalty rewards']
    },
    {
      id: '3',
      name: 'LINE MAN',
      logo: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400',
      alt: 'Green LINE MAN delivery service logo with messenger icon',
      deliveryTime: '20-30 min',
      minOrder: '฿120',
      deliveryFee: '฿30-50',
      rating: 4.9,
      orderUrl: 'https://lineman.line.me/philly-bangkok',
      features: ['Fast delivery', 'LINE Pay integration', 'Live chat support']
    }
  ];

  const handleOrderClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className={`bg-card rounded-lg shadow-warm p-6 ${className}`}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon name="TruckIcon" size={24} variant="solid" className="text-primary" />
        </div>
        <div>
          <h3 className="font-headline text-2xl font-semibold text-foreground">
            Delivery Partners
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            Order from your favorite platform
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {deliveryPartners.map((partner) => (
          <div
            key={partner.id}
            className="p-4 rounded-lg bg-background border border-border hover:border-primary/30 transition-smooth"
          >
            <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden bg-muted">
              <AppImage
                src={partner.logo}
                alt={partner.alt}
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="font-headline text-xl font-semibold text-foreground mb-2">
              {partner.name}
            </h4>

            <div className="flex items-center space-x-1 mb-3">
              <Icon name="StarIcon" size={16} variant="solid" className="text-warning" />
              <span className="font-body text-sm font-semibold text-foreground">
                {partner.rating}
              </span>
              <span className="font-body text-sm text-muted-foreground">
                / 5.0
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between">
                <span className="font-body text-sm text-muted-foreground">Delivery Time:</span>
                <span className="font-body text-sm font-semibold text-foreground">{partner.deliveryTime}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-body text-sm text-muted-foreground">Min Order:</span>
                <span className="font-body text-sm font-semibold text-foreground">{partner.minOrder}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-body text-sm text-muted-foreground">Delivery Fee:</span>
                <span className="font-body text-sm font-semibold text-foreground">{partner.deliveryFee}</span>
              </div>
            </div>

            <div className="space-y-1 mb-4">
              {partner.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="CheckCircleIcon" size={14} variant="solid" className="text-success flex-shrink-0" />
                  <span className="font-body text-xs text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleOrderClick(partner.orderUrl)}
              className="w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-md font-body font-semibold transition-smooth hover:bg-primary/90 active:scale-95"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
        <div className="flex items-start space-x-3">
          <Icon name="SparklesIcon" size={20} variant="solid" className="text-accent-foreground mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-body text-sm text-foreground">
              <strong>Special Offer:</strong> Use code <span className="font-semibold text-primary">PHILLY50</span> for ฿50 off your first delivery order on any platform!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPartners;