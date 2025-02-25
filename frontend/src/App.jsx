import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Page from "./Components/Page";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  );
}

export default App;
