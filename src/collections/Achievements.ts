import { CollectionConfig } from 'payload/types';

export const Achievements: CollectionConfig = {
  slug: 'achievements',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'updatedAt'],
    description: 'Certificates, awards, and achievements shown as folder cards.',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      admin: {
        description: 'e.g. "AWS Cloud Practitioner Certificate" or "Best Project Award"',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      admin: {
        description: 'A short explanation of what this is and why it matters.',
      },
    },
    {
      name: 'date',
      type: 'text',
      label: 'Date / Year',
      admin: {
        description: 'e.g. "2024" or "March 2024"',
      },
    },
    {
      name: 'thumbnail',
      type: 'upload',
      label: 'Thumbnail (shown on folder card)',
      relationTo: 'media',
    },
    {
      name: 'images',
      type: 'array',
      label: 'Gallery Images (shown in modal viewer)',
      admin: {
        description: 'Upload multiple images — the modal lets visitors swipe through them.',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 99,
    },
  ],
};
