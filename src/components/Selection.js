import React, { useState } from "react";

const Selection = ({ applyColor }) => {
  const [selectionStyle, setSelectionStyle] = useState({
    background: "#ffffff",
  });

  const handleClick = () => {
    applyColor(setSelectionStyle);
  };

  return (
    <div
      className="fix-box"
      style={{ backgroundColor: selectionStyle.background }}
      onClick={handleClick} >
    </div>
  );
};

export default Selection;
