'use client';

import {
  Card,
  Grid,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Title
} from '@tremor/react';

import type { DeltaType } from '@tremor/react';

import Container from './common/container';

import { KpiCard } from './dashboard/kpi-card';

const kpiData = [
  {
    title: 'Sales',
    metric: '$ 12,699',
    progress: 15.9,
    target: '$ 80,000',
    delta: '13.2%',
    deltaType: 'moderateIncrease' as DeltaType
  },
  {
    title: 'Profit',
    metric: '$ 45,564',
    progress: 36.5,
    target: '$125,000',
    delta: '23.9%',
    deltaType: 'increase' as DeltaType
  },
  {
    title: 'Customers',
    metric: '999,072',
    progress: 53.6,
    target: '1,200,000',
    delta: '10.1%',
    deltaType: 'moderateDecrease' as DeltaType
  }
];

export function TremorSection({}: {}) {
  return (
    <Container className="grid  h-screen w-full grid-cols-6 grid-rows-6 gap-10 ">
      <div className="col-span-2 row-span-6 mx-6 mt-3  max-w-lg  ">
        <h1> Tremor demo</h1>
      </div>

      <div className="col-span-4  row-span-6  mt-3 px-12 py-12 sm:mx-2">
        <Title>Dashboard</Title>
        <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

        <TabGroup className="mt-6">
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Detail</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid numItemsMd={2} numItemsLg={3} className="mt-6 gap-6">
                {kpiData.map((item) => (
                  <KpiCard key={item.title} item={item} />
                ))}
              </Grid>
              <div className="mt-6">
                <Card>
                  <div className="h-80" />
                </Card>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-6">
                <Card>
                  <div className="h-96" />
                </Card>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </Container>
  );
}
