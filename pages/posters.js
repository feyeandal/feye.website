import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import postersData from '@/data/postersData'
import Image from '@/components/Image'
import Link from '@/components/Link'
import Card from '@/components/Poster_Card'
import { PageSeo } from '@/components/SEO'

export default function posters() {
  return (
    <>
      <PageSeo title={`Posters - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Posters
          </h1>
          {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400"></p> */}
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {postersData.map((d, n) => (
              <Card key={n} imgSrc={d.imgSrc} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
