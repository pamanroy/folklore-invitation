import Image from 'next/image'
import { Jura } from 'next/font/google'
import './Gift.css'
import classNames from 'classnames'
import { Button } from './Button'
import { CheckIcon, ClipboardIcon, GiftIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { globalVar } from '../constants/env'

const jura = Jura({ weight: '400', style: ['normal'], subsets: ['latin'] })

const DebitCard = ({ name, cardNumber, bankImage }: { name: string; cardNumber: string; bankImage: string }) => {
  const [isCopied, setIsCopied] = useState(false)

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
    <div
      className={classNames(
        'debit-card w-11/12 max-w-xs h-40 rounded-xl text-slate-900 flex flex-col justify-between shadow-lg p-3',
        jura.className
      )}
    >
      <div className="flex justify-end">
        <Image src={bankImage} alt="bank" loading="lazy" sizes="100%" width={0} height={0} className="w-10 h-auto" />
      </div>
      <div className="text-left">
        <Image src="/chip.png" alt="bsi" loading="lazy" sizes="100%" width={0} height={0} className="w-10 h-auto mb-1" />
        <p className="leading-3">{cardNumber}</p>
        <p className="uppercase">{name}</p>
      </div>
      <div className="flex justify-end">
        <Button
          theme="dark"
          className="px-2 py-1 mt-0 flex gap-1 items-center rounded not-italic text-sm bg-slate-500 hover:bg-slate-700"
          onClick={() => {
            setIsCopied(true)
            navigator.clipboard.writeText(cardNumber)
          }}
        >
          {!isCopied && (
            <>
              <ClipboardIcon className="w-4 h-4" /> Salin
            </>
          )}
          {isCopied && (
            <>
              <CheckIcon className="w-4 h-4" /> Berhasil disalin
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

export const Gift = () => {
  return (
    <div className="w-full text-center">
      <p className="title mb-3">amplop digital</p>
      <p>
        bagi yang ingin memberikan hadiah untuk pernikahan kami, kami menerima secara cashless melalui rekening kami berikut
      </p>
      <div className="flex flex-wrap justify-center gap-6 items-center mt-2">
        <DebitCard name={globalVar.GROOM_FULLNAME} cardNumber="1234567890" bankImage="/bsi.png" />
        <DebitCard name={globalVar.BRIDE_FULLNAME} cardNumber="0123456789" bankImage="/bsi.png" />
      </div>
    </div>
  )
}
