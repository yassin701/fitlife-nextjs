import { FaDumbbell, FaHeartbeat, FaUsers } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      title: "Personal Training",
      desc: "Train one-on-one with a professional coach to reach your goals faster.",
      icon: FaDumbbell,
    },
    {
      title: "Group Classes",
      desc: "Join fun and motivating group sessions for all fitness levels.",
      icon: FaUsers,
    },
    {
      title: "Health Tracking",
      desc: "Monitor your health and progress with simple tracking tools.",
      icon: FaHeartbeat,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-yellow-700">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose FitLife?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We combine cutting-edge technology with personalized care for unmatched results
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${feature.gradient}
                backdrop-blur-sm border border-white/10 rounded-2xl p-8
                hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10
                transition-all duration-500 hover:-translate-y-2`}
              >
                {/* Icon */}
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-12 h-12 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
