/* External package import */
import React from "react";
/* External package import */

/* internal file import */
import HeaderBackground from "../../assets/images/HeaderBackground.png";
import FireBeeBlue from "../../assets/images/FireBeeBlue.svg";
import Profile from "../../assets/images/Login.png";
/* internal file import */

/* custom styles */
import "./styles/headerStyle.css";
/* custom styles */

/* static json data */
const navItems = [
  { name: "How It Works", href: "#" },
  { name: "Signals", href: "#" },
  { name: "Reviews", href: "#" },
  { name: "Blog", href: "#" },
];
/* static json data */

const Header = () => {
  return (
    <div>
      <div className="position-relative">
        <img
          src={HeaderBackground}
          className="HeaderBackground"
          alt="Header background"
        />
        <h4 className="headingTitle color-white mt-0 mb-0">
          BLACK FRIDAY SALE - SAVE $100
        </h4>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid primary-color-grey">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={FireBeeBlue} alt="FireBee logo" />
          </a>

          <button className="btn btn-buy-now d-lg-none me-2" type="button">
            Buy Now
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link" href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="nav-item profile-icon">
                <a className="nav-link" href="#">
                  <div className="profile-icon-container">
                    <img
                      src={Profile}
                      alt="Profile"
                      className="profile-icon-img"
                    />
                  </div>
                </a>
              </li>
            </ul>

            <button
              className="btn btn-buy-now d-none d-lg-block ms-2"
              type="button"
            >
              Buy Now
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
