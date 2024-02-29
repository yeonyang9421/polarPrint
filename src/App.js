import React, {useState} from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";

const App = () => {
  
  return (
    <BrowserRouter>
      <React.Fragment>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );

};

export default App;
