# 🛍️ TrendVibe Store

<div align="center">

![TrendVibe Store](https://img.shields.io/badge/TrendVibe-Store-ff6b6b?style=for-the-badge&logo=shopping-cart&logoColor=white)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black?style=for-the-badge&logo=next.js)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)

**A modern, full-stack e-commerce platform for trendy gadgets and lifestyle products**

[🚀 Live Demo](#) • [📖 Documentation](#) • [🐛 Report Bug](#) • [✨ Request Feature](#)

</div>

---

## ✨ Features

### 🎨 Frontend Features
- **Modern UI/UX** - Built with Next.js 14 and Tailwind CSS
- **Responsive Design** - Mobile-first approach with beautiful animations
- **Interactive Shopping Cart** - Real-time cart management with context API
- **Product Gallery** - High-quality image galleries with zoom functionality
- **Search & Filter** - Advanced product search and filtering capabilities
- **User Authentication** - Secure login and registration system
- **Order Tracking** - Real-time order status updates
- **WhatsApp Integration** - Direct customer support via WhatsApp

### 🔧 Backend Features
- **RESTful API** - Clean and well-documented API endpoints
- **Database Management** - MongoDB with Mongoose ODM
- **Authentication & Authorization** - JWT-based secure authentication
- **Payment Integration** - Razorpay payment gateway integration
- **File Upload** - Multer for handling product images
- **Email Notifications** - Automated order confirmations and updates
- **Data Validation** - Express-validator for input validation
- **Error Handling** - Comprehensive error handling middleware

### 🛡️ Security & Performance
- **CORS Protection** - Cross-origin resource sharing configuration
- **Password Hashing** - bcryptjs for secure password storage
- **Input Validation** - Server-side validation for all inputs
- **Error Logging** - Comprehensive error tracking and logging
- **Rate Limiting** - API rate limiting for security

---

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Charts**: Chart.js with React Chart.js 2
- **Animations**: Framer Motion
- **Notifications**: React Hot Toast
- **Image Gallery**: React Image Gallery

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Authentication**: JWT (jsonwebtoken)
- **File Upload**: Multer
- **Email**: Nodemailer
- **Payment**: Razorpay
- **Validation**: Express Validator

### Development Tools
- **Package Manager**: npm
- **Process Manager**: Concurrently
- **Development Server**: Nodemon
- **Linting**: ESLint
- **TypeScript**: Full TypeScript support

---

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- MongoDB (local or cloud instance)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/trendvibe-store.git
   cd trendvibe-store
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Environment Setup**
   ```bash
   # Create .env file in server directory
   cd server
   cp .env.example .env
   ```
   
   Configure your environment variables:
   ```env
   MONGODB_URI=mongodb://localhost:27017/trendvibe-store
   JWT_SECRET=your-super-secret-jwt-key
   RAZORPAY_KEY_ID=your-razorpay-key
   RAZORPAY_KEY_SECRET=your-razorpay-secret
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start both frontend (http://localhost:3000) and backend (http://localhost:5000) servers.

---

## 🎯 Usage

### Development Mode
```bash
# Start both frontend and backend
npm run dev

# Start only frontend
npm run client

# Start only backend
npm run server
```

### Production Mode
```bash
# Build the frontend
npm run build

# Start production server
npm start
```

### API Endpoints

#### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

#### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id` - Update order status (Admin)

#### Users
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

#### Messages
- `GET /api/messages` - Get all messages (Admin)
- `POST /api/messages` - Send new message

---

## 📁 Project Structure

```
trendvibe-store/
├── client/                 # Next.js frontend
│   ├── app/               # App router pages
│   ├── components/        # React components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── WhatsAppButton.js
│   ├── context/           # React context providers
│   │   └── CartContext.js
│   └── package.json
├── server/                # Express.js backend
│   ├── middleware/        # Custom middleware
│   │   └── auth.js
│   ├── models/           # MongoDB models
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Message.js
│   ├── routes/           # API routes
│   │   ├── users.js
│   │   ├── products.js
│   │   ├── orders.js
│   │   └── messages.js
│   └── index.js          # Server entry point
├── package.json          # Root package.json
└── README.md
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

**TrendVibe Store Team**
- **Frontend Development**: Next.js, React, Tailwind CSS
- **Backend Development**: Node.js, Express, MongoDB
- **UI/UX Design**: Modern, responsive design
- **DevOps**: Automated deployment and monitoring

---

## 📞 Support

- **Email**: support@trendvibestore.com
- **WhatsApp**: +1 (555) 123-4567
- **GitHub Issues**: [Report a bug or request a feature](https://github.com/yourusername/trendvibe-store/issues)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Express.js](https://expressjs.com/) - Fast, unopinionated web framework
- [MongoDB](https://www.mongodb.com/) - The database for modern applications
- [Razorpay](https://razorpay.com/) - Payment gateway integration

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by the TrendVibe Store Team

</div>