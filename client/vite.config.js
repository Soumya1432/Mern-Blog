import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: { 
     cors:{ origin: ['http://localhost:3000'],
      methods:['GET','POST','PUT','PATCH','DELETE'],
       credentials:true },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
    
  },
  plugins: [react()],
});
