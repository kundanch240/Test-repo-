# Category System Setup

This guide explains the category system implementation for TrendVibe Store.

## Categories Implemented

The store now includes 5 main product categories:

1. **Gadgets** 📱 - Latest tech gadgets and innovative devices
2. **Fitness** 💪 - Fitness equipment and wellness products  
3. **Beauty** 💄 - Beauty and personal care products
4. **Home Decor** 🏠 - Home decoration and lifestyle items
5. **Auto Accessories** 🚗 - Car accessories and automotive products

## Features Added

### ✅ Backend Features
- Updated Product model with new category enum
- Enhanced product API with category filtering
- Sample data seeding endpoint (`POST /api/products/seed`)

### ✅ Frontend Features
- Category filter components (desktop & mobile)
- Updated shop page with advanced filtering
- Category navigation in navbar
- Responsive category cards on home page
- Grid/list view toggle for products

### ✅ Filtering Options
- **Category Filter**: Filter by specific categories
- **Search**: Text search across product names, descriptions, and tags
- **Price Range**: Filter by minimum and maximum price
- **Sort Options**: Newest, Popular, Price (Low to High), Price (High to Low)
- **Special Filters**: Featured products, Trending products

## How to Use

### 1. Start the Server
```bash
cd /workspace/server
npm run dev
```

### 2. Add Sample Data
```bash
cd /workspace
node add-sample-data.js
```

### 3. Start the Client
```bash
cd /workspace/client
npm run dev
```

### 4. Visit the Store
- Home page: `http://localhost:3000`
- Shop page: `http://localhost:3000/shop`
- Filter by category: `http://localhost:3000/shop?category=gadgets`

## Category Navigation

### Desktop Navigation
- Hover over "Categories" in the navbar to see dropdown
- Click any category to filter products

### Mobile Navigation
- Tap the hamburger menu
- Scroll down to see "Categories" section
- Tap any category to filter products

## Shop Page Features

### Desktop View
- Left sidebar with all filter options
- Main content area with product grid/list
- View toggle between grid and list layouts

### Mobile View
- Collapsible filter panel
- Touch-friendly category selection
- Responsive product cards

## API Endpoints

### Get Products with Filters
```
GET /api/products?category=gadgets&search=wireless&minPrice=50&maxPrice=200&sort=popular&featured=true
```

### Add Sample Data
```
POST /api/products/seed
```

## Customization

### Adding New Categories
1. Update the enum in `/workspace/server/models/Product.js`
2. Add category data in `/workspace/client/lib/categories.js`
3. Update the sample data in `/workspace/server/routes/products.js`

### Styling Categories
Modify the color schemes in `/workspace/client/lib/categories.js`:
```javascript
export const CATEGORY_DATA = {
  [CATEGORIES.GADGETS]: {
    name: 'Gadgets',
    color: 'bg-blue-100 text-blue-800', // Change these colors
    hoverColor: 'hover:bg-blue-200',
    borderColor: 'border-blue-200'
  }
}
```

## Sample Products Included

Each category includes 3 sample products with:
- Realistic product names and descriptions
- Pricing with discounts
- Stock quantities
- Ratings and reviews
- Featured/trending flags
- High-quality placeholder images

## Troubleshooting

### No Products Showing
1. Make sure the server is running
2. Add sample data using the script
3. Check browser console for errors

### Categories Not Working
1. Verify the category enum matches between frontend and backend
2. Check that the API is returning products with correct categories
3. Clear browser cache and reload

### Mobile Filters Not Working
1. Ensure JavaScript is enabled
2. Check for console errors
3. Try refreshing the page

## Next Steps

- Add more product images
- Implement product detail pages
- Add category-specific landing pages
- Implement advanced search with filters
- Add category-based recommendations