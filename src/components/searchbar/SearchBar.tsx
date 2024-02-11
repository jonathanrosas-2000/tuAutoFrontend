'use client'
import { useState } from 'react'
import Image from 'next/image'
import { BreadCrumb } from '@/components';
import searchIcon from '../../assets/icons/search.svg'
import styles from './styles.module.css'

const SearchBar = ({ searchTerm, setSearchTerm } : { searchTerm: string; setSearchTerm: (term: string) => void; }) => {
  const [localTerm, setLocalTerm] = useState<string>('')

    const Steps = [
      { title: 'Home', link: '/'},
      { title: 'Tienda', link: '/tienda'}
    ]

    const handleChange = (value: string) => {
      setLocalTerm(value);
    }
    const handleSearch = () => {
      setSearchTerm(localTerm)
    }

    return (
      <div className={styles.container}>
        <BreadCrumb steps={Steps} />
        <div className={styles.searchbar}>
            <input type='text' value={localTerm} placeholder='Busca tu auto aqui' onChange={(e) => handleChange(e.target.value)} className={styles.input}></input>
            <button className={styles.button} onClick={handleSearch}>
                <Image src={searchIcon} alt='Icono de busqueda para tu auto' width={16} height={16} />
            </button>
        </div>
      </div>
    )
  }

export default SearchBar