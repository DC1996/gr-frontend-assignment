import "./App.css";
import { Header } from "./features/header/Header";
import { Stepper } from "./features/stepper/Stepper";
import dogImage from "./assets/white-dog-masked.png";
import { Footer } from "./features/footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <div className="FormBox">
          <Stepper stepCount={3} />
          <Outlet />
        </div>
        <div className="ImageBox">
          <img
            className="Image"
            src={dogImage}
            alt="White dog licking water"
          ></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
