import React from "react";
import "./App.css";
import Navigation from "./Templates/Navigation/Navigation";
import Slider from "./Templates/Slider/Slider";
import ProductHomePage from "./Templates/ProductHomePage/ProductHomePage";
//import SliderText from "./components/SliderText/SliderText";

import "./assets/fonts/Lato-Black.ttf";
import "./assets/fonts/Lato-BlackItalic.ttf";
import "./assets/fonts/Lato-Bold.ttf";
import "./assets/fonts/Lato-BoldItalic.ttf";
import "./assets/fonts/Lato-Italic.ttf";
import "./assets/fonts/Lato-Light.ttf";
import "./assets/fonts/Lato-LightItalic.ttf";
import "./assets/fonts/Lato-Regular.ttf";
import "./assets/fonts/Lato-Thin.ttf";
import "./assets/fonts/Lato-ThinItalic.ttf";
import "./assets/fonts/Montserrat-Black.ttf";
import "./assets/fonts/Montserrat-BlackItalic.ttf";
import "./assets/fonts/Montserrat-Bold.ttf";
import "./assets/fonts/Montserrat-BoldItalic.ttf";
import "./assets/fonts/Montserrat-ExtraBold.ttf";
import "./assets/fonts/Montserrat-ExtraLight.ttf";

const App = () => {
  return (
    <>
      <Navigation />
      {/* <SliderText/> */}
      <Slider />
      <ProductHomePage />
    </> 
  );
};

export default App;

// nesto treba kontkrnp das eradi samo sto ne znam statusbar

// fibonacijev niz i menjanje elemenata
// maksimalni i minimalni uporedjivanje brojeva + suma tih brojeva
