import React from "react";
import { Link } from "gatsby";
import heroIndex2 from "../../assets/image/illustrations/home-index2.png";

const Hero = ({ className, ...rest }) => {
    return (
        <>
            <div className={className} {...rest}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        {/* <!-- Hero Content --> */}
                        <div
                            className='col-xl-6 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1'
                            data-aos='fade-right'
                            data-aos-delay='500'
                        >
                            <div className='pr-lg-10 pr-xl-0 pt-0 pt-lg-0 pb-13 pb-lg-0'>
                                <h1 className='font-size-11 mb-8 mt-14'>
                                    Beli Produk Impian Tanpa Berhutang
                                </h1>
                                <p className='font-size-6 mb-0 heading-default-color lh-1'>
                                    Mendapatkan produk impian tidak harus selalu
                                    dengan cara berhutang, dengan cara menabung Kamu menjaga
                                    kesehatan keuangan Kamu lebih stabil.
                                </p>
                            </div>
                        </div>
                        {/* <!-- End Hero Content --> */}
                        {/* <!-- l2-hero-image-group --> */}
                        <div
                            className='col-xl-6 col-lg-6 col-md-7 order-1 order-lg-2'
                            data-aos='fade-left'
                            data-aos-delay='800'
                        >
                            <div className='mt-lg-0'>
                                <div className='w-100'>
                                    <img
                                        className='mx-auto d-block'
                                        src={heroIndex2}
                                        alt=''
                                    />
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
