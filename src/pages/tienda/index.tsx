import { useEffect, createContext, useState } from 'react';
import PrincipalLayout from "@/layout/PrincipalLayout"
import { SearchBar, Results } from '@/components';
import '@/styles/globals.css';
import axios from 'axios';
import config from '../../common/config';
import {ProductsProps} from '@/types/proptypes'

const Tienda = () => {
  const [ searchTerm, setSearchTerm ] = useState<string>('');
  const [ brands, setBrands ] = useState<string[]>([]);
  const [ products, setProducts ] = useState<any[]>([]);
  const [ filterProducts, setFilterProducts ] = useState<any []>([]);
  const [ selectedYears, setSelectedYears ] = useState<number[]>([]);

  const getProducts = async () => {
    try {
      const res = await axios.get(`${config.api}/products?populate[0]=image&populate[1]=brand`);
      setProducts(res.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  const getBrands = async () => {
    try {
      const res = await axios.get(`${config.api}/brands`);
      const tempArr: string[] = res.data.data.map((brand: any) => brand.attributes.name);
      setBrands(tempArr);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
    getBrands();
  }, []);

  useEffect(() => {
    let aux = products;
    if(!!searchTerm){
      aux = aux.filter((item: ProductsProps) => item?.attributes?.name.toLocaleLowerCase().includes(searchTerm))
    }
    if (selectedYears.length > 0) {
      aux = aux.filter((item) => selectedYears.includes(item.attributes.year));
    }
    
    setFilterProducts(aux);
  }, [products, searchTerm, selectedYears]);

  const yearsSet = new Set();

  const uniqueYears = products.map((product: ProductsProps) => {
      if (!yearsSet.has(product.attributes.year)) {
          yearsSet.add(product.attributes.year);
          return product.attributes.year;
      }
      return null; // O puedes retornar undefined si prefieres
  }).filter(year => year !== null);

  return (
    <PrincipalLayout>
      {filterProducts.length > 0 ? (
        <>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Results products={filterProducts} searchTerm={searchTerm} brands={brands} years={uniqueYears} selectedYears={selectedYears} setSelectedYears={setSelectedYears} />
        </>
      ) : (
        <div className="maintenance-container">
          <h1 className="maintenance-heading">En mantenimiento</h1>
          <p className="maintenance-message">
            Estamos realizando tareas de mantenimiento en nuestra página. Volveremos pronto.
          </p>
        </div>
      )}
    </PrincipalLayout>
  )
}

export default Tienda;
