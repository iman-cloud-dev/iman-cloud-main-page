/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Cloud Blue
          light: '#0EA5E9',   // Sky Blue
          dark: '#1E40AF',    // Deep Blue
          cyan: '#06B6D4',    // Ocean Cyan
        },
        secondary: {
          DEFAULT: '#F97316', // Energy Orange
          light: '#FB923C',
          dark: '#EA580C',
        },
        background: {
          light: '#F8FAFC',   // Light Gray
          DEFAULT: '#FFFFFF', // Pure White
          dark: '#1E293B',    // Dark Gray
        },
        neutral: {
          light: '#F8FAFC',
          medium: '#64748B',
          dark: '#1E293B',
        },
        accent: {
          green: '#10B981',   // Success Green
          amber: '#F59E0B',   // Warning Amber
          orange: '#F97316',  // Energy Orange
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
        'gradient-accent': 'linear-gradient(135deg, #F97316 0%, #F59E0B 100%)',
        'gradient-tech': 'linear-gradient(135deg, #1E40AF 0%, #0EA5E9 100%)',
        'gradient-neutral': 'linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}