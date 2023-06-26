'use client';

export function Intrigue({}: {}) {
  return (
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
  );
}
