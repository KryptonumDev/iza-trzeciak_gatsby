import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const SchemaOrganization = ({ domain }) => {
  const { global } = useStaticQuery(graphql`
    query {
      global: sanityGlobal {
        facebook
        linkedin
        email
      }
    }
  `)

  const email = global.email;

  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Iza Trzeciak - Rzeczoznawca do spraw zabezpieczeń przeciwpożarowych",
        "url": `${domain}`,
        "email": email,
        "logo": `${domain}/logo.png`,
        "image": `${domain}/logo.png`,
        "description": "Jako rzeczoznawca do spraw zabezpieczeń przeciwpożarowych zajmuję się scenariuszami pożarowymi, uzgodnieniami projektów budowlanych i ekspertyzami technicznymi.",
        "OpeningHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "00:00"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "email": email,
          },
        ],
        "sameAs": [
          global.facebook,
          global.linkedin,
        ]
      })}
    </script>
  );
}

export default SchemaOrganization;