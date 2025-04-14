import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainNav from "./Main-nav";
import { ArrowLeft } from "lucide-react";

const PatientDetails = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://127.0.0.1:5000/patients/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Patient not found");
        const data = await response.json();
        setPatient(data);
      } catch (error) {
        console.error("Error:", error);
        navigate("/patients");
      } finally {
        setLoading(false);
      }
    };

    fetchPatient();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gradient-to-r from-emerald-400 to-emerald-500">
        <MainNav />
      </div>

      <div className="min-h-screen bg-green-100 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <button 
            onClick={() => navigate(-1)}
            className="mb-4 text-emerald-600 hover:text-emerald-700 flex items-center"
          >
            <ArrowLeft className="mr-1" size={20} />
            Back to Patients
          </button>

          <h2 className="text-3xl font-bold text-emerald-600 mb-6">{patient.name}'s Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DetailItem label="Patient ID" value={patient._id} />
            <DetailItem label="Doctor ID" value={patient.doctor_id} />
            <DetailItem label="Age" value={patient.age} />
            <DetailItem label="Gender" value={patient.sex === "1" ? "Male" : "Female"} />
            <DetailItem label="Chest Pain Type" value={patient.cp} />
            <DetailItem label="Resting Blood Pressure" value={`${patient.trestbps} mmHg`} />
            <DetailItem label="Cholesterol" value={`${patient.chol} mg/dl`} />
            <DetailItem label="Fasting Blood Sugar" value={patient.fbs === "1" ? "> 120 mg/dl" : "≤ 120 mg/dl"} />
            <DetailItem label="Resting ECG" value={patient.restecg} />
            <DetailItem label="Max Heart Rate" value={patient.thalach} />
            <DetailItem label="Exercise Induced Angina" value={patient.exang === "1" ? "Yes" : "No"} />
            <DetailItem label="ST Depression" value={patient.oldpeak} />
            <DetailItem label="Slope" value={patient.slope} />
            <DetailItem label="Major Vessels" value={patient.ca} />
            <DetailItem label="Phone" value={patient.phone} />
            <DetailItem label="Risk Probability" value={`${patient.prob * 100}%`} />
          </div>
        </div>
      </div>
    </>
  );
};

const DetailItem = ({ label, value }) => (
  <div className="bg-green-50 p-4 rounded-lg">
    <p className="text-sm text-green-600 font-semibold">{label}</p>
    <p className="text-lg text-green-900 mt-1">{value}</p>
  </div>
);

export default PatientDetails;
