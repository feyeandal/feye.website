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
            Publications
          </h1>
        </div>
        <div className="container py-12">
          <div className="pb-6 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-4">
              Graduate Manuscript
            </h1>
          </div>
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
          </div>
          <div className="pb-6 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-4">
              Scientific Articles
            </h1>
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
          <div className="pb-6 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-8">
              Videos
            </h1>
          </div>
          <div className="w-5/6 sm:w-full p-6 md:pt-2 sm:pb-0">
            <Link href={siteMetadata.video_youthmappers_behind_the_scenes}>
              <h3 className="text-2xl leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-2xl md:leading-8">
                YouthMappers: Behind the Scenes of the YouthMappers Movement
              </h3>
              <p className="prose italic text-gray-500 max-w-none dark:text-gray-400 mt-0">
                (2021). YouthMappers [HOT Summit 2021]
                <br />
                <br />
              </p>
            </Link>
          </div>
          <div className="w-5/6 sm:w-full p-6 md:pt-2 sm:pb-0">
            <Link href={siteMetadata.video_hot_data_quality_team}>
              <h3 className="text-2xl leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-2xl md:leading-8">
                HOT Data Quality Team: Why Data Quality is important to HOT, and what we are doing
                about it..
              </h3>
              <p className="prose italic text-gray-500 max-w-none dark:text-gray-400 mt-0">
                (2021). HOT Data Quality Team [HOT Summit 2021]
                <br />
                <br />
              </p>
            </Link>
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
                (2020). Andal, D.F. [Pista ng Mapa 2020]
                <br />
                <br />
              </p>
            </Link>
          </div>
          <div className="pb-6 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-8">
              Conference Posters
            </h1>
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
        </div>
      </div>
    </>
  )
}
