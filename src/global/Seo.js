import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import SchemaBreadcrumbs from "./Schema/Breadcrumbs";
import SchemaOrganization from "./Schema/Organization";
import SchemaFaq from "./Schema/Faq";

const Seo = ({ title, description, url, children, breadcrumbs, schemaFaq }) => {
  const { site, global } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
      global: sanityGlobal {
        seo {
          og_Img {
            asset {
              url
            }
          }
        }
      }
    }
  `)

  const domain = site.siteMetadata.siteUrl;

  const seo = {
    title: title || 'Iza Trzeciak',
    description: description || '',
    url: url || '',
  }
  const locale = "pl_PL";
  
  return (
    <>
      <title>{seo.title}</title>
      <meta property="og:title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={global.seo.og_Img.asset.url} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta property="twitter:domain" content={`${domain}`} />
      <meta property="twitter:image" content={global.seo.og_Img.asset.url} />
      <meta property="twitter:url" content={`${domain}${seo.url}`} />
      <link rel="canonical" href={`${domain}${seo.url}`} />
      <meta property="og:url" content={`${domain}${seo.url}`} />
      <SchemaOrganization domain={domain} />
      {breadcrumbs && (
        <SchemaBreadcrumbs domain={domain} breadcrumbs={breadcrumbs} />
      )}
      {schemaFaq && (
        <SchemaFaq data={schemaFaq} />
      )}
      {children}
    </>
  )
}

export default Seo;