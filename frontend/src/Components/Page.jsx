import React from "react";
import MainNav from "./Main-nav";
import HeroSection from "./Hero-section";
import StatsSection from "./Stats-section";
import { Button } from "./ui/button";
import { Link } from "react-router-dom"; // If using React Router, else replace with a plain `<a>` tag

export default function Page() {
  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-400 to-emerald-500">
        <div className="container mx-auto px-4">
          <div className="h-16">
            <MainNav />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Footer */}
      <footer className="bg-gradient-to-b from-emerald-400 to-emerald-500 py-12">
        <div className="container mx-auto px-2 flex">
          <Button variant="link" className="text-white hover:text-emerald-100">
            <Link to="#">Contact us</Link>
          </Button>
        </div>
      </footer>
    </div>
  );
}
