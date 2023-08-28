import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({ data, className, ...props}) => {
  return (
    <GatsbyImage
      image={data.asset.gatsbyImageData}
      alt={data.asset.altText || ''}
      className={`img ${className || ''}`}
      {...props}
    />
  );
}

export default Image;