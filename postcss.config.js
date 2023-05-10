module.exports = {
  plugins: {
    'postcss-simple-vars': {},
    'postcss-map': {},
    'postcss-mixins': {},
    'postcss-for': {}, 
    'postcss-import': {},
    'postcss-nested': {},
    'autoprefixer': {},
    'postcss-preset-env': {
      stage: 1,
    },
    
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};