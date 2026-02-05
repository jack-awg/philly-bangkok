'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ComboItem {
  id: string;
  name: string;
  basePrice: number;
}

interface ComboBuilderProps {
  className?: string;
}

const ComboBuilder: React.FC<ComboBuilderProps> = ({ className = '' }) => {
  const [selectedCheesesteak, setSelectedCheesesteak] = useState<string>('');
  const [selectedSide, setSelectedSide] = useState<string>('');
  const [selectedDrink, setSelectedDrink] = useState<string>('');

  const cheesesteaks: ComboItem[] = [
    { id: 'classic', name: 'Classic Philly Cheesesteak', basePrice: 280 },
    { id: 'mushroom', name: 'Mushroom & Swiss', basePrice: 295 },
    { id: 'chicken', name: 'Chicken Cheesesteak', basePrice: 275 },
  ];

  const sides: ComboItem[] = [
    { id: 'fries', name: 'Classic Fries', basePrice: 80 },
    { id: 'onion-rings', name: 'Onion Rings', basePrice: 95 },
    { id: 'cheese-fries', name: 'Cheese Fries', basePrice: 110 },
  ];

  const drinks: ComboItem[] = [
    { id: 'coke', name: 'Coca-Cola', basePrice: 45 },
    { id: 'sprite', name: 'Sprite', basePrice: 45 },
    { id: 'iced-tea', name: 'Iced Tea', basePrice: 50 },
  ];

  const calculateTotal = () => {
    let total = 0;
    if (selectedCheesesteak) {
      const item = cheesesteaks.find(c => c.id === selectedCheesesteak);
      if (item) total += item.basePrice;
    }
    if (selectedSide) {
      const item = sides.find(s => s.id === selectedSide);
      if (item) total += item.basePrice;
    }
    if (selectedDrink) {
      const item = drinks.find(d => d.id === selectedDrink);
      if (item) total += item.basePrice;
    }
    
    // Apply 10% combo discount if all three selected
    if (selectedCheesesteak && selectedSide && selectedDrink) {
      total = Math.round(total * 0.9);
    }
    
    return total;
  };

  const savings = () => {
    if (!selectedCheesesteak || !selectedSide || !selectedDrink) return 0;
    
    let regularTotal = 0;
    const cheesesteak = cheesesteaks.find(c => c.id === selectedCheesesteak);
    const side = sides.find(s => s.id === selectedSide);
    const drink = drinks.find(d => d.id === selectedDrink);
    
    if (cheesesteak) regularTotal += cheesesteak.basePrice;
    if (side) regularTotal += side.basePrice;
    if (drink) regularTotal += drink.basePrice;
    
    return regularTotal - calculateTotal();
  };

  return (
    <div className={`bg-card rounded-xl border border-border p-6 ${className}`}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Icon name="ShoppingBagIcon" size={24} variant="solid" className="text-primary" />
        </div>
        <div>
          <h3 className="font-headline text-2xl font-bold text-foreground">
            Build Your Combo
          </h3>
          <p className="text-sm text-muted-foreground">
            Save 10% when you create a complete meal
          </p>
        </div>
      </div>

      {/* Cheesesteak Selection */}
      <div className="mb-6">
        <label className="block font-headline text-sm font-semibold text-foreground mb-3">
          1. Choose Your Cheesesteak
        </label>
        <div className="space-y-2">
          {cheesesteaks.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedCheesesteak(item.id)}
              className={`w-full flex items-center justify-between p-4 rounded-lg border transition-smooth ${
                selectedCheesesteak === item.id
                  ? 'border-primary bg-primary/5' :'border-border bg-background hover:border-primary/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedCheesesteak === item.id
                    ? 'border-primary bg-primary' :'border-border'
                }`}>
                  {selectedCheesesteak === item.id && (
                    <Icon name="CheckIcon" size={12} variant="solid" className="text-primary-foreground" />
                  )}
                </div>
                <span className="font-headline text-foreground">{item.name}</span>
              </div>
              <span className="font-headline font-semibold text-primary">
                ฿{item.basePrice}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Side Selection */}
      <div className="mb-6">
        <label className="block font-headline text-sm font-semibold text-foreground mb-3">
          2. Choose Your Side
        </label>
        <div className="space-y-2">
          {sides.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedSide(item.id)}
              className={`w-full flex items-center justify-between p-4 rounded-lg border transition-smooth ${
                selectedSide === item.id
                  ? 'border-primary bg-primary/5' :'border-border bg-background hover:border-primary/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedSide === item.id
                    ? 'border-primary bg-primary' :'border-border'
                }`}>
                  {selectedSide === item.id && (
                    <Icon name="CheckIcon" size={12} variant="solid" className="text-primary-foreground" />
                  )}
                </div>
                <span className="font-headline text-foreground">{item.name}</span>
              </div>
              <span className="font-headline font-semibold text-primary">
                ฿{item.basePrice}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Drink Selection */}
      <div className="mb-6">
        <label className="block font-headline text-sm font-semibold text-foreground mb-3">
          3. Choose Your Drink
        </label>
        <div className="space-y-2">
          {drinks.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedDrink(item.id)}
              className={`w-full flex items-center justify-between p-4 rounded-lg border transition-smooth ${
                selectedDrink === item.id
                  ? 'border-primary bg-primary/5' :'border-border bg-background hover:border-primary/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedDrink === item.id
                    ? 'border-primary bg-primary' :'border-border'
                }`}>
                  {selectedDrink === item.id && (
                    <Icon name="CheckIcon" size={12} variant="solid" className="text-primary-foreground" />
                  )}
                </div>
                <span className="font-headline text-foreground">{item.name}</span>
              </div>
              <span className="font-headline font-semibold text-primary">
                ฿{item.basePrice}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Total & Savings */}
      <div className="border-t border-border pt-6">
        {savings() > 0 && (
          <div className="flex items-center justify-between mb-3 text-success">
            <span className="font-headline text-sm font-semibold">Combo Savings (10%)</span>
            <span className="font-headline text-lg font-bold">-฿{savings()}</span>
          </div>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <span className="font-headline text-lg font-semibold text-foreground">Total</span>
          <span className="font-headline text-3xl font-bold text-primary">
            ฿{calculateTotal()}
          </span>
        </div>

        <button
          disabled={!selectedCheesesteak || !selectedSide || !selectedDrink}
          className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-headline font-semibold transition-smooth hover:bg-primary/90 hover:shadow-warm disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
        >
          <Icon name="ShoppingCartIcon" size={20} variant="outline" />
          <span>Add Combo to Order</span>
        </button>
      </div>
    </div>
  );
};

export default ComboBuilder;