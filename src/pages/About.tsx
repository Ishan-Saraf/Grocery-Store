import React from 'react';
import { Users, Leaf, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About Fresh Mart</h1>
        <p className="text-lg text-gray-600">
          We're committed to bringing the freshest groceries right to your doorstep,
          making healthy living easier for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-center">
          <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Our Team</h2>
          <p className="text-gray-600">
            Dedicated professionals working to provide you with the best shopping experience.
          </p>
        </div>
        <div className="text-center">
          <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Sustainability</h2>
          <p className="text-gray-600">
            Committed to eco-friendly practices and supporting local farmers.
          </p>
        </div>
        <div className="text-center">
          <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Community</h2>
          <p className="text-gray-600">
            Building stronger communities through fresh, healthy food.
          </p>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Our Story</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Founded in 2024, Fresh Mart began with a simple mission: to make fresh,
          quality groceries accessible to everyone. We've grown from a small local
          store to serving thousands of customers, but our commitment to quality
          and service remains unchanged. We carefully select our suppliers,
          prioritize local producers, and ensure that every product meets our
          high standards before it reaches your home.
        </p>
      </div>
    </div>
  );
};