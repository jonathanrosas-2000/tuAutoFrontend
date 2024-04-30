import { useEffect, useState } from 'react';
import PrincipalLayout from "@/layout/PrincipalLayout"
import { SearchBar, Results, Loader, UnderMantainer } from '@/components';
import '@/styles/globals.css';
import {carType} from '@/types/typing';
import {products as productsFromDB } from '@/data/cars';

const Tienda = () => {
  const [ searchTerm, setSearchTerm ] = useState<string>('');
  const [ brands, setBrands ] = useState<string[]>([]);
  const [ products, setProducts ] = useState<carType[]>(productsFromDB);
  const [ filterProducts, setFilterProducts ] = useState<any []>([]);
  const [ selectedYears, setSelectedYears ] = useState<number[]>([]);
  const [ loading, setLoading] = useState<boolean>(false);

  // const getProducts = async () => {
  //   try {
  //     const res = await axios.get(`${config.api}/products?populate[0]=image&populate[1]=brand`);
  //     setProducts(res.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // const getBrands = async () => {
  //   try {
  //     const res = await axios.get(`${config.api}/brands`);
  //     const tempArr: string[] = res.data.data.map((brand: any) => brand.attributes.name);
  //     setBrands(tempArr);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  useEffect(() => {
    let aux = products;
    if(!!searchTerm){
      aux = aux.filter((item: carType) => item?.name.toLocaleLowerCase().includes(searchTerm))
    }
    if (selectedYears.length > 0) {
      aux = aux.filter((item) => selectedYears.includes(item.year));
    }
    
    setFilterProducts(aux);
  }, [products, searchTerm, selectedYears]);

  const yearsSet = new Set();
  const brandSet = new Set();

  const uniqueBrands = products.map((product: carType) => {
    if (!brandSet.has(product.brand)) {
      brandSet.add(product.brand);
        return product.brand;
    }
    return null; // O puedes retornar undefined si prefieres
}).filter(brand => brand !== null);

  const uniqueYears = products.map((product: carType) => {
      if (!yearsSet.has(product.year)) {
          yearsSet.add(product.year);
          return product.year;
      }
      return null; // O puedes retornar undefined si prefieres
  }).filter(year => year !== null);

  return (
    <PrincipalLayout>
      {loading ? (
        <Loader />
      ) : (
        <>
        {products.length > 0 ? (
          <>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Results products={filterProducts} searchTerm={searchTerm} brands={uniqueBrands} years={uniqueYears} selectedYears={selectedYears} setSelectedYears={setSelectedYears} />
          </>
        ) : (
          <UnderMantainer />
        )}
      </>
      )}
    </PrincipalLayout>
  )
}

export default Tienda;
