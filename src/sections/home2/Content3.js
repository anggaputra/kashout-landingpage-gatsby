import React from "react";
import { Link } from "gatsby";

import imgM from "../../assets/image/illustrations/home-content2.png";
import imgCS from "../../assets/image/home-2/png/content-shape.png";

const Content3 = ({ className, ...rest }) => {
    return (
        <>
            <div className={className} {...rest}>
                <div className='full-width-shape w-100'>
                    <img className='w-100' src={imgCS} alt='' />
                </div>
                <div className='container'>
                    <div className='row align-items-center'>
                        {/* Right */}
                        <div
                            className='col-xl-5 col-lg-5 col-md-5 col-xs-8'
                            data-aos='fade-right'
                            data-aos-delay={500}
                            data-aos-once='true'
                        >
                            <div className='content-image-group-3 mb-17 mb-lg-0 mr-xl-16'>
                                <div className='img-1'>
                                    <img className='w-100' src={imgM} alt='' />
                                </div>
                            </div>
                        </div>
                        {/* Right */}
                        {/* Left */}
                        <div
                            className='col-lg-7 col-md-7 col-xs-10'
                            data-aos='fade-left'
                            data-aos-delay={500}
                            data-aos-once='true'
                        >
                            <div>
                                <h3 className='font-size-10 mb-7'>
                                    Dapatkan cash rewards setiap kali kamu
                                    menabung
                                </h3>
                                <p className='heading-default-color font-size-5'>
                                    Lihat proses menabung Kamu mulai dari nol
                                    sampai jumlah yang Kamu targetkan tercapai.{" "}
                                    Setiap kali milestone tercapai Kamu dapat
                                    rewards.
                                </p>
                                {/*   <div className="btn-group mb-12">
                  <Link className="btn btn-dodger-blue-2 rounded-5" to={"#"}>
                    Daftar sekarang
                  </Link>
                </div> */}
                                {/* 
                                <div className=''>
                                    <p className='font-size-3 line-height-20 mb-7 mb-5 mr-xs-17 mr-md-11 mr-lg-17'>
                                        Kashout bisa dihubungkan dengan akun
                                        financial seperti e-wallet dan membantu
                                        Kamu menghitung berapa banyak uang
                                        recehan yang bisa ditabungkan dari
                                        setiap transaksi pengeluaran.
                                    </p>
                                </div> */}
                            </div>
                        </div>
                        {/* Left End */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content3;
