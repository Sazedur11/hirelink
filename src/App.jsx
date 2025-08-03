import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import bg2 from './assets/images/bg2.png'

function App() {
  return (
    <>
      <div className=" bg-auto bg-no-repeat bg-right-top" style={{ backgroundImage: `url(${bg2})` }}>
        <div className="">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </div>
      <div className="bg-base-200">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
