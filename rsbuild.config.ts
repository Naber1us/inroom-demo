import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { pluginSass } from '@rsbuild/plugin-sass';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
    plugins: [pluginReact(), pluginSass()],
    source: {
        entry: {
            index: './src/app/App.tsx',
        },
    },
    resolve: {
        alias: {
            '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
            '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
            '@widgets': fileURLToPath(
                new URL('./src/widgets', import.meta.url),
            ),
            '@features': fileURLToPath(
                new URL('./src/features', import.meta.url),
            ),
            '@entities': fileURLToPath(
                new URL('./src/entities', import.meta.url),
            ),
            '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
        },
    },
});
