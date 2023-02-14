import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre"
// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate
} from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from 'react-bootstrap';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <Preloader load={load}/>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>

    </Router>
    
      
  );
}

export default App;