import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

// Define the type for the links array elements
interface Link {
  url: string
  changefreq: string
  priority: number
}

export default async (req: any, res: any): Promise<void> => {
  // An array with your links
  const links: Link[] = [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/test', changefreq: 'daily', priority: 0.1 }
  ]

  // Create a stream to write to with your hostname
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` })

  res.writeHead(200, {
    'Content-Type': 'application/xml'
  })

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data: Buffer) => data.toString())

  res.end(xmlString)
}
