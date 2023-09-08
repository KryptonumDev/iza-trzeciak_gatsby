import React from 'react';

const SchemaBreadcrumbs = ({ domain, breadcrumbs }) => {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          breadcrumbs.map(({ name, path = '' }, i) => (
            {
              "@type": "ListItem",
              "position": ++i,
              "name": name,
              "item": `${domain}${path}`
            }
          ))
        ]
      })}
    </script>
  )
};

export default SchemaBreadcrumbs;