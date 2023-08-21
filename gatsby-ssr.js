import React from 'react';
import Layout from "./src/global/Layout"
import ErodeMedium from "./src/resources/fonts/Erode-Medium.woff2"
import ErodeBold from "./src/resources/fonts/Erode-Bold.woff2"

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "pl" })
  setHeadComponents([
    <link
      rel="preload"
      href={ErodeMedium}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href={ErodeBold}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])
}

export const wrapPageElement = ({ props, element }) => {
  return <Layout {...props}>{element}</Layout>
}