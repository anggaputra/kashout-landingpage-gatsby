import React from "react";
import { Link } from "gatsby";

import imgM from "../../assets/image/3d/hand3d.png";
import imgYS from "../../assets/image/home-6/png/cirle-yellow-shape.png";

const Hero = ({ className, ...rest }) => {
    return (
        <div className={className} {...rest}>
            <div className='container position-static'>
                <div className='row align-items-center justify-content-center position-static'>
                    {/* Hero Image */}
                    <div className='col-xl-6 col-lg-6 col-md-7 col-xs-8 position-static'>
                        <div className='l6-hero-image-group'>
                            <img
                                className='w-100'
                                src={imgM}
                                alt=''
                                data-aos='fade-up'
                                data-aos-delay={250}
                            />
                            <div className='img-1'>
                                <img
                                    className='w-100'
                                    src={imgYS}
                                    alt=''
                                    data-aos='fade-right'
                                    data-aos-delay={250}
                                />
                            </div>
                        </div>
                    </div>
                    {/* End Hero Image */}
                    {/* Hero Content */}
                    <div className='col-lg-6 col-md-9 col-sm-11'>
                        <div
                            className='mt-8 mt-lg-0 pr-md-11 pr-lg-0 pr-xl-10'
                            data-aos='fade-left'
                            data-aos-delay={750}
                        >
                            <h1 className='font-size-11 mb-8 pr-sm-18 pr-md-8 pr-lg-0 line-height-84'>
                                Beli barang tidak harus selalu berhutang
                            </h1>
                            <p className='font-size-7 mb-0 pr-sm-10 pr-md-10 pr-lg-0 pr-xl-18'>
                                Membangun kebiasan menabung di era digital saat
                                ini semakin susah, kita dengan mudahnya
                                berhutang hanya untuk memiliki produk tertentu.
                            </p>
                        </div>
                    </div>
                    {/* End Hero Content */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
