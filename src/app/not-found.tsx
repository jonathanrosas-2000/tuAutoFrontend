import { Header } from "@/components";
import Image from 'next/image'
import "@/styles/globals.css";
import errorImage from '../assets/error.svg';
import Link from "next/link";
 
export default async function NotFound() {


  return (
    <>
        <Header />
        <div className="error">
            <div className="container">
                <Image src={errorImage} alt="Error al encontrar pagina" width={200} height={180} className='img'/>
                <hr />
                <h1 className="title">La página que estas buscando ya no se encuentra disponible</h1>
                <Link className="button" href={'/'} >Ir a Home</Link>
            </div>
        </div>
    </>
  )
}