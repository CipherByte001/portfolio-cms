import { CollectionConfig } from 'payload/types';

export const Recommendations: CollectionConfig = {
  slug: 'recommendations',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'updatedAt'],
    description: 'Testimonials from professors, supervisors, or teammates.',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      label: 'Quote',
      required: true,
      admin: {
        description: 'The actual testimonial text. Keep it to 2–4 sentences.',
      },
    },
    {
      name: 'name',
      type: 'text',
      label: 'Person\'s Full Name',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      label: 'Role / Title',
      required: true,
      admin: {
        description: 'e.g. "Professor of EEE, RUET" or "Team Lead at XYZ"',
      },
    },
    {
      name: 'avatar',
      type: 'upload',
      label: 'Profile Photo (optional)',
      relationTo: 'media',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 99,
    },
  ],
};
