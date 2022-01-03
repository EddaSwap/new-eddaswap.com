import React from "react";

import "./index.css";

import { PARTNERS, PartnersListMobile } from "./constants";
import { isMobile } from "react-device-detect";
import SectionContainer from "../SectionContainer";
import GradientDivider from "../GradientDivider";

import Fade from "react-reveal/Fade";

const PartnerItem = ({ item, style, imgStyle }) => {
  return (
    <a
      className="partner-image-item"
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
    >
      <img
        className="partner-image"
        key={item.id}
        src={item.image}
        alt=""
        width="auto"
        style={{ ...item.imgStyle, ...imgStyle }}
      />
    </a>
  );
};

// const listGrid = {
//   xs: 2,
//   sm: 2,
//   md: 2,
//   lg: 4,
//   xl: 4,
//   xxl: 4,
//   gutter: 20,
// };

const Partner = () => {
  return (
    <>
      <div id="partners">
        <SectionContainer
          style={{ paddingBottom: "5rem" }}
          containerClass="partner-section-container"
        >
          <Fade bottom>
            <div
              direction="vertical"
              align={isMobile ? "center" : "flex-start"}
            >
              <div className="partner-title">Our Partners</div>
            </div>
          </Fade>
          {!isMobile && (
            <Fade bottom delay="500">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "60px",
                  alignItems: "center",
                }}
              >
                {PARTNERS.slice(0, 4).map((item) => (
                  <PartnerItem
                    item={item}
                    style={{
                      justifyContent: "center",
                      // height: `${item.imageHeight}px`,
                    }}
                    imgStyle={{
                      height: `${item.imageHeight}px`,
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {PARTNERS.slice(4, 8).map((item) => (
                  <PartnerItem
                    item={item}
                    style={{
                      justifyContent: "center",
                      //
                    }}
                    imgStyle={{
                      height: `${item.imageHeight}px`,
                    }}
                  />
                ))}
              </div>
            </Fade>
          )}
          {isMobile && (
            <Fade delay="500" bottom>
              {PartnersListMobile.map((item) => (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {item.map((item) => (
                    <PartnerItem
                      item={item}
                      imgStyle={{
                        height: item.imageMobileHeight,
                        margin: "0px 20px",
                        width: "auto",
                      }}
                    />
                  ))}
                </div>
              ))}
            </Fade>
          )}
        </SectionContainer>
        <div className="partner-divider" />
        <GradientDivider maxWidth={isMobile ? "50%" : "614px"} />
      </div>
    </>
  );
};

export default Partner;
