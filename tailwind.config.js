/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/home_components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'dark-background': 'var(--color-dark-background)',
                'surface': 'var(--color-surface)',
                'border': 'var(--color-border)',
                'surface-panel': 'var(--color-surface-panel)',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}
