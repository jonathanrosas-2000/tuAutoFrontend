// pages/api/sitemap.xml.js
import {SitemapStream, streamToPromise} from "sitemap";
import {Readable} from "stream";

export default async (req, res) => {
    // Listado de tus páginas
    const sitemap = [{
        url: "/",
        changefreq: "monthly",
        priority: 1.0
    }, {
        url: "/faq",
        changefreq: "yearly",
        priority: 0.8
    },
    {
        url: "/nosotros",
        changefreq: "yearly",
        priority: 0.6
    }, 
    {
        url: "/tienda",
        changefreq: "monthly",
        priority: 1.0
    }];
    const sitemapStream = new SitemapStream({
        hostname: 'https://tuautoseminuevo.com'
    });
    res.writeHead(200, {
        "Content-Type": "application/xml"
    });
    const xmlString = await streamToPromise(
        Readable
            .from(sitemap)
            .pipe(sitemapStream)
    ).then(
        (data) => data.toString()
    );
    res.end(xmlString);
}