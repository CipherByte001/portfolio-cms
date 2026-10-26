import { CollectionConfig } from 'payload/types';

export const Research: CollectionConfig = {
  slug: 'research',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', '_status', 'updatedAt'],
    description: 'Research papers, publications, and course projects.',
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
      label: 'Paper / Project Title',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Short Summary (shown on card)',
      required: true,
    },
    {
      name: 'desc',
      type: 'textarea',
      label: 'Full Description (shown on detail page)',
    },
    {
      name: 'status',
      type: 'select',
      label: 'Paper Status / Category',
      options: [
        { label: 'Published', value: 'Published' },
        { label: 'Under Review', value: 'Under Review' },
        { label: 'Course Research Project', value: 'Course Research Project' },
        { label: 'Ongoing', value: 'Ongoing' },
        { label: 'Preprint', value: 'Preprint' },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      admin: {
        description: 'e.g. ECG, Biomedical Signal Processing, Python',
      },
      fields: [
        { name: 'tag', type: 'text', required: true },
      ],
    },
    {
      name: 'thumbnail',
      type: 'upload',
      label: 'Cover Image',
      relationTo: 'media',
    },
    {
      name: 'link',
      type: 'text',
      label: 'GitHub / Paper Link',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 99,
    },
  ],
};
