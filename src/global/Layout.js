import React, { useEffect } from "react";
import GlobalStyle from "../global/GlobalStyle";
import Nav from "../components/organisms/Nav";
import Footer from "../components/organisms/Footer";

const Layout = ({ children }) => {
  const handleTabKey = (e) => {
    (e.key === 'Tab') && document.documentElement.classList.add('tabbing')
  };
  const handleMouseDown = () => {
    document.documentElement.classList.remove('tabbing');
  };
  
  useEffect(() => {
    document.addEventListener('keydown', handleTabKey);
    window.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('keydown', handleTabKey);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Nav />
      <main id="main">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;