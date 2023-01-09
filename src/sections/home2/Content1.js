import React from "react";
import { Link } from "gatsby";

import imgD from "../../assets/image/home-2/png/dashboard.png";
import imgC1 from "../../assets/image/home-2/png/card-img-1.png";
import imgDBG from "../../assets/image/home-1/png/dot-bg.png";
import imgCS from "../../assets/image/home-2/png/content-shape.png";

const Content1 = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row justify-content-center">
            {/* Image Section */}
            <div className="col-lg-9 col-md-10 ">
              <div
                className="l2-content-image-group-1 w-100"
                data-aos="zoom-in"
                data-aos-delay={300}
                data-aos-once="true"
              >
                {/* Dashboard Img */}
                <img className="w-100 w-lg-auto shadow-9" src={imgD} alt="" />
                {/* content-card-img-1 Img */}
                <div className="img-2">
                  <img src={imgC1} alt="" />
                </div>
                {/* End content-card-img-1 Img */}
                {/* img-group-content */}
                <div className="img-group-content bg-white absolute-top-left shadow-4 max-w-193 text-left">
                </div>
                {/* End Img-group-content */}
                <div className="img-3">
                  <img src={imgDBG} alt="" />
                </div>
                {/* End Dashboard Img */}
              </div>
            </div>
          </div>
        </div>
        <div className="full-width-shape w-100">
          <img className="w-100" src={imgCS} alt="" />
        </div>
      </div>
    </>
  );
};

export default Content1;
