import React from "react";
import styled from "styled-components";

const PrimaryDiv = styled.div`
  width: ${(props) => (props.width < 100 ? "200px" : props.width)};
  height: ${(props) => (props.height < 50 ? "100px" : props.height)};
  background-color: ${(props) => (props.color ? "gray" : "white")};
  border: 1px solid white;
  border-radius: 12px;
`;
export default PrimaryDiv;
