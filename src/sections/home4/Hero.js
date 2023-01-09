import React from "react";
import { Link } from "gatsby";
import imageOne from "../../assets/image/home-4/png/l4-hero-desktops-img.png";
import imageTwo from "../../assets/image/home-4/png/l4-hero-phone-img.png";

const Hero = ({className,...rest}) => {
    return (
      <div className={className} {...rest}>
        <div className="container position-static">
          <div className="row position-static">
            <div className="col-xl-4 col-lg-4 col-md-10 position-static">
              <div className="l4-hero-image-group">
                <div className="hero-images">
                  <div className="img-1">
                    <img
                      className="w-100 w-lg-auto shadow-14 opacity-8"
                      src={imageOne}
                      alt=""
                      data-aos="fade-left"
                      data-aos-duration={600}
                      data-aos-once="true"
                    />
                  </div>
                  <div className="img-2">
                    <img
                      className="w-100 w-lg-auto shadow-14 rounded-top-15"
                      src={imageTwo}
                      alt=""
                      data-aos="fade-right"
                      data-aos-duration={500}
                      data-aos-once="true"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-10 col-sm-12">
              <div
                className="mt-8 mt-lg-0 ml-xl-25 ml-lg-10"
                data-aos="fade-right"
                data-aos-duration={600}
                data-aos-once="true"
              >
                <h1 className="font-size-11 mb-9 line-height-84 pr-xs-15 pr-lg-0">
                  Raih segmen pasar yang lebih luas dan beragam
                </h1>
                <p className="font-size-7 mb-0 pr-md-10">
                  Kami membantu merchant memasarkan produk keberbagai segmen pasasr. Bangun customer loyalty yang lebih sustainable, Kami membantu user menabung/berinvestasi di produk Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Hero;