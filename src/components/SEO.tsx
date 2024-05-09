import Head from "next/head";
import { SeoDetailsType } from "@/types/typing";


const SEO = ({title, description, keywords, subject, productSchema }:SeoDetailsType) => {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "IndividualProduct",
        "@id": productSchema?.id,
        name: productSchema?.name,
        additionalType: productSchema?.additionalType,
        description: productSchema?.description,
      }

    return (
        <>
            <Head>
                <title>{title} | TuAutoSeminuevo.com 🚗</title>
                <meta name='description' content={description}/>
                <meta name='keywords' content={JSON.stringify(keywords)}/>
                <meta name='subject' content={subject}/>
                <meta name='copyrigth' content="TuAutoSeminuevo.com"/>
                <meta name='language' content="ES"/>
                <meta name='robots' content="index,follow"/>
                <meta name='Classification' content="Business"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                {productSchema && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    />
                )}
                <link rel="shortcut icon" href="/car.png" />
            </Head>
        </>
    )
} 

export default SEO