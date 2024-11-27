import Hero from '@/components/Hero';
import FeaturedFlowers from '@/components/FeaturedFlowers';
import AboutSection from '@/components/AboutSection';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedFlowers />
      <AboutSection />
      <Services />
    </>
  );
}