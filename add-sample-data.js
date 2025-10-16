const axios = require('axios');

const API_BASE_URL = 'http://localhost:5000/api';

async function addSampleData() {
  try {
    console.log('Adding sample products...');
    
    const response = await axios.post(`${API_BASE_URL}/products/seed`);
    
    console.log('✅ Sample data added successfully!');
    console.log(`📦 Added ${response.data.products} products`);
    console.log('\n📊 Products by category:');
    
    Object.entries(response.data.categories).forEach(([category, count]) => {
      console.log(`   ${category}: ${count} products`);
    });
    
    console.log('\n🚀 You can now visit http://localhost:3000 to see the products!');
    
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      console.log('❌ Server is not running. Please start the server first:');
      console.log('   cd /workspace/server && npm run dev');
    } else {
      console.error('❌ Error adding sample data:', error.message);
    }
  }
}

addSampleData();