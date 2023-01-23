import React from "react";
import "./ToDo.css";

const ToDo = (todos) => {
  console.log(todos.length);
  return (
    
      <div>{todos.length}</div>
      );
};

export default ToDo;
