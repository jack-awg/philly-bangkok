'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface OrderItem {
  itemId: string;
  itemName: string;
  quantity: number;
  price: number;
}

interface OrderSummaryProps {
  orderItems: OrderItem[];
  onRemoveItem: (itemId: string) => void;
  onClearOrder: () => void;
  className?: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  orderItems,
  onRemoveItem,
  onClearOrder,
  className = '',
}) => {
  const calculateSubtotal = () => {
    return orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal();
  };

  if (orderItems.length === 0) {
    return null;
  }

  return (
    <div className={`bg-card rounded-xl border border-border p-6 sticky top-24 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-headline text-xl font-bold text-foreground">
          Your Order
        </h3>
        <button
          onClick={onClearOrder}
          className="text-sm text-error hover:text-error/80 transition-smooth font-headline font-semibold"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
        {orderItems.map((item) => (
          <div key={item.itemId} className="flex items-start justify-between">
            <div className="flex-1">
              <div className="font-headline font-semibold text-foreground">
                {item.itemName}
              </div>
              <div className="text-sm text-muted-foreground">
                Qty: {item.quantity} × ฿{item.price}
              </div>
            </div>
            <div className="flex items-center space-x-3 ml-4">
              <span className="font-headline font-bold text-primary">
                ฿{item.price * item.quantity}
              </span>
              <button
                onClick={() => onRemoveItem(item.itemId)}
                className="text-error hover:text-error/80 transition-smooth"
              >
                <Icon name="TrashIcon" size={18} variant="outline" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-headline text-foreground">Subtotal</span>
          <span className="font-headline font-semibold text-foreground">
            ฿{calculateSubtotal()}
          </span>
        </div>
        
        <div className="flex items-center justify-between text-lg">
          <span className="font-headline font-bold text-foreground">Total</span>
          <span className="font-headline text-2xl font-bold text-primary">
            ฿{calculateTotal()}
          </span>
        </div>

        <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-headline font-semibold transition-smooth hover:bg-primary/90 hover:shadow-warm active:scale-95 mt-4">
          <Icon name="PhoneIcon" size={20} variant="solid" />
          <span>Call to Order</span>
        </button>

        <p className="text-xs text-center text-muted-foreground mt-3">
          Call us at +66-2-XXX-XXXX to place your order
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;