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
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Awards
          </h1>
        </div>
        <div className="container py-12">
          <div className="pb-6 space-y-2 md:space-y-5">
            <Link href={siteMetadata.iwd2024}>
              <h1 className="text-2xl leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-2xl md:leading-8 mb-4">
                🏆 <strong>Leader of the Year - Philippines,</strong>{' '}
                <i> Open Mapping Women Awards 2024 (Humanitarian OpenStreetMap Team)</i>
              </h1>
            </Link>
            <Link href={siteMetadata.rising_star}>
              <h1 className="text-2xl leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-2xl md:leading-8 mb-4">
                🏆 <strong>50 Rising Stars - 2024,</strong> <i> Geospatial World</i>
              </h1>
            </Link>
            <Link href={siteMetadata.dei_champion}>
              <h1 className="text-2xl leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-2xl md:leading-8 mb-4">
                🏆 <strong>Diversity, Equity, and Inclusivity Champion,</strong>{' '}
                <i> State of the Map Asia 2023</i>
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
