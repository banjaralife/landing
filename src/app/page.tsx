'use client';

import Image from "next/image";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17676322928',
      });
    }
  }, []);

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
            priority
          />
        </div>
        <div className="w-24 lg:w-28">
          <Image
            src="/right-top-decor.svg"
            alt="Decorations for top left"
            width={326}
            height={421}
            priority
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
            priority
          />
          <Image
            src="/banjara.svg"
            alt="Banjara"
            width={200}
            height={200}
            className="absolute w-48"
            priority
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
            priority
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
            priority
          />
        </div>
      </div>
      {/* Footer tiling */}
      <div className="absolute bottom-0 bg-[url(/footer-tile.png)] w-full h-[120px] md:h-[180px] bg-repeat-x bg-position-[bottom_center] bg-size-[auto_120px] md:bg-size-[auto_180px]">
      </div>
    </div>
  );
}
