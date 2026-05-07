import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), cloudflare()],
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						if (
							id.includes('react') ||
							id.includes('react-dom') ||
							id.includes('react-router-dom')
						) {
							return 'vendor-react';
						}
						if (id.includes('framer-motion'))
							return 'vendor-motion';
						if (id.includes('swiper')) return 'vendor-swiper';
						if (id.includes('yet-another-react-lightbox'))
							return 'vendor-lightbox';
					}
				},
			},
		},
		// Improve chunk loading performance
		chunkSizeWarningLimit: 600,
	},
});