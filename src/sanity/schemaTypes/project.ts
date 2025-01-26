import { defineField } from 'sanity'

const projectSchema = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'img',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Input Image Project'),
    }),
  ],
}

export default projectSchema
