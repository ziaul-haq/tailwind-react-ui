module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E2136E',
          // 50: '#FFF4F9',
          500: '#E2136E',
          // 600: '#D0021B',
          // pink
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          // 500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
      },
      boxShadow: {
        'blur-4': '0 0 4px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
}
