import React from "react";
import { ShoppingBag, Truck, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Products } from "./Products";
import { OfferList } from "../components/OfferList";
import { Product } from "../types";

interface HomeProps {
  onAddToCart: (product: Product) => void;
}

export const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-green-400 to-green-700 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80"
            alt="Fresh produce"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold mb-4">
              Fresh Food, Delivered Fresh
            </h1>
            <p className="text-xl mb-8">
              Shop for fresh, high-quality groceries from the comfort of your
              home.
            </p>
            <Link
              to="/products"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <ShoppingBag className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Wide Selection</h3>
            <p className="text-gray-600">
              Thousands of products to choose from
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <Truck className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Same-day delivery available</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <Clock className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">24/7 Service</h3>
            <p className="text-gray-600">Shop anytime, anywhere</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <Shield className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Secure Shopping</h3>
            <p className="text-gray-600">100% secure payment</p>
          </div>
        </div>
      </div>

      {/* Offers Section */}
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Special Offers
        </h2>
        <OfferList />
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-center font-bold text-gray-900 mb-8">
          Featured Products
        </h2>
        <Products onAddToCart={onAddToCart} />
      </div>
    </div>
  );
};
