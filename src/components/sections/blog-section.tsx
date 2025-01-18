import { popins } from '@/lib/font'
import BlogLayout from '../layout/blog/blog-layout'
import Image from 'next/image'
import { BlogExample } from '../../../public/images'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'
import { Button } from '../ui/button'

const blogPosts = [
  { slug: '123', title: 'First Blog Post' },
  { slug: '456', title: 'Second Blog Post' },
  { slug: '789', title: 'Third Blog Post' },
]

export function BlogSection() {
  return (
    <BlogLayout>
      {blogPosts.map((blog) => (
        <div
          key={blog.slug}
          className="rounded-[18px] p-[10px] md:p-[14px] xl:p-[18px] flex flex-col-reverse md:flex-row items-center justify-center gap-4 mt-5"
        >
          <div className="basis-3/5 w-full">
            <p
              className={`${popins.className} mb-1 w-full font-semibold text-start text-base lg:text-lg`}
            >
              By: @Author name
            </p>
            <p
              className={`${popins.className} mb-3 w-full font-light text-start text-sm lg:text-lg text-muted-foreground`}
            >
              Tanggal terbit
            </p>

            <h3 className="mb-2 text-xl md:text-[2.5rem] lg:text-[3rem] leading-wider font-semibold tracking-widest text-start leading-snug">
              Tittle blog asdasd
            </h3>

            <p
              className={`${popins.className} mb-4 text-start text-sm md:text-base lg:text-lg leading-wider line-clamp-3 md:line-clamp-4 lg:line-clamp-5`}
            >
              As a motivated Web Developer aspiring to become an experienced
              Full-Stack Engineer, I’m Purwa Wiadnyana, passionate about
              crafting beautifully interactive web experiences. With a strong
              foundation in programming languages and web technologies, I
              specialize in Full-Stack Web Development. I thrive on combining
              reliable functionality with visually captivating designs and
              robust architectures. I am committed to continuously honing my
              skills in both Front-end and Back-end development to create smooth
              and engaging interactions. Dedicated to delivering robust and
              scalable solutions on the backend while adding captivating touches
              to every interactive animation on the Front-end, I always strive
              to provide exceptional user experiences.
            </p>

            <Button
              asChild
              className="flex items-center justify-center bg-black hover:bg-black dark:bg-white text-secondary text-center tracking-wider md:w-1/2 lg:w-[60%] xl:w-[40%]"
            >
              <Link
                href={`/blog/${blog.slug}`}
                className={`${popins.className} w-full font-semibold text-start text-base xl:py-5`}
              >
                Continue Reading <MoveRight className="font-base ms-3 " />
              </Link>
            </Button>
          </div>

          <div className="basis-2/5 w-full">
            <Image
              src={BlogExample}
              className="w-full h-[200px] md:h-[325px] lg:h-[375px]  rounded-[14px] object-cover object-center"
              alt="Image Blog"
            />
          </div>
        </div>
      ))}
    </BlogLayout>
  )
}
