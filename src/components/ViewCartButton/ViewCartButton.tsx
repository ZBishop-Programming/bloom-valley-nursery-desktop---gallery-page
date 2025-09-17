import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { CartModal } from '../CartModal/CartModal';

export const ViewCartButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className="fixed top-4 right-4 z-40 bg-[#00231c] hover:bg-[#014b3a] text-white shadow-lg [font-family:'Alata',Helvetica] font-normal transition-colors duration-200"
        size="lg"
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        View Cart ({cartItems.length})
      </Button>

      <CartModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};
