import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home6/Hero";

const Faq = () => {
    return (
        <>
            <PageWrapper
                themeConfig={{
                    headerClassName: "site-header--menu-right",
                    headerButton: <></>,
                    footerStyle: "style2",
                }}
            >
                <div className='pt-23 pt-md-26 pt-lg-31 pb-13 pb-md-18 pb-lg-23'>
                    <div className='container'>
                        {/* Section Title */}
                        <div className='row justify-content-center'>
                            <div className='col-xl-10 col-lg-10'>
                                <div className='text-center mb-13 mb-lg-18'>
                                    <h2 className='font-size-11 mb-7'>
                                        Belanja dan menabung bersamaan
                                    </h2>
                                    <p className='font-size-7 mb-0 px-md-10 px-xl-13'>
                                        Kashout adalah marketplace yang akan
                                        membantu kalian untuk menabung dengan
                                        cara yang mudah dan menyenangkan.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* End Section Title */}
                        {/* Faqs */}
                        {/* Faqs */}
                        <div className='row justify-content-center'>
                            {/* Single Faq */}
                            <div className='col-lg-6 col-md-10'>
                                <div className='d-flex mb-10 mb-lg-17'>
                                    <div className='mr-6'>
                                        <div className='bg-light-orange circle-28 text-white mt-1'>
                                            <i className='fa fa-question' />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <h4 className='font-size-7 mb-7'>
                                            Bagaimana Cara Kerja Kashout?
                                        </h4>
                                        <p className='font-size-5 pr-md-10 pr-lg-0 mb-0'>
                                            Seperti marketplace pada umumnya,
                                            Kami menjual produk pilihan dari
                                            partner yang telah bekerja sama
                                            dengan kami. Kamu bisa membeli
                                            produk-produk yang ada dengan cara
                                            menabung terlebih dahulu.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Faq */}
                            {/* Single Faq */}
                            <div className='col-lg-6 col-md-10'>
                                <div className='d-flex mb-10 mb-lg-17'>
                                    <div className='mr-6'>
                                        <div className='bg-light-orange circle-28 text-white mt-1'>
                                            <i className='fa fa-question' />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <h4 className='font-size-7 mb-7'>
                                            Apa keuntungan dari program Kashout?
                                        </h4>
                                        <p className='font-size-5 pr-md-10 pr-lg-0 mb-0'>
                                            Selain kemudahan dalam berbelanja,
                                            Kashout membantu dalam melakukan
                                            proses menabung dan memberikan
                                            banyak cash rewards.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Faq */}
                            {/* Single Faq */}
                            <div className='col-lg-6 col-md-10'>
                                <div className='d-flex mb-10 mb-lg-17'>
                                    <div className='mr-6'>
                                        <div className='bg-light-orange circle-28 text-white mt-1'>
                                            <i className='fa fa-question' />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <h4 className='font-size-7 mb-7'>
                                            Apakah ada biaya yang dibebankan
                                            kepada pelanggan?
                                        </h4>
                                        <p className='font-size-5 pr-md-10 pr-lg-0 mb-0'>
                                            Tidak ada.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Faq */}
                            {/* Single Faq */}
                            <div className='col-lg-6 col-md-10'>
                                <div className='d-flex mb-10 mb-lg-17'>
                                    <div className='mr-6'>
                                        <div className='bg-light-orange circle-28 text-white mt-1'>
                                            <i className='fa fa-question' />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <h4 className='font-size-7 mb-7'>
                                            Bedanya dengan marketplace lain
                                        </h4>
                                        <p className='font-size-5 pr-md-10 pr-lg-0 mb-0'>
                                            Kamu bisa berbelanaja dan menabung
                                            bersamaan, miliki produk yang kamu
                                            inginkan dengan cara yang mudah,
                                            menyenangkan dan bebas hutang.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Faq */}
                        </div>
                    </div>
                </div>
                <Hero className='position-relative pt-30 pb-14 pb-md-19 pb-lg-33 pt-lg-35 position-relative overflow-hidden' />
            </PageWrapper>
        </>
    );
};
export default Faq;
