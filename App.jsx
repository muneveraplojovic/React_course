import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/styledButton/StyledButton";
import StyledHeader from "./components/styledHeader/StyledHeader";
import { useEffect, useState } from "react";

function App() {
  const [innerText, setInnerText] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    clicked ? setInnerText("Clicked") : setInnerText("Click me");
  }, [clicked]);

  function buttonClick() {
    setClicked(!clicked);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyledHeader innerHTML="First React app!" />
        <StyledButton innerText={innerText} onClickHandler={buttonClick} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          HEEEEEEEEEJ
        </a>
      </header>
    </div>
  );
}

export default App;
