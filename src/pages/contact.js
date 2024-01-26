import React from "react";

import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
            </>
          ),
          footerStyle: "style5",
        }}
      >
        <div className="min-height-100vh d-flex align-items-center pt-23 pt-md-26 pt-lg-30 pb-8 pb-md-12 pb-lg-23">
          <div className="container">
            {/* Section Title */}
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div
                  className="mb-10 mb-lg-18 text-center"
                  data-aos="fade-up"
                  data-aos-duration={300}
                  data-aos-once="true"
                >
                  <h2 className="font-size-11 mb-7">Hubungi Kami</h2>
                  <p className="font-size-7 mb-0">
                    Kirim pertanyaan untuk partnership, tentang Kashout, dll.
                  </p>
                </div>
              </div>
            </div>
            {/* End Section Title */}
            {/* Contact Form */}
            <div className="row justify-content-center">
              <div className="col-12">
                {/* contact details */}
                <div
                  className="top-contact-info bg-default-1 max-w-540 mx-auto py-10 px-13 rounded-10"
                  data-aos="fade-up"
                  data-aos-duration={600}
                  data-aos-once="true"
                >
                  <div className="row">
                    <div className="col-lg-12 mb-5 mb-lg-0">
                      <div className="pl-1 pr-3">
                        <h4 className="font-size-5 text-default-color font-weight-normal mb-0">
                          Email us
                        </h4>
                        <a
                          className="font-size-7 font-weight-bold heading-default-color"
                          href="mailto:partnership@getkashout.co"
                        >
                          partnership@getkashout.co
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Contact;
