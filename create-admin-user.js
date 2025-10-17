const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
require('dotenv').config()

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/trendvibe-store', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const User = require('./server/models/User')

async function createAdminUser() {
  try {
    // Check if admin user already exists
    const existingAdmin = await User.findOne({ email: 'admin@trendvibe.com' })
    if (existingAdmin) {
      console.log('Admin user already exists!')
      return
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10)
    
    const adminUser = new User({
      name: 'Admin User',
      email: 'admin@trendvibe.com',
      password: hashedPassword,
      role: 'admin'
    })

    await adminUser.save()
    console.log('Admin user created successfully!')
    console.log('Email: admin@trendvibe.com')
    console.log('Password: admin123')
    console.log('Role: admin')
    
  } catch (error) {
    console.error('Error creating admin user:', error)
  } finally {
    mongoose.connection.close()
  }
}

createAdminUser()