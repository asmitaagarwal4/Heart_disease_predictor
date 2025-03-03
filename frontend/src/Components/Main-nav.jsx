import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import toast, { Toaster } from 'react-hot-toast';

const navigation = [
  { name: "Visualisations", href: "#" },
  { name: "Predictor", href: "/predict" },
  { name: "Patients", href: "/patients" },
  { name: "About us", href: "#" },
];

export function MainNav() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [loggedIn, setLoggedIn] = useState(!!token);

  const notifyLogout = () => toast('Logout successful', {duration: 1000});

  const logoutHandler = () => {
    localStorage.removeItem("token");
    notifyLogout();
    setLoggedIn(false);
    navigate("/signin");
  };

  return (
    <div className="flex items-center justify-between w-full p-3">
      <Toaster />
      <Link to="/" className="text-2xl font-semibold text-white">
        HeartCare AI
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-white hover:text-emerald-100 transition-colors"
          >
            {item.name}
          </a>
        ))}
        {!loggedIn ? (
          <>
            <button
              onClick={() => navigate("/signup")}
              className="text-white hover:text-emerald-100 hover:bg-emerald-500/20 px-4 py-2 rounded cursor-pointer"
            >
              Sign up
            </button>
            <button
              onClick={() => navigate("/signin")}
              className="text-white hover:text-emerald-100 border border-white hover:bg-emerald-500/20 px-4 py-2 rounded cursor-pointer"
            >
              Sign in
            </button>
          </>
        ) : (
          <button
            onClick={logoutHandler}
            className="text-white hover:text-emerald-100 border border-white hover:bg-emerald-800/20 px-4 py-2 rounded cursor-pointer"
          >
            Logout
          </button>
        )}
      </nav>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild>
          <button className="md:hidden text-white p-2">
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="p-4">
          <nav className="flex flex-col space-y-4 mt-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium hover:text-emerald-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
            {!loggedIn ? (
              <>
                <button
                  onClick={() => navigate("/signup")}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded"
                >
                  Sign up
                </button>
                <button
                  onClick={() => navigate("/signin")}
                  className="w-full border border-gray-300 text-gray-700 hover:bg-gray-100 py-2 rounded"
                >
                  Sign in
                </button>
              </>
            ) : (
              <button
                onClick={logoutHandler}
                className="w-full border border-red-500 text-red-500 hover:bg-red-500/20 py-2 rounded"
              >
                Logout
              </button>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MainNav;
