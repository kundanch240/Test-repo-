# Firebase Authentication Setup

This guide will help you set up Firebase Authentication for the TrendVibe Store application.

## Prerequisites

1. A Google account
2. Node.js and npm installed
3. MongoDB running locally or a MongoDB Atlas account

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter a project name (e.g., "trendvibe-store")
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Authentication

1. In your Firebase project, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Enable "Email/Password" authentication
5. Click "Save"

## Step 3: Get Firebase Configuration

1. In your Firebase project, go to "Project settings" (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" and select the web icon (`</>`)
4. Register your app with a nickname (e.g., "TrendVibe Client")
5. Copy the Firebase configuration object

## Step 4: Configure Client Environment

1. Open `/workspace/client/.env.local`
2. Replace the placeholder values with your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_actual_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_actual_app_id

NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Step 5: Set Up Firebase Admin SDK

1. In your Firebase project, go to "Project settings"
2. Go to the "Service accounts" tab
3. Click "Generate new private key"
4. Download the JSON file
5. Open `/workspace/server/.env` (create if it doesn't exist)
6. Add the following environment variables:

```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/trendvibe-store

# JWT Secret (for fallback authentication)
JWT_SECRET=your_jwt_secret_here

# Firebase Admin SDK
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY_ID=your_private_key_id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key_here\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_CLIENT_ID=your_client_id

# Server
PORT=5000
```

Replace the values with the actual values from your downloaded service account JSON file.

## Step 6: Install Dependencies

1. Install client dependencies:
```bash
cd /workspace/client
npm install
```

2. Install server dependencies:
```bash
cd /workspace/server
npm install
```

## Step 7: Start the Application

1. Start the server:
```bash
cd /workspace/server
npm run dev
```

2. Start the client (in a new terminal):
```bash
cd /workspace/client
npm run dev
```

## Step 8: Test the Authentication

1. Open your browser and go to `http://localhost:3000`
2. Click "Sign Up" to create a new account
3. Click "Sign In" to log in with an existing account
4. Test the protected routes like `/account`

## Features Included

- ✅ Email/Password Registration
- ✅ Email/Password Login
- ✅ Protected Routes
- ✅ User Profile Management
- ✅ Firebase Admin SDK Integration
- ✅ Server-side Token Verification
- ✅ Responsive UI Components
- ✅ Form Validation
- ✅ Error Handling
- ✅ Toast Notifications

## Troubleshooting

### Common Issues

1. **"Firebase: Error (auth/invalid-api-key)"**
   - Check that your API key is correct in `.env.local`
   - Make sure the environment variable names start with `NEXT_PUBLIC_`

2. **"Firebase: Error (auth/configuration-not-found)"**
   - Verify all Firebase configuration values are set correctly
   - Check that the project ID matches in both client and server configs

3. **"Token is not valid" error on server**
   - Ensure Firebase Admin SDK is properly configured
   - Check that the service account JSON values are correct
   - Verify the private key is properly formatted with `\n` characters

4. **CORS errors**
   - Make sure the server is running on the correct port
   - Check that the `NEXT_PUBLIC_API_URL` matches your server URL

### Getting Help

If you encounter issues:
1. Check the browser console for client-side errors
2. Check the server console for server-side errors
3. Verify all environment variables are set correctly
4. Ensure Firebase project is properly configured

## Security Notes

- Never commit `.env` files to version control
- Keep your Firebase service account private key secure
- Use environment variables for all sensitive configuration
- Consider implementing additional security measures for production