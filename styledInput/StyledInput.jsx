import React from "react";
import "./StyledInput.css";

const StyledInput = (props) => {
  return <input placeholder="Todo..." id="input" onChange={props.onChangeHandler} value={props.value} />;
};

export default StyledInput;