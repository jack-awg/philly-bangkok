import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onVisitClick: () => void;
  onCallClick: () => void;
}

const HeroSection = ({ onVisitClick, onCallClick }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-background via-card to-background overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full">
                <Icon name="SparklesIcon" size={20} variant="solid" className="text-accent" />
                <span className="font-headline text-sm font-semibold text-accent">
                  Authentic Philadelphia Tradition
                </span>
              </div>
              
              <h1 className="font-headline text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                The Real Deal
                <span className="block text-primary mt-2">Philly Cheesesteaks</span>
                <span className="block text-secondary text-3xl lg:text-4xl mt-2">
                  in Bangkok
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Experience the authentic taste of Philadelphia's iconic sandwich, crafted with premium ribeye, melted cheese, and fresh-baked Amoroso rolls—right here in the heart of Bangkok.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onVisitClick}
                className="group flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-headline font-semibold text-lg transition-smooth hover:bg-primary/90 hover:shadow-warm-lg active:scale-95"
              >
                <Icon name="MapPinIcon" size={24} variant="solid" />
                <span>Visit Us Today</span>
                <Icon 
                  name="ArrowRightIcon" 
                  size={20} 
                  variant="outline" 
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              
              <button
                onClick={onCallClick}
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-headline font-semibold text-lg transition-smooth hover:bg-accent/90 hover:shadow-warm active:scale-95"
              >
                <Icon name="PhoneIcon" size={24} variant="solid" />
                <span>Call to Order</span>
              </button>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="ClockIcon" size={20} variant="outline" className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Open Daily</p>
                  <p className="font-headline font-semibold text-foreground">11:00 AM - 10:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Icon name="MapPinIcon" size={20} variant="outline" className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-headline font-semibold text-foreground">Sukhumvit Soi 23</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-warm-lg">
              <AppImage
                src="/assets/images/philly_cheesesteak-1769152170091.jpg"
                alt="Authentic Philly cheesesteak sandwich with melted cheese and grilled onions on fresh Amoroso roll"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-warm">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="StarIcon" size={20} variant="solid" className="text-accent" />
                  <span className="font-headline font-bold text-2xl text-foreground">4.8</span>
                </div>
                <p className="text-sm text-muted-foreground">500+ Reviews</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;