/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FAF8F4',
          DEFAULT: '#F8F6F1',
          200: '#F0ECE3',
          300: '#E4DDD0',
        },
        darkGreen: {
          50: '#F1F4F3',
          100: '#DDE4E1',
          light: '#354E46',
          DEFAULT: '#263B35',
          dark: '#1C2D28',
          900: '#14201D',
        },
        sageGreen: {
          50: '#F5F7F4',
          light: '#A5B49F',
          DEFAULT: '#8A9B83',
          dark: '#6E7F67',
        },
        gold: {
          50: '#FAF7F2',
          light: '#C9B28D',
          DEFAULT: '#B79B70',
          dark: '#9E8256',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
