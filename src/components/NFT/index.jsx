import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { isMobile } from "react-device-detect";
import GradientDivider from "../GradientDivider";
import Slider from "react-slick";
import EddaPlayer from "./player";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from "react-reveal/Fade";
const slickSetting = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
};

const NFT = () => {
  const [currentPlaying, setCurrentPlaying] = useState(1);
  const [muted, setMuted] = useState(true);
  const ref = useRef();

  const onNext = () => {
    ref.current && ref.current.slickNext();
  };

  const onPrev = () => {
    ref.current && ref.current.slickPrev();
  };

  return (
    <div className="nft-container" id="nft">
      <div className="player-wrapper">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=I_SJdRLyekQ&t=2s"
          width="100%"
          height="100%"
          className="react-player"
        />
      </div>
      <div className="nft-box">
        <div className="nft-first">
          <img className="nft-first-img" src="/nft/left.svg" alt="" />
          <div className="nft-first-content">
            <Fade bottom>
              <div className="nft-first-title">EDDAVerse</div>
            </Fade>
            <Fade bottom delay="500">
              <div className="nft-first-description">
                Exclusive EDDASwap NFTs, created by top, global artists, 3D,
                motion and VFX artists.
              </div>
              <div className="nft-gradient-divider">
                <GradientDivider />
              </div>
            </Fade>
          </div>
          <img className="nft-first-img" src="/nft/right.svg" alt="" />
        </div>

        <div
          style={{
            color: "#fff",
            // margin: "0px auto 80px auto",
            // maxWidth: "1440px",
            width: "100%",
          }}
          className="nft-slider-wrapper"
        >
          <Slider {...slickSetting} ref={ref}>
            <EddaPlayer
              url="https://edda-cdn.fra1.digitaloceanspaces.com/eddaswap/videos/eddaverse_shoe1.mp4"
              width={363}
              // controls={true}
              // playing={currentPlaying === 1}
              onEnded={() => {
                setCurrentPlaying(2);
                onNext();
              }}
              volume={0.5}
              muted={muted}
            />
            <EddaPlayer
              width={363}
              // controls={true}
              // playing={currentPlaying === 2}
              onEnded={() => {
                setCurrentPlaying(3);
                onNext();
              }}
              volume={0.5}
              muted={muted}
              url="https://edda-cdn.fra1.digitaloceanspaces.com/eddaswap/videos/EDDAVERSE_SHOE2.mp4"
            />
            <EddaPlayer
              width={363}
              // controls={true}
              // playing={currentPlaying === 3}
              onEnded={() => {
                setCurrentPlaying(4);
                onNext();
              }}
              volume={0.5}
              muted={muted}
              url="https://edda-cdn.fra1.digitaloceanspaces.com/eddaswap/videos/EDDAVERSE_SHOE3.mp4"
            />
            <EddaPlayer
              width={363}
              // controls={true}
              // playing={currentPlaying === 4}
              onEnded={() => {
                setCurrentPlaying(1);
                onNext();
              }}
              volume={0.5}
              muted={muted}
              url="https://edda-cdn.fra1.digitaloceanspaces.com/eddaswap/videos/EDDAVerse_SHOE4.mp4"
            />
          </Slider>
          <div className="nft-controls">
            <div className="nft-controls-arrows">
              <img
                src={isMobile ? "nft/mobile-prev.svg" : "nft/prev.svg"}
                alt=""
                onClick={() => {
                  if (ref.current) {
                    ref.current.slickPrev();
                  }
                }}
              />
              <img
                src={isMobile ? "nft/mobile-next.svg" : "nft/next.svg"}
                alt=""
                onClick={() => {
                  if (ref.current) {
                    ref.current.slickNext();
                  }
                }}
              />
            </div>
            {/* <div className="nft-click-to-view">Click to view</div> */}
            {/* <a
              className="nft-see-more edda-button"
              href="https://app.eddaswap.com/nfts"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFT;
