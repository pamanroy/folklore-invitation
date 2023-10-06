'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Cover } from './components/Cover'
import { AudioPlayer } from './components/AudioPlayer'

export default function Home() {
  const search = useSearchParams()
  const [isOpened, setIsOpened] = useState(false)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)

  const openInvitation = () => {
    setIsOpened(true)
    setIsAudioPlaying(true)
  }

  return (
    <main className="lowercase bg-slate-800 relative">
      <Cover onOpen={openInvitation} isOpened={isOpened} guestName={search.get('to') || ''} />
      {isOpened && (
        <>
          <AudioPlayer
            isPlaying={isAudioPlaying}
            onClick={() => {
              setIsAudioPlaying((prev) => !prev)
            }}
          />
          <div
            className="bg-cover bg-center py-16 px-12 flex flex-wrap text-slate-100 italic gap-16 md:gap-0"
            style={{ backgroundImage: "url('/pine-forest-2.jpeg')" }}
          >
            <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 items-center">
              <p className="text-xl md:text-2xl">the wedding of</p>
              <div className="text-7xl text-center">
                <p>rijal</p>
                <p>&</p>
                <p>nisa</p>
              </div>
              <p className="text-xl md:text-2xl">30.02.2069</p>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-sm md:text-base text-center">
              <p className="mb-3">لَمْ نَرَ لِلْمُتَحَابَّيْنِ مِثْلَ النِّكَاحِ</p>
              {/* @ts-ignore */}
              <p style={{ textWrap: 'balance' }}>
                “Kami tidak pernah mengetahui solusi untuk dua orang yang saling mencintai semisal pernikahan.”
              </p>
              <p>(HR. Ibnu Majah no. 1920)</p>
            </div>
          </div>
        </>
      )}
    </main>
  )
}
