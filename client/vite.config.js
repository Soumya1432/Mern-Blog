import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  server: { 
    cors: {
      origin: import.meta.env.VITE_ORIGIN,
      credentials: true
    },
    proxy: {
      '/api': {
        target: import.meta.env.VITE_API,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
