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

// Allow all origins or specified ones (production friendly)
app.use(
  cors({
    origin: true,
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
    console.log(`🚀 CMS server running on port ${PORT}`);
    console.log(`🔑 Admin panel ready`);
  });
};

start();
