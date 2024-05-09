import { Chatbot, Hero, BrandSelector, SellYourCar, WhyUs, Footer } from '@/components'
import PrincipalLayout from '@/layout/PrincipalLayout';

export default function Home() {
  return (
    <>
      <PrincipalLayout>
        <Hero />
        <BrandSelector />
        <SellYourCar />
        <WhyUs />
      </PrincipalLayout>
      <Chatbot message='🌟 ¡Bienvenidos a nuestra página! 🚗💨¿Buscas un coche que se adapte a tu estilo y necesidades?' />
    </>
  );
}
