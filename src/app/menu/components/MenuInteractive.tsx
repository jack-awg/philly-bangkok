'use client';

import React, { useState, useEffect } from 'react';
import MenuFilters from './MenuFilters';
import MenuItemCard from './MenuItemCard';
import ComboBuilder from './ComboBuilder';
import MenuSearch from './MenuSearch';
import PrintMenuButton from './PrintMenuButton';
import OrderSummary from './OrderSummary';

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

interface OrderItem {
  itemId: string;
  itemName: string;
  quantity: number;
  price: number;
}

const MenuInteractive: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const menuItems: MenuItem[] = [
    {
      id: 'classic-philly',
      name: 'Classic Philly Cheesesteak',
      description: 'Thinly sliced ribeye, caramelized onions, melted Cheez Whiz on authentic Amoroso roll',
      story: 'The original 1930s Pat\'s King of Steaks recipe brought to Bangkok. We import Amoroso rolls weekly and use premium Australian ribeye, sliced paper-thin and griddled with sweet caramelized onions. The Cheez Whiz—controversial to some, essential to purists—creates that signature creamy texture Philadelphians grew up with.',
      price: 280,
      image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg',
      alt: 'Classic Philly cheesesteak sandwich with melted cheese and caramelized onions on toasted roll',
      category: 'cheesesteaks',
      tags: ['chef-pick'],
      ingredients: ['Australian Ribeye', 'Amoroso Roll', 'Cheez Whiz', 'Caramelized Onions', 'Secret Seasoning'],
      nutritionalInfo: {
        calories: 680,
        protein: '42g',
        carbs: '48g',
        fat: '35g',
      },
      isChefPick: true,
    },
    {
      id: 'mushroom-swiss',
      name: 'JUICY Mushroom & Swiss Cheesesteak',
      description: 'Ribeye with sautéed mushrooms, Swiss cheese, garlic aioli',
      story: 'A Philadelphia variation that gained popularity in the 1970s. We use locally-sourced Thai oyster mushrooms alongside imported Swiss cheese, creating a bridge between American tradition and Bangkok\'s incredible produce. The garlic aioli adds a modern touch while respecting the sandwich\'s working-class roots.',
      price: 295,
      image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg',
      alt: 'Mushroom and Swiss cheesesteak with sautéed mushrooms and melted Swiss cheese',
      category: 'cheesesteaks',
      tags: [],
      ingredients: ['Australian Ribeye', 'Thai Oyster Mushrooms', 'Swiss Cheese', 'Garlic Aioli', 'Amoroso Roll'],
      spicyLevel: 0,
      nutritionalInfo: {
        calories: 720,
        protein: '45g',
        carbs: '52g',
        fat: '38g',
      },
    },
    {
      id: 'chicken-cheesesteak',
      name: 'Chicken Cheesesteak',
      description: 'Grilled chicken breast, provolone, peppers, onions',
      story: 'Not traditional, but beloved by health-conscious Philadelphians since the 1980s. We use free-range Thai chicken breast, marinated in our secret blend, then griddled with colorful bell peppers. Provolone provides a milder, creamier alternative to Whiz—perfect for Bangkok\'s diverse palates.',
      price: 275,
      image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg',
      alt: 'Chicken cheesesteak sandwich with grilled chicken, melted provolone, and colorful peppers',
      category: 'cheesesteaks',
      tags: [],
      ingredients: ['Free-Range Chicken', 'Provolone Cheese', 'Bell Peppers', 'Onions', 'Amoroso Roll'],
      nutritionalInfo: {
        calories: 580,
        protein: '48g',
        carbs: '46g',
        fat: '22g',
      },
    },
    {
      id: 'pepper-jack-heat',
      name: 'Pepper Jack Heat',
      description: 'Ribeye, pepper jack cheese, jalapeños, chipotle mayo',
      story: 'Our Bangkok-inspired creation that honors Thai love for spice. Premium ribeye meets pepper jack\'s creamy heat, fresh jalapeños, and smoky chipotle mayo. It\'s what happens when South Philly meets Southeast Asia—respectful fusion that works.',
      price: 290,
      image: 'https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg',
      alt: 'Spicy cheesesteak with pepper jack cheese, jalapeños, and chipotle mayo',
      category: 'cheesesteaks',
      tags: ['spicy', 'chef-pick'],
      ingredients: ['Australian Ribeye', 'Pepper Jack Cheese', 'Fresh Jalapeños', 'Chipotle Mayo', 'Amoroso Roll'],
      spicyLevel: 2,
      nutritionalInfo: {
        calories: 710,
        protein: '43g',
        carbs: '49g',
        fat: '37g',
      },
      isChefPick: true,
    },
    {
      id: 'veggie-portobello',
      name: 'Portobello Veggie Cheesesteak',
      description: 'Grilled portobello, roasted vegetables, provolone, balsamic glaze',
      story: 'Philadelphia\'s vegetarian answer emerged in the 1990s as the city embraced diverse diets. We use meaty portobello mushrooms grilled to perfection, layered with Bangkok-fresh roasted vegetables. The balsamic glaze adds sophistication while maintaining that satisfying cheesesteak experience.',
      price: 265,
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
      alt: 'Vegetarian portobello mushroom cheesesteak with roasted vegetables and melted provolone',
      category: 'cheesesteaks',
      tags: ['vegetarian'],
      ingredients: ['Portobello Mushrooms', 'Roasted Vegetables', 'Provolone Cheese', 'Balsamic Glaze', 'Amoroso Roll'],
      nutritionalInfo: {
        calories: 520,
        protein: '22g',
        carbs: '58g',
        fat: '24g',
      },
    },
    {
      id: 'winter-truffle',
      name: 'Winter Truffle Cheesesteak',
      description: 'Ribeye, truffle oil, wild mushrooms, aged gruyere, winter herbs',
      story: 'Our seasonal celebration of Bangkok\'s cooler months. Premium ribeye meets earthy wild mushrooms foraged from Northern Thailand, finished with imported truffle oil and aged gruyere. Winter herbs add aromatic complexity—this is comfort food elevated for Bangkok\'s sophisticated food scene.',
      price: 380,
      image: 'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg',
      alt: 'Gourmet truffle cheesesteak with wild mushrooms and aged gruyere cheese',
      category: 'cheesesteaks',
      tags: ['seasonal', 'chef-pick'],
      ingredients: ['Australian Ribeye', 'Truffle Oil', 'Wild Mushrooms', 'Aged Gruyere', 'Winter Herbs', 'Amoroso Roll'],
      nutritionalInfo: {
        calories: 780,
        protein: '46g',
        carbs: '51g',
        fat: '44g',
      },
      isChefPick: true,
      isSeasonal: true,
    },
    {
      id: 'classic-fries',
      name: 'Classic Boardwalk Fries',
      description: 'Hand-cut potatoes, sea salt, served hot and crispy',
      story: 'Inspired by Atlantic City boardwalk fries—the perfect cheesesteak companion. We hand-cut local Thai potatoes daily, double-fry for maximum crispiness, and finish with sea salt. Simple, honest, addictive.',
      price: 80,
      image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg',
      alt: 'Golden crispy hand-cut French fries in red basket with sea salt',
      category: 'sides',
      tags: ['vegetarian'],
      ingredients: ['Thai Potatoes', 'Sea Salt', 'Vegetable Oil'],
      nutritionalInfo: {
        calories: 380,
        protein: '5g',
        carbs: '52g',
        fat: '18g',
      },
    },
    {
      id: 'cheese-fries',
      name: 'Cheese Fries',
      description: 'Boardwalk fries smothered in melted Cheez Whiz',
      story: 'A Philadelphia staple since the 1950s. Our hand-cut fries get generously topped with the same Cheez Whiz we use on our steaks. It\'s indulgent, it\'s nostalgic, it\'s exactly what you want after a long day.',
      price: 110,
      image: 'https://images.pexels.com/photos/2741448/pexels-photo-2741448.jpeg',
      alt: 'Crispy fries covered in melted cheese sauce in white bowl',
      category: 'sides',
      tags: ['vegetarian', 'chef-pick'],
      ingredients: ['Thai Potatoes', 'Cheez Whiz', 'Sea Salt'],
      nutritionalInfo: {
        calories: 520,
        protein: '12g',
        carbs: '56g',
        fat: '28g',
      },
      isChefPick: true,
    },
    {
      id: 'onion-rings',
      name: 'Beer-Battered Onion Rings',
      description: 'Thick-cut onions in crispy beer batter',
      story: 'American diner classic perfected. We use sweet Thai onions, cut thick, dipped in our beer batter recipe, and fried until golden. The contrast between sweet onion and crispy coating is pure comfort.',
      price: 95,
      image: 'https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg',
      alt: 'Golden beer-battered onion rings stacked on white plate',
      category: 'sides',
      tags: ['vegetarian'],
      ingredients: ['Thai Onions', 'Beer Batter', 'Seasonings'],
      nutritionalInfo: {
        calories: 420,
        protein: '6g',
        carbs: '48g',
        fat: '22g',
      },
    },
    {
      id: 'coleslaw',
      name: 'Creamy Coleslaw',
      description: 'Fresh cabbage slaw with tangy dressing',
      story: 'The cooling counterpoint to rich cheesesteaks. Made fresh daily with crisp cabbage and our tangy-sweet dressing. It\'s the palate cleanser that keeps you coming back for another bite.',
      price: 65,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      alt: 'Fresh creamy coleslaw with shredded cabbage and carrots in bowl',
      category: 'sides',
      tags: ['vegetarian'],
      ingredients: ['Fresh Cabbage', 'Carrots', 'Creamy Dressing', 'Herbs'],
      nutritionalInfo: {
        calories: 180,
        protein: '2g',
        carbs: '12g',
        fat: '14g',
      },
    },
    {
      id: 'thai-basil-fries',
      name: 'Thai Basil Garlic Fries',
      description: 'Boardwalk fries tossed with Thai holy basil, crispy garlic, and bird\'s eye chili',
      story: 'Where South Philly meets Silom. Our hand-cut fries get the Bangkok street food treatment—wok-tossed with fragrant holy basil, golden crispy garlic chips, and just enough bird\'s eye chili to wake up your taste buds. A side dish that steals the show.',
      price: 120,
      image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg',
      alt: 'Crispy fries topped with fresh Thai basil, crispy garlic, and red chilies',
      category: 'sides',
      tags: ['spicy', 'vegetarian'],
      ingredients: ['Thai Potatoes', 'Holy Basil', 'Crispy Garlic', 'Bird\'s Eye Chili', 'Soy Glaze'],
      spicyLevel: 2,
      nutritionalInfo: {
        calories: 440,
        protein: '6g',
        carbs: '54g',
        fat: '22g',
      },
    },
    {
      id: 'coca-cola',
      name: 'Coca-Cola',
      description: 'Classic Coke, ice cold',
      story: 'The quintessential American pairing. Ice-cold Coke cuts through the richness of cheese and meat perfectly.',
      price: 45,
      image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg',
      alt: 'Ice-cold Coca-Cola in glass with ice cubes and condensation',
      category: 'drinks',
      tags: ['vegetarian'],
      ingredients: ['Coca-Cola'],
      nutritionalInfo: {
        calories: 140,
        protein: '0g',
        carbs: '39g',
        fat: '0g',
      },
    },
    {
      id: 'sprite',
      name: 'Sprite',
      description: 'Crisp lemon-lime soda',
      story: 'Light, refreshing, and perfect for Bangkok\'s heat. The citrus notes complement our spicier options beautifully.',
      price: 45,
      image: 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg',
      alt: 'Refreshing Sprite soda in glass with ice and lemon slice',
      category: 'drinks',
      tags: ['vegetarian'],
      ingredients: ['Sprite'],
      nutritionalInfo: {
        calories: 140,
        protein: '0g',
        carbs: '38g',
        fat: '0g',
      },
    },
    {
      id: 'iced-tea',
      name: 'Fresh Brewed Iced Tea',
      description: 'Unsweetened black tea, served over ice',
      story: 'American-style iced tea, brewed fresh daily. Unsweetened to let you control the sweetness—a nod to both American and Thai tea traditions.',
      price: 50,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      alt: 'Fresh brewed iced tea in tall glass with ice and lemon wedge',
      category: 'drinks',
      tags: ['vegetarian'],
      ingredients: ['Black Tea', 'Ice'],
      nutritionalInfo: {
        calories: 2,
        protein: '0g',
        carbs: '0g',
        fat: '0g',
      },
    },
    {
      id: 'lemonade',
      name: 'Homemade Lemonade',
      description: 'Fresh-squeezed lemons, perfectly balanced',
      story: 'Made from scratch every morning. Real lemons, real sugar, real refreshment. It\'s summer in a glass, even during Bangkok\'s rainy season.',
      price: 55,
      image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg',
      alt: 'Fresh homemade lemonade in mason jar with lemon slices and mint',
      category: 'drinks',
      tags: ['vegetarian'],
      ingredients: ['Fresh Lemons', 'Sugar', 'Water', 'Ice'],
      nutritionalInfo: {
        calories: 120,
        protein: '0g',
        carbs: '32g',
        fat: '0g',
      },
    },
    {
  id: 'spicy-philly',
  name: 'Spicy Philly Cheesesteak',
  description: 'Ribeye, grilled peppers & onions, provolone, house chili oil on Amoroso roll',
  story: 'A Bangkok-leaning twist on Philly tradition: paper-thin ribeye, sweet onions, and peppers on the griddle, finished with provolone and our house chili oil for a clean, warming kick.',
  price: 295,
  image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg',
  alt: 'Spicy Philly cheesesteak sandwich with peppers and melted provolone on toasted roll',
  category: 'cheesesteaks',
  tags: [],
  ingredients: ['Australian Ribeye', 'Amoroso Roll', 'Provolone', 'Bell Peppers', 'Onions', 'House Chili Oil'],
  spicyLevel: 2,
  nutritionalInfo: {
    calories: 710,
    protein: '44g',
    carbs: '50g',
    fat: '37g',
      },
    },
  ];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleFilterToggle = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleAddToOrder = (itemId: string, quantity: number) => {
    const item = menuItems.find((m) => m.id === itemId);
    if (!item) return;

    setOrderItems((prev) => {
      const existingItem = prev.find((i) => i.itemId === itemId);
      if (existingItem) {
        return prev.map((i) =>
          i.itemId === itemId
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [
        ...prev,
        {
          itemId: item.id,
          itemName: item.name,
          quantity,
          price: item.price,
        },
      ];
    });
  };

  const handleRemoveItem = (itemId: string) => {
    setOrderItems((prev) => prev.filter((item) => item.itemId !== itemId));
  };

  const handleClearOrder = () => {
    setOrderItems([]);
  };

  const filteredItems = menuItems.filter((item) => {
    // Category filter
    if (activeCategory !== 'all' && item.category !== activeCategory) {
      return false;
    }

    // Dietary filters
    if (activeFilters.length > 0) {
      const hasAllFilters = activeFilters.every((filter) => {
        if (filter === 'vegetarian') return item.tags.includes('vegetarian');
        if (filter === 'spicy') return item.spicyLevel && item.spicyLevel > 0;
        if (filter === 'chef-pick') return item.isChefPick;
        return false;
      });
      if (!hasAllFilters) return false;
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(query)) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return true;
  });

  if (!isHydrated) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse space-y-8">
          <div className="h-12 bg-muted rounded w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-96 bg-muted rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <MenuFilters
        activeCategory={activeCategory}
        activeFilters={activeFilters}
        onCategoryChange={handleCategoryChange}
        onFilterToggle={handleFilterToggle}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-4 mb-8">
          <MenuSearch
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            className="w-full lg:flex-1"
          />
          <PrintMenuButton />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Menu Items Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline text-2xl font-bold text-foreground">
                  {activeCategory === 'all' ?'All Items'
                    : activeCategory === 'cheesesteaks' ?'Cheesesteaks'
                    : activeCategory === 'sides' ?'Sides'
                    : activeCategory === 'drinks' ?'Drinks'
                    : activeCategory === 'combos' ?'Combo Meals' :'Seasonal Specials'}
                </h2>
                <span className="text-sm text-muted-foreground">
                  {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
                </span>
              </div>

              {filteredItems.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No items found matching your criteria.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredItems.map((item) => (
                    <MenuItemCard
                      key={item.id}
                      item={item}
                      onAddToOrder={handleAddToOrder}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Combo Builder */}
            {activeCategory === 'all' || activeCategory === 'combos' ? (
              <div>
                <h2 className="font-headline text-2xl font-bold text-foreground mb-6">
                  Create Your Combo
                </h2>
                <ComboBuilder />
              </div>
            ) : null}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <OrderSummary
              orderItems={orderItems}
              onRemoveItem={handleRemoveItem}
              onClearOrder={handleClearOrder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuInteractive;