import React from "react";

const CustomDiv = ({ children, width, height, borderRadius, border }) => {
  const divWidth = width ? width : 100;
  const divHeight = height ? height : 100;
  const divBr = borderRadius ? borderRadius : 0;
  const divBorder = border ? border : "1px solid black";

  return (
    <div
      style={{
        width: divWidth,
        height: divHeight,
        border: divBorder,
        borderRadius: divBr,
      }}
    >
      {children}
    </div>
  );
};

export default CustomDiv;
