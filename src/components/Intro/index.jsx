import React from "react";

import { Menu, Dropdown } from "antd";

import "./index.css";

import { LITEPAPERS, AUDITS } from "../Header/constants";

import Lottie from "lottie-react";
import animationData from "./line.json";

import Fade from "react-reveal/Fade";

const Outlined = () => <img src="/icons/arrow-circle-left.svg" alt="" />;

const LitePaperMenu = (
  <Menu>
    {LITEPAPERS.map(({ id, link, name }) => (
      <Menu.Item key={id}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="dropdown-item"
        >
          {name}
        </a>
      </Menu.Item>
    ))}
  </Menu>
);

const AuditMenu = (
  <Menu>
    {AUDITS.map(({ id, link, name }) => (
      <Menu.Item key={id}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </Menu.Item>
    ))}
  </Menu>
);

const Intro = () => {
  return (
    // <div
    //   style={{
    //     // margin: "0 auto",
    //     // padding: "40px 0px 80px 0px",
    //     width: "100vw",
    //   }}
    // >
    <div className="intro">
      <div className="intro-item intro-welcome">
        <Fade bottom>
          <div className="welcome-text">Welcome to</div>
        </Fade>
        <Fade bottom delay="500">
          <div className="welcome-edda">
            <span style={{ color: "#E6007A" }}>EDDA</span>Swap
          </div>
        </Fade>
      </div>
      <Fade delay="1200">
        <div className="intro-item intro-line">
          <Fade bottom delay="1800">
            <a
              href="https://app.eddaswap.com/nft-detail?id=131"
              target="_blank"
              rel="noopener noreferrer"
              className="intro-btn"
            >
              360 VR NFTs
            </a>{" "}
          </Fade>
          <Fade bottom delay="1800">
            <a
              href="https://madtrooper.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="intro-btn"
            >
              MadTrooper
            </a>{" "}
          </Fade>
          <Fade bottom delay="1800">
            <a
              href="https://eddaverse.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="intro-btn"
            >
              EDDAVerse
            </a>{" "}
          </Fade>
          <Fade bottom delay="1800">
            <a
              href="https://app.uniswap.org/#/swap?outputCurrency=0xfbbe9b1142c699512545f47937ee6fae0e4b0aa9&use=V2"
              target="_blank"
              rel="noopener noreferrer"
              className="intro-btn intro-btn-last"
              style={{ marginRight: "0px" }}
            >
              5000 EDDA Tokens
            </a>
          </Fade>
          {/* 360 VR NFTS | MADTROOPER | EDDAVERSE | 5000 EDDA TOKENS | */}
        </div>
      </Fade>
      <Fade bottom delay="1800">
        <div className="intro-description intro-item">
          EDDASwap is an ecosystem of NFT and DeFi applications. $EDDA has a
          fixed supply of 5000 tokens. The EDDASwap ecosystem has platforms on
          Ethereum, Solana, Polygon, and Binance Smart Chain.
        </div>
        <div className="intro-item download-section">
          <Dropdown
            overlay={LitePaperMenu}
            trigger={["click"]}
            className="litepaper"
          >
            <div
              className="ant-dropdown-link download-text"
              onClick={(e) => e.preventDefault()}
            >
              <span style={{ marginRight: "12px" }}>EDDASwap Litepaper</span>
              <Outlined />
            </div>
          </Dropdown>
          <Dropdown overlay={AuditMenu} trigger={["click"]} className="audit">
            <div
              className="ant-dropdown-link download-text"
              onClick={(e) => e.preventDefault()}
            >
              <span style={{ marginRight: "12px" }}>EDDASwap Audit</span>
              <Outlined />
            </div>
          </Dropdown>
        </div>
      </Fade>
      <Fade bottom delay="2000">
        <div className="intro-item intro-eco">
          <Fade bottom delay="2500">
            <div className="intro-image-wrapper" style={{ width: "231px" }}>
              <div className="intro-image floating-item">
                <img src="/intro/dex.svg" alt="" width="171" height="186" />
              </div>
              <a
                href="https://dex.eddaswap.com/exchange"
                target="_blank"
                rel="noopener noreferrer"
                className="intro-link edda-button"
              >
                EDDASwap DEX
              </a>
            </div>
          </Fade>
          <Fade bottom delay="3500">
            <div className="intro-image-wrapper" style={{ width: "228px" }}>
              <div className="intro-image floating-item">
                <img src="/intro/nft.svg" alt="" width="169" height="179" />
              </div>
              <a
                href="https://app.eddaswap.com/nfts"
                target="_blank"
                rel="noopener noreferrer"
                className="intro-link edda-button"
              >
                EDDASwap NFT
              </a>
            </div>
          </Fade>
          <Fade bottom delay="3000">
            <div className="intro-image-wrapper" style={{ width: "185px" }}>
              <div className="intro-image floating-item">
                <img src="/intro/buy.svg" alt="" width="185" height="164" />
              </div>
              <a
                href="https://app.uniswap.org/#/swap?outputCurrency=0xfbbe9b1142c699512545f47937ee6fae0e4b0aa9&use=V2"
                target="_blank"
                rel="noopener noreferrer"
                className="intro-link edda-button"
              >
                Buy EDDA
              </a>
            </div>
          </Fade>
          <Fade bottom delay="4000">
            <div className="intro-image-wrapper">
              <div className="intro-image floating-item">
                <img src="/intro/stake.svg" alt="" width="202" height="172" />
              </div>
              <a
                href="https://app.eddaswap.com/ag"
                target="_blank"
                rel="noopener noreferrer"
                className="intro-link edda-button"
              >
                Stake EDDA
              </a>
            </div>
          </Fade>
          {/* <div className="intro-image-wrapper">
              <div className="intro-image floating-item">
                <img src="/intro/360.svg" alt="" />
              </div>
              <a
                href="https://app.eddaswap.com/nft-detail?id=131"
                target="_blank"
                rel="noopener noreferrer"
                className="intro-link edda-button"
              >
                360° VR NFTs
              </a>
            </div> */}
          <div
            style={{
              position: "absolute",
              top: "-30px",
              width: "100%",
            }}
            className="intro-lottie"
          >
            <Lottie
              animationData={animationData}
              // style={{
              //   position: "absolute",
              //   top: "-80px",
              //   width: "100%",
              // }}
            />
          </div>
          {/* <div className="decorative-line">
            <img src="/intro/decoline.svg" className="decorative-line" />
          </div> */}
        </div>
      </Fade>
    </div>
    // </div>
  );
};

export default Intro;
