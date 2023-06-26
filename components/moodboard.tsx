'use client';
import Image from 'next/image';

export function LVMHMoodBoard({}: {}) {
  return (
    <>
      <div
        id="sectionintregue"
        className=" relative top-0 flex h-screen  w-full items-center justify-center "
      >
        <div className="h-screen w-full">
          <>
            <div id="Hero" className="flex h-screen w-full items-center justify-center">
              <video
                controls={false}
                autoPlay={true}
                muted={true}
                loop={true}
                className="hidden h-screen w-full animate-videoFadeIn sm:block"
              >
                <source src="LVMH-Hero-vorbis.webm" type="video/webm" />
              </video>
            </div>
          </>
        </div>
      </div>

      <section className="lv-landing-page__section -moodboard_01 -padding-top-3 -padding-top-m-5  relative top-0 flex h-screen w-full items-center justify-center">
        <div id="moodboard_01" className="lv-editorial-moodboard -layout-aside -reverse flex">
          <div className="lv-editorial-moodboard__medias w-[50vw]">
            <div className="lv-editorial-moodboard__main">
              <div className="lv-editorial-media">
                <div className="lv-featured-products lv-editorial-featured-products placeholder-portrait">
                  <div aria-label="View featured products" className="lv-featured-products__wrap">
                    <div className="lv-smart-picture lv-responsive-picture">
                      <Image
                        src="/lvmh-moodboard-left.avif"
                        alt="interior-1"
                        fill={true}
                        sizes="1200"
                        className="relative"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lv-editorial-moodboard__content relative flex-1">
            <div className="flex flex-col">
              <div className=" lv-editorial-moodboard__details h-[300px] w-[50vw]">
                <div className="lv-editorial-text-block lv-editorial-moodboard__description">
                  <div className="lv-editorial-text-block__description body-l">
                    <p>
                      An enduring feminine icon, the Capucines symbolizes the quintessence of Louis
                      Vuitton, crafted with An intuitive blend of elegance, versatility, and
                      savoir-faire. Reimagined in a vibrant spring hue, Zendaya showcases the iconic
                      handbag in Topaz blue.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lv-editorial-moodboard__medias">
                <div className="lv-editorial-moodboard__main">
                  <div className="lv-editorial-media">
                    <div className="lv-featured-products lv-editorial-featured-products placeholder-portrait">
                      <div
                        aria-label="View featured products"
                        className="lv-featured-products__wrap"
                      >
                        <div className="lv-smart-picture lv-responsive-picture">
                          <Image
                            src="/CAPUCINES_ZENDAYA_ANNOUNCEMENT_SP2_LVCOM_1600x2000_DII.avif"
                            alt="interior-1"
                            fill={true}
                            sizes="1200"
                            className="relative"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
