import type { Config } from "tailwindcss";

const config: Config = {
content: [
"./pages/**/*.{js,ts,jsx,tsx,mdx}",
"./components/**/*.{js,ts,jsx,tsx,mdx}",
"./app/**/*.{js,ts,jsx,tsx,mdx}",
],
theme: {
extend: {
    fontFamily: {
    sans: ["var(--font-sans)", "sans-serif"],
    serif: ["var(--font-serif)", "serif"],
    mono: ["var(--font-mono)", "monospace"],
    },
    // Define your custom animations here
    animation: {
    'fade-in': 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    'spin-slow': 'spinSlow 20s linear infinite',
    },
    keyframes: {
    fadeIn: {
        '0%': { opacity: '0', transform: 'scale(0.98) translateY(2px)' },
        '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
    },
    spinSlow: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
    },
    }
},
},
plugins: [],
};
export default config;