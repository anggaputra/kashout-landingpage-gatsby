/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/img/logo_white.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <header>
      <div className="header-area">
        <div className="main-header-area">
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="/" className="flex-row">
                <div className="logo">
                  <img src={logo} className="logo-img" alt="logo" />
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end flex-grow-0">
                <Nav className="me-auto">
                  <Nav.Link href="#howitworks">Cara kerja</Nav.Link>
                  <Nav.Link target="_blank" href="https://kashout.zohodesk.com/portal/id/home">FAQ</Nav.Link>
                  <Nav.Link target="_blank" href="https://app.getkashout.co/programs" className="login">
                    Explore rewards
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </header>
  );
}

export default Header;
