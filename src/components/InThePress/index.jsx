import React, { useRef } from "react";

import { Space, List } from "antd";

import "./index.css";

import { PRESSES } from "./constants";
import { isMobile } from "react-device-detect";
import SectionContainer from "../SectionContainer";
import Card from "./Card";

import Slider from "react-slick";

import Fade from "react-reveal/Fade";

const slickSetting = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  variableWidth: true,

  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplay: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplay: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplay: true,
      },
    },
  ],
};

const Partner = () => {
  const ref = useRef();
  return (
    <div id="inthepress">
      <SectionContainer
        containerClass="inthepress-container"
        containerStyle={{
          padding: "0px 100px",
          overflow: "hidden",
          maxWidth: "2560px",
        }}
      >
        <Fade bottom>
          <div className="press-title">In the Press</div>
        </Fade>
        <Fade bottom delay="500">
          <Slider {...slickSetting} ref={ref} className="inthepress-slider">
            {PRESSES.map((press) => (
              <Card {...press} />
            ))}
          </Slider>
          <div className="press-controls">
            <img
              src={isMobile ? "nft/prev-mobile.svg" : "nft/prev.svg"}
              alt=""
              onClick={() => {
                if (ref.current) {
                  ref.current.slickPrev();
                }
              }}
            />
            <img
              src={isMobile ? "nft/next-mobile.svg" : "nft/next.svg"}
              alt=""
              onClick={() => {
                if (ref.current) {
                  ref.current.slickNext();
                }
              }}
            />
          </div>
        </Fade>
      </SectionContainer>
    </div>
  );
};

export default Partner;
