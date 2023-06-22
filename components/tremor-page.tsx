import { ReactNode } from 'react';
import Container from './common/container';

import { Card, Flex, Metric, ProgressBar, Text } from '@tremor/react';

export function TremorSection({
  ctaText,
  ctaTo,
  description,
  headline,
  variant = 'primary'
}: {
  ctaText: ReactNode;
  ctaTo: string;
  description: ReactNode;
  headline: ReactNode;
  variant: 'primary' | 'secondary';
}) {
  return (
    <Container className="grid  h-screen w-full grid-cols-6 grid-rows-6 gap-10 px-0">
      <div className="col-span-2 row-span-6 m-6 h-full max-w-lg border-4 p-6">
        <h1> Tremor demo</h1>
      </div>

      <div className="col-span-4  row-span-3  mt-3 sm:mx-2">
        <div className="mx-4 h-full">
          <div className="flex  h-full  items-center justify-center">
            <Card className="mx-auto max-w-xs">
              <Text>Sales</Text>
              <Metric>$ 164,743</Metric>
              <Flex className="mt-4">
                <Text>78% of annual target</Text>
                <Text>$ 225,000</Text>
              </Flex>
              <ProgressBar value={78} className="mt-2" />
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
}
