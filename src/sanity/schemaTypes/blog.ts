import { defineField } from 'sanity'

const blogSchema = {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Blog Title',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      title: 'Slug of my Blog',
      type: 'slug',
    }),

    defineField({
      name: 'blogProfile',
      title: 'Profile card of my Blog',
      type: 'image',
    }),

    defineField({
      name: 'cardDescription',
      title: 'Small description card of my Blog',
      type: 'text',
    }),
  ],
}

export default blogSchema
