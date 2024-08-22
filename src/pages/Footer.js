import React from "react";
import FireBeeWhite from "../assets/images/FireBeeWhite.png";
import FooterBackground from "../assets/images/FooterBackground.png";

const Footer = () => {
  const footerData = {
    sections: [
      {
        title: "About",
        links: [
          { name: "Home", url: "#" },
          { name: "Product", url: "#" },
        ],
      },
      {
        title: "Support",
        links: [
          { name: "Activate", url: "#" },
          { name: "Login", url: "#" },
        ],
      },
    ],
    socialMedia: [
      { platform: "YouTube", icon: "bi-youtube", url: "#" },
      { platform: "Twitter", icon: "bi-twitter", url: "#" },
      { platform: "Facebook", icon: "bi-facebook", url: "#" },
      { platform: "Instagram", icon: "bi-instagram", url: "#" },
      { platform: "Pinterest", icon: "bi-pinterest", url: "#" },
    ],
    companyInfo: {
      logo: FireBeeWhite,
      copyright: "© 2020 Firebee Technologies, Inc. All rights reserved.",
      disclaimer:
        "The statements on this page have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.",
      policies: [
        { name: "Privacy Policy", url: "#" },
        { name: "Terms of Service", url: "#" },
      ],
    },
  };

  return (
    <footer
      className="bg-dark text-white pt-3 font-14 mt-4"
      style={{
        backgroundImage: `url(${FooterBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px"
      }}
    >
      <div className="container">
        <div className="row text-left">
          {/* Section Columns */}
          {footerData.sections.map((section, index) => (
            <div className="col-md-4 col-6" key={index}>
              <h6>{section.title}</h6>
              <ul className="list-unstyled">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url} className="text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media Section */}
          <div className="col-md-4 d-none d-md-block">
            <h6>Find Us On</h6>
            <ul className="list-unstyled d-flex">
              {footerData.socialMedia.map((social, socialIndex) => (
                <li key={socialIndex} className="me-3">
                  <a href={social.url} className="text-white">
                    <i className={`bi ${social.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Placeholder for small screens */}
          <div className="col-12 d-md-none">
            <h6>Find Us On</h6>
            <ul className="list-unstyled d-flex ">
              {footerData.socialMedia.map((social, socialIndex) => (
                <li key={socialIndex} className="me-3">
                  <a href={social.url} className="text-white">
                    <i className={`bi ${social.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="bg-white" style={{ opacity: "0.1" }} />

        <div className="row text-left">
          <div className="col-md-6 ">
            <img
              src={footerData.companyInfo.logo}
              className="me-2 logo-img"
              alt="tick"
            />
            <p className="mt-2">{footerData.companyInfo.copyright}</p>
            <small>{footerData.companyInfo.disclaimer}</small>
          </div>
          <div className="col-md-6 mobile-textstart text-end mt-4">
            {footerData.companyInfo.policies.map((policy, policyIndex) => (
              <React.Fragment key={policyIndex}>
                <a href={policy.url} className="text-white">
                  {policy.name}
                </a>
                {policyIndex < footerData.companyInfo.policies.length - 1 &&
                  " | "}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
