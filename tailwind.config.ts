import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Indian-inspired warm tones
        saffron: {
          50: '#fff8f1',
          100: '#feecdc',
          200: '#fcd9bd',
          300: '#f9c08a',
          400: '#f6a54b',
          500: '#f38c28',
          600: '#e4731c',
          700: '#bd5918',
          800: '#96471b',
          900: '#793c19',
        },
        // Deep burgundy/maroon (traditional Indian)
        burgundy: {
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d2d9',
          300: '#f4adb9',
          400: '#ed7f94',
          500: '#e05270',
          600: '#cc325a',
          700: '#ab2549',
          800: '#8f2241',
          900: '#722039',
        },
        // Vancouver forest/ocean inspired
        forest: {
          50: '#f3f8f6',
          100: '#e0ede8',
          200: '#c3dbd2',
          300: '#9ac2b4',
          400: '#6da392',
          500: '#4d8776',
          600: '#3c6c5f',
          700: '#34584e',
          800: '#2d4841',
          900: '#283d38',
        },
        // Elegant cream/off-white
        cream: {
          50: '#fefdfb',
          100: '#fdfbf7',
          200: '#faf6ed',
          300: '#f5efe0',
          400: '#ede3cc',
          500: '#e3d4b5',
          600: '#d4bf94',
          700: '#bfa26d',
          800: '#a08553',
          900: '#846d46',
        },
        // Deep charcoal for text
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#1a1a1a',
        },
        // Gold accents
        gold: {
          50: '#fbf9eb',
          100: '#f6f1cd',
          200: '#efe39d',
          300: '#e5cf64',
          400: '#dcba39',
          500: '#cca32c',
          600: '#b08024',
          700: '#8d5e20',
          800: '#754c22',
          900: '#644022',
        },
      },
      fontFamily: {
        // Elegant serif for headings
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        // Clean sans-serif for body
        body: ['Raleway', 'system-ui', 'sans-serif'],
        // Artistic accent font
        accent: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'mandala-pattern': "url('/mandala-pattern.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
