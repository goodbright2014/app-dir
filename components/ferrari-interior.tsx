'use client';

import Image from 'next/image';

import Container from './common/container';

export function FerrariInterior({}: {}) {
  return (
    <Container className=" relative h-screen w-full ">
      <div className="grid h-full w-full grid-cols-7 grid-rows-2 gap-4 ">
        <div className="col-span-4 row-span-1 h-full w-full overflow-hidden">
          <Image
            src="/interior-ferrari1.webp"
            alt="interior-1"
            width={1024}
            height={1024}
            sizes="1200"
            className="object-cover"
          />
        </div>
        <div className="col-span-3 row-span-1 h-full w-full overflow-hidden">
          <Image
            src="/interior-ferrari2.webp"
            alt="interior-1"
            width={1024}
            height={1024}
            sizes="1200"
            className="object-cover"
          />
        </div>
        <div className="col-span-3 row-span-1 h-full w-full overflow-hidden">
          <Image
            src="/interior-ferrari4.webp"
            alt="interior-1"
            width={1024}
            height={1024}
            sizes="1200"
            className="object-cover"
          />
        </div>
        <div className="col-span-4 row-span-1 h-full w-full overflow-hidden">
          <Image
            src="/interior-ferrari3.webp"
            alt="interior-1"
            width={1024}
            height={1024}
            sizes="1200"
            className="object-cover"
          />
        </div>
      </div>
    </Container>
  );
}
