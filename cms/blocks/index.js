import { VariantField, ImageField, Buttons, List, GroupedContent, MegaContent, Photos, Title, Content, Video, Tabs, Slider, Testimonials, Team, Accordions, Vacancies} from '../fields';

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
        MegaContent('Main', 'main'),
        VariantField('default', ['default', 'large']),
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
      * Perks
      * 
      */
      label: 'Perks',
      name: 'perks',
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
        Title,
        Content,
        Buttons,
        ImageField(),
        VariantField('default', ['default', 'staggered']),
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
        Title,
        Content,
        Buttons,
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
        GroupedContent('Intro', 'intro'),
        ImageField(),
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
        GroupedContent('Intro', 'intro'),
        Video,
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
        GroupedContent('Intro', 'intro'),
        Photos,
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
        GroupedContent('Intro', 'intro'),
        List,
        VariantField('default', ['default', 'without-background']),
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
        GroupedContent('Intro', 'intro'),
        Tabs,
        VariantField('default', ['default', 'vertical']),
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
        GroupedContent('Intro', 'intro'),
        Slider,
        VariantField('default', ['default', 'vertical']),
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
        GroupedContent('Intro', 'intro'),
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
        GroupedContent('Intro', 'intro'),
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
        GroupedContent('Intro', 'intro'),
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
        GroupedContent('Intro', 'intro'),
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
        GroupedContent('Intro', 'intro'),
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
        GroupedContent('Intro', 'intro'),
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
