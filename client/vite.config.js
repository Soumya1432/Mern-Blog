import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  server: { 
    cors: {
      origin: process.env.VITE_ORIGIN,
      methods: process.env.VITE_METHOD,
      credentials: true
    },
    proxy: {
      '/api': {
        target: process.env.VITE_API,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
