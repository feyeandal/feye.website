import Image from './Image'
import Link from './Link'
import { useState } from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

const Card = ({ title, description, imgSrc, href }) => {
  return (
    <div className="p-4 md:w-1/2 md" style={{ maxWidth: '1000px' }}>
      <div className="h-full overflow-hidden shadow-2xl">
        {href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm">
                {title}
              </div>
            </div>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center lg:h-48 md:h-36 opacity-80 hover:opacity-100"
              width={1100}
              height={950}
            />
          </Link>
        ) : (
          <>
            <div className="relative flex">
              <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </div>
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center lg:h-48 md:h-36"
                width={1100}
                height={950}
              />
            </div>
          </>
        )}{' '}
      </div>
    </div>
  )
}

export default Card
