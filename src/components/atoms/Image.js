import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({ data, ...props}) => {
  return (
    <GatsbyImage
      image={data.asset.gatsbyImageData}
      alt={data.asset.altText || ''}
      className="img"
      {...props}
    />
  );
}

export default Image;