import { useEffect, useRef } from 'react'
import './AudioPlayer.css'

interface Props {
  onClick: () => void
  isPlaying: boolean
}

export const AudioPlayer: React.FC<Props> = ({ onClick, isPlaying }) => {
  const audio = useRef(new Audio('/my-tears-ricochet.mp3'))
  audio.current.loop = true

  useEffect(() => {
    if (isPlaying) {
      audio.current.play()
    } else {
      audio.current.pause()
    }
  }, [isPlaying])

  return (
    <button
      className="fixed right-2 bottom-4 w-5 h-5 rounded shadow bg-slate-100 box-border flex items-center justify-center"
      onClick={onClick}
    >
      {!isPlaying && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 text-slate-900"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
          />
        </svg>
      )}
      {isPlaying && (
        <div className="w-full h-full flex items-end p-1 gap-[1px]">
          <div className="playing-bar playing-bar1 bg-slate-900"></div>
          <div className="playing-bar playing-bar2 bg-slate-900"></div>
          <div className="playing-bar playing-bar3 bg-slate-900"></div>
        </div>
      )}
    </button>
  )
}
