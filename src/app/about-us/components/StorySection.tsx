import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface StoryPoint {
  icon: string;
  title: string;
  description: string;
}

interface StorySectionProps {
  className?: string;
}

const StorySection = ({ className = '' }: StorySectionProps) => {
  const storyPoints: StoryPoint[] = [
    {
      icon: 'HeartIcon',
      title: 'Born from Passion',
      description: 'Our founder fell in love with authentic Philly cheesesteaks during years living in Philadelphia, learning the craft from local sandwich makers who perfected their recipes over generations.'
    },
    {
      icon: 'HomeIcon',
      title: 'Bangkok Roots',
      description: 'We chose Bangkok because this city appreciates quality food and authentic experiences. Our neighborhood welcomed us, and we became part of the local community, not just another restaurant.'
    },
    {
      icon: 'SparklesIcon',
      title: 'Quality First',
      description: 'We source premium ingredients locally and import key items from trusted suppliers. Every cheesesteak is made to order using traditional techniques—no shortcuts, no compromises.'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-6">
            From Philadelphia Streets to Bangkok Neighborhoods
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our journey started with a simple mission: bring the authentic taste of Philadelphia's iconic sandwich to Bangkok's vibrant food scene. We're not trying to be the biggest—we're focused on being the place people genuinely want to return to.
          </p>
        </div>

        {/* Story Points Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {storyPoints.map((point, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-warm transition-smooth hover:shadow-warm-lg hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name={point.icon as any} size={32} variant="solid" className="text-primary" />
              </div>
              <h3 className="font-headline text-xl font-bold text-foreground mb-4">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-warm">
            <AppImage
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
              alt="Interior view of Philly Bangkok restaurant showing warm wooden tables, exposed brick walls, and vintage Philadelphia sports memorabilia"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-warm">
            <AppImage
              src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg"
              alt="Close-up of hands preparing fresh ingredients including sliced ribeye steak, chopped onions, and bell peppers on wooden cutting board"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;