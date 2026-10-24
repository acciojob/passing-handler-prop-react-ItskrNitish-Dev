import React, { useState } from "react";

const Selection = ({ applyColor }) => {
  const [selectionStyle, setSelectionStyle] = useState({
    background: "",
  });

  const handleClick = () => {
    applyColor((selectedColor) => {
      setSelectionStyle({
        background: selectedColor.background,
      });
    });
  };

  return (
    <div
      className="fix-box"
      style={{ backgroundColor: selectionStyle.background }}
      onClick={handleClick}
    ></div>
  );
};

export default Selection;
