import { GlobalConfig } from 'payload/types';

export const About: GlobalConfig = {
  slug: 'about',
  label: 'About Me',
  admin: {
    description: 'Your bio, photo, and research interests shown in the About section.',
  },
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'photo',
      type: 'upload',
      label: 'Profile Photo',
      relationTo: 'media',
      admin: {
        description: 'Displayed as a circular photo. Recommended: square image.',
      },
    },
    {
      name: 'bio',
      type: 'array',
      label: 'Bio Paragraphs',
      admin: {
        description: 'Each item becomes a separate paragraph in the About section.',
      },
      fields: [
        {
          name: 'paragraph',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'researchInterests',
      type: 'array',
      label: 'Research Interests',
      admin: {
        description: 'Listed with bullet points under the bio.',
      },
      fields: [
        {
          name: 'interest',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'coreFocus',
      type: 'text',
      label: 'Core Focus (info card)',
      admin: {
        description: 'e.g. "Edge AI • Biomedical ML • Firmware"',
      },
    },
    {
      name: 'currentlyExploring',
      type: 'text',
      label: 'Currently Exploring (info card)',
      admin: {
        description: 'e.g. "Explainable AI (XAI) & LLMs"',
      },
    },
  ],
};
