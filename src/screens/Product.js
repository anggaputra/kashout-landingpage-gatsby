import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

import ImageBigGadget from "../assets/img/products/product-big-gadget.jpg";

function Product() {
  <script
  charset="utf-8"
  type="text/javascript"
  src="//js.hsforms.net/forms/v2.js"
></script>;


const { loaded, error, formCreated } = useHubspotForm({
  portalId: "21685590",
  formId: "3a2a9e29-fcf7-43d0-af9c-1aa0d5dfdaf7",
  target: "#my-hubspot-form",
});

  return (
    <div className="page">
      <Header />
      <div className="product-page">
        <div className="product-col product-big">
            <img src={ImageBigGadget} alt="" />
        </div>
      
        <div className="product-col product-offering">
            <div className="col-lg-12 col-md-12 product-form">
                <h1>Simulasi menabung</h1>
                <div className="media contact-info">
                    <span className="contact-info__icon"><i className="ti-time"></i></span>
                    <div className="media-body">
                        <h3>Deposit awal</h3>
                        <p>Dapat cash reward Rp120.000</p>
                    </div>
                </div>
                <div className="media contact-info">
                    <span className="contact-info__icon"><i className="ti-time"></i></span>
                    <div className="media-body">
                        <h3>Deposit 50%</h3>
                        <p>Dapat cash reward 50.000</p>
                    </div>
                </div>
                <div className="media contact-info">
                    <span className="contact-info__icon"><i className="ti-cup"></i></span>
                    <div className="media-body">
                        <h3>Full deposit</h3>
                        <p>Dapat cash reward Rp20.000</p>
                    </div>
                </div>

                <div className="offering-form">
                  <div id="my-hubspot-form"></div>
                </div>


              

            </div>
            
        </div>
      
      </div>
      <Footer />
    </div>
  );
}

export default Product;
