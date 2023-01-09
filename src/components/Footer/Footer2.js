import React from "react";
import { Link } from "gatsby";
import Cta from "../../sections/home6/Cta";

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <Cta className="bg-purple-heart py-5" />
      <div className={`pt-13 pt-lg-25 pb-13 pb-lg-18 ${className}`} {...rest}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="row">
                {/* Single Widgets */}
                <div className="col-md-4 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-medium mb-10">
                      FAQ
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <Link
                          to="/faq"
                          className="font-size-5 text-default-color"
                        >
                          Untuk pelanggan
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link
                          to="/partner"
                          className="font-size-5 text-default-color"
                        >
                          Jadi partner
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widgets */}
              </div>
            </div>
            <div className="col-lg-5 col-md-8">
              <div className="mb-7">
                <h4 className="font-size-6 font-weight-medium mb-8">
                  Subscribe Newsletter
                </h4>
                <p className="font-size-5 line-height-28">
                  Dapatkan informasi seputar mengelola keuangan. Mulai dari
                  investasi, budgeting, saving. Atur keuangan Kamu mulai dari
                  sekarang!
                </p>
              </div>
              <div className="mb-0 mr-xl-9">
                <div className="shadow-3 bg-white rounded-4">
                  <form action="/">
                    <div className="subscribe-inline-form-2">
                      <div className="form-group">
                        <label htmlFor="mail">
                          <i className="icon icon-email-84 mb-0" />
                        </label>
                        <input
                          id="mail"
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <button className="btn btn-dodger-blue-2 rounded-5">
                        Berlangganan
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
