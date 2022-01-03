import React from "react";
import "./index.css";
import RoadMapItem from "./RoadMapItem";

import Fade from "react-reveal/Fade";

const Roadmap = () => {
  return (
    <div style={{ position: "relative" }} id="roadmap">
      <Fade left delay="500">
        <div className="roadmap-line"></div>
      </Fade>
      <div className="roadmap-header">
        <Fade bottom>
          <div className="front-roadmap">EDDASwap Roadmap</div>
        </Fade>
      </div>
      {/* <img src="/roadmap/roadmap-hor.svg" alt="" className="roadmap-hor" />
      <img
        src="/roadmap/roadmap-ver-medium.svg"
        alt=""
        className="roadmap-ver-medium"
      />
      <img
        src="/roadmap/roadmap-ver-small.svg"
        alt=""
        className="roadmap-ver-small"
      /> */}
      {/* <div style={{ display: "inline-block", justifyContent: "space-between" }}> */}
      {/* <Fade bottom delay="500"> */}
      <ul className="roadmap-horizontal">
        <li>
          <RoadMapItem
            title="JUNE 2020"
            desc="Conceptualisation"
            dotColor="#E6007A"
            textDelay="1000"
          />
        </li>
        <li>
          <RoadMapItem
            title="JULY 2020"
            desc="Development Begins"
            direction="down"
            textDelay="1200"
          />
        </li>
        <li>
          <RoadMapItem
            title="MARCH 2021"
            desc="Staking Platform"
            dotColor="#E6007A"
            textDelay="1400"
          />
        </li>
        <li>
          <RoadMapItem
            title="MARCH 2021"
            desc="Non-Fungible Token (NFT) Platform"
            direction="down"
            textDelay="1600"
          />
        </li>
        <li>
          <RoadMapItem
            title="Q2 2021"
            desc="Decentralized Exchange (DEX)"
            dotColor="#E6007A"
            itemStyle={{ transform: "translateY(87px)" }}
            textDelay="1800"
            connectorStyle={{ height: "84.5px" }}
            connectorImgStyle={{ width: "1px" }}
          />
        </li>
        <li>
          <RoadMapItem
            title="Q1 2022"
            desc="EDDAVerse"
            direction="down"
            descStyle={{
              color: "#E6007A",
              cursor: "pointer",
              fontWeight: "700",
            }}
            onDescClick={() => window.open("https://eddaverse.com/")}
            textDelay="2000"
          />
        </li>
      </ul>
      <div className="vertical-roadmap">
        <Fade top>
          <div className="vertical-roadmap-item">
            <div
              className="vertical-roadmap-item-dot"
              style={{ backgroundColor: "#E6007A" }}
            ></div>
            <div className="roadmap-item-title">JUNE 2020</div>
            <div className="roadmap-item-desc">Conceptualisation</div>
          </div>
        </Fade>
        <Fade top delay="200">
          <img
            className="vertical-connector"
            src="/roadmap/vertical-connector.svg"
          />
          <div className="vertical-roadmap-item">
            <div className="vertical-roadmap-item-dot"></div>
            <div className="roadmap-item-title">JULY 2020</div>
            <div className="roadmap-item-desc">Development Begins</div>
          </div>
        </Fade>
        <Fade top delay="400">
          <img
            src="/roadmap/vertical-connector.svg"
            className="vertical-connector"
          />
          <div className="vertical-roadmap-item">
            <div
              className="vertical-roadmap-item-dot"
              style={{ backgroundColor: "#E6007A" }}
            ></div>
            <div className="roadmap-item-title">MARCH 2021</div>
            <div className="roadmap-item-desc">Staking Platform</div>
          </div>
        </Fade>
        <Fade top delay="600">
          <img
            className="vertical-connector"
            src="/roadmap/vertical-connector.svg"
          />
          <div className="vertical-roadmap-item">
            <div className="vertical-roadmap-item-dot"></div>
            <div className="roadmap-item-title">MARCH 2021</div>
            <div className="roadmap-item-desc">
              Non-Fungible Token (NFT) Platform
            </div>
          </div>
        </Fade>
        <Fade top delay="800">
          <img
            className="vertical-connector"
            src="/roadmap/vertical-connector.svg"
          />
          <div className="vertical-roadmap-item">
            <div
              className="vertical-roadmap-item-dot"
              style={{ backgroundColor: "#E6007A" }}
            ></div>
            <div className="roadmap-item-title">Q2 2021</div>
            <div className="roadmap-item-desc">
              Decentralized Exchange (DEX)
            </div>
          </div>
        </Fade>
        <Fade top delay="1000">
          <img
            className="vertical-connector"
            src="/roadmap/vertical-connector.svg"
          />
          <div className="vertical-roadmap-item">
            <div className="vertical-roadmap-item-dot"></div>
            <div className="roadmap-item-title">Q1 2022</div>
            <div
              className="roadmap-item-desc"
              style={{ color: "#E6007A", fontWeight: "700" }}
              onClick={() => window.open("https://eddaverse.com/")}
            >
              EDDAVerse
            </div>
          </div>
        </Fade>
      </div>
      {/* </Fade> */}

      {/* </div> */}
    </div>
  );
};

export default Roadmap;
