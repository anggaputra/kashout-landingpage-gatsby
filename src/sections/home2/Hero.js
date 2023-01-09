import React from "react";
import { Link } from "gatsby";
import imgBP from "../../assets/image/home-2/png/dot-pattern-blue.png";
import hand3d from "../../assets/image/3d/hand3d.png";
import heroIndex from "../../assets/image/illustrations/home-index.png";

const Hero = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row justify-content-center">
            {/* <!-- Hero Content --> */}
            <div
              className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <div className="pr-lg-10 pr-xl-0 pt-0 pt-lg-0 pb-13 pb-lg-0">
                <h1 className="font-size-12 mb-8">
<<<<<<< HEAD
                  Miliki Produk Impian Tanpa Berhutang
=======
                  Miliki produk impian tanpa berhutang
>>>>>>> 57f4fadf608770382a2f90394f9e2d6592a2f8e5
                </h1>
                <p className="font-size-7 mb-0 heading-default-color">
                  Membeli sesuatu tidak harus selalu berhutang, ubah kebiasaan
                  berhutang dengan menabung menggunakan Kashout
                </p>
                <div className=" pt-5 pt-lg-10">
                  <Link to={"/faq"} className="btn btn-dodger-blue-2 rounded-5">
                    Cara kerja
                  </Link>
                  {/*   <span className="d-block pt-5 pt-lg-9 heading-default-color">
                    Karena menabung lebih baik daripada berhutang
                    <Modal className="ml-2">Check our 1 min video</Modal>
                  </span> */}
                </div>
              </div>
            </div>
            {/* <!-- End Hero Content --> */}
            {/* <!-- l2-hero-image-group --> */}
            <div
              className="col-xl-7 col-lg-6 col-md-7 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              <div className="mt-5 mt-lg-0">
                <div className="w-100">
                  <img className="mx-auto d-block" src={heroIndex} alt="" />
                </div>
              </div>
            </div>
            {/* <!-- End l2-hero-image-group --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
