import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import brandIcon from '../assets/favicon.svg'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TuAutoSeminuevo | Compra Venta Cambio",
  description: "Conoce la mejor seleccion de autos",
  icons: {
    icon: '/car.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
