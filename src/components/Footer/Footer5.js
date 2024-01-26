import React from "react";
import { Link } from "gatsby";

import imgLB from "../../assets/image/logo-main-black.png";
import imgLW from "../../assets/image/logo-main-white.png";
import pseBadge from "../../assets/image/pse-terdaftar.png";

const Footer = ({ className, ...rest }) => {
    const currentTime = new Date();
    return (
        <>
            <div className={`mt-8 pt-8 pt-lg-8 pb-9 ${className}`} {...rest}>
                <div className='container'>
                    <div className='d-flex align-items-center justify-content-center justify-content-sm-between flex-column flex-sm-row flex-wrap'>
                        <div className='mb-sm-0'>
                            <h4 className='font-size-5 text-black mb-0'>
                                PT. Solusi Finansial Terintegrasi ©{" "}
                                {currentTime.getFullYear()}
                            </h4>
                        </div>
                        <div className=''>
                            <ul className='d-flex align-items-center list-unstyled mb-0'>
                                <li>
                                    <Link
                                        to='https://www.instagram.com/getkashout'
                                        target='_blank'
                                        className='pl-5 text-black gr-hover-text-dodger-blue-1 font-size-5 px-3'
                                    >
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='https://www.tiktok.com/@getkashout'
                                        target='_blank'
                                        className='pl-5 text-black gr-hover-text-dodger-blue-1 font-size-5 px-3'
                                    >
                                        TikTok
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='https://www.linkedin.com/company/getkashout/'
                                        target='_blank'
                                        className='pl-5 text-black gr-hover-text-dodger-blue-1 font-size-5 px-3'
                                    >
                                        Linkedin
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='mt-10 d-flex align-items-center justify-content-center justify-content-sm-between flex-column flex-sm-row flex-wrap mt-6'>
                        <a
                            href='https://pse.kominfo.go.id/tdpse-detail/17527'
                            target='_blank'
                        >
                            <img height={60} src={pseBadge} alt='' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
