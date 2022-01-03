import React from "react";

const Card = ({ image, title, description, link, imgStyle }) => {
  return (
    <div
      onClick={() => {
        window.open(link);
      }}
      className="inthepress-card"
      style={{ marginRight: "24px" }}
    >
      <div className="inthepress-image">
        <img src={image} alt="" style={imgStyle} />
      </div>
      <div className="inthepress-content">
        <div className="inthepress-title">{title}</div>
        <div className="inthepress-description">{description}</div>
      </div>
    </div>
  );
};

export default Card;
