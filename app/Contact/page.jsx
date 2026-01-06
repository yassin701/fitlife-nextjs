// "use client";

// import { useState } from "react";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [success, setSuccess] = useState("");
//   const [submitError, setSubmitError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//     setSuccess("");
//     setSubmitError("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate
//     let newErrors = {};
//     Object.keys(formData).forEach((key) => {
//       if (!formData[key].trim()) newErrors[key] = "Input required";
//     });

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // ✅ Show success first
//     setSuccess("Your message has been sent successfully!");
//     setErrors({});
//     setSubmitError("");

//     // Clear inputs after a short delay (50ms)
//     setTimeout(() => {
//       setFormData({ name: "", email: "", message: "" });
//     }, 50);
//   };

//   return (
//     <div className="min-h-screen bg-secondaryDark flex items-center justify-center py-20">
//       <form
//         onSubmit={handleSubmit}
//         className="grid gap-6 bg-dark p-10 rounded-2xl shadow-lg w-full max-w-lg"
//       >
//         <h2 className="text-3xl font-bold text-softWhite text-center mb-4">
//           Join Our Gym Today
//         </h2>

//         {/* Name */}
//         <div className="flex flex-col">
//           <label className="text-softWhite mb-1">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className={`px-4 py-2 rounded-lg bg-secondaryDark border ${
//               errors.name ? "border-red-500" : "border-white/20"
//             } text-softWhite focus:border-bluePrimary focus:ring-1 focus:ring-bluePrimary outline-none transition`}
//             placeholder="Your Name"
//           />
//           {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
//         </div>

//         {/* Email */}
//         <div className="flex flex-col">
//           <label className="text-softWhite mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className={`px-4 py-2 rounded-lg bg-secondaryDark border ${
//               errors.email ? "border-red-500" : "border-white/20"
//             } text-softWhite focus:border-bluePrimary focus:ring-1 focus:ring-bluePrimary outline-none transition`}
//             placeholder="Your Email"
//           />
//           {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
//         </div>

//         {/* Message */}
//         <div className="flex flex-col">
//           <label className="text-softWhite mb-1">Fitness Goals</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             rows={4}
//             className={`px-4 py-2 rounded-lg bg-secondaryDark border ${
//               errors.message ? "border-red-500" : "border-white/20"
//             } text-softWhite focus:border-bluePrimary focus:ring-1 focus:ring-bluePrimary outline-none transition`}
//             placeholder="Tell us your fitness goals"
//           ></textarea>
//           {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
//         </div>

//         {/* Success message */}
//         {success && <div className="text-green-500 text-center font-medium">{success}</div>}

//         {/* Submit button */}
//         <button
//           type="submit"
//           className="bg-gradient-to-r from-bluePrimary to-purplePrimary text-softWhite font-bold py-3 rounded-xl text-lg hover:shadow-2xl hover:shadow-bluePrimary/40 transition-all duration-300 transform hover:-translate-y-1"
//         >
//           Join Now
//         </button>
//       </form>
//     </div>
//   );
// }
