import { EnvelopeOpenIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'

interface Props {
  onOpen: () => void
  guestName: string
  isOpened: boolean
}

export const Cover = ({ onOpen, guestName, isOpened }: Props) => {
  return (
    <div
      className={classNames(
        isOpened && 'opacity-0',
        'flex h-[100dvh] transition-all w-full z-10 absolute duration-500 text-slate-100 flex-col items-center justify-between py-16 px-12 bg-cover bg-center bg-no-repeat'
      )}
      style={{ backgroundImage: "url('/pine-forest.jpeg')" }}
    >
      <p className="text-xl md:text-2xl italic">the wedding of</p>
      <div className="text-7xl italic text-center">
        <p>rijal</p>
        <p>&</p>
        <p>nisa</p>
      </div>

      <div className="text-base md:text-lg text-center italic">
        <p>kepada</p>
        <p className="normal-case text-lg md:text-xl">{guestName}</p>
        <button
          onClick={onOpen}
          className="italic mt-4 bg-slate-100 hover:bg-slate-300 rounded-md text-gray-800 text-sm px-4 py-1"
        >
          <EnvelopeOpenIcon className="h-4 w-4 inline" /> buka undangan
        </button>
      </div>
    </div>
  )
}
