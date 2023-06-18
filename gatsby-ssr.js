const seoData = require('./src/settings/seo.json')

exports.onRenderBody = ({ setHtmlAttributes }) => {
  const lang = seoData?.lang || 'en';
  setHtmlAttributes({ lang, class: 'my-default-class' });
};