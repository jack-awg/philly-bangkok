import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface AtmosphereImage {
  id: number;
  image: string;
  alt: string;
  title: string;
}

const AtmosphereShowcase = () => {
  const atmosphereImages: AtmosphereImage[] = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg",
      alt: "Modern restaurant interior with warm lighting, wooden tables and comfortable seating",
      title: "Cozy Dining Space"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg",
      alt: "Professional chef preparing fresh cheesesteak on hot griddle in open kitchen",
      title: "Open Kitchen"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
      alt: "Group of friends laughing and enjoying food together at restaurant table",
      title: "Community Vibes"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg",
      alt: "Close-up of hands preparing fresh ingredients on wooden cutting board",
      title: "Fresh Ingredients"
    }
  ];

  const features = [
    {
      icon: "HomeModernIcon",
      title: "Comfortable Space",
      description: "Modern, air-conditioned dining area with authentic Philadelphia decor"
    },
    {
      icon: "UserGroupIcon",
      title: "Family Friendly",
      description: "Welcoming atmosphere perfect for families, friends, and solo diners"
    },
    {
      icon: "WifiIcon",
      title: "Free WiFi",
      description: "Stay connected while you enjoy your meal with complimentary high-speed internet"
    },
    {
      icon: "TruckIcon",
      title: "Takeaway Available",
      description: "Quick pickup service for those on the go—call ahead to order"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <Icon name="BuildingStorefrontIcon" size={20} variant="outline" className="text-secondary" />
            <span className="font-headline text-sm font-semibold text-secondary">
              Experience Philly Bangkok
            </span>
          </div>
          
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-foreground mb-4">
            More Than Just Food
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A welcoming neighborhood spot where authentic American comfort food meets Bangkok hospitality
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {atmosphereImages.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-smooth"
            >
              <div className="relative h-72 overflow-hidden">
                <AppImage
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-headline text-lg font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-warm hover:shadow-warm-lg transition-smooth"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon 
                  name={feature.icon as any} 
                  size={24} 
                  variant="outline" 
                  className="text-primary"
                />
              </div>
              
              <h3 className="font-headline text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtmosphereShowcase;