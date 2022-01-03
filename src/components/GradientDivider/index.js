import React from "react";
import "./index.css";

function GradientDivider({ maxWidth }) {
  return (
    <hr className="gradient-divider" style={{ maxWidth: maxWidth || 600 }} />
  );
}

export default GradientDivider;
