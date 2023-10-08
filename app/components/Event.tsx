import { CalendarDaysIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { PropsWithChildren, useEffect, useState } from 'react'
import Link from 'next/link'
import { globalVar } from '../constants/env'
import dayjs from 'dayjs'
import 'dayjs/locale/id'

interface CountdownProps {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const DEFAULT_COUNTDOWN = { days: 0, hours: 0, minutes: 0, seconds: 0 }
const LOCATION_URL =
  'https://www.google.com/maps/place/Spotify+Camp+Nou/@41.380896,2.1228198,15z/data=!4m6!3m5!1s0x12a498f576297baf:0x44f65330fe1b04b9!8m2!3d41.380896!4d2.1228198!16zL20vMDFnZ2ps?entry=ttu'

const addZero = (time: number) => `${time}`.padStart(2, '0')

const CountDown = ({ counter, unit }: { unit: string; counter: number }) => (
  <div>
    <p className="text-2xl">{addZero(counter)}</p>
    <p className="text-base">{unit}</p>
  </div>
)

const EventInfo = ({ children }: PropsWithChildren<any>) => <p className="flex items-center gap-1">{children}</p>

const EventSchedule = ({
  name,
  date,
  time,
  location,
  url,
}: {
  name: string
  date: string
  time: string
  location: string
  url: string
}) => (
  <div className="w-full md:w-auto">
    <p className="text-xl">{name}</p>
    <div className="flex justify-center">
      <div>
        <EventInfo>
          <CalendarDaysIcon className="w-4 h-4" /> {date}
        </EventInfo>
        <EventInfo>
          <ClockIcon className="w-4 h-4" /> {time}
        </EventInfo>
        <EventInfo>
          <MapPinIcon className="w-4 h-4" /> {location}
        </EventInfo>

        <Link
          href={url}
          target="_blank"
          className="px-3 py-1 mt-2 inline-block rounded-md italic bg-slate-900 hover:bg-slate-700 text-gray-50"
        >
          lihat di maps
        </Link>
      </div>
    </div>
  </div>
)

export const Event = () => {
  const [countDown, setCountDown] = useState<CountdownProps>(DEFAULT_COUNTDOWN)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const eventDate = new Date(globalVar.EVENT_DATE).getTime()
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
      <div className="flex flex-wrap gap-4 md:gap-12 justify-center mt-6">
        <EventSchedule
          name="akad"
          date={dayjs(globalVar.EVENT_DATE).locale('id').format('dddd, DD MMMM YYYY')}
          time="08.00 - 09.00 wib"
          location="spotify camp nou, barcelona"
          url={LOCATION_URL}
        />
        <EventSchedule
          name="resepsi"
          date={dayjs(globalVar.EVENT_DATE).locale('id').format('dddd, DD MMMM YYYY')}
          time="10.00 - 11.30 wib"
          location="spotify camp nou, barcelona"
          url={LOCATION_URL}
        />
      </div>
    </div>
  )
}
