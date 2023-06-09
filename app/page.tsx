import { CtaBanner } from 'components/cta-banner';
import { FerrariInterior } from 'components/ferrari-interior';
import { Intrigue } from 'components/intrigue';
import Footer from 'components/layout/footer';
import { LVMHMoodBoard } from 'components/moodboard';
import { SpaceEnergySection } from 'components/spaceenergy';
import { TremorSection } from 'components/tremor-page';
import { getTranslations } from './translations.server';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(process.env.SITE_NAME || '')}`,
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  }
};

export default async function HomePage() {
  const translations = await getTranslations([
    'MockCTADescription',
    'MockCTAHeadline',
    'MockCTALink',
    'Add to wishlist',
    'Remove from wishlist'
  ]);

  return (
    <>
      <CtaBanner
        headline={translations.MockCTAHeadline}
        description={translations.MockCTADescription}
        ctaText={translations.MockCTALink}
        ctaTo="/"
        variant="secondary"
      />
      <FerrariInterior />
      <LVMHMoodBoard />
      <Intrigue />
      <SpaceEnergySection />
      <TremorSection />
      {/* @ts-expect-error Server Component */}
      <Footer />
    </>
  );
}
