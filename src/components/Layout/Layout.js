import React, { useState, useEffect, useContext, useRef } from "react";

import styled from "styled-components";
import { Helmet } from "react-helmet";
import AOS from "aos";

import Header from "../Header";
import { HeaderMini , HeaderComingSoon } from "../HeaderMini";
import Footer from "../Footer";

import ModalVideo from "../ModalVideo";

import GlobalContext from "../../context/GlobalContext";

import imgFavicon from "../../assets/favicon.png";

import "../../assets/fonts/fontawesome-5/webfonts/fa-brands-400.ttf";
import "../../assets/fonts/fontawesome-5/webfonts/fa-regular-400.ttf";
import "../../assets/fonts/fontawesome-5/webfonts/fa-solid-900.ttf";

import "../../assets/fonts/typography-font/CircularStd-Bold.ttf";
import "../../assets/fonts/typography-font/CircularStd-BoldItalic.ttf";
import "../../assets/fonts/typography-font/CircularStd-Book.ttf";
import "../../assets/fonts/typography-font/CircularStd-BookItalic.ttf";
import "../../assets/fonts/typography-font/CircularStd-Medium.ttf";

import "../../assets/fonts/icon-font/fonts/avasta.ttf";
import "../../assets/fonts/icon-font/css/style.css";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/aos/dist/aos.css";

import "../../assets/fonts/icon-font/css/style.css";
import "../../assets/fonts/typography-font/typo.css";
import "../../assets/fonts/fontawesome-5/css/all.css";

import "../../assets/scss/bootstrap.scss";
import "../../assets/scss/main.scss";

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 0.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`;

const Layout = ({ children, pageContext }) => {
  const gContext = useContext(GlobalContext);

  const [visibleLoader, setVisibleLoader] = useState(true);

  useEffect(() => {
    AOS.init({ once: true });
    setVisibleLoader(false);
  }, []);

  // Navbar style based on scroll
  const eleRef = useRef();

  useEffect(() => {
    window.addEventListener(
      "popstate",
      function(event) {
        // The popstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas();
      },
      false
    );
    window.addEventListener(
      "pushState",
      function(event) {
        // The pushstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas();
      },
      false
    );

    return () => {};
  }, [gContext]);

  if (pageContext.layout === "mini") {
    return (
      <>
        <Helmet>
          <title>Kashout</title>
          <link rel="icon" type="image/png" href={imgFavicon} />
          <body data-theme={gContext.theme.bodyDark ? "dark" : "light"} />
        </Helmet>
        <Loader id="loading" className={visibleLoader ? "" : "inActive"} />

        <div className="site-wrapper overflow-hidden" ref={eleRef}>
          <HeaderMini />
          {children}
        </div>

        <ModalVideo />
      </>
    );
  }
  if (pageContext.layout === "coming") {
    return (
      <>
        <Helmet>
          <title>Kashout</title>
          <link rel="icon" type="image/png" href={imgFavicon} />
          <body data-theme={gContext.theme.bodyDark ? "dark" : "light"} />
        </Helmet>
        <Loader id="loading" className={visibleLoader ? "" : "inActive"} />

        <div className="site-wrapper overflow-hidden" ref={eleRef}>
          <HeaderComingSoon />
          {children}
        </div>

        <ModalVideo />
      </>
    );
  }

  return (
    <>
      <>
        <Helmet>
          <title>Kashout</title>
          <link rel="icon" type="image/png" href={imgFavicon} />
          <body data-theme={gContext.theme.bodyDark ? "dark" : "light"} />
        </Helmet>
        <Loader id="loading" className={visibleLoader ? "" : "inActive"} />
        <div className="site-wrapper overflow-hidden" ref={eleRef}>
          <Header />
          {children}
          <Footer
            className={gContext.theme.footerClassName}
            style={gContext.theme.footerStyle}
          />
        </div>

        <ModalVideo />
      </>
    </>
  );
};

export default Layout;
