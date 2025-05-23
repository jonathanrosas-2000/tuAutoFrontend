// pages/api/sitemap.xml.js
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

const generateSitemap = async (req, res) => {
  const sitemap = [
    { url: "/", changefreq: "monthly", priority: 1.0 },
    { url: "/faq", changefreq: "yearly", priority: 0.8 },
    { url: "/nosotros", changefreq: "yearly", priority: 0.6 },
    { url: "/tienda", changefreq: "monthly", priority: 1.0 },
    { url: "/contacto", changefreq: "yearly", priority: 0.8 },
    {
      url: "/tienda/promaster-rapi-dodge-2020",
      changefreq: "yearly",
      priority: 0.6,
    },
    {
      url: "/tienda/chevrolet-aveo-ls-2019",
      changefreq: "yearly",
      priority: 0.6,
    },
    { url: "/tienda/toyota-avanza-2019", changefreq: "yearly", priority: 0.6 },
    {
      url: "/tienda/nissan-versa-exclusive-2019",
      changefreq: "yearly",
      priority: 0.6,
    },
    {
      url: "/tienda/nissan-march-active-2018",
      changefreq: "yearly",
      priority: 0.6,
    },
    {
      url: "/tienda/chevrolet-spark-ng-2017",
      changefreq: "yearly",
      priority: 0.6,
    },
    {
      url: "/tienda/chevrolet-sonic-lt-2016",
      changefreq: "yearly",
      priority: 0.6,
    },
    {
      url: "/tienda/volkswagen-gol-imotion-2017",
      changefreq: "yearly",
      priority: 0.6,
    },
    {
      url: "/tienda/volkswagen-gol-sedan-2013",
      changefreq: "yearly",
      priority: 0.6,
    },
    { url: "/tienda/renault-kwid-2022", changefreq: "yearly", priority: 0.6 },
    {
      url: "/tienda/volkswagen-gol-hb-2018",
      changefreq: "yearly",
      priority: 0.6,
    },
    {
      url: "/tienda/volkswagen-vento-comfortline-2019",
      changefreq: "yearly",
      priority: 0.6,
    },
    {
      url: "/tienda/renault-duster-zen-2019",
      changefreq: "yearly",
      priority: 0.6,
    },
    {
      url: "/tienda/ford-figo-impulse-2017",
      changefreq: "yearly",
      priority: 0.6,
    },
    { url: "/tienda/chevrolet-cargo-beat-2021", changefreq: "yearly", priority: 0.6 },
    { url: "/tienda/chevrolet-aveo-ls-2019", changefreq: "yearly", priority: 0.6 },
    { url: "/tienda/chevrolet-spark-ng-2017", changefreq: "yearly", priority: 0.6 },
    { url: "/tienda/dodge-promaster-rapid-2020", changefreq: "yearly", priority: 0.6 },
    { url: "/tienda/ford-fiesta-se-2018", changefreq: "yearly", priority: 0.6 },
    { url: "/tienda/renault-kwid-iconic-2022", changefreq: "yearly", priority: 0.6 },
    { url: "/tienda/volkswagen-sedan-imotion-2017", changefreq: "yearly", priority: 0.6 },
    { url: "/tienda/volkswagen-gol-sedan-cl-2013", changefreq: "yearly", priority: 0.6 },
    { url: "/tienda/chevrolet-aveo-ls-2020", changefreq: "yearly", priority: 0.6 },
     { url: "/tienda/volkswagen-vento-2019", changefreq: "yearly", priority: 0.6 },
    { url: "/tienda/chevrolet-beat-sedan-lt-2020", changefreq: "yearly", priority: 0.6 },
    { url: "/tienda/nissan-march-sense-2022", changefreq: "yearly", priority: 0.6 },

  ];

  const sitemapStream = new SitemapStream({
    hostname: "https://tuautoseminuevo.com",
  });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(sitemap).pipe(sitemapStream)
  ).then((data) => data.toString());

  res.end(xmlString);
};

export default generateSitemap;