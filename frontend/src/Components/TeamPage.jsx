import React from "react";
import MainNav from "./Main-nav";
import tejashwi from "../assets/Tejashwi.jpeg";
import neha from "../assets/Neha.jpeg";
import rakshita from "../assets/Rakshita.jpeg";
import rishita from "../assets/Rishita.jpeg";
import rudriya from "../assets/Rudriya.jpeg";
import asmita from "../assets/Asmita.jpeg";
import riti from "../assets/Riti.jpeg";
import anshuman from "../assets/Anshuman.jpeg";
import yadubir from "../assets/Yadubir.jpeg";


const team = [
  { name: "Tejashvi Raj", role: "Research Work and Deployment", image: tejashwi },
  { name: "Neha Kohli", role: "ML Model Development", image: neha },
  { name: "Rakshita Sharma", role: "Frontend Development and Designing", image: rakshita },
  { name: "Rishita Priyadarshini Saraf", role: "ML model Development", image: rishita },
  { name: "Rudriya Bansal", role: "Research Work and Deployment", image: rudriya },
  { name: "Asmita Agarwal", role: "ML model Development and Backend", image: asmita },
  { name: "Riti Sinha", role: "Frontend Development and Designing", image: riti },
  { name: "Anshuman Singh", role: "Backend and APIs Development", image: anshuman },
  { name: "Yadubir Jha", role: "Frontend Development and Designing", image: yadubir },
];

const TeamPage = () => {
  return (
      <div className="min-h-screen bg-emerald-400 text-green-800">
        <MainNav />
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-10 text-emerald-700 text-center">
          About Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-emerald-100 p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center text-emerald-700">
                {member.name}
              </h3>
              <p className="text-sm text-center italic text-emerald-500 mt-2">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
