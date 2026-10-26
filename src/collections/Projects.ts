import { CollectionConfig } from 'payload/types';

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', '_status', 'tags', 'updatedAt'],
    description: 'Your portfolio projects. Each becomes a card on the Projects section.',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: '_status',
      type: 'select',
      label: 'Publication State',
      defaultValue: 'published',
      required: true,
      options: [
        { label: 'Published (Visible on Portfolio)', value: 'published' },
        { label: 'Draft (Hidden from Portfolio)', value: 'draft' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Project Title',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Short Description (shown on card)',
      required: true,
      admin: {
        description: 'Keep this to 1–2 sentences. Shown under the title on the project card.',
      },
    },
    {
      name: 'desc',
      type: 'textarea',
      label: 'Full Description (shown on detail page)',
      admin: {
        description: 'Full write-up. Supports multi-line text.',
      },
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      admin: {
        description: 'e.g. STM32, Machine Learning, Embedded. Used for the filter buttons.',
      },
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'components',
      type: 'array',
      label: 'Hardware / Software Components',
      admin: {
        description: 'e.g. STM32F103C8 (Blue Pill), SSD1306 OLED. Shown on the detail page.',
      },
      fields: [
        {
          name: 'component',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'mediaType',
      type: 'select',
      label: 'Media Type',
      defaultValue: 'youtube',
      options: [
        { label: 'YouTube Video', value: 'youtube' },
        { label: 'Uploaded Image', value: 'image' },
        { label: 'Uploaded Video', value: 'video' },
      ],
    },
    {
      name: 'youtubeId',
      type: 'text',
      label: 'YouTube Video ID',
      admin: {
        description: 'The part after ?v= in the YouTube URL. e.g. dQw4w9WgXcQ',
        condition: (data) => data?.mediaType === 'youtube',
      },
    },
    {
      name: 'thumbnail',
      type: 'upload',
      label: 'Thumbnail / Cover Image',
      relationTo: 'media',
      admin: {
        description: 'Shown on the project card. Recommended: 800×600.',
      },
    },
    {
      name: 'uploadedMedia',
      type: 'upload',
      label: 'Uploaded Image or Video',
      relationTo: 'media',
      admin: {
        condition: (data) => data?.mediaType === 'image' || data?.mediaType === 'video',
        description: 'Upload an image or video file directly.',
      },
    },
    {
      name: 'link',
      type: 'text',
      label: 'GitHub / External Link',
      admin: {
        description: 'Full URL to the GitHub repo or live demo.',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 99,
      admin: {
        description: 'Lower numbers appear first. Use to reorder cards.',
      },
    },
  ],
};
