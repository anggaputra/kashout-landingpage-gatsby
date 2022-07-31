import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-md-2 col-lg-2">
              <div className="footer_widget">
                <div className="socail_links">
                  <ul>
                    <li>
                      <a
                        target="_blank"
                        without="true" 
                        rel="noreferrer"
                        href="https://www.linkedin.com/company/getkashout"
                      >
                        <i className="ti-linkedin"></i>
                      </a>
                      <a
                        target="_blank"
                        without="true" 
                        rel="noreferrer"
                        href="https://www.instagram.com/getkashout/"
                      >
                        <i className="ti-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-lg-3">
              <div className="footer_widget">
                <ul>
                  <li>
                    <a
                      without="true" 
                      rel="noreferrer"
                      href="mailto:partnership@getkashout.co?subject=Partnership dengan Kashout"
                    >
                      Partnership
                    </a>
                  </li>
                  <li>
                    <a
                      without="true" 
                      rel="noreferrer"
                      href="mailto:partnership@getkashout.co?subject=Halo Tim Kashout"
                    >
                      Hubungi Kami
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
