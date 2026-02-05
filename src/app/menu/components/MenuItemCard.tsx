'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  story: string;
  price: number;
  image: string;
  alt: string;
  category: string;
  tags: string[];
  ingredients: string[];
  spicyLevel?: number;
  nutritionalInfo?: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  isChefPick?: boolean;
  isSeasonal?: boolean;
}

interface MenuItemCardProps {
  item: MenuItem;
  onAddToOrder: (itemId: string, quantity: number) => void;
  className?: string;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onAddToOrder, className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showNutrition, setShowNutrition] = useState(false);

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(1, Math.min(10, quantity + delta));
    setQuantity(newQuantity);
  };

  const handleAddToOrder = () => {
    onAddToOrder(item.id, quantity);
    setQuantity(1);
  };

  return (
    <div className={`bg-card rounded-xl overflow-hidden border border-border transition-smooth hover:shadow-warm-lg ${className}`}>
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden group">
        <AppImage
          src={item.image}
          alt={item.alt}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {item.isChefPick && (
            <span className="flex items-center space-x-1 px-3 py-1.5 bg-accent text-accent-foreground rounded-full text-xs font-headline font-semibold shadow-warm">
              <Icon name="StarIcon" size={14} variant="solid" />
              <span>Chef's Pick</span>
            </span>
          )}
          {item.isSeasonal && (
            <span className="flex items-center space-x-1 px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-headline font-semibold shadow-warm">
              <Icon name="SparklesIcon" size={14} variant="solid" />
              <span>Seasonal</span>
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="absolute bottom-3 right-3 flex gap-2">
          {item.tags.includes('vegetarian') && (
            <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center shadow-warm">
              <Icon name="CheckBadgeIcon" size={18} variant="solid" className="text-success-foreground" />
            </div>
          )}
          {item.spicyLevel && item.spicyLevel > 0 && (
            <div className="flex items-center space-x-1 px-2 py-1 bg-warning rounded-full shadow-warm">
              {[...Array(item.spicyLevel)].map((_, i) => (
                <Icon key={i} name="FireIcon" size={12} variant="solid" className="text-warning-foreground" />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-headline text-xl font-bold text-foreground mb-1">
              {item.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {item.description}
            </p>
          </div>
          <div className="ml-4 text-right">
            <span className="font-headline text-2xl font-bold text-primary">
              ฿{item.price}
            </span>
          </div>
        </div>

        {/* Expandable Story Section */}
        {item.story && (
          <div className="mb-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-smooth"
            >
              <Icon
                name={isExpanded ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                size={16}
                variant="outline"
              />
              <span className="font-headline font-semibold">
                {isExpanded ? 'Hide Story' : 'Read Story'}
              </span>
            </button>
            
            {isExpanded && (
              <div className="mt-3 p-4 bg-background rounded-lg border border-border">
                <p className="text-sm text-foreground leading-relaxed mb-3">
                  {item.story}
                </p>
                
                {/* Ingredients */}
                <div className="mb-3">
                  <h4 className="font-headline text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Key Ingredients
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Nutritional Info Toggle */}
                {item.nutritionalInfo && (
                  <div>
                    <button
                      onClick={() => setShowNutrition(!showNutrition)}
                      className="flex items-center space-x-2 text-xs text-primary hover:text-primary/80 transition-smooth"
                    >
                      <Icon
                        name={showNutrition ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                        size={14}
                        variant="outline"
                      />
                      <span className="font-headline font-semibold">
                        {showNutrition ? 'Hide' : 'Show'} Nutritional Info
                      </span>
                    </button>
                    
                    {showNutrition && (
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        <div className="p-2 bg-card rounded border border-border">
                          <div className="text-xs text-muted-foreground">Calories</div>
                          <div className="font-headline font-semibold text-foreground">
                            {item.nutritionalInfo.calories}
                          </div>
                        </div>
                        <div className="p-2 bg-card rounded border border-border">
                          <div className="text-xs text-muted-foreground">Protein</div>
                          <div className="font-headline font-semibold text-foreground">
                            {item.nutritionalInfo.protein}
                          </div>
                        </div>
                        <div className="p-2 bg-card rounded border border-border">
                          <div className="text-xs text-muted-foreground">Carbs</div>
                          <div className="font-headline font-semibold text-foreground">
                            {item.nutritionalInfo.carbs}
                          </div>
                        </div>
                        <div className="p-2 bg-card rounded border border-border">
                          <div className="text-xs text-muted-foreground">Fat</div>
                          <div className="font-headline font-semibold text-foreground">
                            {item.nutritionalInfo.fat}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Quantity Selector & Add Button */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-background border border-border rounded-lg p-1">
            <button
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              className="w-8 h-8 flex items-center justify-center rounded text-foreground hover:bg-muted transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon name="MinusIcon" size={16} variant="outline" />
            </button>
            <span className="w-8 text-center font-headline font-semibold text-foreground">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(1)}
              disabled={quantity >= 10}
              className="w-8 h-8 flex items-center justify-center rounded text-foreground hover:bg-muted transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon name="PlusIcon" size={16} variant="outline" />
            </button>
          </div>
          
          <button
            onClick={handleAddToOrder}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-headline font-semibold transition-smooth hover:bg-primary/90 hover:shadow-warm active:scale-95"
          >
            <Icon name="ShoppingCartIcon" size={18} variant="outline" />
            <span>Add to Order</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;