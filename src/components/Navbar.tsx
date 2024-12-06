import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartItemsCount, onCartClick }) => {
  return (
    <nav className="bg-green-600 text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Menu className="h-6 w-6 cursor-pointer md:hidden" />
          <h1 className="text-2xl font-bold">Fresh Mart</h1>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-green-200">Home</a>
          <a href="#" className="hover:text-green-200">Products</a>
          <a href="#" className="hover:text-green-200">Categories</a>
          <a href="#" className="hover:text-green-200">About</a>
        </div>

        <button
          onClick={onCartClick}
          className="relative p-2 hover:bg-green-700 rounded-full transition-colors"
        >
          <ShoppingCart className="h-6 w-6" />
          {cartItemsCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemsCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};