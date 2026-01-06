import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { MdSelfImprovement } from "react-icons/md";

export default function Recovery() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />
      <main className="pt-24 pb-20 max-w-5xl mx-auto px-6 text-white">

        {/* Hero */}
        <div className="mb-12 text-center">
          <MdSelfImprovement className="w-20 h-20 mx-auto mb-4 text-cyan-400" />
          <h1 className="text-5xl font-bold mb-4">Recovery Center</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Modern recovery solutions to help your body heal faster and improve overall performance.
          </p>
        </div>

        {/* Features */}
        <section className="bg-gray-800 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Massage therapy for muscle relaxation</li>
            <li>Cryotherapy sessions to reduce inflammation</li>
            <li>Physical therapy for injury prevention</li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="bg-gray-800 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Benefits</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Reduce muscle soreness and fatigue</li>
            <li>Recover faster between workouts</li>
            <li>Enhance overall mobility and flexibility</li>
          </ul>
        </section>

        {/* How it works */}
        <section className="bg-gray-800 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-300 mb-2">
            1. Schedule a recovery session based on your needs.
          </p>
          <p className="text-gray-300 mb-2">
            2. Choose the therapy: massage, cryotherapy, or physical therapy.
          </p>
          <p className="text-gray-300 mb-2">
            3. Our experts guide you through the session and track progress.
          </p>
          <p className="text-gray-300">
            4. Receive recommendations to improve future recovery sessions.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
