import { GlobalConfig } from 'payload/types';

export const Resume: GlobalConfig = {
  slug: 'resume',
  label: 'CV / Resume',
  admin: {
    description: 'Upload your latest CV/Resume PDF to dynamically update your site.',
  },
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'pdf',
      type: 'upload',
      label: 'Upload CV (PDF)',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Upload your current resume. The website will automatically use this file for preview and download.',
      },
    },
    {
      name: 'lastUpdatedNote',
      type: 'text',
      label: 'Version or Note (optional)',
      admin: {
        description: 'e.g. "Updated October 2024 with latest research publications"',
      },
    },
  ],
};
