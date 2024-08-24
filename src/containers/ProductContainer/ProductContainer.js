/* External package import */
import React, { useState } from "react";
/* External package import */

/* internal file import */
import Slider1 from "../../assets/images/Slider1.png";
import Slider2 from "../../assets/images/Slider2.jpg";
import Slider3 from "../../assets/images/Slider3.jpg";
import Slider4 from "../../assets/images/Slider4.jpg";
import Slider5 from "../../assets/images/Slider5.jpg";
import ICNIRP from "../../assets/images/ICNIRP.png";
import FC from "../../assets/images/FC.png";
import star from "../../assets/images/star.svg";
import GreenTick from "../../assets/images/GreenTick.png";
import VISA from "../../assets/images/VISA.png";
import MasterCard from "../../assets/images/MasterCard.png";
import AmericanExpress from "../../assets/images/AmericanExpress.png";
import Maestro from "../../assets/images/Maestro.png";
import PayPal from "../../assets/images/PayPal.png";
import Affirm from "../../assets/images/Affirm.png";
import GuaranteeBlack from "../../assets/images/GuaranteeBlack.png";
import Shipping from "../../assets/images/Shipping.svg";
import SIGNAL from "../../assets/images/SIGNAL.png";
import CoustomerCare from "../../assets/images/CoustomerCare.png";
/* internal file import */

/* custom styles */
import "./styles/productContainerStyle.css";
/* custom styles */

/* Global data */
const slides = [
  { src: Slider1, alt: "Slide 1" },
  { src: Slider2, alt: "Slide 2" },
  { src: Slider3, alt: "Slide 3" },
  { src: Slider4, alt: "Slide 4" },
  { src: Slider5, alt: "Slide 5" }
];

const carouselIcons = [FC, ICNIRP];

const guarantees = [
  { src: GuaranteeBlack, text: "30-day Money-back Guarantee" },
  { src: Shipping, text: "Free Shipping within USA" },
  { src: SIGNAL, text: "Signal Catalogue Updates Included" },
  { src: CoustomerCare, text: "Customer Support via E-mail, Phone, and Chat" }
];

const paymentMethods = [VISA, MasterCard, AmericanExpress, Maestro, PayPal, Affirm];
/* Global data */

const ProductContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <React.Fragment>
      <div className="row product-detail">
        <div className="col-md-6 col-12 p-0">
          <div className="carousel-container">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {slides.map((slide, index) => (
                  <div key={index} className={`carousel-item ${activeIndex === index ? "active" : ""}`}>
                    {carouselIcons.map((icon, i) => (
                      <img key={i} src={icon} className={`carousel-icon${i === 0 ? '2' : ''}`} alt={i === 0 ? 'FC' : 'ICNIRP'} />
                    ))}
                    <img src={slide.src} className="d-block slideImage" alt={slide.alt} />
                  </div>
                ))}
              </div>
              <div className="carousel-pagination">
                {slides.map((slide, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={index}
                    className={`carousel-pagination-item ${activeIndex === index ? "active" : ""}`}
                    onClick={() => handleSlideChange(index)}
                  >
                    <img src={slide.src} alt={slide.alt} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              {guarantees.slice(0, 2).map((item, index) => (
                <div key={index} className="col-6">
                  <img src={item.src} className="img-fluid1" alt="guarantee" />
                  <p className="font-14">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="row mt-3">
              {guarantees.slice(2).map((item, index) => (
                <div key={index} className="col-6">
                  <img src={item.src} className="img-fluid1" alt="guarantee" />
                  <p className="font-14">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 pt-2 sec1-space">
          <div className="text-center text-md-start">
            <h2 className="primary-color-black font-Poppins mb-0 font-weight-bold">Firebee Headband</h2>
            <img src={star} className="star-img" alt="star" />
            <span className="ms-2 font-14">267 Reviews</span>
            <p className="font-14 pt-2 pb-2 mb-0">Order today and receive your Firebee by June 15th, 2021</p>
            <div className="card card-gradient border-radius-15">
              <div className="card-body">
                <div>
                  <p className="font-16 font-weight-bold mb-0">
                    Firebee Starter Kit
                    <span className="price-container font-16 font-weight-normal float-right">
                      <span className="price-strike">$999.00</span>
                      <span className="ps-2">$379.00</span>
                    </span>
                  </p>
                </div>
                <button className="popular-btn font-14 mt-2 color-white">MOST POPULAR KIT</button>
                <ul className="list-unstyled font-14 mt-2">
                  {["Access to 7 signals (and future signal releases)", "Firebee Headband", "$19/month membership, first 2 months free"].map((text, index) => (
                    <li key={index} className="d-flex align-items-center mb-2">
                      <img src={GreenTick} className="me-2 tick-img" alt="tick" />
                      {text}
                    </li>
                  ))}
                </ul>
                <p className="font-14 mb-0">
                  The starter kit is the most affordable way to get started with Firebee. Pay $299 for the Firebee headband and access to the entire Firebee Signal Catalogue for only $19 a month. Membership can be cancelled anytime. No contracts. Satisfaction guaranteed.
                </p>
              </div>
            </div>
            <div className="card mt-2 border-radius-15">
              <div className="card-body">
                <div>
                  <p className="font-16 font-weight-bold mb-0">
                    Founder’s Kit
                    <span className="price-container font-16 font-weight-normal float-right">
                      <span className="ps-2">$799.00</span>
                    </span>
                  </p>
                </div>
                <ul className="list-unstyled font-14 mt-2">
                  {["Access to 7 signals (and future signal releases)", "Firebee Headband", "No Monthly Membership"].map((text, index) => (
                    <li key={index} className="d-flex align-items-center mb-2">
                      <img src={GreenTick} className="me-2 tick-img" alt="tick" />
                      {text}
                    </li>
                  ))}
                </ul>
                <p className="font-14 mb-0">
                  The Founders kit allows you to get the Firebee headband and lifetime access to the entire Firebee Signal Catalogue for a one-time payment. The Founders kit can be paid through Affirm allowing customers to make small payments of $73 a month.
                </p>
              </div>
            </div>
            <div className="m-auto w-90 mt-4 text-center">
              <button className="cart-btn color-white font-16 text-center">
                Add to Cart
                <i className="fas fa-arrow-right ms-2 font-weight-bold"></i>
              </button>
            </div>
          </div>
          <div className="container mt-4">
            <div className="row d-flex justify-content-between payment-space">
              {paymentMethods.map((method, index) => (
                <div key={index} className="col">
                  <img src={method} className="img-fluid" alt="payment method" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductContainer;
