import React, { useState } from "react";
import "./App.css";
//import Form from "./components/formValidation/Form";
//import CustomDiv from "./components/customDiv/CustomDiv";
//import ToDo from "./components/to do list/ToDo";
import ToDo from "./components/toDo/ToDo";
const App = () => {
  //const [todos, setTodos] = useState("To do 1");
  // const [fullName, setFullName] = useState("");
  const [todo, setTodo] = useState("");

  function dataGrabber(todo) {
    console.log(todo);
    setTodo(todo);
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <CustomDiv>
          <h4>{fullName}</h4>
        </CustomDiv> */}
        {/* <Form sendData={(todo) => dataGrabber(todo)} /> */}
        <ToDo />
      </header>
    </div>
  );
};

export default App;
