import NotFound from '@/app/not-found'

const blogPosts = [
  { slug: '123', title: 'First Blog Post' },
  { slug: '456', title: 'Second Blog Post' },
  { slug: '789', title: 'Third Blog Post' },
]

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const { slug } = params
  const blog = blogPosts.find((blog) => blog.slug === slug)

  if (!blog) {
    NotFound()
  }

  return (
    <>
      <h1>{blog?.title}</h1>
    </>
  )
}
