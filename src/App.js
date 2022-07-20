 import Menubar from "./components/Menubar";
 import Overlay from "./components/Overlay";
 import Hamburgermenu from "./components/Hamburgermenu";
 import Teaser from "./components/Teaser";
 import {useSelector } from "react-redux";

 function App() {
  const showHamburger = useSelector((state) => state.hamburger.showHamburger); //automatically manages subscription
  return (
    <div>
      <Menubar/>
      {showHamburger && <Overlay/>}
      {showHamburger && <Hamburgermenu/>}
      <Teaser/>
      {/* description */}
      {/* pricing */}
      {/* amount of product */}
      {/* add to cart button */}
      {/* attribution */}
    </div>
  );
}

export default App;
