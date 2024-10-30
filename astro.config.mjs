import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';

export default defineConfig({
    site: 'https://meome.com', // Replace with your actual domain
    integrations: [
        tailwind({
            // Ensure Tailwind classes are included
            applyBaseStyles: true,
        }),
        sitemap(),
        prefetch(),
    ],
});