import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import SideCart from "./components/SideCart/SideCart";
import Home from "./components/Home/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const [count, setCount] = useState(0);
  const [watchTime, setWatchTime] = useState("");

  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    // second time set the watch time in local storage
    if (previousWatchTime) {
      const totalTime = previousWatchTime + time;
      //set the watch time in local storage
      localStorage.setItem("watchTime", totalTime);
      setWatchTime(totalTime);
    } else {
      // first time set the watch time in local storage
      localStorage.setItem("watchTime", time);
      setWatchTime(time);
    }
  };
  return (
    <div>
      <div className="header  m-auto mb-3 ">
        <Header></Header>
      </div>
      <div className="main row">
        <div className="home-container col-md-8">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="sideCart col-md-4 card">
          <SideCart watchTime={watchTime}></SideCart>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
