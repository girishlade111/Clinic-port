/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B6FFF',
        'primary-dark': '#1a5ae8',
        'primary-light': '#4A8BFF',
        'primary-accent': '#5C8DFF',
        'blue-light': '#F3F7FF',
        'bg-secondary': '#F8FAFC',
        border: '#E6ECF5',
        'text-dark': '#1A2A44',
        'text-body': '#5D6B82',
        'text-light': '#8FA1B8',
        success: '#22C55E',
        rating: '#FFC93C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'hero': ['64px', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'section': ['42px', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'card-title': ['24px', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        'content': '1200px',
      },
      spacing: {
        'section': '120px',
        'section-inner': '64px',
      },
      borderRadius: {
        'card': '24px',
        'image': '32px',
        'button': '999px',
      },
      boxShadow: {
        'card': '0 10px 30px rgba(0,0,0,0.05)',
        'card-hover': '0 20px 50px rgba(0,0,0,0.10)',
        'hero-image': '0 30px 80px rgba(43,111,255,0.15)',
        'floating': '0 15px 40px rgba(0,0,0,0.08)',
        'header': '0 1px 3px rgba(0,0,0,0.05)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
