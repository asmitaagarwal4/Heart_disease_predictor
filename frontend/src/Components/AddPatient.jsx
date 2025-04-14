import { useState } from "react";
import MainNav from "./Main-nav";
import doctorAI from "../assets/doctor.svg";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const AddPatient = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
    prob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("User not authenticated");
      return;
    }

    try {
      const patientResponse = await fetch("http://127.0.0.1:5000/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const patientResult = await patientResponse.json();
      console.log(patientResult);

      if (patientResponse.ok) {
        notifyAdd();
        navigate("/patients");
      } else {
        alert(`Error: ${patientResult.message}`);
      }
    } catch (error) {
      alert("Something went wrong!");
      console.error(error);
    }
  };

  const notifyAdd = () => toast('Patient added successfully', {duration: 1000});

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 to-emerald-500 text-white">
      {/* Navbar */}
      <header className="py-4">
        <div className="container mx-auto px-4">
          <MainNav />
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Form */}
        <div className="bg-white rounded-xl shadow-2xl p-8 text-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-center text-emerald-600">
            Add Patient Details
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {Object.keys(formData).map((key) => (
              <div key={key}>
                <label className="block text-sm font-medium capitalize text-emerald-700">{key}</label>
                <input
                  type="text"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  required
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition cursor-pointer"
            >
              Add Patient
            </button>
          </form>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center items-center">
          <img
            src={doctorAI}
            alt="AI Doctor Illustration"
            className="max-h-[500px] w-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
