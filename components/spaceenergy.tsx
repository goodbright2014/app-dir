'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Gradient } from 'public/MeshGradient.js';

export function SpaceEnergySection({}: {}) {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useEffect(() => {
    const gradient = new Gradient();
    // @ts-ignore
    gradient.initGradient('#gradient-canvas');
  }, []);

  useEffect(() => {
    //const gradient2 = new Gradient();
    // @ts-ignore
    // gradient2.initGradient('#gradient-canvas');
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      // @ts-ignore
      element.querySelector('.pContent'),
      {
        opacity: 0.25,
        y: 100,
        duration: 1.6,
        ease: 'power1.inOut'
      },
      {
        opacity: 1,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          // @ts-ignore
          trigger: element.querySelector('.pSection'),
          start: 'top 60%',
          end: 'bottom 90%',
          scrub: true
        }
      }
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      // @ts-ignore
      element.querySelector('.pImage'),
      {
        opacity: 0.25,
        y: 100,
        duration: 1.6,
        ease: 'power1.inOut'
      },
      {
        opacity: 1,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          // @ts-ignore
          trigger: element.querySelector('.pSection'),
          start: 'top 60%',
          end: 'bottom 90%',
          scrub: true
        }
      }
    );
  }, []);

  return (
    <>
      <div ref={ref} className="relative h-screen w-full">
        <canvas className="gradientStyles" id="gradient-canvas" data-transition-in />

        <div className="pSection inset-0 flex">
          <div className="container  flex h-[33vh] items-start  justify-end ">
            <div
              className="pContent  mr-2 h-[196px] w-[313px] leading-7"
              style={{
                transform: 'translateY(30px)',
                opacity: 0.25
              }}
            >
              <p>
                An enduring feminine icon, the Capucines symbolizes the quintessence of Louis
                Vuitton, crafted with An intuitive blend of elegance, versatility, and savoir-faire.
                Reimagined in a vibrant spring hue, Zendaya showcases the iconic handbag in Topaz
                blue.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <Image
              src="/vulgari1.webp"
              alt="interior-1"
              width="810"
              height="542"
              sizes="50vw"
              className="relative"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
