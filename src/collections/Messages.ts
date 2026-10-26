import { CollectionConfig } from 'payload/types';

export const Messages: CollectionConfig = {
  slug: 'messages',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'createdAt'],
    description: 'Inquiries sent from your website contact form.',
  },
  access: {
    // Anyone can send a message from the portfolio contact form
    create: () => true,
    // Only logged-in admin can read/manage messages
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Sender Name',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Sender Email',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message',
      required: true,
    },
  ],
};
