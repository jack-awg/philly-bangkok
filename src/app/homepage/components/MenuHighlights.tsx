import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
  badge?: string;
  popular?: boolean;
}

interface MenuHighlightsProps {
  onViewMenu: () => void;
}

const MenuHighlights = ({ onViewMenu }: MenuHighlightsProps) => {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Classic Philly Cheesesteak",
      description: "Thinly sliced ribeye, melted American cheese, grilled onions on authentic Amoroso roll",
      price: "฿320",
      image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
      alt: "Classic Philly cheesesteak with melted American cheese and caramelized onions on fresh roll",
      badge: "Signature",
      popular: true
    },
    {
      id: 2,
      name: "Whiz Wit",
      description: "The Philadelphia original—ribeye with Cheez Whiz and grilled onions",
      price: "฿340",
      image: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg",
      alt: "Traditional Whiz Wit cheesesteak with cheese whiz sauce and grilled onions",
      badge: "Traditional",
      popular: true
    },
    {
      id: 3,
      name: "Mushroom Provolone",
      description: "Premium ribeye, sautéed mushrooms, melted provolone, garlic aioli",
      price: "฿360",
      image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg",
      alt: "Gourmet mushroom provolone cheesesteak with sauteed mushrooms and melted cheese",
      badge: "Premium"
    },
    {
      id: 4,
      name: "Chicken Cheesesteak",
      description: "Grilled chicken breast, American cheese, peppers, onions",
      price: "฿280",
      image: "https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg",
      alt: "Chicken cheesesteak sandwich with grilled chicken, peppers and melted cheese"
    },
    {
      id: 5,
      name: "Loaded Cheese Fries",
      description: "Crispy fries topped with cheese sauce, bacon bits, jalapeños",
      price: "฿180",
      image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg",
      alt: "Golden crispy french fries loaded with melted cheese sauce and bacon bits"
    },
    {
      id: 6,
      name: "Philly Combo",
      description: "Any cheesesteak + fries + fountain drink",
      price: "฿420",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
      alt: "Complete meal combo with cheesesteak sandwich, golden fries and soft drink",
      badge: "Best Value"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="FireIcon" size={20} variant="solid" className="text-primary" />
            <span className="font-headline text-sm font-semibold text-primary">
              Customer Favorites
            </span>
          </div>
          
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Menu Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Authentic Philadelphia recipes made fresh daily with premium ingredients
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="group bg-card rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-smooth"
            >
              <div className="relative h-64 overflow-hidden">
                <AppImage
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {item.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-accent text-accent-foreground rounded-full font-headline text-sm font-semibold shadow-warm">
                    {item.badge}
                  </div>
                )}
                
                {item.popular && (
                  <div className="absolute top-4 right-4 flex items-center space-x-1 px-3 py-1.5 bg-background/95 backdrop-blur-sm rounded-full shadow-warm">
                    <Icon name="FireIcon" size={16} variant="solid" className="text-primary" />
                    <span className="text-sm font-semibold text-primary">Popular</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-headline text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {item.name}
                  </h3>
                  <span className="font-headline text-xl font-bold text-primary whitespace-nowrap ml-2">
                    {item.price}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onViewMenu}
            className="group inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-headline font-semibold text-lg transition-smooth hover:bg-primary/90 hover:shadow-warm-lg active:scale-95"
          >
            <span>View Full Menu</span>
            <Icon 
              name="ArrowRightIcon" 
              size={20} 
              variant="outline" 
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;