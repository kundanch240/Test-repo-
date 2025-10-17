# Admin Panel Setup Guide

This guide explains how to set up and use the admin panel for managing products in the TrendVibe Store.

## 🚀 Features

### Product Management
- ✅ **Add Products**: Create new products with full details
- ✅ **Edit Products**: Update existing product information
- ✅ **Delete Products**: Remove products from the store
- ✅ **View Products**: Grid and list view modes
- ✅ **Search & Filter**: Find products by name, category, price
- ✅ **Real-time Updates**: Changes reflect immediately in shop page

### Admin Features
- ✅ **Role-based Access**: Only admin users can access the panel
- ✅ **Authentication**: Secure admin login required
- ✅ **Responsive Design**: Works on desktop and mobile
- ✅ **Bulk Operations**: Manage multiple products efficiently

## 🛠️ Setup Instructions

### 1. Create Admin User

First, create an admin user in your database:

```bash
# From the root directory
node create-admin-user.js
```

This creates an admin user with:
- **Email**: admin@trendvibe.com
- **Password**: admin123
- **Role**: admin

### 2. Access Admin Panel

1. **Login as Admin**:
   - Go to `/login`
   - Use the admin credentials created above
   - Or register a new user and manually set role to 'admin' in database

2. **Navigate to Admin Panel**:
   - Click on your user menu in the navbar
   - Select "Admin Panel" (only visible for admin users)
   - Or go directly to `/admin`

### 3. Admin Panel Interface

#### Header Section
- **Title**: "Admin Panel" with description
- **Add Product Button**: Quick access to create new products

#### Filters & Search
- **Search Bar**: Find products by name or description
- **Category Filter**: Filter by product category
- **Sort Options**: Sort by name, price, date
- **View Toggle**: Switch between grid and list views

#### Product Management
- **Product Cards**: Display product information
- **Edit Button**: Modify product details
- **Delete Button**: Remove product (with confirmation)
- **Product Details**: Name, price, category, stock, ratings

## 📝 Product Management

### Adding a New Product

1. Click "Add Product" button
2. Fill in the product form:
   - **Product Name** (required)
   - **Description** (required)
   - **Price** (required)
   - **Original Price** (optional)
   - **Stock Quantity** (required)
   - **Category** (required)
   - **Discount %** (optional)
   - **Product Images** (at least one required)
   - **Tags** (comma-separated)
   - **Featured Product** (checkbox)
   - **Trending Product** (checkbox)

3. Click "Add Product" to save

### Editing a Product

1. Click the edit button on any product card
2. Modify the product information
3. Click "Update Product" to save changes

### Deleting a Product

1. Click the delete button on any product card
2. Confirm the deletion in the popup
3. Product will be permanently removed

## 🔧 Technical Details

### API Endpoints Used

- `GET /api/products` - Fetch all products
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Authentication

- Admin panel requires user to be logged in
- User must have `role: 'admin'` in database
- Uses Firebase authentication for client-side
- Server-side validation with JWT tokens

### State Management

- **ProductContext**: Global state management for products
- **Real-time Updates**: Changes reflect immediately across the app
- **Optimistic Updates**: UI updates before server confirmation

### Components Structure

```
client/
├── app/admin/
│   └── page.js                 # Main admin page
├── components/admin/
│   ├── ProductForm.js         # Add/Edit product form
│   └── ProductCard.js         # Product display component
└── context/
    └── ProductContext.js      # Global product state
```

## 🎨 Customization

### Adding New Fields

1. **Update Product Model** (`server/models/Product.js`):
   ```javascript
   newField: {
     type: String,
     required: false
   }
   ```

2. **Update Product Form** (`client/components/admin/ProductForm.js`):
   ```javascript
   const [formData, setFormData] = useState({
     // ... existing fields
     newField: ''
   })
   ```

3. **Update Product Card** (`client/components/admin/ProductCard.js`):
   ```javascript
   <div>{product.newField}</div>
   ```

### Styling Changes

- Admin panel uses Tailwind CSS
- Main styles in `client/app/globals.css`
- Component-specific styles in individual files

## 🔒 Security Considerations

### Authentication
- Admin panel is protected by role-based access
- Firebase authentication required
- Server-side role validation

### Data Validation
- Client-side form validation
- Server-side data validation
- Required field checks
- Data type validation

### Error Handling
- Try-catch blocks for all API calls
- User-friendly error messages
- Toast notifications for feedback

## 🚀 Deployment

### Environment Variables

Ensure these are set in your production environment:

```env
# Client (.env.local)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_API_URL=your_api_url

# Server (.env)
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY_ID=your_private_key_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_CLIENT_ID=your_client_id
```

### Production Checklist

- [ ] Admin user created
- [ ] Environment variables configured
- [ ] Firebase project set up
- [ ] MongoDB database connected
- [ ] SSL certificate installed
- [ ] Admin panel accessible
- [ ] Product CRUD operations working

## 🐛 Troubleshooting

### Common Issues

1. **Admin Panel Not Accessible**
   - Check if user has admin role
   - Verify Firebase authentication
   - Check browser console for errors

2. **Products Not Loading**
   - Check API endpoint connectivity
   - Verify MongoDB connection
   - Check server logs

3. **Form Validation Errors**
   - Ensure all required fields are filled
   - Check image URL format
   - Verify price and stock are numbers

4. **Permission Denied**
   - User must be logged in
   - User must have admin role
   - Check server-side authentication

### Debug Steps

1. Check browser console for errors
2. Check server logs
3. Verify database connection
4. Test API endpoints directly
5. Check user role in database

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section
2. Review server logs
3. Verify environment variables
4. Test with a fresh admin user
5. Check Firebase authentication status

---

**Happy Admin-ing! 🛠️**