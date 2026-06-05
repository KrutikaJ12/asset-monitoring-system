import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "../assets/algo-logo.png";
import bgImage from "../assets/backgroundImage.jpeg";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Login Success", formData);
      alert("Login Successful");
    }
  };




  

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section - 75% */}
     <div
  className="relative hidden lg:flex lg:w-[65%] items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        
       

      

        {/* Content */}
        <div className="relative z-10 text-center px-10">
          <div className="w-70 h-50 mx-auto mb-8 overflow-hidden">
            <img
              src={logo}
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl font-bold text-gray-600 drop-shadow-lg">
            Asset Monitoring System
          </h1>

          <p className="mt-4 text-xl text-gray-600">
            Track, Monitor & Manage Assets Efficiently
          </p>
        </div>
      </div>

      {/* Right Section - 25% */}
      <div className="w-full lg:w-[35%] flex items-center justify-center bg-slate-50 p-8">
        <div className="w-full max-w-md">
          <h2 className="text-center text-4xl font-bold text-slate-800">
            Welcome Back
          </h2>

          <p className="text-center text-slate-500 mt-2 mb-8">
            Sign in to continue
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-5">
              <label className="block text-slate-700 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className={`w-full h-12 px-4 rounded-lg border outline-none transition-all ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300 focus:border-red-500"
                }`}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="block text-slate-700 mb-2">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  className={`w-full h-12 px-4 rounded-lg border outline-none transition-all ${
                    errors.password
                      ? "border-red-500"
                      : "border-gray-300 focus:border-red-500"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                Remember Me
              </label>

              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-800"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-12 rounded-lg text-black font-semibold bg-red-700 transition-all duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-center text-slate-500 mt-8 text-sm">
            © 2026 Asset Monitoring System
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;