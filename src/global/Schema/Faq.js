import React from 'react';
import ReactMarkdown from 'react-markdown';
import { renderToStaticMarkup } from 'react-dom/server';

const SchemaFaq = ({ data }) => {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          data.map(({ question, answer }) => (
            {
              "@type": "Question",
              "name": renderToStaticMarkup(<ReactMarkdown>{question}</ReactMarkdown>),
              "acceptedAnswer": {
                "@type": "Answer",
                "text": renderToStaticMarkup(<ReactMarkdown>{answer}</ReactMarkdown>)
              }
            }
          ))
        ]
      })}
    </script>
  )
};

export default SchemaFaq;