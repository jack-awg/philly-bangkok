'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface MenuSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  className?: string;
}

const MenuSearch: React.FC<MenuSearchProps> = ({
  searchQuery,
  onSearchChange,
  className = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <Icon name="MagnifyingGlassIcon" size={20} variant="outline" className="text-muted-foreground" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search menu items, ingredients, or dietary needs..."
        className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
      />
      {searchQuery && (
        <button
          onClick={() => onSearchChange('')}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
        >
          <Icon name="XMarkIcon" size={20} variant="outline" />
        </button>
      )}
    </div>
  );
};

export default MenuSearch;