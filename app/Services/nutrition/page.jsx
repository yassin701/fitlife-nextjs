import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { FaAppleAlt } from "react-icons/fa";

export default function Nutrition() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />
      <main className="pt-24 pb-20 max-w-5xl mx-auto px-6 text-white">

        {/* Hero */}
        <div className="mb-12 text-center">
          <FaAppleAlt className="w-20 h-20 mx-auto mb-4 text-pink-400" />
          <h1 className="text-5xl font-bold mb-4">Nutrition Hub</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Personalized meal plans with expert guidance to fuel your body and maximize your fitness results.
          </p>
        </div>

        {/* Features */}
        <section className="bg-gray-800 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Custom meal plans tailored to your goals</li>
            <li>Weekly advice from certified nutritionists</li>
            <li>Diet tracking and suggestions for improvement</li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="bg-gray-800 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Benefits</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Optimized energy levels for workouts</li>
            <li>Better body composition and health</li>
            <li>Learn sustainable healthy eating habits</li>
          </ul>
        </section>

        {/* How it works */}
        <section className="bg-gray-800 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-300 mb-2">
            1. Fill out your nutrition profile with goals and preferences.
          </p>
          <p className="text-gray-300 mb-2">
            2. Receive a personalized meal plan weekly.
          </p>
          <p className="text-gray-300 mb-2">
            3. Track your meals and get feedback from our experts.
          </p>
          <p className="text-gray-300">
            4. Adjust plans dynamically as your goals change.
          </p>
        </section>

        
      </main>
    </div>
  );
}
