import React, { useEffect, useState } from "react";
import { ArrowRight, UserPlus } from "lucide-react";
import MainNav from "./Main-nav";
import { useNavigate } from "react-router-dom";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://127.0.0.1:5000/patients", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch patients");
        }

        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      } finally {
        setLoading(false); // 👈 Done loading
      }
    };

    fetchPatients();
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <div className="bg-gradient-to-r from-emerald-400 to-emerald-500">
        <MainNav />
      </div>

      {/* Patients List Section */}
      <div className="min-h-screen bg-green-100 flex flex-col items-center px-6 py-8">
        <div className="mt-8 bg-gradient-to-r from-emerald-400 to-emerald-500 w-full rounded-xl p-6 shadow-lg">
          {/* Header */}
          <div className="flex justify-between items-center mb-4 px-4">
            <h2 className="text-xl font-bold text-green-900">Patients List</h2>
            <button
              onClick={() => navigate("/addpatient")}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:bg-green-600 text-white px-4 py-2 flex items-center rounded-lg cursor-pointer hover:shadow-lg transition duration-300"
            >
              <UserPlus className="mr-2" size={18} />
              Add new patient
            </button>
          </div>

          {/* Loading Spinner */}
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-10 h-10 border-4 border-white border-t-emerald-600 rounded-full animate-spin"></div>
                <p className="text-white text-sm">Loading patients...</p>
              </div>
            </div>
          ) : (
            <div className="bg-green-200 p-4 rounded-lg overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left text-green-900 font-semibold border-b border-green-400">
                    <th className="py-3 px-4">Name</th>
                    <th className="px-4">ID</th>
                    <th className="px-4">Phone Number</th>
                    <th className="px-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient, index) => (
                    <tr
                      key={patient._id || index}
                      className="border-t border-green-400 hover:bg-green-100 transition"
                    >
                      <td className="py-3 px-4 flex items-center space-x-3">
                        <img
                          src={`https://i.pravatar.cc/40?img=${index + 1}`}
                          alt="Avatar"
                          className="w-8 h-8 rounded-full"
                        />
                        <span>{patient.name}</span>
                      </td>
                      <td className="px-4">{patient._id}</td>
                      <td className="px-4">{patient.phone}</td>
                      <td className="px-4 text-center">
                        <button 
                        onClick={() => navigate(`/patient/${patient._id}`)}
                        className="text-green-700 hover:text-green-900">
                          <ArrowRight size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {patients.length === 0 && (
                    <tr>
                      <td colSpan="4" className="text-center text-green-700 py-4">
                        No patients found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Patients;
