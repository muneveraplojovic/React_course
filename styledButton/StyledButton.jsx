import React from "react";
import "./styledButton.css";

const StyledButton = (props) => {
  return (
    <button className='styledButton' type="button" class="btn btn-primary" onClick={props.onClickHandler}> Add To</button>
  );
};

export default StyledButton;