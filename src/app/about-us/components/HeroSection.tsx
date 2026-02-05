import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary/5 via-background to-accent/5 ${className}`}>
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="font-accent text-2xl text-accent">Our Story</span>
            </div>
            <h1 className="font-headline text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              Bringing Philadelphia's Soul to Bangkok
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're not just serving sandwiches—we're sharing a piece of American food culture with our Bangkok neighbors. Every cheesesteak tells the story of Philadelphia's working-class heritage, made with genuine care and respect for both traditions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-3 bg-card px-6 py-3 rounded-lg shadow-warm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-headline text-2xl font-bold text-primary">5+</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Years of</p>
                  <p className="font-headline font-semibold text-foreground">Experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-card px-6 py-3 rounded-lg shadow-warm">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="font-headline text-2xl font-bold text-accent">100%</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Authentic</p>
                  <p className="font-headline font-semibold text-foreground">Recipes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-warm-lg">
              <AppImage
                src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg"
                alt="Chef preparing authentic Philly cheesesteak with grilled ribeye steak and melted cheese on griddle in professional kitchen"
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-8 py-6 rounded-xl shadow-warm-lg">
              <p className="font-accent text-3xl">Est. 2019</p>
              <p className="font-headline text-sm font-semibold">Bangkok</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;