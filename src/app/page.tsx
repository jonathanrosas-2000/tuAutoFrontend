import { redirect } from 'next/navigation';
import { Chatbot, Hero, BrandSelector, SellYourCar, WhyUs, Footer } from '@/components'
import PrincipalLayout from '@/layout/PrincipalLayout';

export default function Home() {
  redirect('/tienda');
  
  return (
    <>
      <PrincipalLayout>
        <Hero />
        <BrandSelector />
        <SellYourCar />
        <WhyUs />
      </PrincipalLayout>
      <Chatbot 
        message='🌟 ¡Bienvenidos a nuestra página! 🚗💨¿Buscas un coche que se adapte a tu estilo y necesidades?' 
        whatsAppMessage = '¡Hola! Estoy buscando un vehículo y me gustaría saber qué opciones tienen disponibles.'      
      />
    </>
  );
}
