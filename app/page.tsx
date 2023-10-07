'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Cover } from './components/Cover'
import { AudioPlayer } from './components/AudioPlayer'
import { BrideGroom } from './components/BrideGroom'
import { Event } from './components/Event'

export default function Home() {
  const search = useSearchParams()
  const [isOpened, setIsOpened] = useState(false)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)

  const openInvitation = () => {
    setIsOpened(true)
  }

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev)
  }

  return (
    <main className="lowercase relative italic">
      <Cover onOpen={openInvitation} isOpened={isOpened} guestName={search.get('to') || ''} />
      {isOpened && (
        <>
          <AudioPlayer isPlaying={isAudioPlaying} onClick={toggleAudio} />
          <div
            className="bg-cover bg-center py-16 px-12 flex flex-wrap text-slate-50 gap-16 md:gap-0"
            style={{ backgroundImage: "url('/pine-forest-2.jpeg')" }}
          >
            <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 items-center">
              <p className="text-xl md:text-2xl">the wedding of</p>
              <div className="text-7xl text-center">
                <p>rijal</p>
                <p>&</p>
                <p>nisa</p>
              </div>
              <p className="text-xl md:text-2xl">29.03.2026</p>
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

          <div className="p-8 flex flex-col gap-16 lg:gap-24 content">
            <BrideGroom />
            <Event />
          </div>
        </>
      )}
    </main>
  )
}
