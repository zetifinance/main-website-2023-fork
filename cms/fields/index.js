export const ID = { label: 'ID', name: 'id', widget: 'uuid' };

export const VariantField = (initial, options = []) => ({
  label: 'Variant',
  name: 'variant',
  widget: 'select',
  default: initial,
  options: options,
  required: false,
});

export const Button = {
  label: 'Button',
  name: 'button',
  widget: 'object',
  collapsed: true,
  required: false,
  fields: [
    VariantField('default', ['default', 'white', 'arrow', 'arrow-white', 'simple']),
    {
      label: 'Label',
      name: 'label',
      widget: 'string',
      required: false,
    },
    {
      label: 'URL',
      name: 'url',
      widget: 'string',
      required: false,
    },
  ],
};

export const Buttons = {
  label: 'Buttons',
  name: 'buttons',
  widget: 'list',
  required: false,
  collapsed: true,
  fields: [Button],
};

export const Heading = {
  label: 'Heading',
  name: 'heading',
  widget: 'string',
  required: false,
};

export const RichEditor = {
  label: 'Rich Editor',
  name: 'rich_editor',
  widget: 'markdown',
  required: false,
};

export const Image = {
  label: 'Image',
  name: 'image',
  widget: 'image',
  required: false,
};

export const Images = {
  label: 'Images',
  name: 'images',
  widget: 'list',
  collapsed: true,
  required: false,
  fields: [
    Image
  ],
};

export const Video = {
  label: 'Video',
  name: 'video',
  widget: 'string',
  required: false,
};

export const Intro = {
  label: 'Intro',
  name: 'intro',
  widget: 'object',
  collapsed: true,
  required: false,
  fields: [
    Heading,
    RichEditor,
    Buttons,
  ],
}

export const Main = {
  label: 'Main',
  name: 'main',
  widget: 'object',
  collapsed: true,
  required: false,
  fields: [
    Heading,
    RichEditor,
    Buttons,
  ],
}

export const List = {
  label: 'List',
  name: 'list',
  widget: 'list',
  collapsed: true,
  required: false,
  fields: [
    {
      label: 'List Item',
      name: 'list_item',
      widget: 'object',
      fields: [
        Heading,
        RichEditor,
        Buttons,
        Image,
      ],
    },
  ],
};

export const Tabs = {
  label: 'Tabs',
  name: 'tabs',
  widget: 'list',
  collapsed: true,
  required: false,
  fields: [
    {
      label: 'Tab',
      name: 'tab',
      widget: 'object',
      collapsed: true,
      fields: [
        Heading,
        Main,
        Image,
      ],
    },
  ],
};

export const Slider = {
  label: 'Slider',
  name: 'slider',
  widget: 'list',
  collapsed: true,
  required: false,
  fields: [
    {
      label: 'Slide',
      name: 'slide',
      widget: 'object',
      collapsed: true,
      fields: [
        Main,
        Image,
        List,
      ],
    },
  ],
};

export const Testimonials = {
  label: 'Testimonials',
  name: 'testimonials',
  widget: 'list',
  collapsed: true,
  required: false,
  fields: [
    {
      label: 'Testimonial',
      name: 'testimonial',
      widget: 'object',
      collapsed: true,
      required: false,
      fields: [
        Image,
        {
          label: 'Testimonial',
          name: 'testimonial',
          widget: 'markdown',
          required: false,
        },
        {
          label: 'Name',
          name: 'name',
          widget: 'string',
          required: false,
        },
        {
          label: 'Job Title',
          name: 'job_title',
          widget: 'string',
          required: false,
        },
        {
          label: 'Company Name',
          name: 'company_name',
          widget: 'string',
          required: false,
        },
      ],      
    },
  ],
};

export const Team = {
  label: 'Team',
  name: 'team',
  widget: 'list',
  collapsed: true,
  required: false,
  fields: [
    {
      label: 'Team Member',
      name: 'team_member',
      widget: 'object',
      collapsed: true,
      fields: [
        Image,
        {
          label: 'Name',
          name: 'name',
          widget: 'string',
          required: false,
        },
        {
          label: 'Job Role',
          name: 'job_role',
          widget: 'string',
          required: false,
        },
        {
          label: 'LinkedIn',
          name: 'linkedin',
          widget: 'string',
          required: false,
        },
        {
          label: 'Bio',
          name: 'bio',
          widget: 'markdown',
          required: false,
        }
      ],
    },
  ],
};

export const Accordions = {
  label: 'Accordions',
  name: 'accordions',
  widget: 'list',
  collapsed: true,
  required: false,
  fields: [
    {
      label: 'Accordion',
      name: 'Accordion',
      widget: 'object',
      collapsed: true,
      fields: [
        Main,
      ],
    },
  ],
};

export const Vacancies = {
  label: 'Vacancies',
  name: 'vacancies',
  widget: 'list',
  required: false,
  collapsed: true,
  fields: [
    {
      label: 'Vacancy',
      name: 'vacancy',
      widget: 'object',
      required: false,
      collapsed: true,
      fields: [
        Heading,
        RichEditor,
        {
          label: 'Apply Link',
          name: 'apply_link',
          widget: 'string',
          required: false,
        },
        {
          label: 'Tags',
          name: 'tags',
          widget: 'list',
          required: false,
          fields: [
            Image,
            Heading,
          ]
        },
      ],      
    },
  ],
};