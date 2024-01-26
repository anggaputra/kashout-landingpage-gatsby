import React from "react";
import { Link } from "gatsby";
import Cta from "../../sections/home6/Cta";
import pseBadge from "../../assets/image/pse-terdaftar.png";

const Footer = ({ className, ...rest }) => {
    const currentTime = new Date();
    return (
        <>
            <Cta className='bg-purple-heart py-5' />
            <div
                className={`pt-13 pt-lg-25 pb-13 pb-lg-18 ${className}`}
                {...rest}
            >
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7'>
                            <div className='row'>
                                {/* Single Widgets */}
                                <div className='col-md-4 col-xs-6'>
                                    <div className='mb-10 mb-lg-0'>
                                        <h4 className='font-size-6 font-weight-medium'>
                                            FAQ
                                        </h4>
                                        <ul className='list-unstyled'>
                                            <li>
                                                <Link
                                                    to='/faq'
                                                    className='font-size-5 text-default-color'
                                                >
                                                    Cara mencicil
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/partner'
                                                    className='font-size-5 text-default-color'
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
                    </div>
                </div>
                <div className='container border-top pt-8'>
                    <div className='row'>
                        <div className='col-lg-5 col-md-8'>
                            <div className='mb-7'>
                                <div className='font-size-4 mb-8'>
                                    PT. Solusi Finansial Terintegrasi ©{" "}
                                    {currentTime.getFullYear()}
                                </div>
                            </div>
                            <div className='mb-0 mr-xl-9'>
                                <div>
                                    <img height={50} src={pseBadge} alt='' />
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
