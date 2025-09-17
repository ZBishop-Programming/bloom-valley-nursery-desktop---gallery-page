import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { useCart } from '../../contexts/CartContext';
import { X } from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cartItems, clearCart } = useCart();

  const handleProcessOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before processing.");
      return;
    }
    alert("Thank you for your order!");
    clearCart();
    onClose();
  };

  const handleClearCart = () => {
    if (cartItems.length === 0) {
      alert("There are no items to clear");
      return;
    }
    clearCart();
    alert("Cart is cleared!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-60" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <Card className="relative z-10 w-full max-w-md mx-4 bg-white border-2 border-[#00231c] shadow-[0_4px_15px_rgba(0,0,0,0.3)] rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 text-center">
          <CardTitle className="[font-family:'Alata',Helvetica] font-normal text-[#00231c] text-2xl flex-1 text-center">
            Your Cart
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 p-0 hover:bg-gray-100 text-[#00231c]"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Cart Items List */}
          <div className="max-h-60 overflow-y-auto text-left">
            {cartItems.length === 0 ? (
              <p className="[font-family:'Alata',Helvetica] font-normal text-gray-500 text-center py-4">
                Your cart is empty.
              </p>
            ) : (
              <ul className="space-y-3 pl-5 list-disc [font-family:'Alata',Helvetica]">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex items-center gap-3 p-2 border-b border-gray-200 list-item">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="[font-family:'Alata',Helvetica] font-normal text-black text-sm">
                        {item.name}
                      </p>
                      <p className="[font-family:'Alata',Helvetica] font-normal text-gray-600 text-sm">
                        {item.price}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 pt-4 text-center">
            <Button
              onClick={handleProcessOrder}
              className="w-full bg-[#00231c] hover:bg-[#014b3a] text-white [font-family:'Alata',Helvetica] font-normal py-3 px-4 rounded-lg text-base transition-colors duration-200"
            >
              Process Order
            </Button>
            <Button
              onClick={handleClearCart}
              className="w-full bg-[#00231c] hover:bg-[#014b3a] text-white [font-family:'Alata',Helvetica] font-normal py-3 px-4 rounded-lg text-base transition-colors duration-200"
            >
              Clear Cart
            </Button>
            <Button
              onClick={onClose}
              className="w-full bg-[#00231c] hover:bg-[#014b3a] text-white [font-family:'Alata',Helvetica] font-normal py-3 px-4 rounded-lg text-base transition-colors duration-200"
            >
              Close
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
