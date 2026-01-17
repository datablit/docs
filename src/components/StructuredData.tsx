import React from "react";

interface StructuredDataProps {
  data: object | object[];
}

/**
 * Component to add JSON-LD structured data for SEO
 * Usage: <StructuredData data={{ "@context": "https://schema.org", ... }} />
 */
export default function StructuredData({ data }: StructuredDataProps) {
  const jsonLd = Array.isArray(data) ? data : [data];

  return (
    <>
      {jsonLd.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
