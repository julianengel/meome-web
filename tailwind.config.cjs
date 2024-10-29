/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'light-cyan': '#E0FBFC',
                'light-blue': '#C2DFE3',
                'cadet-gray': '#9DB4C0',
                'paynes-gray': '#5C6B73',
                'gunmetal': '#253237',
            },
            animation: {
                'fade-in': 'fade-in 0.5s ease-out forwards',
                'slide-in': 'slide-in 0.5s ease-out forwards',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'slide-in': {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
            },
            // Add gradient utilities
            backgroundImage: {
                'gradient-custom': 'linear-gradient(180deg, #E0FBFC, #C2DFE3, #9DB4C0, #5C6B73, #253237)',
                'gradient-custom-radial': 'radial-gradient(#E0FBFC, #C2DFE3, #9DB4C0, #5C6B73, #253237)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
};