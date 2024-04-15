import Image from 'next/image'
import { globalVar } from '../constants/env'

interface ProfileProps {
  src: string
  name: string
  parents: string
}

const Profile = ({ src, name, parents }: ProfileProps) => (
  <div className="flex flex-col flex-auto items-center text-slate-900 text-center">
    <Image src={src} alt={name} loading="lazy" sizes="100%" width={0} height={0} className="w-full max-w-xs lg:max-w-sm" />
    <p className="text-xl my-2">{name}</p>
    {/* @ts-ignore */}
    <p style={{ textWrap: 'balance' }} className="leading-5 text-sm lg:text-base">
      {parents}
    </p>
  </div>
)

export const BrideGroom = () => {
  return (
    <div className="w-full">
      <p className="title mb-8">calon pengantin</p>
      <div className="flex flex-wrap justify-between gap-6">
        <Profile
          src="/man.webp"
          name={globalVar.GROOM_FULLNAME}
          parents="putra tunggal dari bapak minato namikaze & ibu kushina uzumaki"
        />
        <Profile
          src="/woman.webp"
          name={globalVar.BRIDE_FULLNAME}
          parents="putri pertama dari bapak hiashi hyuga & ibu hanami hyuga"
        />
      </div>
    </div>
  )
}
