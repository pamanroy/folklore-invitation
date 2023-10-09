import { FormEvent, useState } from 'react'
import { Input } from './Input'
import { useSearchParams } from 'next/navigation'
import { TextArea } from './TextArea'
import { useEffect } from 'react'
import { Select } from './Select'
import { Button } from './Button'
import axios from 'axios'
import { useFetchDataSchema, useSimpleReducer } from '../hooks/data'
import { CheckCircleIcon, QuestionMarkCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'

interface WishData {
  attendance: string
  name: string
  message: string
  _id: string
}

const getAttendanceIcon = (attendance: string) => {
  switch (attendance) {
    case 'yes':
      return <CheckCircleIcon className="w-4 h-4 inline text-green-500" />
    case 'no':
      return <XCircleIcon className="w-4 h-4 inline text-red-600" />
    case 'unknown':
      return <QuestionMarkCircleIcon className="w-4 h-4 inline text-orange-500" />
    //no default
  }
}

export const Wish = () => {
  const search = useSearchParams()
  const [form, setForm] = useSimpleReducer<{ name: string; message: string; attendance: string }>({
    name: search.get('to') || '',
    message: '',
    attendance: '',
  })
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
    const { name, message, attendance } = form
    axios
      .post('/api/wishes', { name, message, attendance })
      .then((result) => {
        setForm({ name: '', message: '', attendance: '' })
        setWishes({ data: [result.data, ...wishes.data] })
        setSubmitProcess({ isSubmitting: false })
      })
      .catch((error) => {
        console.error(error)
        setSubmitProcess({ error, isSubmitting: false })
      })
  }

  const renderWishes = () => {
    if (wishes.error) {
      return (
        <div className="flex flex-col items-center gap-2">
          <p>gagal memuat pesan</p>
          <div>
            <Button theme="dark" className="px-3 py-1" onClick={getWishes}>
              coba lagi
            </Button>
          </div>
        </div>
      )
    }
    if (wishes.isFetching) {
      return <p className="text-center">memuat pesan...</p>
    }
    return wishes.data.map((wish) => (
      <div key={wish._id} className="border-b border-slate-900 py-2">
        <p className="font-semibold">
          {wish.name} {getAttendanceIcon(wish.attendance)}
        </p>
        <p className="whitespace-pre-wrap break-all">{wish.message}</p>
      </div>
    ))
  }

  useEffect(() => {
    getWishes()
  }, [])

  return (
    <div className="w-full">
      <p className="title text-center mb-3">pesan</p>
      <p className="text-center">semoga kebaikan juga tercurahkan kepada yang mendoakan kami kebaikan</p>
      <form className="max-w-lg mx-auto mt-3" onSubmit={submitWish}>
        <Input
          type="text"
          placeholder="nama"
          value={form.name}
          onChange={(event) => setForm({ name: event.target.value })}
          className="mb-3"
          maxLength={128}
        />
        <TextArea
          rows={4}
          placeholder="pesan"
          value={form.message}
          onChange={(event) => setForm({ message: event.target.value })}
          className="mb-3"
          required
          maxLength={2048}
        />
        <Select
          label="konfirmasi kehadiran"
          value={form.attendance}
          onChange={(event) => setForm({ attendance: event.target.value })}
          options={[
            { label: 'hadir', value: 'yes' },
            { label: 'masih ragu', value: 'unknown' },
            { label: 'tidak hadir', value: 'no' },
          ]}
          required
        />
        <Button theme="dark" disabled={submitProcess.isSubmitting} type="submit" className="mt-3 px-3 py-1">
          {submitProcess.isSubmitting ? 'mengirim...' : 'kirim'}
        </Button>
      </form>
      <div className="max-w-lg mx-auto mt-8 normal-case max-h-80 overflow-y-scroll">{renderWishes()}</div>
    </div>
  )
}
