const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    'src/**/*.vue',
    'src/**/*.js',
    'src/**/*.ts',
    'src/**/*.html',
    '*.html',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-gray': colors.blueGray,
        teal: colors.teal,
        rose: colors.rose,
        'light-blue': colors.lightBlue,
        amber: colors.amber,
      },
      scale: {
        101: '1.01',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
