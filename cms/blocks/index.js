import { VariantField, Buttons, Heading, RichEditor, Image, Images, Video, Intro, Content, List, Tabs, Slider, Testimonials, Team, Accordions, Vacancies } from '../fields';

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
        VariantField('default', ['default', 'large']),
        Content,
        Image,
      ],
    },
    {
      /*
      *
      * Content
      * 
      */
      label: 'Content',
      name: 'content',
      widget: 'object',
      fields: [
        Content,
      ],
    },
    {
      /*
      *
      * Content with Image
      * 
      */
      label: 'Content with Image',
      name: 'content_image',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        VariantField('default', ['default', 'staggered']),
        // Content,
        Image,
      ],
    },
    {
      /*
      *
      * Content with Video
      * 
      */
      label: 'Content with Video',
      name: 'content_video',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        Content,
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
        VariantField('default', ['default', 'without-background']),
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
        List,
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
