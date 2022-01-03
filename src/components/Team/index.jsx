import { Card, List } from "antd";
import React, { useState } from "react";
import { TEAMS } from "./constants";

import Fade from "react-reveal/Fade";

import "./index.css";

const MemberCard = (member) => {
  const [showAbout, setShowAbout] = useState(false);
  if (showAbout) {
    return (
      <Card
        style={{
          height: 430,
          width: "100%",
        }}
        className="member-about-card"
      >
        <div className={"member-about-text member-show"}>{member.about}</div>
        <div className="back-container" onClick={() => setShowAbout(false)}>
          <span className="back-text">Back</span>
          <img
            src={"/icons/arrow-circle-left.png"}
            alt=""
            className="back-icon"
            width={29}
            height={29}
          />
        </div>
      </Card>
    );
  }
  return (
    <Card
      // hoverable
      cover={
        <div
          alt=""
          className="team-image"
          style={{
            height: 430,
            background: `linear-gradient(0deg, #0D0922, #0D0922), linear-gradient(180deg, rgba(0, 0, 0, 0) 47.92%, #000000 100%), url(${member.image})`,
            backgroundPositionY: `${member.positionTop}%`,
          }}
        />
      }
      style={{
        height: 430,
        width: "100%",
      }}
      onClick={() => setShowAbout(!showAbout)}
    >
      <div className="team-card-meta-container">
        <Card.Meta
          title={<div className="meta-title">{member.name}</div>}
          description={<div className="meta-description">{member.role}</div>}
          className="team-card-meta"
        />
        <div className="team-social">
          {member.twitter && member.twitter !== "" && (
            <a
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "36px", color: "white" }}
            >
              <img
                src="/team/twitter-white.png"
                alt=""
                width={36}
                height={36}
              />
            </a>
          )}
          {member.linkedin && member.linkedin !== "" && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "20px" }}
            >
              <img
                src="/team/linkedin-white.png"
                alt=""
                width={36}
                height={36}
              />
            </a>
          )}
          {/* {member.linkedin && member.linkedin !== "" && (
            <span className="team-divider" />
          )} */}
          {/* <span
            className="member-about"
            onClick={() => setShowAbout(!showAbout)}
          >
            About
          </span> */}
          <div
            className="back-container"
            onClick={() => setShowAbout(!showAbout)}
          >
            <span
              className="back-text"
              style={{ width: 78, color: member.aboutColor }}
            >
              About
            </span>
            <img
              src={"/icons/arrow-circle-left.png"}
              alt=""
              className="back-icon"
              width={29}
              height={29}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

const InfoBox = ({ number, text, bgColor }) => {
  return (
    <div className="info-box" style={{ backgroundColor: bgColor }}>
      <div className="info-box-number">+ {number}</div>
      <div className="info-box-text">{text}</div>
    </div>
  );
};

const TeamInfo = () => (
  <div className="team-info-container">
    <InfoBox number={8} text="SMART CONTRACT DEVELOPERS" bgColor={"#E6007A"} />
    <InfoBox
      number={2}
      text="CRYPTO ART DIRECTORS AND NFT PRODUCERS"
      bgColor={"#0D0922"}
    />
    <InfoBox number={2} text="PLATFORM, STRATEGY EXPERTS" bgColor={"#777E90"} />
  </div>
);
const Team = () => {
  const lists = [...TEAMS, <TeamInfo />];
  return (
    <div id="team">
      <div className="team-container">
        <Fade bottom>
          <div className="back-team">Our Team</div>
        </Fade>
        <Fade bottom delay="500">
          <div className="team-description-container">
            <p className="team-description">
              The EDDASwap team is a great mix of highly experienced individuals
              from backgrounds in financial technology, electronic markets,
              product design and developer platforms.
            </p>
          </div>
        </Fade>

        {/* {TEAMS.map((member) => (
          <MemberCard {...member} />
        ))} */}
        <List
          dataSource={lists}
          renderItem={(member, index) => {
            if (index === lists.length - 1) {
              return (
                <Fade delay="1000">
                  <div style={{ padding: 5, height: "100%" }}>{member}</div>
                </Fade>
              );
            }
            return (
              <Fade delay="1000">
                <div style={{ padding: 5 }}>
                  <MemberCard {...member} />
                </div>
              </Fade>
            );
          }}
          grid={{
            xs: 1,
            sm: 1,
            md: 2,
            lg: 2,
            xl: 2,
            xxl: 2,
          }}
        />
      </div>
    </div>
  );
};

export default Team;
