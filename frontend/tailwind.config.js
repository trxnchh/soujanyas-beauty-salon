/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parlourGold: {
          DEFAULT: '#D4AF37',
          light: '#F5E6C4',
          hover: '#E5C158',
          dark: '#AA841C',
        },
        parlourDark: {
          DEFAULT: '#0D0D0D',
          light: '#161616',
          accent: '#222222',
        }
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

