import React from "react";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer_top">
        <div class="container">
          <div class="row">
            <div class="col-xl-2 col-md-2 col-lg-2">
              <div class="footer_widget">
                <div class="socail_links">
                  <ul>
                    <li>
                      <a
                        target="_blank"
                        without
                        rel="noreferrer"
                        href="https://www.linkedin.com/company/recehan"
                      >
                        <i class="ti-linkedin"></i>
                      </a>
                      <a
                        target="_blank"
                        without
                        rel="noreferrer"
                        href="https://www.instagram.com/recehanapp/"
                      >
                        <i class="ti-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-md-6 col-lg-3">
              <div class="footer_widget">
                <ul>
                  <li>
                    <a
                      without
                      rel="noreferrer"
                      href="mailto:partnership@getkashout.co?subject=Partnership dengan Kashout"
                    >
                      Partnership
                    </a>
                  </li>
                  <li>
                    <a
                      without
                      rel="noreferrer"
                      href="mailto:partnership@getkashout.co?subject=Halo Tim Kashout"
                    >
                      Hubungi Kami
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xl-2 col-md-6 col-lg-3">
              <div class="footer_widget">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      without
                      rel="noreferrer"
                      href="https://medium.com/@recehan.app"
                    >
                      Edukasi keuangan
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
