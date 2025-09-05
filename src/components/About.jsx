import {NavLink} from "react-router-dom"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-teal-700 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Welcome to <span className="font-bold text-teal-700">BoomScore</span> - your ultimate hub for 
          <span className="text-teal-600 font-semibold"> football predictions, latest news insports, and betting codes. </span>  
          Whether you're a passionate fan, a stats nerd, or just love the thrill of the game, 
          we bring you fresh insights and predictions on matches from top leagues around the world.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-teal-700 mb-3">⚽ Predictions</h2>
          <p className="text-gray-600">
            Daily match predictions including goals, corners, GG/NG, and winner insights.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-teal-700 mb-3">📰Football news</h2>
          <p className="text-gray-600">
            In-depth stats and breakdowns to help you understand teams, form, and key players.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-teal-700 mb-3">🧧 SportyBet Codes</h2>
          <p className="text-gray-600">
            Access exclusive bet codes with different odds ranges to fit your strategy.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-teal-700 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          We aim to make football predictions simple, exciting, and reliable. 
          Our goal is to build a community of fans who enjoy the game, 
          learn from the stats, and make informed decisions with confidence. 
        </p>
      </div>

      {/* Footer-like Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-teal-700 mb-4">Join the Game</h2>
        <p className="text-gray-600 mb-6">
          Stay connected, follow the latest predictions, and never miss a match update.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition">
          <NavLink to={'/'}>Get Started</NavLink> 
        </button>
      </div>
    </div>
  );
}
