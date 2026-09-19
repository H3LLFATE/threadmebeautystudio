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
          DEFAULT: '#FDFBF7', // Very soft warm cream
          50: '#FFFFFF',
          100: '#FEFDFB',
          200: '#FDFBF7',
          300: '#F8F4EA',
          400: '#F2EAD6',
          500: '#EBE0C2',
        },
        purple: {
          DEFAULT: '#4A2B66', // Deep royal purple based on typical elegant logos
          light: '#654285',
          dark: '#301847',
        },
        gold: {
          DEFAULT: '#C5A059', // Elegant, not too yellow gold
          light: '#D4B87C',
          dark: '#9B7B3E',
        },
        green: {
          DEFAULT: '#4A5D4E', // Soft botanical green
          light: '#6B8270',
          dark: '#334236',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean modern typography
        serif: ['Playfair Display', 'serif'], // Elegant editorial headers
      },
      backgroundImage: {
        'botanical': "url('/src/assets/images/background.png')",
      }
    },
  },
  plugins: [],
}
