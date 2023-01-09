import React from "react";
import imageOne from "../../assets/image/home-4/png/banner-img.png";

const ContentOne = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        {/* Section title */}
        <div className="row align-items-xl-center justify-content-between">
          <div
            className="col-xl-7 col-lg-6 col-md-10"
            data-aos="fade-right"
            data-aos-delay={500}
            data-aos-once="true"
          >
            <h3 className="font-size-8 mb-0 letter-spacing-n83">
            Kashout membantu pelanggan berinvestasi pada produk Anda dengan cara menabung
            </h3>
          </div>
          <div
            className="col-xl-5 col-lg-6 col-md-8"
            data-aos="fade-left"
            data-aos-delay={500}
            data-aos-once="true"
          >
            <p className="font-size-7 mb-0 pr-xl-2 pr-lg-5 pr-md-10 pr-sm-20 mt-7 mt-lg-0">
            Perluas pangsa pasar dengan cara baru. Menabung, dan berinvestasi di produk Anda.
            </p>
          </div>
        </div>
        {/* End Section title */}
        {/* Banner */}
        <div className="row">
          <div className="col-12">
            <div
              className="pt-10 pt-lg-17 rounded-10"
              data-aos="fade-up"
              data-aos-delay={700}
              data-aos-once="true"
            >
              <img
                className="w-100"
                src={imageOne}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* End Banner */}
        {/* Services */}
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-xs-8">
            <div
              className="pt-13 pt-lg-20"
              data-aos="fade-up"
              data-aos-delay={500}
              data-aos-once="true"
            >
              <div className="square-60 bg-blue-3 shadow-dodger-blue-3 rounded-10 text-white font-size-7">
                <i className="fa fa-link" />
              </div>
              <div className="mt-9">
                <h4 className="font-size-7 mb-5">Lebih terjangkau</h4>
                <p className="font-size-5 mb-0">
                  Produk Anda bisa dimiliki berbagai macam segmen, user kami menabung sesuai dengan kemampuan.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-8">
            <div
              className="pt-13 pt-lg-20"
              data-aos="fade-up"
              data-aos-delay={700}
              data-aos-once="true"
            >
              <div className="square-60 bg-sunset shadow-sunset rounded-10 text-white font-size-7">
                <i className="fa fa-level-up-alt" />
              </div>
              <div className="mt-9">
                <h4 className="font-size-7 mb-5">Investasi berkala</h4>
                <p className="font-size-5 mb-0">
                  Pada dasarnya user Kashout berinvestasi untuk mendapatkan produk Anda.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-8">
            <div
              className="pt-13 pt-lg-20"
              data-aos="fade-up"
              data-aos-delay={900}
              data-aos-once="true"
            >
              <div className="square-60 bg-dodger-blue-1 shadow-dodger-blue-1 rounded-10 text-white font-size-7">
                <i className="fa fa-hourglass-half" />
              </div>
              <div className="mt-9">
                <h4 className="font-size-7 mb-5">Sustainable sales</h4>
                <p className="font-size-5 mb-0">
                Kami membantu user menabung, bukan berhutang, jangka panjang lebih sustain untuk bisnis dan pelanggan.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Services */}
      </div>
    </div>
  );
};

export default ContentOne;
