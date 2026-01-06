import Header from "../Components/Header";
import Link from "next/link";
import { FaRobot, FaAppleAlt } from "react-icons/fa";
import { MdSelfImprovement } from "react-icons/md";

export default function ServicesPage() {
  const services = [
    {
      title: "Smart Training",
      desc: "AI-powered workout plans that adapt to your progress",
      icon: FaRobot,
      gradient: "from-blue-500/20 to-purple-600/20",
      href: "/Services/training",
      features: ["Custom plans", "Progress tracking"],
    },
    {
      title: "Nutrition Hub",
      desc: "Personalized meal plans with weekly consultations",
      icon: FaAppleAlt,
      gradient: "from-purple-500/20 to-pink-600/20",
      href: "/Services/nutrition",
      features: ["Meal plans", "Weekly advice"],
    },
    {
      title: "Recovery Center",
      desc: "Cryotherapy, massage, and physical therapy services",
      icon: MdSelfImprovement,
      gradient: "from-blue-500/20 to-cyan-600/20",
      href: "/Services/recovery",
      features: ["Massage therapy", "Body recovery"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />

      <main className="pt-24 pb-20">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Simple fitness services designed to help you stay strong, healthy, and motivated.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link
                  key={index}
                  href={service.href}
                  className={`group bg-gradient-to-br ${service.gradient} border border-white/10 rounded-2xl p-8 hover:border-blue-400/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                >
                  {/* Icon */}
                  <Icon className="w-12 h-12 text-white mb-6" />

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-4">
                    {service.desc}
                  </p>

                  {/* Features */}
                  <ul className="text-gray-400 mb-6 space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>

                  {/* Learn More */}
                  <span className="inline-flex items-center text-blue-400 font-medium">
                    Learn more →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
