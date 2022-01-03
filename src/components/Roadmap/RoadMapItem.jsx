import React from "react";

import "./RoadMapItem.css";

import Fade from "react-reveal/Fade";

const RoadMapItem = ({
  title,
  desc,
  direction = "up",
  dotColor,
  itemStyle,
  descStyle,
  onDescClick,
  textDelay,
  connectorStyle,
  connectorImgStyle,
}) => {
  const animationDirection =
    direction === "up" ? { bottom: true } : { top: true };
  return (
    <div
      className={
        direction === "up"
          ? "roadmap-item roadmap-item-up"
          : "roadmap-item roadmap-item-down"
      }
      style={itemStyle}
    >
      {direction === "down" && (
        <>
          <Fade {...animationDirection} delay={textDelay}>
            <div
              className="roadmap-item-dot"
              style={{ backgroundColor: dotColor, marginBottom: "16px" }}
            ></div>{" "}
          </Fade>
          <Fade {...animationDirection} delay={textDelay}>
            <div className="roadmap-item-connector" style={connectorStyle}>
              <img
                src="/roadmap/connector.svg"
                style={{ ...connectorStyle, ...connectorImgStyle }}
              />
            </div>
          </Fade>
        </>
      )}
      <Fade {...animationDirection} delay={textDelay}>
        <div className="roadmap-item-title">{title}</div>
        <div
          className="roadmap-item-desc"
          style={descStyle}
          onClick={onDescClick}
        >
          {desc}
        </div>
      </Fade>
      {direction === "up" && (
        <>
          <Fade {...animationDirection} delay={textDelay}>
            <div className="roadmap-item-connector" style={connectorStyle}>
              <img
                src="/roadmap/connector.svg"
                style={{ ...connectorStyle, ...connectorImgStyle }}
              />
            </div>
          </Fade>
          <Fade {...animationDirection} delay={textDelay}>
            <div
              className="roadmap-item-dot"
              style={{ backgroundColor: dotColor }}
            ></div>{" "}
          </Fade>
        </>
      )}
    </div>
  );
};

export default RoadMapItem;
