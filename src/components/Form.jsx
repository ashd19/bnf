import React, { useState } from "react";
import toast from "react-hot-toast";

function Form({ setShowForm }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fix the errors in the form.");
      return;
    }
    console.log("Form submitted:", formData);
    toast.success("You've successfully joined the waitlist!");
  };

  return (
    <div id="form" className="w-full relative flex items-center justify-center">
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl font-bold"
      >
        ×
      </button>
      <div className="w-full bg-linear-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-orange-200">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 roboto">
          Claim Your Spot
        </h2>
        <p className="text-gray-600 mb-8 text-sm">
          Join thousands of traders getting exclusive access.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`w-full px-4 py-3 rounded-2xl border-2 focus:outline-none bg-white text-black placeholder-gray-500 transition duration-200 ${
                errors.name
                  ? "border-red-500 focus:border-red-600"
                  : "border-orange-300 focus:border-orange-500"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={`w-full px-4 py-3 rounded-2xl border-2 focus:outline-none bg-white text-black placeholder-gray-500 transition duration-200 ${
                errors.phone
                  ? "border-red-500 focus:border-red-600"
                  : "border-orange-300 focus:border-orange-500"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full px-4 py-3 rounded-2xl border-2 focus:outline-none bg-white text-black placeholder-gray-500 transition duration-200 ${
                errors.email
                  ? "border-red-500 focus:border-red-600"
                  : "border-orange-300 focus:border-orange-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 bg-linear-to-r from-orange-400 via-orange-500 to-yellow-400 text-white font-bold text-lg rounded-2xl hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Join the waitlist
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
