import { EnvelopeIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import { Button } from './Button'

interface Props {
  onOpen: () => void
  guestName: string
  isOpened: boolean
}

export const Cover = ({ onOpen, guestName, isOpened }: Props) => {
  return (
    <div
      className={classNames(
        isOpened && 'opacity-0 z-0 translate-y-[-100dvh]',
        'flex h-[100dvh] transition-all w-full z-10 absolute duration-500 text-slate-50 flex-col items-center justify-between py-16 px-12 bg-cover bg-center bg-no-repeat'
      )}
      style={{ backgroundImage: "url('/pine-forest.jpeg')" }}
    >
      <p className="text-xl md:text-2xl">the wedding of</p>
      <div className="text-7xl text-center">
        <p>naruto</p>
        <p>&</p>
        <p>hinata</p>
      </div>

      <div className="text-base md:text-lg text-center">
        <p>kepada</p>
        <p className="text-lg md:text-xl">{guestName}</p>
        <Button onClick={onOpen}>
          <EnvelopeIcon className="h-4 w-4 inline mr-2" />
          buka undangan
        </Button>
      </div>
    </div>
  )
}
