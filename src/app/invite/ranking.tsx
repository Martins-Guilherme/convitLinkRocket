import cooper from '../../assets/medal-cooper.svg'
import gold from '../../assets/medal-gold.svg'
import silver from '../../assets/medal-silver.svg'

import Image from 'next/image'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      {/* Lista com o ranking */}
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        {/* 1° posição */}
        <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2°</span> | Guilherme Martins
          </span>

          <div className="font-heading text-2xl font-semibold leading-none text-gray-200">
            1030
          </div>
          <Image className="absolute top-0 right-8" src={gold} alt="." />
        </div>
        {/* 2° posição */}
        <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2°</span> | Gilberto Martins
          </span>

          <div className="font-heading text-2xl font-semibold leading-none text-gray-200">
            1030
          </div>
          <Image className="absolute top-0 right-8" src={silver} alt="." />
        </div>
        {/* 3° posição */}
        <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3°</span> | Dalessandro Martins
          </span>

          <div className="font-heading text-2xl font-semibold leading-none text-gray-200">
            1030
          </div>
          <Image className="absolute top-0 right-8" src={cooper} alt="." />
        </div>
      </div>
    </div>
  )
}
