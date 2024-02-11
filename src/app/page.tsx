import { Header, Hero, BrandSelector, SellYourCar, WhyUs, Footer } from '@/components'
import PrincipalLayout from '@/layout/PrincipalLayout';

export default function Home() {
  return (
    <PrincipalLayout>
      <Hero />
      <BrandSelector />
      <SellYourCar />
      <WhyUs />
    </PrincipalLayout>
  );
}
