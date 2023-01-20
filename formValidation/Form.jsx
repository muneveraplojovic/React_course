import React, { useState } from "react";
import StyledButton from "./components/styledButton/StyledButton.jsx";
import StyledInput from "./components/styledInput/StyledInput.jsx";

const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  function nameHandler(e) {
    setName(e.target.value);
  }
  function lastNameHandler(e) {
    setLastName(e.target.value);
  }

  return (
    <div>
      <StyledInput onChangeHandler={nameHandler} value={name} />
      <StyledInput onChangeHandler={lastNameHandler} value={lastName} />
      <StyledButton innerText="Send" />
    </div>
  );
};

export default Form;
