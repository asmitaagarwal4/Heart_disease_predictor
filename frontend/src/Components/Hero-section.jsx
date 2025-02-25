import React from "react";
import { Button } from "@/Components/ui/button";
import HomePageImg from "../assets/homeimg.png";
export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-400 to-emerald-500 overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-3xl md:text-4xl font-medium leading-tight">
              HeartCare AI is a cutting-edge tool designed to assist doctors in making informed decisions about heart
              disease.
            </h1>
            <p className="text-emerald-50 text-lg">
              With our powerful machine learning model, you can input patient-specific parameters to instantly receive a
              probability assessment of heart disease. The app also provides a centralized platform for managing patient
              history, enabling you to track and analyze past records effortlessly.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-emerald-50">
              Know more
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] flex justify-center items-center">
            <img
              src={HomePageImg}

              alt="Medical professionals with AI interface"
              className="h-full object-contain opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
