import { VariantField, Image, Images, Video, Intro, Main, List, Locations, Tabs, Slider, Testimonials, Team, Accordions, Vacancies, Features } from '../fields';

const Config = {
  label: 'Blocks',
  name: 'blocks',
  widget: 'list',
  types: [
    {
      /*
      *
      * HERO
      * 
      */
      label: 'Hero',
      name: 'hero',
      widget: 'object',
      fields: [
        VariantField('default', ['default', 'large', 'contact', 'simple']),
        Main,
        Image,
      ],
    },
    {
      /*
      *
      * Text
      * 
      */
      label: 'Text',
      name: 'Text',
      widget: 'object',
      fields: [
        Main,
      ],
    },
    {
      /*
      *
      * Text with Image
      * 
      */
      label: 'Text with Image',
      name: 'text_image',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        VariantField('default', ['default', 'staggered']),
        Main,
        Image,
      ],
    },
    {
      /*
      *
      * Text with Video
      * 
      */
      label: 'Text with Video',
      name: 'text_video',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        Main,
        Video,
      ],
    },
    {
      /*
      *
      * Image
      * 
      */
      label: 'Image',
      name: 'image',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        Intro,
        Image,
      ],
    },
    {
      /*
      *
      * Video
      * 
      */
      label: 'Video',
      name: 'video',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        Intro,
        Video,
      ],
    },
    {
      /*
      *
      * Grid
      * 
      */
      label: 'Grid',
      name: 'grid',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        VariantField('card', ['card', 'large-card', 'no-card']),
        Intro,
        List,
      ],
    },
    {
      /*
      *
      * Logo Grid
      * 
      */
      label: 'Logo Grid',
      name: 'logo_grid',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        Intro,
        Images,
      ],
    },
    {
      /*
      *
      * Tabs
      * 
      */
      label: 'Tabs',
      name: 'tabs',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        VariantField('default', ['default', 'vertical']),
        Intro,
        Tabs,
      ],
    },
    {
      /*
      *
      * Slider
      * 
      */
      label: 'Slider',
      name: 'slider',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        VariantField('default', ['default', 'vertical']),
        Intro,
        Slider,
      ],
    },
    {
      /*
      *
      * Testimonials
      * 
      */
      label: 'Testimonials',
      name: 'testimonials',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        Intro,
        Testimonials,
      ],
    },
    {
      /*
      *
      * Team
      * 
      */
      label: 'Team',
      name: 'team',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        Intro,
        Team,
      ],
    },
    {
      /*
      *
      * Accordions
      * 
      */
      label: 'Accordions',
      name: 'accordions',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        Intro,
        Accordions,
      ],
    },
    {
      /*
      *
      * Vacancies
      * 
      */
      label: 'Vacancies',
      name: 'vacancies',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        Intro,
        Vacancies,
      ],
    },
    {
      /*
      *
      * Locations
      * 
      */
      label: 'Locations',
      name: 'locations',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        Intro,
        Locations,
      ],
    },
    {
      /*
      *
      * Feature Slider
      * 
      */
      label: 'Feature Slider',
      name: 'feature_slider',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        Intro,
        Features,
      ],
    },
    {
      /*
      *
      * Recent Articles
      * 
      */
      label: 'Recent Articles',
      name: 'recentArticles',
      widget: 'object',
      fields: [
        Intro,
      ],
    },
    {
      /*
      *
      * Form
      * 
      */
      label: 'Form',
      name: 'form',
      widget: 'object',
      fields: [
        {
          label: 'Form',
          name: 'form',
          widget: 'relation',
          collection: 'forms',
          search_fields: ['title'],
          display_fields: ['{{id}} - {{title}}'],
          value_field: 'id',
          required: false,
        },
      ],
    },
  ],
};

export default Config;
