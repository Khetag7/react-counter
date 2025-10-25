import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@components': resolve(__dirname, './src/components'),
            '@pages': resolve(__dirname, './src/pages'),
            '@assets': resolve(__dirname, './src/assets'),
            '@styles': resolve(__dirname, './src/assets/styles'),
            '@hooks': resolve(__dirname, './src/hooks'),
            '@utils': resolve(__dirname, './src/utils'),
            '@constants': resolve(__dirname, './src/constants'),
            '@layouts': resolve(__dirname, './src/components/layout'),
        },
    },
});
