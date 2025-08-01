import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="w-4/5 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
