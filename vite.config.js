import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-mui': ['@mui/material', '@mui/icons-material'],
          'vendor-charts': ['apexcharts', 'react-apexcharts'],
          'vendor-state': ['@reduxjs/toolkit', 'react-redux', '@tanstack/react-query']
        }
      }
    }
  }
});
