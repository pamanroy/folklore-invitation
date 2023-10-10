import Image from 'next/image'
import { globalVar } from '../constants/env'

export const Gratitude = () => {
  return (
    <div className="flex max-md:flex-wrap justify-center items-center gap-4 md:px-2 lg:px-20 xl:px-36">
      <Image src="/love.webp" alt="love" loading="lazy" sizes="100%" width={0} height={0} className=" w-4/5 max-w-sm h-auto" />
      <div>
        {/* @ts-ignore */}
        <p style={{ textWrap: 'balance' }} className="text-center text-sm md:text-base">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa
          restu.
        </p>

        {/* @ts-ignore */}
        <p style={{ textWrap: 'balance' }} className="text-center text-sm md:text-base">
          Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
        </p>

        <p className="text-2xl md:text-3xl text-center mt-4">
          {globalVar.GROOM_NAME} & {globalVar.BRIDE_NAME}
        </p>
      </div>
    </div>
  )
}
