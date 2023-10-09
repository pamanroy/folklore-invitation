import { FormEvent, useState } from 'react'
import { Input } from './Input'
import { useSearchParams } from 'next/navigation'
import { TextArea } from './TextArea'
import { useEffect } from 'react'
import { Select } from './Select'
import { Button } from './Button'
import axios from 'axios'
import { useFetchDataSchema, useSimpleReducer } from '../hooks/data'

interface WishData {
  attendance: string
  name: string
  message: string
}

export const Wish = () => {
  const search = useSearchParams()
  const [name, setName] = useState(search.get('to') || '')
  const [message, setMessage] = useState('')
  const [attendance, setAttendance] = useState('')
  const [wishes, setWishes] = useFetchDataSchema<WishData[]>({ isFetching: false, error: null, data: [] })
  const [submitProcess, setSubmitProcess] = useSimpleReducer<{ isSubmitting: boolean; error: Error | null }>({
    isSubmitting: false,
    error: null,
  })

  const getWishes = () => {
    setWishes({ error: null, isFetching: true })
    axios
      .get<WishData[]>('/api/wishes')
      .then((result) => {
        setWishes({ data: result.data, isFetching: false })
      })
      .catch((error) => {
        console.error(error)
        setWishes({ error, isFetching: false })
      })
  }

  const submitWish = (event: FormEvent) => {
    event.preventDefault()
    setSubmitProcess({ error: null, isSubmitting: true })
    axios
      .post('/api/wishes', { name, message, attendance })
      .then((result) => {
        setWishes({ data: [result.data, ...wishes.data] })
        setSubmitProcess({ isSubmitting: false })
      })
      .catch((error) => {
        console.error(error)
        setSubmitProcess({ error, isSubmitting: false })
      })
  }

  useEffect(() => {
    getWishes()
  }, [])

  return (
    <div className="w-full">
      <p className="title text-center mb-3">untaian doa</p>
      <p className="text-center">semoga kebaikan juga tercurahkan kepada yang mendoakan kami kebaikan</p>
      <form className="max-w-lg mx-auto mt-3" onSubmit={submitWish}>
        <Input
          type="text"
          placeholder="nama"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mb-3"
          maxLength={128}
        />
        <TextArea
          rows={4}
          placeholder="ucapan"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mb-3"
          required
          maxLength={4096}
        />
        <Select
          label="konfirmasi kehadiran"
          value={attendance}
          onChange={(event) => setAttendance(event.target.value)}
          options={[
            { label: 'hadir', value: 'yes' },
            { label: 'masih ragu', value: 'unknown' },
            { label: 'tidak hadir', value: 'no' },
          ]}
          required
        />
        <Button theme="dark" type="submit" className="mt-3 px-3 py-1">
          kirim
        </Button>
      </form>
    </div>
  )
}
