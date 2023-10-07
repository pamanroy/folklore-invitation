import Image from 'next/image'

interface ProfileProps {
  src: string
  alt: string
  name: string
  parents: string
}

const Profile = ({ src, alt, name, parents }: ProfileProps) => (
  <div className="flex flex-col flex-auto items-center text-slate-900 text-center">
    <Image src={src} alt={alt} loading="lazy" sizes="100%" width={0} height={0} className="w-full max-w-xs lg:max-w-sm" />
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
          alt="rijal"
          name="Alexander Rijal"
          parents="putra kedua dari bapak alexander agung & ibu alexandra"
        />
        <Profile
          src="/woman.webp"
          alt="nisa"
          name="Cleopatra Annisa"
          parents="putri tunggal dari bapak abdurrahman & ibu aisyah"
        />
      </div>
    </div>
  )
}
