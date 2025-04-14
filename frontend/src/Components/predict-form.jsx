import { useState } from "react";
import MainNav from "./Main-nav";

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
    alert(`Prediction: ${result.prediction}`);
  };

  return (
    <div className="min-h-screen bg-emerald-50">
    <header className="bg-gradient-to-r from-emerald-400 to-emerald-500">
    <div className="container mx-auto px-4">
      <div className="h-16">
        <MainNav />
      </div>
    </div>
  </header>
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4 text-center">Heart Disease Prediction</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label className="block text-sm font-medium capitalize">{key}</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700"
        >
          Predict
        </button>
      </form>
    </div>
    </div>
  );
};

export default PredictForm;
