import "./App.css";
import Form from "./components/formValidation/Form";
//import logo from "./logo.svg";
// import StyledButton from "./components/styledButton/StyledButton";
// import StyledHeader from "./components/styledHeader/StyledHeader";
//import StyledInput from "./components/styledInput/StyledInput";

const App = () => {
  // const [innerText, setInnerText] = useState("");
  // const [clicked, setClicked] = useState(false);
  // const [inputValue, setInputValue] = useState("");
  // const [name, setName] = useState("");

  //clicked i innerText su kao varijable, dok su setInnerText i setClicked funkcije koje menjaju varijable

  // useEffect(() => {
  //   clicked ? setInnerText("Clicked") : setInnerText("Click me");
  // }, [clicked]);

  // function buttonClick() {
  //   setClicked(!clicked);
  // }
  // function onChangeFunction(event) {
  //   setInputValue(event.target.value);
  //   console.log(event.target.value);
  // }
  // function inputChangeFunction(event) {
  //   setName(event.target.value);
  //   console.log(name.value);
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <StyledHeader innerHTML="First React app!" />
        <StyledButton innerText={innerText} onClickHandler={buttonClick} />
        <StyledInput onChangeHandler={onChangeFunction} value={inputValue} />
        <Form inputChange={inputChangeFunction} value={name} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          HEEEEEEEEEJ
        </a> */}
        <Form />
      </header>
    </div>
  );
};

export default App;
