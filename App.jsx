import React from "react";
import "./App.css";
import Gridmui from "./components/Grid/Gridmui";
import PrimaryButton from "./components/primary/PrimaryButton";
import StyledButton from "./components/styledButton/StyledButton";

//import Form from "./components/formValidation/Form";
//import CustomDiv from "./components/customDiv/CustomDiv";
//import ToDo from "./components/to do list/ToDo";
//import ToDo from "./components/toDo/ToDo";
//import CustomDiv from "./components/customDiv/CustomDiv";
const App = () => {
  //const [todos, setTodos] = useState("To do 1");
  // const [fullName, setFullName] = useState("");
  // const [todo, setTodo] = useState("");

  // function dataGrabber(todo) {
  //   console.log(todo);
  //   setTodo(todo);
  // }
  return (
    <div className="App">
      <header className="App-header">
        {/* <CustomDiv>
          <h4>{fullName}</h4>
        </CustomDiv> */}
        {/* <Form sendData={(todo) => dataGrabber(todo)} /> */}
        {/* <ToDo />
          <Gridmui />
        <CustomDiv><p>HAHA</p></CustomDiv> */}
                <PrimaryButton>Primary button</PrimaryButton>
                <StyledButton innerText="Styled" />
                <StyledButton innerText=" Halaluja" />
        
      </header>
    </div>
  );
};

export default App;
