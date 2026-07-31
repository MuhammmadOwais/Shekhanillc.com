const express = require('express');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');
const healthRoutes = require('./routes/healthRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS & JSON Parsing
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Mount API Routes
app.use('/api', productRoutes);
app.use('/api', healthRoutes);
app.use('/api/auth', authRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🚀 BACKEND API Server running on port ${PORT}`);
  console.log(`📍 Products API : http://localhost:${PORT}/api/products`);
  console.log(`📍 Auth Signup  : http://localhost:${PORT}/api/auth/signup`);
  console.log(`📍 Health Check : http://localhost:${PORT}/api/health`);
  console.log(`==================================================`);
});

module.exports = app;
