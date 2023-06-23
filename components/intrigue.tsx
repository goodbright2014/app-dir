'use client';

import Container from './common/container';

export function Intrigue({}: {}) {
  return (
    <Container className=" relative h-screen w-full ">
      <video controls className="w-full">
        <source src="Pale-Rose-Elevator-Loop.mp4" type="video/webm" />
      </video>
    </Container>
  );
}
