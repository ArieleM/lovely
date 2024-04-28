import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 rounded-lg bg-cyan-100 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/marsalacorpete.png"
          width={920}
          height={920}
          quality={100}
          alt=""
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-cyan-100 bg-black/30 p-1 pl-5">
          <span className="text-sm truncate text-cyan-100">
            Vestido Marsala
          </span>
          <span className="flex h-full items-center justify-center rounded-full bg-teal-500 px-4 font-semibold text-cyan-100">
            R$599
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-cyan-100 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/terracota.png"
          width={920}
          height={920}
          quality={100}
          alt=""
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-cyan-100 bg-black/30 p-1 pl-5">
          <span className="text-sm truncate text-cyan-100">
            Vestido Terracota
          </span>
          <span className="flex h-full items-center justify-center rounded-full bg-teal-500 px-4 font-semibold text-cyan-100">
            R$599
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-cyan-100 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/verde.png"
          width={920}
          height={920}
          quality={100}
          alt=""
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-cyan-100 bg-black/30 p-1 pl-5">
          <span className="text-sm truncate text-cyan-100">Vestido Verde</span>
          <span className="flex h-full items-center justify-center rounded-full bg-teal-500 px-4 font-semibold text-cyan-100">
            R$599
          </span>
        </div>
      </Link>
    </div>
  )
}
