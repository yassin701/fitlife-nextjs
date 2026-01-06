// import { FaRobot, FaAppleAlt } from "react-icons/fa";
// import { MdSelfImprovement } from "react-icons/md";

// export default function ServicesSection() {
//   const services = [
//     {
//       title: "Smart Training",
//       desc: "AI-powered workout plans that adapt to your progress.",
//       icon: FaRobot,
//       gradient: "from-blue-500/20 to-purple-600/20",
//       features: ["Custom plans", "Progress tracking"],
//     },
//     {
//       title: "Nutrition Hub",
//       desc: "Personalized meal plans with expert guidance.",
//       icon: FaAppleAlt,
//       gradient: "from-purple-500/20 to-pink-600/20",
//       features: ["Meal plans", "Weekly advice"],
//     },
//     {
//       title: "Recovery Center",
//       desc: "Recover faster with modern recovery solutions.",
//       icon: MdSelfImprovement,
//       gradient: "from-blue-500/20 to-cyan-600/20",
//       features: ["Massage therapy", "Body recovery"],
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">
//             Our Services
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Simple and effective fitness services built to support your lifestyle.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <div
//                 key={index}
//                 className={`group bg-gradient-to-br ${service.gradient}
//                 border border-white/10 rounded-2xl p-8
//                 hover:border-blue-400/40 hover:shadow-xl
//                 transition-all duration-300 hover:-translate-y-2`}
//               >
//                 {/* Icon */}
//                 <Icon className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform" />

//                 {/* Title */}
//                 <h3 className="text-2xl font-bold text-white mb-3">
//                   {service.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-300 mb-4">
//                   {service.desc}
//                 </p>

//                 {/* Features */}
//                 <ul className="text-gray-400 space-y-1">
//                   {service.features.map((item, i) => (
//                     <li key={i}>• {item}</li>
//                   ))}
//                 </ul>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
