# TrendVibe Store - E-commerce Platform

A modern, full-stack e-commerce platform built with Next.js, Express.js, MongoDB, and Firebase Authentication. Features a comprehensive product catalog with categories, advanced filtering, user authentication, and a responsive design.

## 🚀 Features

### Authentication & User Management
- ✅ Firebase email/password authentication
- ✅ User registration and login forms with validation
- ✅ Protected routes and user profile management
- ✅ Server-side token verification with Firebase Admin SDK
- ✅ Responsive authentication UI

### Product Catalog & Categories
- ✅ 5 Product Categories: Gadgets, Fitness, Beauty, Home Decor, Auto Accessories
- ✅ Advanced filtering (category, search, price range, sort options)
- ✅ Featured and trending products
- ✅ Grid and list view modes
- ✅ Product ratings and reviews system

### Shopping Experience
- ✅ Shopping cart functionality
- ✅ Product search and filtering
- ✅ Responsive design for all devices
- ✅ Modern UI with Tailwind CSS
- ✅ Toast notifications for user feedback

### Backend Features
- ✅ RESTful API with Express.js
- ✅ MongoDB database with Mongoose
- ✅ JWT and Firebase authentication
- ✅ Product management endpoints
- ✅ User profile management
- ✅ Sample data seeding

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **Firebase Auth** - Authentication
- **React Icons** - Icon library
- **React Hot Toast** - Notifications
- **Framer Motion** - Animations

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Firebase Admin SDK** - Server-side auth
- **JWT** - Token authentication
- **Bcryptjs** - Password hashing

## 📁 Project Structure

```
trendvibe-store/
├── client/                 # Next.js frontend
│   ├── app/               # App router pages
│   │   ├── account/       # User profile page
│   │   ├── login/         # Login page
│   │   ├── register/      # Registration page
│   │   ├── shop/          # Product catalog
│   │   └── page.js        # Home page
│   ├── components/        # React components
│   │   ├── auth/          # Authentication components
│   │   └── CategoryFilter.js
│   ├── context/           # React contexts
│   │   ├── AuthContext.js
│   │   └── CartContext.js
│   ├── lib/               # Utility libraries
│   │   ├── firebase.js
│   │   ├── api.js
│   │   └── categories.js
│   └── package.json
├── server/                # Express.js backend
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── lib/               # Server utilities
│   └── package.json
├── FIREBASE_SETUP.md      # Firebase setup guide
├── CATEGORIES_SETUP.md    # Category system guide
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Firebase project
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kundanch240/Test-repo-.git
   cd Test-repo-
   ```

2. **Install dependencies**
   ```bash
   # Install client dependencies
   cd client
   npm install
   
   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Set up environment variables**
   
   **Client (.env.local)**
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```
   
   **Server (.env)**
   ```env
   MONGODB_URI=mongodb://localhost:27017/trendvibe-store
   JWT_SECRET=your_jwt_secret
   FIREBASE_PROJECT_ID=your_project_id
   FIREBASE_PRIVATE_KEY_ID=your_private_key_id
   FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key\n-----END PRIVATE KEY-----\n"
   FIREBASE_CLIENT_EMAIL=your_client_email
   FIREBASE_CLIENT_ID=your_client_id
   PORT=5000
   ```

4. **Set up Firebase**
   - Follow the detailed guide in `FIREBASE_SETUP.md`
   - Enable Email/Password authentication
   - Get your Firebase configuration

5. **Start the application**
   ```bash
   # Start the server (Terminal 1)
   cd server
   npm run dev
   
   # Start the client (Terminal 2)
   cd client
   npm run dev
   ```

6. **Add sample data**
   ```bash
   # From the root directory
   node add-sample-data.js
   ```

7. **Visit the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api

## 📚 Documentation

- [Firebase Setup Guide](FIREBASE_SETUP.md) - Complete Firebase configuration
- [Category System Guide](CATEGORIES_SETUP.md) - Category management and filtering

## 🎯 API Endpoints

### Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Firebase Auth
- `GET /api/firebase-auth/profile` - Get Firebase user profile
- `PUT /api/firebase-auth/profile` - Update Firebase user profile
- `POST /api/firebase-auth/verify-token` - Verify Firebase token

### Products
- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)
- `POST /api/products/seed` - Add sample products
- `POST /api/products/:id/reviews` - Add product review

### Query Parameters for Products
- `category` - Filter by category (gadgets, fitness, beauty, home-decor, auto-accessories)
- `search` - Search in name, description, and tags
- `minPrice` / `maxPrice` - Price range filtering
- `sort` - Sort by (newest, popular, price-low, price-high)
- `featured` - Filter featured products
- `trending` - Filter trending products

## 🎨 Categories

The platform includes 5 main product categories:

1. **Gadgets** 📱 - Latest tech gadgets and innovative devices
2. **Fitness** 💪 - Fitness equipment and wellness products
3. **Beauty** 💄 - Beauty and personal care products
4. **Home Decor** 🏠 - Home decoration and lifestyle items
5. **Auto Accessories** 🚗 - Car accessories and automotive products

## 🔧 Development

### Available Scripts

**Client**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

**Server**
```bash
npm run dev      # Start with nodemon
npm start        # Start production server
```

### Adding New Features

1. **New Categories**: Update the category enum in `server/models/Product.js` and add category data in `client/lib/categories.js`
2. **New API Endpoints**: Add routes in `server/routes/`
3. **New Components**: Add to `client/components/`
4. **New Pages**: Add to `client/app/`

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (Railway/Heroku)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically

### Database (MongoDB Atlas)
1. Create a MongoDB Atlas cluster
2. Update `MONGODB_URI` in server environment variables
3. Configure network access and database user

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Firebase for authentication services
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- React Icons for the beautiful icon set

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the development team.

---

**Happy Shopping! 🛍️**