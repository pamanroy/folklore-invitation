import { useEffect, useState } from 'react'

interface CountdownProps {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const DEFAULT_COUNTDOWN = { days: 0, hours: 0, minutes: 0, seconds: 0 }

const addZero = (time: number) => `${time}`.padStart(2, '0')

const CountDown = ({ counter, unit }: { unit: string; counter: number }) => (
  <div>
    <p className="text-2xl">{addZero(counter)}</p>
    <p className="text-base">{unit}</p>
  </div>
)

export const Event = () => {
  const [countDown, setCountDown] = useState<CountdownProps>(DEFAULT_COUNTDOWN)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const eventDate = new Date('Mar 29, 2026 08:00:00').getTime()
      const distance = eventDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        clearInterval(interval)
        setCountDown(DEFAULT_COUNTDOWN)
      }
      setCountDown({ days, hours, minutes, seconds })
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="w-full text-center">
      <p className="title mb-4">acara</p>
      <p>insyaallah kami akan menikah dalam</p>
      <div className="flex justify-center gap-4 w-full">
        <CountDown counter={countDown.days} unit="hari" />
        <CountDown counter={countDown.hours} unit="jam" />
        <CountDown counter={countDown.minutes} unit="menit" />
        <CountDown counter={countDown.seconds} unit="detik" />
      </div>
    </div>
  )
}
