import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Partner {
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  partnership: string;
}

interface PartnersSectionProps {
  className?: string;
}

const PartnersSection = ({ className = '' }: PartnersSectionProps) => {
  const partners: Partner[] = [
    {
      name: 'Amoroso\'s Bakery',
      category: 'Bread Supplier',
      description: 'Philadelphia\'s legendary bakery providing authentic hoagie rolls since 1904.',
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
      alt: 'Fresh artisan bread loaves and rolls displayed on wooden shelves in traditional bakery with warm lighting',
      partnership: 'Weekly imports of authentic Philly rolls'
    },
    {
      name: 'Bangkok Fresh Market',
      category: 'Local Produce',
      description: 'Daily deliveries of crisp vegetables and fresh ingredients from local Bangkok farmers.',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg',
      alt: 'Colorful display of fresh vegetables including bell peppers, onions, and mushrooms at local farmers market',
      partnership: 'Daily fresh produce deliveries'
    },
    {
      name: 'Premium Meat Co.',
      category: 'Meat Supplier',
      description: 'Certified supplier providing premium quality ribeye and beef products.',
      image: 'https://images.pexels.com/photos/3688/food-dinner-lunch-unhealthy.jpg',
      alt: 'Premium raw ribeye steak cuts with marbling displayed on butcher paper in professional meat counter',
      partnership: 'Exclusive quality beef supply'
    },
    {
      name: 'Thai Dairy Excellence',
      category: 'Dairy Products',
      description: 'High-quality cheese and dairy products meeting international standards.',
      image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg',
      alt: 'Assorted cheese varieties including cheddar and provolone arranged on wooden cheese board with herbs',
      partnership: 'Premium cheese selection'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-accent text-2xl text-accent">Our Partners</span>
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-6">
            Quality Through Trusted Partnerships
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We work with the best suppliers—from Philadelphia's legendary bakeries to Bangkok's finest local markets—to ensure every ingredient meets our exacting standards.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-background rounded-xl overflow-hidden shadow-warm transition-smooth hover:shadow-warm-lg hover:-translate-y-1"
            >
              <div className="grid sm:grid-cols-5 gap-6">
                {/* Image */}
                <div className="sm:col-span-2 relative aspect-[4/3] sm:aspect-auto overflow-hidden">
                  <AppImage
                    src={partner.image}
                    alt={partner.alt}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="sm:col-span-3 p-6 sm:py-6 sm:pr-6 sm:pl-0">
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon name="BuildingStorefrontIcon" size={20} variant="solid" className="text-primary" />
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {partner.category}
                    </span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-foreground mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {partner.description}
                  </p>
                  <div className="flex items-center space-x-2 pt-3 border-t border-border">
                    <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-success" />
                    <span className="text-sm text-success font-medium">
                      {partner.partnership}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Values */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-background rounded-xl shadow-warm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="ShieldCheckIcon" size={32} variant="solid" className="text-primary" />
            </div>
            <h4 className="font-headline text-lg font-bold text-foreground mb-2">
              Quality Certified
            </h4>
            <p className="text-sm text-muted-foreground">
              All partners meet international quality and safety standards
            </p>
          </div>
          <div className="text-center p-6 bg-background rounded-xl shadow-warm">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="HandRaisedIcon" size={32} variant="solid" className="text-accent" />
            </div>
            <h4 className="font-headline text-lg font-bold text-foreground mb-2">
              Ethical Sourcing
            </h4>
            <p className="text-sm text-muted-foreground">
              Supporting local communities and sustainable practices
            </p>
          </div>
          <div className="text-center p-6 bg-background rounded-xl shadow-warm">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="TruckIcon" size={32} variant="solid" className="text-success" />
            </div>
            <h4 className="font-headline text-lg font-bold text-foreground mb-2">
              Fresh Daily
            </h4>
            <p className="text-sm text-muted-foreground">
              Regular deliveries ensure maximum freshness and quality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;