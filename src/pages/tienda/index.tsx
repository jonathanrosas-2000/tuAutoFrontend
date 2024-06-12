"use client"
import { useEffect, useState } from 'react';
import PrincipalLayout from "@/layout/PrincipalLayout"
import { SearchBar, Results, Loader, UnderMantainer } from '@/components';
import '@/styles/globals.css';
import {carType} from '@/types/typing';
import {products as productsFromDB } from '@/data/cars';
import { useRouter } from 'next/router';

const Tienda = () => {
  const router = useRouter();

  const [ searchTerm, setSearchTerm ] = useState<string>('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [ selectedMileage, setSelectedMileage] = useState<[number, number]>([0,125000]);
  const [ filterProducts, setFilterProducts ] = useState<any []>([]);
  const [ selectedYears, setSelectedYears ] = useState<number[]>([]);
  const [ loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if(router.query.brand !== undefined && typeof router.query.brand === 'string') {
      setSelectedBrands([router.query.brand]);
    }
  }, [router.query.brand])

  useEffect(() => {
    let aux = productsFromDB;
    if(!!searchTerm){
      aux = aux.filter((item: carType) => item?.name.toLocaleLowerCase().includes(searchTerm) || item?.brand.toLocaleLowerCase().includes(searchTerm));
    }
    if (selectedYears.length > 0) {
      aux = aux.filter((item) => selectedYears.includes(item.year));
    }

    if (selectedBrands.length > 0){
      aux = aux.filter((item) => selectedBrands.includes(item.brand));
    }

    if (selectedMileage[0] !== 0 || selectedMileage[1] !== 125000){
      aux = aux.filter((item) => item.mileage >= selectedMileage[0] && item.mileage <= selectedMileage[1]);
    }
    
    setFilterProducts(aux);
  }, [searchTerm, selectedYears, selectedBrands, selectedMileage]);

  const yearsSet = new Set();
  const brandSet = new Set();

  const uniqueBrands = productsFromDB.map((product: carType) => {
    if (!brandSet.has(product.brand)) {
      brandSet.add(product.brand);
        return product.brand;
    }
    return null; // O puedes retornar undefined si prefieres
}).filter(brand => brand !== null);

  const uniqueYears = productsFromDB.map((product: carType) => {
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
        {productsFromDB.length > 0 ? (
          <>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Results 
            products={filterProducts} 
            brands={uniqueBrands} 
            years={uniqueYears} 
            selectedBrands={selectedBrands} 
            setSelectedBrands={setSelectedBrands} 
            selectedYears={selectedYears} 
            setSelectedYears={setSelectedYears} 
            selectedMileage={selectedMileage}
            setSelectedMileage={setSelectedMileage}
            />
            <p className='legend'>* Los precios de nuestros productos están sujetos a condiciones específicas, incluyendo el tipo de financiamiento y otras variables relevantes. Para obtener una cotización precisa y personalizada, le recomendamos que se ponga en contacto con uno de nuestros asesores.</p>
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
