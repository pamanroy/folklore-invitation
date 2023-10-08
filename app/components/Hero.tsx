export const Hero = () => {
  return (
    <div
      className="bg-cover bg-center py-16 px-12 flex flex-wrap text-slate-50 gap-16 md:gap-0"
      style={{ backgroundImage: "url('/pine-forest-2.jpeg')" }}
    >
      <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 items-center">
        <p className="text-xl md:text-2xl">the wedding of</p>
        <div className="text-7xl text-center">
          <p>naruto</p>
          <p>&</p>
          <p>hinata</p>
        </div>
        <p className="text-xl md:text-2xl">29.03.2026</p>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-sm md:text-base text-center">
        <p className="mb-3">لَمْ نَرَ لِلْمُتَحَابَّيْنِ مِثْلَ النِّكَاحِ</p>
        {/* @ts-ignore */}
        <p style={{ textWrap: 'balance' }}>
          “Kami tidak pernah mengetahui solusi untuk dua orang yang saling mencintai semisal pernikahan.”
        </p>
        <p>(HR. Ibnu Majah no. 1920)</p>
      </div>
    </div>
  )
}
