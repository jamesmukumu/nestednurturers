import { Head } from "@inertiajs/react"
export function Seo({ title = "", description = "",url="",schema="" }) {
  let final_url = `https://nestednurturers.com/${url}`
  let image = 'images/updates-logo.jpeg'
    return (
      <Head>
     <title>{title ? `${title} | Nested Nurturers` : "Nested Nurturers"}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={final_url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || "PJ Safaris"} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={final_url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
       
      <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
        
      </Head>
    )
  }
  