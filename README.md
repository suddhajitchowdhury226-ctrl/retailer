# Ray Retail - Wholesale E-commerce Platform

A full-stack e-commerce platform for wholesale retail business with admin, wholesaler, and retailer roles.

## 🚀 Tech Stack

### Frontend
- React 19 with Vite
- React Router DOM
- Tailwind CSS & Material-UI
- Axios for API calls
- Socket.io Client for real-time chat
- Stripe integration for payments

### Backend
- Node.js with Express
- MongoDB with Mongoose
- Socket.io for real-time features
- JWT authentication
- Stripe & PayPal payment integration
- Redis caching
- Winston logging

## 📦 Project Structure

```
Ray-Retail/
├── backend/          # Node.js/Express API
│   ├── config/       # Database & configuration
│   ├── Controllers/  # Route controllers
│   ├── Models/       # MongoDB models
│   ├── Routes/       # API routes
│   ├── Middleware/   # Auth & validation
│   └── app.js        # Main server file
│
└── frontend/         # React application
    ├── src/          # Source files
    ├── public/       # Static assets
    └── dist/         # Build output
```

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=5555
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
WEBHOOK_ENDPOINT_SECRET=your_webhook_secret
BASE_URL=your_backend_url
FRONTEND_URL=your_frontend_url
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
SHIPENGINE_API_KEY=your_shipengine_key
PAYPAL_MODE=sandbox_or_live
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
ADMIN_REGISTRATION_KEY=your_admin_key
```

### Frontend (.env)
```env
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
VITE_BASE_URL=your_backend_api_url
```

## 🚀 Deployment on Vercel

### Option 1: Deploy Both Frontend & Backend Together (Monorepo)

1. **Push your code to GitHub** (already done ✅)

2. **Go to Vercel Dashboard**
   - Visit: https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository: `tulu145/Ray-Retail`

3. **Configure Build Settings**
   - Framework Preset: `Other`
   - Root Directory: `./`
   - Build Command: Leave empty (handled by vercel.json)
   - Output Directory: Leave empty

4. **Add Environment Variables**
   
   **Backend Variables:**
   - `DATABASE_URL`
   - `JWT_SECRET`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_PUBLISHABLE_KEY`
   - `WEBHOOK_ENDPOINT_SECRET`
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `SHIPENGINE_API_KEY`
   - `PAYPAL_MODE`
   - `PAYPAL_CLIENT_ID`
   - `PAYPAL_CLIENT_SECRET`
   - `ADMIN_REGISTRATION_KEY`
   - `BASE_URL` (set to your Vercel URL)
   - `FRONTEND_URL` (set to your Vercel URL)
   
   **Frontend Variables:**
   - `VITE_STRIPE_PUBLISHABLE_KEY`
   - `VITE_BASE_URL` (set to your Vercel URL)

5. **Deploy!**
   - Click "Deploy"
   - Wait for deployment to complete

### Option 2: Deploy Frontend & Backend Separately (Recommended)

#### Deploy Backend:
1. Create new Vercel project
2. Import repository
3. Set Root Directory: `backend`
4. Add all backend environment variables
5. Deploy

#### Deploy Frontend:
1. Create another Vercel project
2. Import same repository
3. Set Root Directory: `frontend`
4. Framework Preset: `Vite`
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Add environment variables:
   - `VITE_STRIPE_PUBLISHABLE_KEY`
   - `VITE_BASE_URL` (your backend Vercel URL)
8. Deploy

## 📝 Post-Deployment Steps

1. **Update CORS Origins** in `backend/app.js`:
   ```javascript
   const allowedOrigins = [
     "https://your-frontend-url.vercel.app",
     // ... other origins
   ];
   ```

2. **Update Frontend API URL**:
   - Set `VITE_BASE_URL` to your backend Vercel URL

3. **Configure Stripe Webhooks**:
   - Go to Stripe Dashboard
   - Add webhook endpoint: `https://your-backend-url.vercel.app/webhook`
   - Update `WEBHOOK_ENDPOINT_SECRET`

4. **Test All Features**:
   - Authentication
   - Payment processing
   - Real-time chat
   - File uploads

## 🛠️ Local Development

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## ⚠️ Important Notes

- **File Uploads**: Vercel has a 4.5MB limit for serverless functions. Consider using AWS S3 or Cloudinary for file storage.
- **WebSockets**: Socket.io works on Vercel but may have limitations. Consider using Vercel's Edge Functions or a dedicated WebSocket server.
- **Database**: Ensure MongoDB Atlas allows connections from Vercel IPs (0.0.0.0/0 for simplicity).
- **Environment Variables**: Never commit `.env` files. Always use Vercel's environment variable settings.

## 📄 License

Private - All rights reserved

## 👥 Support

For issues or questions, contact the development team.
