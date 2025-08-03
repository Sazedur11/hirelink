import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="w-4/5 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
    <div className="bg-base-200">
      <Footer></Footer>
    </div>
    </>
    
  );
}

export default App;
