import Head from "next/head";
import { SeoDetailsType } from "@/types/typing";

const SEO = ({
  title,
  description,
  keywords,
  subject,
  productSchema,
}: SeoDetailsType) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": productSchema?.id,
    name: productSchema?.name,
    additionalType: productSchema?.additionalType,
    description: productSchema?.description,
    color: productSchema?.brand,
    image: productSchema?.image,
    brand: {
      "@type": "Brand",
      name: productSchema?.brand,
    },
    model: productSchema?.name,
    offers: {
      "@type": "Offer",
      price: productSchema?.price,
      priceCurrency: "MXN",
      availability: "https://schema.org/InStock",
      url: "",
    },
  };

  return (
    <Head>
      <title>{title} | TuAutoSeminuevo.com 🚗</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={JSON.stringify(keywords)} />
      <meta name="subject" content={subject} />
      <meta name="copyrigth" content="TuAutoSeminuevo.com" />
      <meta name="language" content="ES" />
      <meta name="robots" content="index,follow" />
      <meta name="Classification" content="Business" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
};

export default SEO;
