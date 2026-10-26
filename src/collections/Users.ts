import { CollectionConfig } from 'payload/types';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    description: 'Admin users who can log into this CMS.',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Full Name',
    },
  ],
};
