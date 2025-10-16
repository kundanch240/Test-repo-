const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/users', require('./routes/users'));
app.use('/api/messages', require('./routes/messages'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ message: 'TrendVibe Store API is running!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/trendvibe-store', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  
  // Create default admin user if it doesn't exist
  createDefaultAdmin();
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
  process.exit(1);
});

// Create default admin user
async function createDefaultAdmin() {
  try {
    const User = require('./models/User');
    const adminExists = await User.findOne({ email: 'admin@trendvibe.com' });
    
    if (!adminExists) {
      const admin = new User({
        name: 'Admin',
        email: 'admin@trendvibe.com',
        password: 'admin123',
        role: 'admin'
      });
      
      await admin.save();
      console.log('Default admin user created: admin@trendvibe.com / admin123');
    }
  } catch (error) {
    console.error('Error creating default admin:', error);
  }
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});