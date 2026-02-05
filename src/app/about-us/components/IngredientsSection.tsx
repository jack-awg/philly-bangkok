import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Ingredient {
  icon: string;
  title: string;
  description: string;
  source: string;
}

interface IngredientsSectionProps {
  className?: string;
}

const IngredientsSection = ({ className = '' }: IngredientsSectionProps) => {
  const ingredients: Ingredient[] = [
    {
      icon: 'FireIcon',
      title: 'Premium Ribeye',
      description: 'Hand-selected, thinly sliced ribeye steak grilled to perfection on our traditional flat-top griddle.',
      source: 'Sourced from certified suppliers in Thailand'
    },
    {
      icon: 'CakeIcon',
      title: 'Authentic Amoroso Rolls',
      description: 'The only bread worthy of a real Philly cheesesteak—imported directly from Philadelphia\'s legendary bakery.',
      source: 'Imported weekly from Amoroso\'s Bakery, Philadelphia'
    },
    {
      icon: 'SparklesIcon',
      title: 'Quality Cheese',
      description: 'Choose from traditional Cheez Whiz, provolone, or American cheese—each bringing its own authentic flavor.',
      source: 'Premium dairy products from trusted suppliers'
    },
    {
      icon: 'BeakerIcon',
      title: 'Fresh Vegetables',
      description: 'Crisp onions, peppers, and mushrooms sourced daily from local Bangkok markets for maximum freshness.',
      source: 'Daily deliveries from local Bangkok farmers'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <span className="font-accent text-2xl text-accent">Quality Ingredients</span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground">
              Authentic Taste Starts with Premium Ingredients
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe great food starts with great ingredients. That's why we carefully source each component of our cheesesteaks, combining imported Philadelphia essentials with fresh local Bangkok produce.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our commitment to quality means we never compromise. From the iconic Amoroso rolls flown in from Philadelphia to the fresh vegetables we pick up daily from local markets, every ingredient is chosen with care and respect for both traditions.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-warm-lg">
              <AppImage
                src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg"
                alt="Fresh ingredients for Philly cheesesteak including raw ribeye steak slices, sliced onions, bell peppers, and cheese on wooden cutting board"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-6 py-4 rounded-lg shadow-warm-lg">
              <p className="font-headline text-sm font-semibold">100% Quality</p>
              <p className="font-accent text-xl">Guaranteed</p>
            </div>
          </div>
        </div>

        {/* Ingredients Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-warm transition-smooth hover:shadow-warm-lg hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name={ingredient.icon as any} size={28} variant="solid" className="text-primary" />
              </div>
              <h3 className="font-headline text-lg font-bold text-foreground mb-2">
                {ingredient.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {ingredient.description}
              </p>
              <div className="flex items-start space-x-2 pt-3 border-t border-border">
                <Icon name="CheckBadgeIcon" size={16} variant="solid" className="text-success mt-0.5 flex-shrink-0" />
                <p className="text-xs text-success font-medium">
                  {ingredient.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;