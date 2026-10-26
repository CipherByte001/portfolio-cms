import { CollectionConfig } from 'payload/types';

export const Skills: CollectionConfig = {
  slug: 'skills',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'order', 'updatedAt'],
    description: 'Hardware, programming languages, and AI tools in your stack.',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Skill / Tool Name',
      required: true,
      admin: {
        description: 'e.g. PyTorch, FreeRTOS, KiCad, C++, TensorFlow',
      },
    },
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      required: true,
      defaultValue: 'Languages',
      options: [
        { label: 'Languages', value: 'Languages' },
        { label: 'ML & Frameworks', value: 'ML & Frameworks' },
        { label: 'Embedded & Hardware', value: 'Embedded & Hardware' },
        { label: 'Tools', value: 'Tools' },
      ],
    },
    {
      name: 'iconUrl',
      type: 'text',
      label: 'Brand Icon URL (SVG or PNG)',
      admin: {
        description: 'e.g. devicon URL like https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      },
    },
    {
      name: 'customIcon',
      type: 'upload',
      label: 'Or Upload Custom Icon',
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
