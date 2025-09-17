import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
  removeFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

// SessionStorage helper functions
const getCartFromSessionStorage = (): CartItem[] => {
  try {
    const cart = sessionStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error('Error reading cart from sessionStorage:', error);
    return [];
  }
};

const saveCartToSessionStorage = (cartItems: CartItem[]): void => {
  try {
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
  } catch (error) {
    console.error('Error saving cart to sessionStorage:', error);
  }
};

const clearCartFromSessionStorage = (): void => {
  try {
    sessionStorage.removeItem('cart');
  } catch (error) {
    console.error('Error clearing cart from sessionStorage:', error);
  }
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from sessionStorage on component mount
  useEffect(() => {
    const savedCart = getCartFromSessionStorage();
    setCartItems(savedCart);
  }, []);

  // Save cart to sessionStorage whenever cartItems changes
  useEffect(() => {
    saveCartToSessionStorage(cartItems);
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    const newItem = { ...item, id: `${item.id}-${Date.now()}` };
    setCartItems(prev => [...prev, newItem]);
  };

  const clearCart = () => {
    setCartItems([]);
    clearCartFromSessionStorage();
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
