import React from "react";
import { Link } from "gatsby";
import backgroundImage from "../../assets/image/home-2/jpg/promo-bg-img.jpg";

const Cta = ({ className, ...rest }) => {
  return (
    <>
      <div
        className={className}
        {...rest}
<<<<<<< HEAD
=======
        style={{ backgroundImage: `url(${backgroundImage})` }}
>>>>>>> 57f4fadf608770382a2f90394f9e2d6592a2f8e5
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div
                className="text-center pt-14 pb-15 py-lg-31 dark-mode-texts"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <h2 className="font-size-11 mb-7">
                  Kumpulin dulu uangnya, baru beli barangnya.
                </h2>
                <p className="font-size-5 line-height-28 px-md-10 px-lg-16 px-xl-25 mb-0">
                  Sedikit demi sedikit, lama-lama menjadi bukit.
                </p>
                <Link to={"/faq"} className="btn btn-dodger-blue-2 rounded-5 mt-12">
                 Tentang Kashout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
