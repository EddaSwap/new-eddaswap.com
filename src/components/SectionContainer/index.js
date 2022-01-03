import React from "react";

const BackgroundWrapper = ({ customBgClass, children }) =>
  customBgClass ? <div className={customBgClass}>{children}</div> : children;

function SectionContainer({
  children,
  customBgClass,
  containerClass,
  containerStyle = {},
}) {
  return (
    <BackgroundWrapper customBgClass={customBgClass}>
      <div
        style={{ maxWidth: 1440, margin: "0 auto", ...containerStyle }}
        className={containerClass}
      >
        {children}
      </div>
    </BackgroundWrapper>
  );
}

export default SectionContainer;
