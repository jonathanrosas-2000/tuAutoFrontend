"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FilterContextType } from '@/types/typing';

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedMileage, setSelectedMileage] = useState<[number, number]>([0, 125000]);
  const [filterProducts, setFilterProducts] = useState<any[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);

  return (
    <FilterContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        selectedBrands,
        setSelectedBrands,
        selectedMileage,
        setSelectedMileage,
        filterProducts,
        setFilterProducts,
        selectedYears,
        setSelectedYears
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// Crea un hook para usar el contexto
export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilterContext debe usarse dentro de un FilterProvider');
  }
  return context;
};
