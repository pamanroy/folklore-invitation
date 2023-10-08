'use client'

import { useEffect, useRef, useState } from 'react'
import { Input } from '../components/Input'
import { globalVar } from '../constants/env'
import Link from 'next/link'
import { Button } from '../components/Button'
import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline'

export default function GenerateLink() {
  const [invitee, setInvitee] = useState('')
  const [isCopied, setIsCopied] = useState(false)

  const getLinkText = () => `${globalVar.BASE_URL}/?to=${encodeURIComponent(invitee)}`
  const getLink = () => `https://${getLinkText()}`

  useEffect(() => {
    if (!isCopied) return

    const timeout = setTimeout(() => {
      setIsCopied(false)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [isCopied])

  return (
    <div className="content h-[100dvh] w-screen flex justify-center italic p-6">
      <div className="min-h-[120px] break-words w-64 md:w-80">
        <Input
          type="text"
          id="invitee"
          name="invitee"
          label="nama tamu"
          placeholder="Sasuke Uchiha"
          className="mb-3"
          value={invitee}
          onChange={(event) => setInvitee(event.target.value)}
        />
        {!!invitee.length && (
          <>
            <p>link</p>
            <Link href={getLink()} target="_blank" className="hover:underline underline-offset-4 block">
              {getLinkText()}
            </Link>
            <Button
              theme="dark"
              className="mt-1 flex items-center gap-1 px-3 py-2"
              onClick={() => {
                setIsCopied(true)
                navigator.clipboard.writeText(getLinkText())
              }}
            >
              {!isCopied && (
                <>
                  <ClipboardIcon className="w-4 h-5" /> copy link
                </>
              )}
              {isCopied && (
                <>
                  <CheckIcon className="w-4 h-4" /> copied
                </>
              )}
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
