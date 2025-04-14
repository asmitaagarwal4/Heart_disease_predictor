import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Page from "./Components/Page";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Patients from "./Components/Patients";
import PredictForm from "./Components/predict-form";
import ProtectedRoute from "./Components/ContextAPI/ProtectedRoute";
import AddPatient from "./Components/AddPatient";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Page />} />

        <Route element={<ProtectedRoute />}>
            <Route path="/patients" element={<Patients />} />
            <Route path="/predict" element={<PredictForm />} />
            <Route path="/addpatient" element={<AddPatient />} />
        </Route>

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutUs />} />
        
      </Routes>
  );
}

export default App;
