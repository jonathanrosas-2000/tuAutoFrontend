'use client'
import { BreadCrumb } from '@/components';
import styles from './styles.module.css'

const SearchBar = ({ name, id}: { name:string; id: string;}) => {
    const Steps = [
      { title: 'Home', link: '/'},
      { title: 'Tienda', link: '/tienda'},
      { title: `${name}`, link: `/tienda/${id}`}
    ]
    return (
      <div className={styles.container}>
        <BreadCrumb steps={Steps} />
      </div>
    )
  }

export default SearchBar