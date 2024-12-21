"use client";
import { useEffect, useState } from "react";
import PrincipalLayout from "@/layout/PrincipalLayout";
import {
  ProductHeadBar,
  ProductContainer,
  Chatbot,
  GeneralLoader,
} from "@/components";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { products as productsFromDB } from "@/data/cars";
import { carType } from "@/types/typing";
import { ref, get } from "firebase/database"; // Importar métodos de Firebase
import { database } from "@/lib/firebase";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductPage = () => {
  const [product, setProduct] = useState<carType>({
    id: "",
    name: "",
    brand: "",
    year: 0,
    color: "",
    description: "",
    doors: 0,
    images: [],
    mileage: 0,
    price: 0,
    mortage: 0,
    type: "",
    transmission: "estandar",
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
        color: "",
        image: [],
        brand: "",
        price: 0,
      },
    },
  });
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async (id: string) => {
      try {
        const productRef = ref(database, `products/${id}`);
        const snapshot = await get(productRef);

        if (snapshot.exists()) {
          const productData = snapshot.val();
          setProduct({ id, ...productData });
        } else {
          console.error("El producto no existe en la base de datos");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    if (router.query.id) {
      fetchProduct(router.query.id as string);
    }
  }, [router.query.id]);

  // useEffect(() => {
  //   if (router.query.id) {
  //     const carFromDB = productsFromDB.filter((car: carType) => car.id === router.query.id);
  //     if (carFromDB.length > 0) {
  //       setProduct(carFromDB[0]);
  //     }
  //   }
  //   setLoading(false);
  // }, [router.query.id]);

  if (loading) {
    return <GeneralLoader />;
  }

  return (
    <PrincipalLayout>
      {product.id && (
        <>
          <ProductHeadBar name={product.name} id={product.id} />
          <ProductContainer key={product.id} product={product} />
          <Chatbot
            message={`🌟 ¿Te intereso nuestro ${product.name} ${product.year}? 🚗`}
            whatsAppMessage={`¡Hola! Estoy interesado(a) en ${product.name} del ${product.year} que vi publicado en su sitio, ¿Pueden darme mas informes?`}
          />
        </>
      )}
    </PrincipalLayout>
  );
};

export default ProductPage;
