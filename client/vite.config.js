import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';
import process from "process"
// Load environment variables from .env file
dotenv.config({path: "./.env"});

export default defineConfig({
  server: { 
    cors: {
      origin: process.env.VITE_ORIGIN,
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
