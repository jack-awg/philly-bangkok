'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface PrintMenuButtonProps {
  className?: string;
}

const PrintMenuButton: React.FC<PrintMenuButtonProps> = ({ className = '' }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className={`flex items-center space-x-2 px-4 py-2.5 bg-background border border-border rounded-lg font-headline text-sm font-medium text-foreground hover:bg-muted transition-smooth ${className}`}
    >
      <Icon name="PrinterIcon" size={18} variant="outline" />
      <span>Print Menu</span>
    </button>
  );
};

export default PrintMenuButton;