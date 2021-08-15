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
        {/* <div className="border-b" /> */}
        {/* <section className="border-b py-8"> */}
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Publications
          </h1>
          {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400"></p> */}
        </div>
        {/* <div className="container max-w-5xl mx-auto m-8"> */}
        <div className="container py-12">
          <div className="pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-4">
              Graduate Manuscript
            </h1>
            {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400"></p> */}
          </div>
          {/* <div className="w-full mb-4" /> */}
          {/* <div className="flex flex-wrap border-b"> */}
          <div className="w-5/6 sm:w-full p-6 md:pt-2 sm:pb-0">
            <Link href={siteMetadata.manuscript}>
              <h1 className="text-2xl leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-2xl md:leading-8">
                Children's Co-Production of Knowledge in Creating Child-Friendly Flood Risk Maps in
                Barangay Banaba, San Mateo, Rizal
              </h1>
              <p className="prose italic text-gray-500 max-w-none dark:text-gray-400 mt-0">
                (2021). Andal, D.F.
                <br />
                <br />
              </p>
            </Link>
            {/* </div> */}
            {/* <div className="w-full sm:w-1/2 p-6">
                <Link href={'/about'}>
                  <img
                    src={siteMetadata.head_2nd}
                    className="w-48 h-48 rounded-full mx-auto"
                    alt="Feye"
                  />
                </Link>
              </div> */}
          </div>
          {/* <div className="flex flex-wrap border-b"> */}
          <div className="pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-4">
              Scientific Articles
            </h1>
            {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400"></p> */}
          </div>
          <div className="w-5/6 sm:w-full p-6 md:pt-2 sm:pb-0">
            <Link href={siteMetadata.publication_1}>
              <h1 className="text-2xl leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-2xl md:leading-8">
                Developing a Scenario-Based Assessment of Hazards Platform for the Philippines Using
                Open Source Software and Open Data
              </h1>
              <p className="prose italic text-gray-500 max-w-none dark:text-gray-400 mt-0">
                (2018). Racoma, B.A., Andal, D.F., Bencito, D.C., Aracan, K.A., Picache, I., Marmol,
                J., Lagmay, A.M.F.
                <br />
                <br />
              </p>
            </Link>
          </div>
          {/* <div className="w-full sm:w-1/2 p-6">
                <Link href={'/about'}>
                  <img
                    src={siteMetadata.head_2nd}
                    className="w-48 h-48 rounded-full mx-auto"
                    alt="Feye"
                  />
                </Link>
              </div> */}
          {/* </div> */}
          {/* <div className="flex flex-wrap border-b"> */}
          <div className="w-5/6 sm:w-full p-6 md:pt-2 sm:pb-0">
            <Link href={siteMetadata.publication_2}>
              <h3 className="text-2xl leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-2xl md:leading-8">
                Critical Path Analysis For Disaster Relief Efforts In Typhoon Haiyan-Affected
                Municipalities Based On Multi-Criteria Evaluation Approach
              </h3>
              <p className="prose italic text-gray-500 max-w-none dark:text-gray-400 mt-0">
                (2017). Santos, C.I., Andal, D.F., Aracan, K.A.
                <br />
                <br />
              </p>
            </Link>
          </div>
          <div className="pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-8">
              Videos
            </h1>
            {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400"></p> */}
          </div>
          <div className="w-5/6 sm:w-full p-6 md:pt-2 sm:pb-0">
            <Link href={siteMetadata.video_osm}>
              <h3 className="text-2xl leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-2xl md:leading-8">
                OpenStreetMap in the Philippines 2021
              </h3>
              <p className="prose italic text-gray-500 max-w-none dark:text-gray-400 mt-0">
                (2021). OSM Philippines, Amazon Web Services-Philippines
                <br />
                <br />
              </p>
            </Link>
          </div>
          <div className="w-5/6 sm:w-full p-6 md:pt-2 sm:pb-0">
            <Link href={siteMetadata.video_osm_journey}>
              <h3 className="text-2xl leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-2xl md:leading-8">
                Mapping my OpenStreetMap Journey
              </h3>
              <p className="prose italic text-gray-500 max-w-none dark:text-gray-400 mt-0">
                (2020). Andal, D.F. [Pista ng Mapa]
                <br />
                <br />
              </p>
            </Link>
          </div>
          <div className="pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-8">
              Conference Posters
            </h1>
            {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400"></p> */}
          </div>
          <div className="w-5/6 sm:w-full p-6 md:pt-2">
            <Link href={siteMetadata.conference_poster}>
              <h3 className="text-2xl leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-2xl md:leading-8">
                HOT-Philippines PhilAWARE
              </h3>
              <p className="prose italic text-gray-500 max-w-none dark:text-gray-400 mt-0">
                (2020). HOT Philippines
                <br />
                <br />
              </p>
            </Link>
          </div>
          {/* <div className="w-full sm:w-1/2 p-6"> */}
          {/* <Link href={'/blog'}>
                <Content className="w-4/6 sm:h-56 mx-auto" />
              </Link> */}
          {/* </div> */}
          {/* </div> */}
          {/* <div className="flex flex-wrap sm:flex-row border-b">
              <div className="w-full sm:w-1/2 p-6 md:mt-20">
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
              <div className="w-full sm:w-1/2 p-6 mt-6">
                <Link href={'/maps'}>
                <WorldMap className=" /6 sm:h-64 mx-auto" />
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-row border-b">
              <div className="w-full sm:w-1/2 p-6 md:mt-20">
              <Link href={'/projects'}>
                <div className="align-middle">
                  <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
                    Projects
                  </h3>
                  <p className="prose text-gray-500 max-w-none dark:text-gray-400 mt-4">
                    I have been working as a Project Manager since 2014. Know more about some of my
                    projects.
                    <br />
                    <br />
                  </p>
                </div>
                </Link>
              </div>
              <div className="w-full sm:w-1/2 p-6 mt-6">
              <Link href={'/projects'}>
                <Projects className="w-5/6 sm:h-64 mx-auto" />
              </Link>
              </div>
            </div> */}
        </div>
        {/* </section> */}
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
