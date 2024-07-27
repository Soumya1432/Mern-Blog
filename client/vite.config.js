import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: { 
     cors:{ origin: import.meta.env.VITE_ORIGIN,
      methods:import.meta.env.VITE_METHOD,
       credentials:true },
    proxy: {
      '/api': {
        target: import.meta.env.VITE_API,
        secure: false,
      },
    },
    
  },
  plugins: [react()],
});
