import React from "react";
import './App.css'
import Page from './Components/Page';
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Signin from './Components/Signin';
import Signup from './Components/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

