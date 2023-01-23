import React, { useState } from "react";
import "./App.css";
import Form from "./components/formValidation/Form";
import CustomDiv from "./components/customDiv/CustomDiv";
//import ToDo from "./components/to do list/ToDo";

const App = () => {
  //const [todos, setTodos] = useState("To do 1");
  const [fullName, setFullName] = useState("");

  function dataGrabber(name, lName) {
    let fullName = name + " " + lName;
    console.log(fullName);
    setFullName(fullName);
  }
  return (
    <div className="App">
      <header className="App-header">
        <CustomDiv>
          <h4>{fullName}</h4>
        </CustomDiv>
        <Form sendData={(name, lastName) => dataGrabber(name, lastName)} />
      </header>
    </div>
  );
};

export default App;
