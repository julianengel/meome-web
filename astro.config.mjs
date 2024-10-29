import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';

export default defineConfig({
    integrations: [
        tailwind({
            // Ensure Tailwind classes are included
            applyBaseStyles: true,
        }),
        sitemap(),
        prefetch(),
    ],
});