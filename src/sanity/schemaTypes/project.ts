import { defineField } from 'sanity'

const projectSchema = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'img',
      title: 'Project Image',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required().error('Input Image Project'),
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Input Title Project'),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().error('Input Description Project'),
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      validation: (Rule) => Rule.required().error('Input Technologies Project'),
    }),

    defineField({
      name: 'demo',
      title: 'Project Demo URL',
      type: 'url',
    }),

    defineField({
      name: 'github',
      title: 'Project Code URL',
      type: 'url',
      validation: (Rule) => Rule.required().error('Input URL Project'),
    }),
  ],
}

export default projectSchema
