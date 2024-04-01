'use client'
import { useEffect, useState } from 'react'
import PrincipalLayout from "@/layout/PrincipalLayout"
import { ProductHeadBar, ProductContainer } from '@/components';
import '@/styles/globals.css';
import axios from 'axios'
import config from '../../common/config';
import { useRouter } from 'next/router'

const ProductPage = () => {
    const [product, setProduct] = useState<any>({});
    const router = useRouter()

    const getProduct = async (id: any) => {
        try {
          const res = await axios.get(`${config.api}/products/${id}?populate=image`);
          console.log('Product', res.data.data);
          setProduct(res.data.data);
        } catch (error) {
          console.log(error)
          console.error(error);
        }
      }

      useEffect(() => {
        if (router.query.id) {
            getProduct(router.query.id);
        }
    }, [router.query.id]);

  return (
    <PrincipalLayout>
        {product.id && (
          <>
            <ProductHeadBar name={product.attributes.nombre} id={product.id} />
            <ProductContainer product={product}/>
          </>
        )}
    </PrincipalLayout>
  )
}

export default ProductPage