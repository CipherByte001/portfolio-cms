import express from 'express';
import payload from 'payload';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import dns from 'dns';

// Fix for Windows / ISP DNS blocking MongoDB Atlas SRV lookups
dns.setServers(['8.8.8.8', '1.1.1.1']);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS — allow local ports and production origins
const allowedOrigins = [
  'http://localhost:3001',
  'http://localhost:5173',
  'http://127.0.0.1:3001',
  'http://127.0.0.1:5173',
  ...(process.env.CORS_ORIGIN || '').split(',').map((o) => o.trim()).filter(Boolean),
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. same-origin, curl, server-side) and allowed origins
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      // Fallback: allow localhost regardless of port
      if (origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:')) {
        return callback(null, true);
      }
      callback(new Error(`CORS blocked: ${origin}`));
    },
    credentials: true,
  })
);

// Redirect root to admin
app.get('/', (_, res) => res.redirect('/admin'));

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || 'fallback-secret-change-me',
    mongoURL: process.env.MONGODB_URI || 'mongodb://localhost/portfolio-cms',
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  app.listen(PORT, () => {
    console.log(`🚀 CMS server running on http://localhost:${PORT}`);
    console.log(`🔑 Admin panel: http://localhost:${PORT}/admin`);
  });
};

start();
