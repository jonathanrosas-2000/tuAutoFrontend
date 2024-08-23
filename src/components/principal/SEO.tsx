import type { Metadata } from "next";
import React from 'react';
import Head from 'next/head';

export const metadata: Metadata = {
  title: "TuAutoSeminuevo | Compra Venta Cambio",
  description: "Conoce la mejor seleccion de autos",
};

export default function SEO({ title, description = '' }: any) {
  return (
    <Head>
      <title>{`${title} | TuAutoSeminuevo`}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
    </Head>
  );
}
