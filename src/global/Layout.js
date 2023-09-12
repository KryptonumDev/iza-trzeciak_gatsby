import React from "react";
import GlobalStyle from "../global/GlobalStyle";
import Nav from "../components/organisms/Nav";
import Footer from "../components/organisms/Footer";

const links = [
  {
    name: 'Usługi',
    url: '/ppoz-uslugi'
  },
  {
    name: 'Współpraca',
    url: '/ppoz-wspolpraca'
  }
]

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Nav links={links} />
      <main id="main">
        {children}
      </main>
      <Footer links={links} />
    </>
  );
}

export default Layout;