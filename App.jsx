import React, { useState } from "react";
import "./App.css";
import Form from "./components/formValidation/Form";
import ToDo from "./components/to do list/ToDo";

const App = () => {
  const [todos, setTodos] = useState("To do 1");

  return (
    
      <div className="App">
        <header className="App-header">
          <Form />
        </header>
        <ToDo todos={todos}/>
        <div className='toDo'>
        <input type="text" placeholder='Todo...' />
        <button className='addToDo'>Add Todo</button>
        <button className='clearToDo'>Clear</button>
        <div>0 left to do</div>
        </div>
      </div>
    
  );
};

export default App;
