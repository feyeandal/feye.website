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
        <section className="border-b py-6">
          <div className="container max-w-5xl mx-auto m-8">
            <div className="w-full mb-4" />
            <div className="flex flex-wrap border-b">
              <div className="w-5/6 sm:w-7/12 p-6 md:pt-2 sm:pb-0">
                <Link href={'/about'}>
                  <h1 className="text-3xl pb-2 text-teal-600 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                    Hi, <span className="text-primary-500"> I'm Feye!</span>
                  </h1>
                  <p className="text-3xl text-teal-600 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4.5xl md:leading-12">
                    A geospatial analyst and project manager focused on helping purpose-driven
                    organizations.
                  </p>
                  <p className="prose text-gray-500 max-w-none dark:text-gray-400 mt-4">
                    I love to work with open data and free and open source tools (FOSS).
                    <br />
                    <br />
                  </p>
                </Link>
              </div>
              <div className="w-full sm:w-5/12 p-6">
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
              <div className="w-5/6 sm:w-7/12 p-6 md:pt-20">
                <Link href={'/blog'}>
                  <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
                    Blog
                  </h3>
                  <p className="prose text-gray-500 max-w-none dark:text-gray-400 mt-4">
                    In my blog, you will find some stories about my work, personal projects, and
                    some fancy stuff.
                    <br />
                    <br />
                  </p>
                </Link>
              </div>
              <div className="w-full sm:w-5/12 p-6">
                <Link href={'/blog'}>
                  <Content className="w-4/6 sm:h-56 mx-auto" />
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-row border-b">
              <div className="w-full sm:w-7/12 p-6 md:mt-20">
                <Link href={'/maps'}>
                  <div className="align-middle">
                    <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
                      Maps
                    </h3>
                    <p className="prose text-gray-500 max-w-none dark:text-gray-400 mt-4">
                      I am passionate about maps! Checkout some pieces I have produced.
                      <br />
                      <br />
                    </p>
                  </div>
                </Link>
              </div>
              <div className="w-full sm:w-5/12 p-6 mt-6">
                <Link href={'/maps'}>
                  <WorldMap className="w-5/6 sm:h-64 mx-auto" />
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-row border-b">
              <div className="w-full sm:w-7/12 p-6 md:mt-20">
                <Link href={'/projects'}>
                  <div className="align-middle">
                    <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
                      Projects
                    </h3>
                    <p className="prose text-gray-500 max-w-none dark:text-gray-400 mt-4">
                      I have been working on different projects since 2013. Know more about some of
                      my projects.
                      <br />
                      <br />
                    </p>
                  </div>
                </Link>
              </div>
              <div className="w-full sm:w-5/12 p-6 mt-6">
                <Link href={'/projects'}>
                  <Projects className="w-5/6 sm:h-64 mx-auto" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
