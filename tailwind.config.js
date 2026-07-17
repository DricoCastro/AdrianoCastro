/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'regal-blue': '#243c5a',
        'biscay': '#1C3B64',
        'blackPearl': "#030b16",
        'royalBlue': "#3444f1",
        'white': "#FFFFFF",
        'black': "#010101",
        'whiteOpacity35': "#FFFFFF35",
        'red': "#FF0000",
        'gallery': "#ECECEC",
        'alabaster': "#f7f7f7",
        'alabasterDark': "#F5F5F5",
        'mirage': "#181924",
        'gray': "#8E8E8E",
        'codGray': "#0B0B0B",
        "raven": "#212122",
        "snow": "#f9f9f9",
        'gradientPink': "#E8519E",
        'gradientPurple': "#655EE1",
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-up-delay-1': 'fadeInUp 0.6s ease-out 0.1s forwards',
        'fade-in-up-delay-2': 'fadeInUp 0.6s ease-out 0.2s forwards',
        'fade-in-up-delay-3': 'fadeInUp 0.6s ease-out 0.3s forwards',
        'fade-in-up-delay-4': 'fadeInUp 0.6s ease-out 0.4s forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
        'slide-out-right': 'slideOutRight 0.3s ease-in forwards',
      },
    },
  },
  plugins: [],
}
