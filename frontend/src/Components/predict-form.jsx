import { useState } from "react";
import MainNav from "./Main-nav";
import doctorAI from "../assets/image.png";
import toast, { Toaster } from 'react-hot-toast';

const PredictForm = () => {
  const [formData, setFormData] = useState({
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
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    // toast(`Prediction : ${result.prediction}`, { duration: 5000 });
    toast(`Prediction: ${result.prediction}`, {
      duration: 7000,
      // position: "bottom-right",
      style: {
        background: "#10b981", // emerald-500
        color: "#fff",
        fontWeight: "bold",
        fontSize: "20px",
        borderRadius: "8px",
        padding: "12px 20px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      },
    });
    

  };

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
            Heart Disease Prediction
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
              Predict
            </button>
          </form>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center items-center">
          <img
            src={doctorAI}
            alt="AI Medical Team"
            className="max-h-[500px] w-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default PredictForm;
