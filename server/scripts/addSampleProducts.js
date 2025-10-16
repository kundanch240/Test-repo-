const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

const sampleProducts = [
  // Gadgets
  {
    name: "Wireless Bluetooth Earbuds Pro",
    description: "Premium wireless earbuds with active noise cancellation, 30-hour battery life, and crystal-clear sound quality.",
    price: 129.99,
    originalPrice: 179.99,
    images: ["https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500"],
    category: "gadgets",
    stock: 50,
    featured: true,
    trending: true,
    discount: 28,
    rating: 4.5,
    tags: ["bluetooth", "wireless", "audio", "noise-cancellation"]
  },
  {
    name: "Smart Fitness Watch",
    description: "Advanced fitness tracker with heart rate monitoring, GPS, sleep tracking, and 7-day battery life.",
    price: 199.99,
    originalPrice: 249.99,
    images: ["https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500"],
    category: "gadgets",
    stock: 30,
    featured: true,
    trending: false,
    discount: 20,
    rating: 4.3,
    tags: ["fitness", "smartwatch", "health", "tracking"]
  },
  {
    name: "Portable Phone Charger 20000mAh",
    description: "High-capacity portable charger with fast charging technology and LED display for remaining power.",
    price: 39.99,
    originalPrice: 59.99,
    images: ["https://images.unsplash.com/photo-1609592807905-0b5b4b5b5b5b?w=500"],
    category: "gadgets",
    stock: 100,
    featured: false,
    trending: true,
    discount: 33,
    rating: 4.2,
    tags: ["charger", "portable", "power", "battery"]
  },

  // Fitness
  {
    name: "Adjustable Dumbbells Set",
    description: "Space-saving adjustable dumbbells with weight range from 5-50 lbs each, perfect for home workouts.",
    price: 299.99,
    originalPrice: 399.99,
    images: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500"],
    category: "fitness",
    stock: 25,
    featured: true,
    trending: false,
    discount: 25,
    rating: 4.6,
    tags: ["dumbbells", "weights", "home-gym", "strength"]
  },
  {
    name: "Yoga Mat Premium",
    description: "Non-slip yoga mat made from eco-friendly materials with excellent grip and cushioning.",
    price: 49.99,
    originalPrice: 69.99,
    images: ["https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500"],
    category: "fitness",
    stock: 75,
    featured: false,
    trending: true,
    discount: 29,
    rating: 4.4,
    tags: ["yoga", "mat", "fitness", "eco-friendly"]
  },
  {
    name: "Resistance Bands Set",
    description: "Complete resistance bands set with 5 different resistance levels and door anchor for versatile workouts.",
    price: 24.99,
    originalPrice: 34.99,
    images: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500"],
    category: "fitness",
    stock: 60,
    featured: false,
    trending: false,
    discount: 29,
    rating: 4.1,
    tags: ["resistance", "bands", "workout", "portable"]
  },

  // Beauty
  {
    name: "LED Makeup Mirror",
    description: "Professional LED makeup mirror with adjustable brightness and 360-degree rotation for perfect lighting.",
    price: 89.99,
    originalPrice: 119.99,
    images: ["https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500"],
    category: "beauty",
    stock: 40,
    featured: true,
    trending: true,
    discount: 25,
    rating: 4.7,
    tags: ["mirror", "led", "makeup", "beauty"]
  },
  {
    name: "Skincare Set Complete",
    description: "Complete skincare routine set including cleanser, toner, serum, and moisturizer for all skin types.",
    price: 79.99,
    originalPrice: 99.99,
    images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500"],
    category: "beauty",
    stock: 35,
    featured: false,
    trending: false,
    discount: 20,
    rating: 4.3,
    tags: ["skincare", "beauty", "routine", "natural"]
  },
  {
    name: "Hair Dryer Professional",
    description: "Ionic hair dryer with ceramic technology for faster drying and reduced frizz with multiple heat settings.",
    price: 129.99,
    originalPrice: 159.99,
    images: ["https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500"],
    category: "beauty",
    stock: 20,
    featured: true,
    trending: false,
    discount: 19,
    rating: 4.5,
    tags: ["hair-dryer", "ionic", "professional", "styling"]
  },

  // Home Decor
  {
    name: "Smart LED Strip Lights",
    description: "WiFi-enabled LED strip lights with 16 million colors, music sync, and voice control compatibility.",
    price: 34.99,
    originalPrice: 49.99,
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"],
    category: "home-decor",
    stock: 80,
    featured: true,
    trending: true,
    discount: 30,
    rating: 4.4,
    tags: ["led", "lights", "smart", "decor"]
  },
  {
    name: "Decorative Throw Pillows Set",
    description: "Set of 4 premium decorative throw pillows with modern geometric patterns and soft velvet material.",
    price: 59.99,
    originalPrice: 79.99,
    images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500"],
    category: "home-decor",
    stock: 45,
    featured: false,
    trending: false,
    discount: 25,
    rating: 4.2,
    tags: ["pillows", "decor", "home", "comfort"]
  },
  {
    name: "Wall Art Canvas Set",
    description: "Modern abstract wall art canvas set with 3 pieces, perfect for living room or bedroom decoration.",
    price: 89.99,
    originalPrice: 119.99,
    images: ["https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500"],
    category: "home-decor",
    stock: 30,
    featured: false,
    trending: true,
    discount: 25,
    rating: 4.6,
    tags: ["art", "canvas", "wall", "decor"]
  },

  // Auto Accessories
  {
    name: "Car Phone Mount Dashboard",
    description: "Magnetic car phone mount with strong suction cup and 360-degree rotation for hands-free driving.",
    price: 19.99,
    originalPrice: 29.99,
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"],
    category: "auto-accessories",
    stock: 120,
    featured: false,
    trending: true,
    discount: 33,
    rating: 4.3,
    tags: ["phone-mount", "car", "magnetic", "dashboard"]
  },
  {
    name: "Car Air Freshener Diffuser",
    description: "Premium car air freshener with essential oils and elegant design, lasts up to 30 days.",
    price: 12.99,
    originalPrice: 18.99,
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"],
    category: "auto-accessories",
    stock: 90,
    featured: false,
    trending: false,
    discount: 32,
    rating: 4.1,
    tags: ["air-freshener", "car", "essential-oils", "fragrance"]
  },
  {
    name: "Car Seat Covers Set",
    description: "Universal car seat covers made from premium neoprene material with easy installation and machine washable.",
    price: 49.99,
    originalPrice: 69.99,
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"],
    category: "auto-accessories",
    stock: 55,
    featured: true,
    trending: false,
    discount: 29,
    rating: 4.4,
    tags: ["seat-covers", "car", "protection", "neoprene"]
  }
];

async function addSampleProducts() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/trendvibe-store', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Add sample products
    const products = await Product.insertMany(sampleProducts);
    console.log(`Added ${products.length} sample products`);

    // Display summary by category
    const categorySummary = {};
    products.forEach(product => {
      if (!categorySummary[product.category]) {
        categorySummary[product.category] = 0;
      }
      categorySummary[product.category]++;
    });

    console.log('\nProducts by category:');
    Object.entries(categorySummary).forEach(([category, count]) => {
      console.log(`- ${category}: ${count} products`);
    });

    console.log('\nSample products added successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error adding sample products:', error);
    process.exit(1);
  }
}

addSampleProducts();