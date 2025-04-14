import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import MainNav from "./Main-nav";
import doctor from "../assets/image.png";
import { useNavigate } from "react-router-dom";

export function AboutUs() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-400 to-emerald-500 text-white">
      <MainNav />

      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold tracking-tight leading-tight">
              About HeartCare AI
            </h2>
            <p className="text-emerald-50 text-lg">
              HeartCare AI was founded with a mission to revolutionize cardiac care by integrating AI with modern healthcare practices. Our team of developers, data scientists, and medical advisors have worked together to bring advanced predictive tools to doctors’ fingertips.
            </p>
            <p className="text-emerald-50 text-lg">
              We’re not just building software – we’re building trust. Our app empowers medical professionals to make quicker, more accurate decisions while keeping patient data secure and organized.
            </p>
            <Button
            onClick={() => navigate("/team")}
              size="lg"
              variant="secondary"
              className="bg-white text-emerald-600 hover:bg-emerald-50 transition duration-300 cursor-pointer"
            >
              Meet the Team
            </Button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center"
          >
            <img
              src={doctor}
              alt="AI medical professionals"
              className="max-h-[400px] object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
