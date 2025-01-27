/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-12deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-12deg)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        slideIn: 'slideIn 0.5s ease-out',
        fadeIn: 'fadeIn 0.5s ease-out',
        scaleIn: 'scaleIn 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
      }
    },
  },
  plugins: [],
};