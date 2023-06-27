'use client';

import Image from 'next/image';
import { useEffect } from 'react';

import { Gradient } from 'public/MeshGradient.js';

export function LVMHMoodBoard({}: {}) {
  const backgroundAnimation = () => {
    const canvas = document.getElementById('gradient-canvas');
    // @ts-ignore
    const ctx = canvas!.getContext('2d');

    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 150, 100);
  };

  useEffect(() => {
    const gradient1 = new Gradient();
    const gradient2 = new Gradient();
    // @ts-ignore
    gradient1.initGradient('#gradient1-canvas');
    gradient2.initGradient('#gradient2-canvas');
    //backgroundAnimation();
  }, []);

  return (
    <>
      <div
        id="sectionintregue"
        className=" relative top-0 flex  h-screen  w-full items-center justify-center "
      >
        <canvas className="gradientStyles" id="gradient1-canvas" data-transition-in />

        <div className="h-screen w-full">
          <>
            <div id="Hero" className="flex h-screen w-full items-center justify-center">
              <video
                controls={false}
                autoPlay={true}
                muted={true}
                loop={true}
                className="hidden  animate-videoFadeIn sm:block"
              >
                <source src="LVMH-Hero-vorbis.webm" type="video/webm" />
              </video>
            </div>
          </>
        </div>
      </div>

      <section className="lv-landing-page__section -moodboard_01 -padding-top-3 -padding-top-m-5  relative top-0 flex h-screen w-full items-center justify-center">
        <canvas className="gradientStyles" id="gradient2-canvas" data-transition-in />
        <div
          id="moodboard_01"
          className="lv-editorial-moodboard -layout-aside -reverse flex flex-initial"
        >
          <div id="media" className="inset-0 w-[56.6vw]">
            <Image
              src="/cms_vis_txt_img_desktop_5049_v_1.jpg"
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
                className=" mr-2 h-[196px] w-[313px] translate-y-9 transform leading-7"
                style={{
                  transform: 'translateY(30px)',
                  opacity: 0.25
                }}
              >
                <p>
                  An enduring feminine icon, the Capucines symbolizes the quintessence of Louis
                  Vuitton, crafted with An intuitive blend of elegance, versatility, and
                  savoir-faire. Reimagined in a vibrant spring hue, Zendaya showcases the iconic
                  handbag in Topaz blue.
                </p>
              </div>
            </div>
            <div className="lv-editorial-text-block__description body-l h-[67vh]">
              <div id="Hero" className="mt-12 flex h-full w-full items-center justify-center">
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
        </div>
      </section>
    </>
  );
}
