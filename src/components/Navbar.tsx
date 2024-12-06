import React from 'react';
import { ShoppingCart, Menu, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartItemsCount, onCartClick }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-green-600 text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Menu className="h-6 w-6 cursor-pointer md:hidden" />
          <Link to="/" className="text-2xl font-bold">Fresh Mart</Link>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`hover:text-green-200 ${isActive('/') ? 'text-green-200' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`hover:text-green-200 ${isActive('/products') ? 'text-green-200' : ''}`}
          >
            Products
          </Link>
          <Link
            to="/categories"
            className={`hover:text-green-200 ${isActive('/categories') ? 'text-green-200' : ''}`}
          >
            Categories
          </Link>
          <Link
            to="/about"
            className={`hover:text-green-200 ${isActive('/about') ? 'text-green-200' : ''}`}
          >
            About
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            to="/profile"
            className="p-2 hover:bg-green-700 rounded-full transition-colors"
          >
            <User className="h-6 w-6" />
          </Link>
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
      </div>
    </nav>
  );
};