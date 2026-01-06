"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) newErrors[key] = "Input required";
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSuccess("Your message has been sent successfully!");

    setTimeout(() => {
      setFormData({
        name: "",
        age: "",
        weight: "",
        email: "",
        phone: "",
        address: "",
      });
    }, 50);
  };

  return (
    <section className="relative py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Join Our Gym Today
        </h2>
        <p className="text-gray-300 text-center mb-12">
          Fill out the form below and our team will get back to you to start your fitness journey.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6 bg-gray-800 p-10 rounded-2xl shadow-lg">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-white font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`px-4 py-3 rounded-lg bg-gray-700 border ${
                errors.name ? "border-red-500" : "border-gray-600"
              } text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition`}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>

          {/* Age */}
          <div className="flex flex-col">
            <label className="text-white font-medium mb-2">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Your Age"
              className={`px-4 py-3 rounded-lg bg-gray-700 border ${
                errors.age ? "border-red-500" : "border-gray-600"
              } text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition`}
            />
            {errors.age && <span className="text-red-500 text-sm">{errors.age}</span>}
          </div>

          {/* Weight */}
          <div className="flex flex-col">
            <label className="text-white font-medium mb-2">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Your Weight in kg"
              className={`px-4 py-3 rounded-lg bg-gray-700 border ${
                errors.weight ? "border-red-500" : "border-gray-600"
              } text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition`}
            />
            {errors.weight && <span className="text-red-500 text-sm">{errors.weight}</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-white font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`px-4 py-3 rounded-lg bg-gray-700 border ${
                errors.email ? "border-red-500" : "border-gray-600"
              } text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition`}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-white font-medium mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className={`px-4 py-3 rounded-lg bg-gray-700 border ${
                errors.phone ? "border-red-500" : "border-gray-600"
              } text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition`}
            />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <label className="text-white font-medium mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your Address"
              className={`px-4 py-3 rounded-lg bg-gray-700 border ${
                errors.address ? "border-red-500" : "border-gray-600"
              } text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition`}
            />
            {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
          </div>

          {/* Success message */}
          {success && <div className="text-green-400 text-center font-medium">{success}</div>}

          {/* Submit button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold py-4 rounded-xl text-lg hover:shadow-2xl hover:shadow-blue-400/40 transition-all duration-300 transform hover:-translate-y-1"
          >
            Join Now
          </button>
        </form>
      </div>
    </section>
  );
}
