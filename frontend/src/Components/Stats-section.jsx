import React from "react";
import AnimatedStat from "./Animated-stats"; 

const stats = [
  { label: "Doctors", value: "70+" },
  { label: "Accuracy", value: "80%" },
  { label: "Patients registered", value: "1000+" },
  { label: "Doctors", value: "70+" },
];

function StatsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="text-emerald-800 space-y-6">
            <h2 className="text-2xl font-medium">
              HeartCare AI is more than just a prediction tool—it's a comprehensive platform built to enhance patient
              care and support clinical decision-making.
            </h2>
            <p className="text-emerald-700">
              By leveraging advanced machine learning algorithms, the app delivers accurate insights tailored to each
              patient's unique profile.
            </p>
            <p className="text-emerald-700">
              In addition to predictive analysis, the platform simplifies patient management with an intuitive interface
              for accessing and updating medical histories. Designed with healthcare professionals in mind, HeartCare AI
              aims to improve diagnostic precision, and ultimately contribute to better patient outcomes.
            </p>
          </div>
          {/* Right Stats Section */}
          <div className="bg-emerald-500 p-8 rounded-lg text-white">
            <div className="grid gap-8">
              {stats.map((stat, index) => (
                <AnimatedStat key={index} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;

