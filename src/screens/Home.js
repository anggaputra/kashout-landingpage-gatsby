import React from "react";
import hand3D from "../assets/img/3d/hand3d.png";
import prodGadget from "../assets/img/products/prod-gadget.png";
import prodTravel from "../assets/img/products/prod-travel.png";
import prodInvestment from "../assets/img/products/prod-investment.png";
import phoneUISaving from "../assets/img/3d/yourgoals.png";
import phoneUIGoal from "../assets/img/3d/goaldetail.png";

import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <Header />
      <div className="slider_area">
        <div className="single_slider  d-flex align-items-center slider_bg_1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8 col-md-6">
                <div className="slider_text ">
                  <h1
                    className="wow fadeInDown"
                    data-wow-duration="1s"
                    data-wow-delay=".1s"
                  >
                    Save now buy later
                  </h1>
                  <p
                    className="wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay=".1s"
                  >
                    Karena menabung lebih baik daripada berhutang
                  </p>
                  <div
                    className="video_service_btn wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay=".1s"
                  ></div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div
                  className="phone_thumb wow fadeInDown"
                  data-wow-duration="1.1s"
                  data-wow-delay=".2s"
                >
                  <img src={hand3D} alt="" width="500px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="prising_area">
        <div className="container">
          <h3
            className="wow fadeInLeft text-center"
            data-wow-duration="1s"
            data-wow-delay=".1s"
          >
            Ubah kebiasaan berhutang dengan menabung
          </h3>
          <p className="wow fadeInDown text-center"></p>
          <div className="row no-gutters align-items-center">
            <div className="offset-xl-1 offset-md-1 col-xl-5 col-md-5">
              <div
                className="single_prising text-center wow fadeInUp"
                data-wow-duration=".2s"
                data-wow-delay=".6s"
              >
                <div className="prising_header d-flex justify-content-between pink_header">
                  <h3>❌ Buy now, pay later</h3>
                </div>
                <ul>
                  <li>Menambah beban hutang</li>
                  <li>Merusak 'Credit score' bila tidak bisa membayar</li>
                  <li>Konsumerisme yang tidak baik</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-md-5">
              <div
                className="single_prising text-center wow fadeInUp"
                data-wow-duration=".3s"
                data-wow-delay=".8s"
              >
                <div className="prising_header d-flex justify-content-between">
                  <h3>✅ Save now, buy later</h3>
                </div>
                <ul>
                  <li>Mengubah kebiasaan buruk</li>
                  <li>Keuangan lebih teratur</li>
                  <li>Beli barang tanpa beban</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features_area" id="howitworks">
        <div className="container">
          <div className="features_main_wrap">
            <div className="row  align-items-center">
              <div className="col-xl-5 col-lg-5 offset-xl-1 offset-lg-1 col-md-6">
                <div
                  className="about_image wow fadeInLeft"
                  data-wow-duration=".4s"
                  data-wow-delay=".1s"
                >
                  <img src={phoneUIGoal} alt="" />
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6">
                <div className="features_info">
                  <h3
                    className="wow fadeInUp"
                    data-wow-duration=".5s"
                    data-wow-delay=".3s"
                  >
                    Otomatisasi proses menabung
                  </h3>
                  <ul>
                    <li
                      className="wow fadeInUp"
                      data-wow-duration=".7s"
                      data-wow-delay=".5s"
                    >
                      <i className="ti-arrow-circle-right"></i> Tentukan goal
                      kamu
                    </li>
                    <li
                      className="wow fadeInUp"
                      data-wow-duration=".8s"
                      data-wow-delay=".6s"
                    >
                      <i className="ti-arrow-circle-right"></i> Hubungkan akun
                      e-wallet sehari-hari kamu
                    </li>
                    <li
                      className="wow fadeInUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".7s"
                    >
                      <i className="ti-arrow-circle-right"></i> Secara otomatis
                      kami akan mencatat dan menyimpan uang
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="features_main_wrap">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-5 offset-xl-1 offset-lg-1 col-md-6 ">
                <div
                  className="about_draw wow fadeInUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".1s"
                >
                  <img src={phoneUISaving} alt="" />
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6">
                <div className="features_info">
                  <h3>
                    Dengan <b>Recehan</b> <br /> menabung jadi lebih mudah
                  </h3>
                  <p>
                    Serba otomatis, tentukan seberapa banyak kamu ingin
                    mengumpulkan recehan untuk ditabung dari setiap transaksi
                    pengeluaran kamu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div
                className="section_title text-center wow fadeInUp"
                data-wow-duration=".3s"
                data-wow-delay=".1s"
              >
                <h3>Kumpulin dulu uangnya, baru beli barangnya</h3>
                <p>Dapatkan cash reward setiap kali uang terkumpul</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div
                className="single_service text-center wow fadeInUp"
                data-wow-duration=".4s"
                data-wow-delay=".2s"
              >
                <div className="thumb">
                  <img src={prodGadget} alt="" />
                </div>
                <h4>Gadget</h4>
                <Link className="boxed-btn4" to="/product/gadget">
                  Lihat penawaran
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div
                className="single_service text-center wow fadeInUp"
                data-wow-duration=".5s"
                data-wow-delay=".3s"
              >
                <div className="thumb">
                  <img src={prodTravel} alt="" />
                </div>
                <h4>Travel</h4>
                <a className="boxed-btn4" href="#">
                  Lihat penawaran
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div
                className="single_service text-center wow fadeInUp "
                data-wow-duration=".6s"
                data-wow-delay=".4s"
              >
                <div className="thumb">
                  <img src={prodInvestment} alt="" />
                </div>
                <h4>Investasi</h4>
                <a className="boxed-btn4" href="#">
                  Lihat penawaran
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
