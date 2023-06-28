'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Gradient } from 'public/MeshGradient.js';

export function LVMHMoodBoard({}: {}) {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useEffect(() => {
    const gradient = new Gradient();
    // @ts-ignore
    gradient.initGradient('#gradient-canvas');
  }, []);

  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.fromTo(
  //     // @ts-ignore
  //     element.querySelector(".pContent"),
  //     {
  //       opacity: 0.25,
  //       y: 100,
  //       duration: 1.6,
  //       ease: 'power1.inOut',
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       ease: "none",
  //       scrollTrigger: {
  //         // @ts-ignore
  //         trigger: element.querySelector(".pSection"),
  //         start: "top 60%",
  //         end: "bottom 90%",
  //         scrub: true
  //       },
  //     }
  //  );
  // }, []);

  return (
    <>
      <section className="flex">
        <div id="media" className="inset-0 w-[56.6vw] ">
          <Image
            src="/lvmh-moodboard-left.avif"
            alt="interior-1"
            width="900"
            height="1200"
            sizes="60vw"
            className="relative"
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div id="description" className=" flex w-[40vw] flex-col">
          <div className="lv-editorial-text-block__description body-l flex  h-[33vh] justify-end  ">
            <div
              className=" mr-2 h-[196px] w-[313px] leading-7"
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
          <div className="lv-editorial-text-block__description body-l h-[67vh]">
            <div id="Hero2" className="mt-12 flex h-full w-full items-center justify-center">
              <video
                controls={false}
                autoPlay={true}
                muted={true}
                loop={true}
                className="hidden h-full w-full animate-videoFadeIn sm:block"
                style={{ objectFit: 'contain' }}
              >
                <source src="xzFaPUbqp2_MD.mp4" type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
