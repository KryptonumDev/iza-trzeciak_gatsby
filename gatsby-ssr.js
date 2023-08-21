import React from 'react';
import Layout from "./src/global/Layout"
import ManropeRegular from "./src/resources/fonts/Manrope-Regular.woff2"
import ManropeSemiBold from "./src/resources/fonts/Manrope-SemiBold.woff2"
import ManropeBold from "./src/resources/fonts/Manrope-Bold.woff2"

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "pl" })
  setHeadComponents([
    <link
      rel="preload"
      href={ManropeRegular}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href={ManropeSemiBold}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href={ManropeBold}
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