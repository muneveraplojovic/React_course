import React from "react";
import "./styledButton.css";
import PrimaryButton from "../primary/PrimaryButton";

const StyledButton = (props) => {
  return (
    <PrimaryButton onClick={props.onClickHandler}>{props.innerText}</PrimaryButton>
  );
};

export default StyledButton;