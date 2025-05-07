'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { BreadCrumb } from '@/components';
import searchIcon from '../../assets/icons/search.svg'
import styles from './styles.module.css'

const SearchBar = ({ searchTerm, setSearchTerm } : { searchTerm: string; setSearchTerm: (term: string) => void; }) => {
  const [localTerm, setLocalTerm] = useState<string>('');
  const [debouncedTerm, setDebouncedTerm] = useState<string>('');

    const Steps = [
      { title: 'Home', link: '/'},
      { title: 'Tienda', link: '/tienda'}
    ]

    const handleChange = (value: string) => {
      setLocalTerm(value);
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedTerm(localTerm);
      }, 400);

      return () => clearTimeout(timer);
    }, [localTerm]);

    useEffect(() => {
      setSearchTerm(debouncedTerm);
    }, [debouncedTerm, setSearchTerm]);

    return (
      <div className={styles.container}>
        <BreadCrumb steps={Steps} />
        <div className={styles.searchbar}>
            <input
              type='text'
              value={localTerm}
              placeholder='Busca tu auto aqui'
              onChange={(e) => handleChange(e.target.value)}
              className={styles.input}
            />
            <button className={styles.button} onClick={() => setSearchTerm(localTerm)}>
                <Image src={searchIcon} alt='Icono de busqueda para tu auto' width={16} height={16} />
            </button>
        </div>
      </div>
    )
  }

export default SearchBar