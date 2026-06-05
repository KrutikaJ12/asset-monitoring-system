import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "../assets/algo-logo.png";
import bgImage from "../assets/backgroundImage.jpeg";
import { Eye,EyeOff } from 'lucide-react';
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
     <div className="flex flex-1 flex-col justify-center bg-white p-10 sm:p-11">
            <div className="mb-8">
              {/* <div className="mb-1.5 text-[11px] uppercase tracking-[0.15em] text-black/30">
                Operator access
              </div> */}
              <h1 className="text-[22px] font-bold text-[#0a0f1a]">
                Sign in to continue
              </h1>
            </div>
           <form onSubmit={handleSubmit}>
  <div className="mb-4.5">
    <label className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-gray-800">
      Email
    </label>

    <input
      type="text"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="id@company.com"
      className={`w-full rounded-lg border bg-neutral-50 px-3.5 py-2.5 text-[13px] outline-none ${
        errors.email
          ? "border-red-500"
          : "border-black/15 focus:border-[#e53935]"
      }`}
    />

    {errors.email && (
      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
    )}
  </div>

  <div className="mb-4.5">
  <label className="mb-2 block text-[11px] font-bold uppercase tracking-widest text-gray-800">
    Password
  </label>

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      name="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="••••••••••"
      className={`w-full rounded-lg border bg-neutral-50 px-3.5 py-2.5 pr-10 text-[13px] outline-none ${
        errors.password
          ? "border-red-500"
          : "border-black/15 focus:border-[#e53935]"
      }`}
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
    >
      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
    </button>
  </div>

  {errors.password && (
    <p className="mt-1 text-xs text-red-500">{errors.password}</p>
  )}
</div>

<button
  type="submit"
  className="mt-6 flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#e53935] px-4 py-3 text-[14px] font-semibold tracking-[0.06em] text-white transition-all hover:-translate-y-px hover:opacity-90 active:scale-[0.99]"
>
  Sign In
</button>
</form>
          </div>
    </div>
  );
}

export default Login;