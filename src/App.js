import Menubar from "./components/Menubar";
import Overlay from "./components/Overlay";
import Hamburgermenu from "./components/Hamburgermenu";
import Teaser from "./components/Teaser";
import Description from "./components/Description";
import Pricing from "./components/Pricing";
import ProductAmount from "./components/ProductAmount";
import Button from "./components/Button";

import { useSelector } from "react-redux";

function App() {
  const showHamburger = useSelector((state) => state.hamburger.showHamburger);

  // making no-scroll when hamburger menu is open
  if(showHamburger){
    document.body.style.overflow = 'hidden';
  }else{
    document.body.style.overflow = 'scroll';
  }

  return (
    <div>
      <Menubar />
      {showHamburger && <Overlay />}
      {showHamburger && <Hamburgermenu />}
      <Teaser />
      <main style={{padding: "1.5rem"}}>
        <Description/>
        <Pricing/>
        <ProductAmount/>
        <Button/>
        {/* attribution */}
      </main>
    </div>
  );
}

export default App;
