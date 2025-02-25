import React from "react";
import { ArrowRight, UserPlus } from "lucide-react";
import MainNav from "./Main-nav";

const patients = [
  {
    name: "Yash Singh",
    id: "87365421",
    date: "12/10/2024",
    phone: "9868388583",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    name: "Riya Sharma",
    id: "87376543",
    date: "26/10/2024",
    phone: "8979938966",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "Shreya Gupta",
    id: "98746543",
    date: "1/11/2024",
    phone: "7879938966",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    name: "Veer Jain",
    id: "80846543",
    date: "1/11/2024",
    phone: "9879956678",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
];

const Patients = () => {
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
            <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:bg-green-600 text-white px-4 py-2 flex items-center rounded-lg">
              <UserPlus className="mr-2" size={18} />
              Add new patient
            </button>
          </div>

          {/* Table */}
          <div className="bg-green-200 p-4 rounded-lg overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left text-green-900 font-semibold border-b border-green-400">
                  <th className="py-3 px-4">Name</th>
                  <th className="px-4">ID</th>
                  <th className="px-4">Date Added</th>
                  <th className="px-4">Phone Number</th>
                  <th className="px-4"></th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient, index) => (
                  <tr
                    key={index}
                    className="border-t border-green-400 hover:bg-green-100 transition"
                  >
                    <td className="py-3 px-4 flex items-center space-x-3">
                      <img
                        src={patient.avatar}
                        alt="Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <span>{patient.name}</span>
                    </td>
                    <td className="px-4">{patient.id}</td>
                    <td className="px-4">{patient.date}</td>
                    <td className="px-4">{patient.phone}</td>
                    <td className="px-4 text-center">
                      <button className="text-green-700 hover:text-green-900">
                        <ArrowRight size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
};

export default Patients;
