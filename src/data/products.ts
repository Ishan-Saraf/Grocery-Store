import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Organic Bananas",
    price: 2.99,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=800&q=80",
    description: "Sweet and ripe organic bananas, perfect for snacking"
  },
  {
    id: 2,
    name: "Whole Grain Bread",
    price: 3.49,
    category: "Bakery",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    description: "Freshly baked whole grain bread"
  },
  {
    id: 3,
    name: "Farm Fresh Eggs",
    price: 4.99,
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?auto=format&fit=crop&w=800&q=80",
    description: "Free-range organic eggs"
  },
  {
    id: 4,
    name: "Organic Milk",
    price: 3.99,
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=800&q=80",
    description: "Fresh organic whole milk"
  }
];