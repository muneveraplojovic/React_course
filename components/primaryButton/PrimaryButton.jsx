import React from "react";
import styled from "styled-components";

const PrimaryButton = styled.button`
  border: 1px solid white;
  background-color: ${(props) => (props.primary ? "blue" : "white")};
  border-radius: 10px;
  padding: 10px 20px;
  color: ${(props) => (props.primary ? "white" : "blue")};
  opacity: ${(props) => (props.opacity? props.opacity : 1)};
  margin-bottom: 10px;

`;

export default PrimaryButton;
