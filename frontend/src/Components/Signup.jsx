import { useState } from "react";
import doctor from "../assets/image.png";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-semibold">HeartCare AI</h1>
      </div>

      <div className="min-h-screen w-full flex">
        {/* Left Section */}
        <div className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <div className="max-w-md mx-auto">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">Sign up</h2>
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label className="text-sm text-gray-600">Your Name</label>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="border p-2 w-full rounded"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label className="text-sm text-gray-600">Date of Birth</label>
                  </div>
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    className="border p-2 w-full rounded"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label className="text-sm text-gray-600">Email</label>
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border p-2 w-full border-emerald-500 rounded"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label className="text-sm text-gray-600">Password</label>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="border p-2 w-full rounded"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2.5 text-sm"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
              </div>
              <button className="w-full bg-emerald-500 text-white p-2 rounded">
                Sign up
              </button>
              <div className="relative flex items-center gap-2 py-2">
                <span className="border-t flex-grow"></span>
                <span className="text-xs uppercase bg-white">or</span>
                <span className="border-t flex-grow"></span>
              </div>
              <button className="w-full border p-2 flex justify-center items-center rounded">
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Continue with Google
              </button>
              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <a href="#" className="text-emerald-500 underline">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl relative">
          <img
            src={doctor}
            alt="Doctor"
            className="absolute bottom-0 right-4 max-h-[80%] object-contain"
          />
        </div>
      </div>
    </>
  );
}
