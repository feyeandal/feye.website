import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import WorldMap from '@/components/svg/worldmap.svg'
import Content from '@/components/svg/content.svg'
import Projects from '@/components/svg/projects.svg'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Blog from './blog/[...slug]'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="border-b" />
        <section className="border-b py-8">
          <div className="container max-w-5xl mx-auto m-8">
            <div className="w-full mb-4" />
            <div className="flex flex-wrap border-b">
              <div className="w-5/6 sm:w-1/2 p-6 md:pt-16 sm:pb-0">
                <Link href={'/about'}>
                  <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Welcome, I'm Feye!
                  </h1>
                  <p className="prose text-gray-500 max-w-none dark:text-gray-400 mt-4">
                    I love to work with Open Data and Free and Open Source Software.
                    <br />
                    <br />
                  </p>
                </Link>
              </div>
              <div className="w-full sm:w-1/2 p-6">
                <Link href={'/about'}>
                  <img
                    src={siteMetadata.head_2nd}
                    className="w-48 h-48 rounded-full mx-auto"
                    alt="Feye"
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap border-b">
              <div className="w-5/6 sm:w-1/2 p-6 md:pt-20">
                <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                  Blog
                </h3>
                <p className="prose text-gray-500 max-w-none dark:text-gray-400 mt-4">
                  In my blog you will find some stories about my work, personal projects and fancy
                  stuff.
                  <br />
                  <br />
                </p>
              </div>
              <div className="w-full sm:w-1/2 p-6">
                <Content className="w-4/6 sm:h-56 mx-auto" />
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-row border-b">
              <div className="w-full sm:w-1/2 p-6 md:mt-20">
                <div className="align-middle">
                  <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                    Maps
                  </h3>
                  <p className="prose text-gray-500 max-w-none dark:text-gray-400 mt-4">
                    I am passionate about maps! Checkout some pieces I have produced.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-6 mt-6">
                <WorldMap className="w-5/6 sm:h-64 mx-auto" />
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-row border-b">
              <div className="w-full sm:w-1/2 p-6 md:mt-20">
                <div className="align-middle">
                  <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                    Projects
                  </h3>
                  <p className="prose text-gray-500 max-w-none dark:text-gray-400 mt-4">
                    I have been working as a Project Manager since 2014. Know more about some of my
                    projects.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-6 mt-6">
                <Projects className="w-5/6 sm:h-64 mx-auto" />
              </div>
            </div>
          </div>
        </section>
        {/* <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul> */}
      </div>
      {/* {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )} */}
    </>
  )
}
