import React from "react";
import { isMobile } from "react-device-detect";

import { SOCIALS } from "./constants";
import "./index.css";


const Footer = () => {

  const iconSize = !isMobile ? 44 : 28;
  return (
    <div className="footer-container">
      <div className="footer-left">
        <img className="footer-logo" src="/footerLogo.svg" alt="" />
        <div>
          <span className="all-rights">
            © 2021 EDDASwap. All rights reserved.
          </span>{" "}
          <span style={{ border: "solid 1px #777E90", marginRight: "5px" }} />{" "}
          <a
            href="/terms-conditions"
            className="terms"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
      <div className="footer-right">
        {SOCIALS.map((social) => (
          <a
            href={social.link}
            key={social.id}
            className="footer-social-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={social.image}
              className="footer-social-image"
              alt=""
              width={iconSize}
              height={iconSize}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
