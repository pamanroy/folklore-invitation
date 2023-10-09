'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Cover } from './components/Cover'
import { AudioPlayer } from './components/AudioPlayer'
import { BrideGroom } from './components/BrideGroom'
import { Event } from './components/Event'
import { Gift } from './components/Gift'
import { Hero } from './components/Hero'
import { Wish } from './components/Wish'

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
          <Hero />
          <div className="p-8 flex flex-col gap-16 lg:gap-24 content">
            <BrideGroom />
            <Event />
            <Gift />
            <Wish />
          </div>
        </>
      )}
    </main>
  )
}
