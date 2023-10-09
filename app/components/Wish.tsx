import { FormEvent, useState } from 'react'
import { Input } from './Input'
import { useSearchParams } from 'next/navigation'
import { TextArea } from './TextArea'
import { useEffect } from 'react'
import { Select } from './Select'
import { Button } from './Button'
import axios from 'axios'

export const Wish = () => {
  const search = useSearchParams()
  const [name, setName] = useState(search.get('to') || '')
  const [wish, setWish] = useState('')
  const [attendance, setAttendance] = useState('')

  const submit = (event: FormEvent) => {
    event.preventDefault()
  }

  useEffect(() => {
    axios
      .get('/api/wishes')
      .then((result) => {
        console.log(result.data, 'ajg')
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className="w-full">
      <p className="title text-center">untaian doa</p>
      <form className="max-w-lg mx-auto mt-3" onSubmit={submit}>
        <Input type="text" placeholder="nama" value={name} onChange={(event) => setName(event.target.value)} className="mb-3" />
        <TextArea
          rows={4}
          placeholder="ucapan"
          value={wish}
          onChange={(event) => setWish(event.target.value)}
          className="mb-3"
          required
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
