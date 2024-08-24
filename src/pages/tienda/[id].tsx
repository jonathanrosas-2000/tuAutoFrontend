'use client'
import { useEffect, useState } from 'react'
import PrincipalLayout from "@/layout/PrincipalLayout"
import { ProductHeadBar, ProductContainer, Chatbot} from '@/components';
import '@/styles/globals.css';
import { useRouter } from 'next/router'
import {products as productsFromDB } from '@/data/cars';
import { carType } from '@/types/typing';

const ProductPage = () => {
    const [product, setProduct] = useState<carType>({
      id: '',
      name: '',
      brand: '',
      year: 0,
      color: '',
      description: '',
      doors: 0,
      images: [],
      mileage: 0,
      price: 0,
      mortage: 0,
      type: '',
      transmission:  'estandar',
      extra: [],
      seoDetails: {
        title: "",
        description: "",
        keywords: [],
        subject: "",
        productSchema: {
          additionalType: "",
          description: "",
          name: "",
        },
      },
    });
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter()

    useEffect(() => {
      if (router.query.id) {
        const carFromDB = productsFromDB.filter((car: carType) => car.id === router.query.id);
        if (carFromDB.length > 0) {
          setProduct(carFromDB[0]);
        }
      }
      setLoading(false);
    }, [router.query.id]);

  return (
    <PrincipalLayout>
      {loading ? (
        <>CARGANDO</>
      ):(
        <>
        {product.id && (
          <>
            <ProductHeadBar name={product.name} id={product.id} />
            <ProductContainer key={product.id} product={product}/>
            <Chatbot 
              message={`🌟 ¿Te intereso nuestro ${product.name} ${product.year}? 🚗`}
              whatsAppMessage = {`¡Hola! Estoy interesado(a) en ${product.name} del ${product.year} que vi publicado en su sitio, ¿Pueden darme mas informes?`}      
            />
          </>
        )}
        </>
      )}
    </PrincipalLayout>
  )
}

export default ProductPage