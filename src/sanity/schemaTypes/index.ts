import { type SchemaTypeDefinition } from 'sanity'
import projectSchema from './project'
import blogSchema from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogSchema, projectSchema],
}
