import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					'vendor-react': ['react', 'react-dom', 'react-router-dom'],
					'vendor-motion': ['framer-motion'],
					'vendor-swiper': ['swiper'],
					'vendor-lightbox': ['yet-another-react-lightbox'],
				},
			},
		},
		// Improve chunk loading performance
		chunkSizeWarningLimit: 600,
	},
});
