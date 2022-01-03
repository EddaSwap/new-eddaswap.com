import React, { useState } from "react";

import "./desktop.css";

import { slide as Menu } from "react-burger-menu";
import { SOCIALS } from "./constants";
import MobileMenu from "./mobile";

export const Header = () => {
  const [menuClass, setMenuClass] = useState("mobile-menu");
  const onBurgerClick = () => {
    if (menuClass === "mobile-menu") {
      setMenuClass("mobile-menu menu-active");
    } else {
      setMenuClass("mobile-menu");
    }
  };

  const resetClass = () => setMenuClass("mobile-menu");
  return (
    <div style={{ height: "38px" }}>
      <div className="header-container">
        <a href="/" className="header-logo-container">
          <img src="/logo.svg" alt="" className="header-logo"></img>
        </a>
        <img
          src="icons/mobile-menu-button.svg"
          width={"27px"}
          height={"20px"}
          alt=""
          onClick={onBurgerClick}
          className="burger-icon"
        />
        <div className="header-menu">
          <a href="#ecosystem" className="header-item">
            Ecosystem
          </a>
          <a href="#roadmap" className="header-item">
            Roadmap
          </a>
          <a href="#team" className="header-item">
            Team
          </a>
          <a href="#partners" className="header-item">
            Partners
          </a>
          <a href="#inthepress" className="header-item">
            In The Press
          </a>
          {/* <a href="#defi" className="header-item">
            DeFi Glossary
          </a> */}
          <a href="#contact" className="header-item">
            Contact Us
          </a>
          <div className="header-social">
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
                  width={20}
                  height={20}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <MobileMenu menuClass={menuClass} onReset={resetClass} />
    </div>
  );
};

export default Header;
