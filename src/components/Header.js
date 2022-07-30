import React from "react";
import logo from "../assets/img/logo_white.png"

import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-area ">
        <div className="main-header-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} className="logo-img" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-sm-5 offset-sm-5 offset-xl-5">
                <div className="main-menu  d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                      <a href="#howitworks">
                          Cara Kerja
                        </a>
                      </li>
                      <li>
                        <a className="login" href="https://app.getkashout.co/" target="_blank" rel="noreferrer">
                          Daftar
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
