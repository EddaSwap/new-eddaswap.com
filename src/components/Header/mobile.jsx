import React from "react";
import { SOCIALS } from "./constants";

import "./mobile.css";

const MobileMenu = ({ menuClass = "mobile-menu", onReset }) => {
  return (
    <div className={menuClass}>
      <div className="menu-link">
        <a href="#ecosystem" className="menu-link-item" onClick={onReset}>
          Ecosystem
        </a>
        <a href="#roadmap" className="menu-link-item" onClick={onReset}>
          Roadmap
        </a>
        <a href="#team" className="menu-link-item" onClick={onReset}>
          Team
        </a>
        <a href="#partners" className="menu-link-item" onClick={onReset}>
          Partners
        </a>
        <a href="#inthepress" className="menu-link-item" onClick={onReset}>
          In The Press
        </a>
        {/* <a href="" className="menu-link-item">
          DeFi Glossary
        </a> */}
        <a href="#contact" className="menu-link-item" onClick={onReset}>
          Contact Us
        </a>
      </div>
      <div className="menu-socials">
        {SOCIALS.map((social) => (
          <a
            href={social.link}
            key={social.id}
            className="intro-social-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="intro-social-image"
              src={social.image}
              alt=""
              width={24}
              height={24}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
