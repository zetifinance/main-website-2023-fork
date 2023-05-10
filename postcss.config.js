module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'postcss-mixins': {},
    'autoprefixer': {},
    'postcss-preset-env': {
      stage: 1,
    },
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-simple-vars': {},
    'postcss-for': {}, 
    
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};