import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center bg-brand">
      {/* Top decorations */}
      <div className="absolute top-0 left-0 flex justify-between w-full p-6">
        <div className="w-24 lg:w-28">
          <Image
            src="/right-top-decor.svg"
            alt="Decorations for top right"
            width={326}
            height={421}
            className="-scale-x-100"
          />
        </div>
        <div className="w-24 lg:w-28">
          <Image
            src="/right-top-decor.svg"
            alt="Decorations for top left"
            width={326}
            height={421}
          />
        </div>
      </div>

      {/* Center content */}
      <div className="flex flex-col items-center gap-8 px-16 w-full ">
        {/* Logo with backdrop */}
        <div className="relative flex items-center justify-center">
          <Image
            src="/logo-bg.svg"
            alt=""
            width={400}
            height={400}
          />
          <Image
            src="/banjara.svg"
            alt="Banjara"
            width={200}
            height={200}
            className="absolute w-48"
          />
        </div>

        {/* Coming soon text with dividers */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/divider.svg"
            alt=""
            width={300}
            height={20}
            className="w-24 md:w-30 lg:w-32"
          />
          <h1 className="font-bold text-xl text-[#5A2313] md:text-2xl lg:text-3xl">
            Coming soon
          </h1>
          <Image
            src="/divider.svg"
            alt=""
            width={300}
            height={20}
            className="w-24 md:w-30 lg:w-32"
          />
        </div>
      </div>
      {/* Footer tiling */}
      <div className="absolute bottom-0 bg-[url(/footer-tile.png)] w-full h-[120px] md:h-[180px] bg-repeat-x bg-position-[bottom_center] bg-size-[auto_120px] md:bg-size-[auto_180px]">
      </div>
    </div>
  );
}
