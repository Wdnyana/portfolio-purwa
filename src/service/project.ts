import { Project } from '@/types/type'
import { client } from '../sanity/lib/client'
import { groq } from 'next-sanity'

export async function fetchProjects(): Promise<Project[]> {
  return await client.fetch(groq`*[_type == "project"] {
      _id,
      title,
      description,
      "technologies": technologies[],
      demo,
      github,
      "img": img[].asset->url,
    }
  `)
}
