import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRouter from './routes/api.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
// CORS configuration - Allow all connections for local dev
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', apiRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'live', time: new Date() });
});

// Database connection & Server initialization
mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 2000 })
  .then(() => {
    console.log('✅ DATABASE CONNECTION LIVE (MongoDB)');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    console.log('⚠️ Running server with database mock fallback for development...');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT} (Offline/No DB Mode)`);
    });
  });
