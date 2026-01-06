import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image";
import { FaTrophy, FaUsers, FaDumbbell, FaHeartbeat, FaStar, FaAward } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import Link from "next/link";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Head Trainer & Founder",
      bio: "15+ years in professional fitness training, certified NASM specialist",
      image: "👨‍💼",
      specialties: ["Strength Training", "Athletic Performance"]
    },
    {
      name: "Sarah Martinez",
      role: "Nutrition Director",
      bio: "Registered Dietitian with Masters in Sports Nutrition",
      image: "👩‍⚕️",
      specialties: ["Sports Nutrition", "Weight Management"]
    },
    {
      name: "Mike Chen",
      role: "Recovery Specialist",
      bio: "Former physical therapist for professional athletes",
      image: "🧑‍⚕️",
      specialties: ["Injury Prevention", "Mobility Training"]
    },
    {
      name: "Lisa Rodriguez",
      role: "Group Fitness Manager",
      bio: "CrossFit Level 3 Trainer, Yoga Alliance Certified",
      image: "👩‍🏫",
      specialties: ["HIIT", "Functional Training"]
    }
  ];

  const values = [
    {
      icon: "💪",
      title: "Excellence in Training",
      desc: "We deliver top-tier fitness programs using evidence-based methods"
    },
    {
      icon: "❤️",
      title: "Member-First Approach",
      desc: "Every decision is made with our members' success in mind"
    },
    {
      icon: "🤝",
      title: "Community Building",
      desc: "We foster supportive relationships that extend beyond the gym"
    },
    {
      icon: "🎯",
      title: "Results-Driven",
      desc: "We measure success by tangible progress and achievements"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-red-500/10 to-orange-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
                  <GiWeightLiftingUp className="w-4 h-4 mr-2 text-red-400" />
                  <span className="text-white font-medium">ABOUT FITLIFE</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  More Than a Gym.
                  <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    A Fitness Family.
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8">
                  Since 2015, FitLife has been transforming lives through innovative fitness solutions, 
                  expert coaching, and a community-driven approach that makes every member feel at home.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/Services"
                    className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300"
                  >
                    Explore Our Services
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                  >
                    Join Our Community
                  </Link>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <FaTrophy className="w-12 h-12 text-red-400 mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">15+</div>
                    <div className="text-gray-400">Industry Awards</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <FaUsers className="w-12 h-12 text-orange-400 mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">1,200+</div>
                    <div className="text-gray-400">Active Members</div>
                  </div>
                  <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <FaDumbbell className="w-12 h-12 text-red-400 mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">25+</div>
                    <div className="text-gray-400">Certified Trainers</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <FaHeartbeat className="w-12 h-12 text-orange-400 mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">98%</div>
                    <div className="text-gray-400">Member Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
                <div className="text-4xl mb-6">🎯</div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To empower individuals of all fitness levels to achieve their health and wellness 
                  goals through personalized training, evidence-based nutrition, and a supportive 
                  community that celebrates every victory.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
                <div className="text-4xl mb-6">🌟</div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To become the leading fitness destination where technology meets human connection, 
                  creating transformative experiences that inspire lifelong health and wellness habits 
                  for generations to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                These principles guide everything we do at FitLife
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>





  



      </main>
    </div>
  );
}