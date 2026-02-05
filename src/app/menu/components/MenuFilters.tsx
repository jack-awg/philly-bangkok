'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface MenuFiltersProps {
  activeCategory: string;
  activeFilters: string[];
  onCategoryChange: (category: string) => void;
  onFilterToggle: (filter: string) => void;
  className?: string;
}

const MenuFilters: React.FC<MenuFiltersProps> = ({
  activeCategory,
  activeFilters,
  onCategoryChange,
  onFilterToggle,
  className = '',
}) => {
  const categories = [
    { id: 'all', label: 'All Items', icon: 'Squares2X2Icon' },
    { id: 'cheesesteaks', label: 'Cheesesteaks', icon: 'FireIcon' },
    { id: 'sides', label: 'Sides', icon: 'CakeIcon' },
    { id: 'drinks', label: 'Drinks', icon: 'BeakerIcon' },
    { id: 'combos', label: 'Combo Meals', icon: 'ShoppingBagIcon' },
    { id: 'seasonal', label: 'Seasonal Specials', icon: 'SparklesIcon' },
  ];

  const dietaryFilters = [
    { id: 'vegetarian', label: 'Vegetarian', icon: 'CheckBadgeIcon' },
    { id: 'spicy', label: 'Spicy', icon: 'FireIcon' },
    { id: 'chef-pick', label: "Chef\'s Pick", icon: 'StarIcon' },
  ];

  return (
    <div className={`bg-card border-b border-border ${className}`}>
      <div className="container mx-auto px-4 py-6">
        {/* Category Filters */}
        <div className="mb-6">
          <h3 className="font-headline text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Categories
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg font-headline text-sm font-medium transition-smooth ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-warm'
                    : 'bg-background text-foreground hover:bg-primary/10 border border-border'
                }`}
              >
                <Icon
                  name={category.icon as any}
                  size={18}
                  variant={activeCategory === category.id ? 'solid' : 'outline'}
                />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dietary Filters */}
        <div>
          <h3 className="font-headline text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Dietary Preferences
          </h3>
          <div className="flex flex-wrap gap-2">
            {dietaryFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => onFilterToggle(filter.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg font-headline text-sm font-medium transition-smooth ${
                  activeFilters.includes(filter.id)
                    ? 'bg-accent text-accent-foreground shadow-warm'
                    : 'bg-background text-foreground hover:bg-accent/10 border border-border'
                }`}
              >
                <Icon
                  name={filter.icon as any}
                  size={18}
                  variant={activeFilters.includes(filter.id) ? 'solid' : 'outline'}
                />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuFilters;