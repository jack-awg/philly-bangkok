import React from 'react';

interface MenuHeroProps {
  className?: string;
}

const MenuHero: React.FC<MenuHeroProps> = ({ className = '' }) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/20 rounded-full">
            <span className="font-accent text-lg text-accent-foreground">
              Authentic Philadelphia Flavors
            </span>
          </div>
          
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Menu
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every cheesesteak tells the story of Philadelphia's working-class food heritage. Made with quality ingredients, traditional techniques, and genuine care—right here in Bangkok.
          </p>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span>Vegetarian Options</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-warning rounded-full"></div>
              <span>Spicy Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span>Chef's Recommendation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuHero;