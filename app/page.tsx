import Hero from '@/components/home/Hero';
import QuickInfo from '@/components/home/QuickInfo';
import Values from '@/components/home/Values';
import DayInLife from '@/components/home/DayInLife';
import NewsPreview from '@/components/home/NewsPreview';
import Locations from '@/components/home/Locations';
import CTABand from '@/components/home/CTABand';

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickInfo />
      <Values />
      <DayInLife />
      <NewsPreview />
      <Locations />
      <CTABand />
    </>
  );
}
