import React, { useState } from "react";
import StyledButton from "../styledButton/StyledButton";
import StyledInput from "../styledInput/StyledInput";
import "./Form.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  function nameHandler(e) {
    setName(e.target.value);
  }
  function lastNameHandler(e) {
    setLastName(e.target.value);
  }

  //console.log(StyledInput.value);

  return (
    <div className="inputs">
      <StyledInput onChangeHandler={nameHandler} value={name} />
      <StyledInput onChangeHandler={lastNameHandler} value={lastName} />
      <StyledButton
        onClickHandler={() => props.sendData(name, lastName)}
        innerText="Send"
      />
    </div>
  );
};

export default Form;
