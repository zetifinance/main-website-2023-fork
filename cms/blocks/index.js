import { VariantField, Image, Video, Intro, Main, List, Locations, Tabs, Slider, Testimonials, Team, Accordions, Features, HeadingImage } from '../fields';

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
      name: 'text',
      widget: 'object',
      fields: [
        HeadingImage,
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
        VariantField('Vimeo', ['Vimeo', 'Embed']),
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
        VariantField('Vimeo', ['Vimeo', 'Embed']),
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
        {
          label: 'Columns',
          name: 'columns',
          widget: 'select',
          default: 'Three',
          options: ['Three', 'Two', 'Four'],
          required: true,
        },
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
        VariantField('Grid', ['Grid', 'Slider']),
        Intro,
        {
          label: 'Logos',
          name: 'logos',
          widget: 'list',
          collapsed: true,
          required: false,
          fields: [
            {
              label: 'Link',
              name: 'link',
              widget: 'string',
              required: false,
            },
            {
              label: 'Image (Dark Theme)',
              name: 'image_light',
              widget: 'image',
              required: false,
            },
            {
              label: 'Image (Light Theme)',
              name: 'image_dark',
              widget: 'image',
              required: false,
            }
          ],
        }
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
        VariantField('default', ['default', 'two-column']),
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
      * Maps
      * 
      */
      label: 'Maps',
      name: 'maps',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        Intro,
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
      * Embed HTML
      * 
      */
      label: 'Embed HTML',
      name: 'embed',
      widget: 'object',
      fields: [
        {
          label: 'Embed HTML',
          name: 'embed',
          widget: 'string'
        }
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
      * Posts Grid
      * 
      */
      label: 'Posts Grid',
      name: 'posts_grid',
      widget: 'object',
      fields: [
        VariantField('news', ['news', 'insights']),
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
