require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./src/routes/auth');
const ordersRoutes = require('./src/routes/orders');
const paymentsRoutes = require('./src/routes/payments');
const merchantsRoutes = require('./src/routes/merchants');
const transactionsRoutes = require('./src/routes/transactions');
const refundsRoutes = require('./src/routes/refunds');
const usersRoutes = require('./src/routes/users');

// Startup configuration validation
const requiredEnvVars = ['JWT_SECRET', 'AWS_REGION', 'AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY'];
const missing = requiredEnvVars.filter(key => !process.env[key]);
if (missing.length > 0) {
  console.warn('[WARN] Missing environment variables:', missing.join(', '));
  console.warn('[WARN] DynamoDB operations may fail if AWS credentials are not configured.');
}

const app = express();

app.use(cors());
app.use(express.json());

// Favicon handler — prevents 404 noise
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Main health/architecture check route
app.get('/', (req, res) => {
  res.json({ status: 'PayOnChain Gateway Active', version: '1.0.0' });
});

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/merchants', merchantsRoutes);
app.use('/api/transactions', transactionsRoutes);
app.use('/api/refunds', refundsRoutes);
app.use('/api/users', usersRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`PayOnChain server running on port ${PORT}`);
});