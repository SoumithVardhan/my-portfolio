/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3399FF',
        secondary: '#1a1a1a',
        accent: '#FF6B6B',
        background: '#000a0a',
        surface: '#191919',
        text: '#fdfdfd',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 5px rgba(51, 153, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(51, 153, 255, 0.8)' },
        },
      },
      fontFamily: {
        'code': ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
