import { buildConfig } from 'payload/config';
import path from 'path';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { Projects } from './collections/Projects';
import { Research } from './collections/Research';
import { Achievements } from './collections/Achievements';
import { Recommendations } from './collections/Recommendations';
import { Skills } from './collections/Skills';
import { Messages } from './collections/Messages';
import { About } from './globals/About';
import { Resume } from './globals/Resume';

const allowedOrigins = [
  'http://localhost:3001',
  'http://localhost:5173',
  'http://127.0.0.1:3001',
  'http://127.0.0.1:5173',
  'https://portfolio-cms-rpmi.onrender.com',
  ...(process.env.CORS_ORIGIN || '').split(',').map((o) => o.trim()).filter(Boolean),
];

export default buildConfig({
  // ── Production Server URL for Cookies & CSRF ──────────────────────────
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'https://portfolio-cms-rpmi.onrender.com',

  // ── Admin UI ─────────────────────────────────────────────────────────
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— Portfolio CMS',
    },
  },

  // ── Collections ───────────────────────────────────────────────────────
  collections: [
    Users,
    Media,
    Projects,
    Research,
    Skills,
    Achievements,
    Recommendations,
    Messages,
  ],

  // ── Globals ───────────────────────────────────────────────────────────
  globals: [About, Resume],

  // ── CORS / CSRF ───────────────────────────────────────────────────────
  cors: allowedOrigins,
  csrf: allowedOrigins,

  // ── Media ─────────────────────────────────────────────────────────────
  upload: {
    limits: {
      fileSize: 15_000_000, // 15MB
    },
  },

  // ── TypeScript types ──────────────────────────────────────────────────
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },

  // ── GraphQL disabled ──────────────────────────────────────────────────
  graphQL: {
    disable: true,
  },
});
