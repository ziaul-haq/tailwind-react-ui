module.exports = {
  purge: [],
  theme: {
    extend: {
      boxShadow: {
        'blur-4': '0 0 4px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
}
