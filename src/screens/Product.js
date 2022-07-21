import React from "react";
import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";
import { useParams, useNavigate } from "react-router-dom";
import { getProductImage, getAllProducts } from "../data/allProducts";
import logo from "../assets/img/logo_blue.png"

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

  let params = useParams();
  let productImage = getProductImage(params.productName);
  const navigate = useNavigate();

  function filterIt(arr, searchKey) {
    return arr.filter(function (obj) {
      return Object.keys(obj).some(function (key) {
        return obj[key].includes(searchKey);
      });
    });
  }

  return (
    <div className="page">
      <div className="product-page">
        <div className="product-col product-offering">
          <a href="/">
            <i className="ti-arrow-left"></i>
            <img src={logo} width="200" alt="logo" />
          </a>
          <div className="col-lg-12 col-md-12 product-form">
            <p>{productImage.detail.name}</p>
            <h1>{productImage.detail.tagline}</h1>

            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-time"></i>
              </span>
              <div className="media-body">
                <h3>Lakukan deposit awal</h3>
                <p>Cash reward s/d Rp25.000</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-time"></i>
              </span>
              <div className="media-body">
                <h3>Hubungkan akun e-wallet kamu</h3>
                <p>Cash reward s/d Rp25.000</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-time"></i>
              </span>
              <div className="media-body">
                <h3>Terkumpul 50%</h3>
                <p>Cash reward s/d 150.000</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-cup"></i>
              </span>
              <div className="media-body">
                <h3>Terkumpul 100%</h3>
                <p>Cash reward Rp200.000</p>
              </div>
            </div>

            <div className="offering-form">
              <div id="my-hubspot-form"></div>
            </div>
          </div>
        </div>
        <div className="product-col product-big">
          <img src={productImage.detail.image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Product;
