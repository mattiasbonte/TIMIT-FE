module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    'src/**/*.vue',
    'src/**/*.js',
    'src/**/*.ts',
    'src/**/*.html',
    '*.html',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
