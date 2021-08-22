import Image from './Image'
import Link from './Link'
import { useState } from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

const Card = ({ title, description, imgSrc, href }) => {
  const [open, setOpen] = useState(false)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)
  return (
    <div className="p-4 md:w-1/2 md" style={{ maxWidth: '1000px' }}>
      <div className="h-full overflow-hidden">
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
              width={800}
              height={550}
            />
          </Link>
        ) : (
          <>
            <div className="relative" onClick={onOpenModal}>
              <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="mx-auto text-white z-10 self-center text-center px-2 tracking-widest text-sm">
                  {title}
                </div>
              </div>
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center"
                width={800}
                height={550}
              />
            </div>
            <Modal
              open={open}
              onClose={onCloseModal}
              closeIcon={<></>}
              center
              classNames={{ modal: 'custom-modal' }}
            >
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center"
                width={800}
                height={550}
              />
            </Modal>
          </>
        )}{' '}
      </div>
    </div>
  )
}
export default Card
