'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Hydrate from localStorage on client mount
  useEffect(() => {
    setMounted(true);
    try {
      const savedCart = localStorage.getItem('VRTANS_cart');
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error('Failed to load cart from localStorage:', e);
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('VRTANS_cart', JSON.stringify(items));
      } catch (e) {
        console.error('Failed to save cart to localStorage:', e);
      }
    }
  }, [items, mounted]);

  const addToCart = (service) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.slug === service.slug);
      if (existingIndex > -1) {
        const updated = [...prev];
        const currentQty = updated[existingIndex].quantity;
        if (currentQty >= 6) {
          toast.error(`Maximum quantity of 6 reached for ${service.shortTitle || service.title}`);
          return prev;
        }
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: currentQty + 1,
        };
        toast.success(`Updated ${service.shortTitle || service.title} quantity to ${currentQty + 1}`);
        return updated;
      } else {
        toast.success(`Added ${service.shortTitle || service.title} to cart`);
        return [
          ...prev,
          {
            slug: service.slug,
            title: service.title,
            shortTitle: service.shortTitle || service.title,
            price: service.price || 3500,
            icon: service.icon,
            image: service.image,
            quantity: 1,
          },
        ];
      }
    });
  };

  const updateQuantity = (slug, delta) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.slug === slug);
      if (existingIndex === -1) return prev;

      const updated = [...prev];
      const newQty = updated[existingIndex].quantity + delta;

      if (newQty <= 0) {
        const removedItem = updated[existingIndex];
        const filtered = prev.filter((i) => i.slug !== slug);
        toast.info(`Removed ${removedItem.shortTitle || removedItem.title} from cart`);
        return filtered;
      }

      if (newQty > 6) {
        toast.error('Maximum quantity limit is 6 units per service.');
        return prev;
      }

      updated[existingIndex] = {
        ...updated[existingIndex],
        quantity: newQty,
      };
      return updated;
    });
  };

  const removeFromCart = (slug) => {
    setItems((prev) => {
      const item = prev.find((i) => i.slug === slug);
      if (item) {
        toast.info(`Removed ${item.shortTitle || item.title} from cart`);
      }
      return prev.filter((i) => i.slug !== slug);
    });
  };

  const clearCart = () => {
    setItems([]);
    toast.info('Cart cleared');
  };

  const getItemQuantity = (slug) => {
    const item = items.find((i) => i.slug === slug);
    return item ? item.quantity : 0;
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getItemQuantity,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
