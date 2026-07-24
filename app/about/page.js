import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: "About - Get Me A Coffee",
  description: "Learn more about Get Me A Coffee, our mission, and how we empower creators.",
}

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 md:py-16 text-white">
      {/* Hero Section */}
      <section className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-red-500 mb-4">
          About Get Me A Coffee
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A crowdfunding platform designed for creators, developers, artists, and influencers to get direct support from their fans and audience.
        </p>
      </section>

      {/* Our Mission */}
      <section className="bg-gray-800/80 rounded-2xl p-6 md:p-10 border border-gray-700 shadow-xl mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-400">Our Mission 🎯</h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
          We believe every creator deserves a simple, frictionless way to monetize their passion. Whether you write code, compose music, produce videos, or stream content, your supporters should be able to buy you a virtual coffee without complex subscriptions or middleman fees.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-900/60 p-5 rounded-xl border border-gray-700/50">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-semibold text-white mb-2">Fast & Direct</h3>
            <p className="text-gray-400 text-sm">Payments go straight to your account via Razorpay integration.</p>
          </div>
          <div className="bg-gray-900/60 p-5 rounded-xl border border-gray-700/50">
            <div className="text-3xl mb-3">💖</div>
            <h3 className="text-lg font-semibold text-white mb-2">Community Driven</h3>
            <p className="text-gray-400 text-sm">Connect with your true fans and receive personal messages of support.</p>
          </div>
          <div className="bg-gray-900/60 p-5 rounded-xl border border-gray-700/50">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-lg font-semibold text-white mb-2">Secure & Private</h3>
            <p className="text-gray-400 text-sm">Your keys and data are kept safe with OAuth & encrypted credentials.</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-white">
          How It Works ⚡
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-purple-600/30 text-purple-400 font-bold text-xl flex items-center justify-center mb-4">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Create Your Profile</h3>
            <p className="text-gray-300 text-sm">
              Sign in with Google, choose your unique username, and customize your profile & cover picture.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-pink-600/30 text-pink-400 font-bold text-xl flex items-center justify-center mb-4">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Connect Razorpay</h3>
            <p className="text-gray-300 text-sm">
              Add your Razorpay Key ID & Secret in your Dashboard so supporters pay you directly.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-green-600/30 text-green-400 font-bold text-xl flex items-center justify-center mb-4">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Share & Earn</h3>
            <p className="text-gray-300 text-sm">
              Share your personal link with your audience and start receiving supporters&apos; love!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-purple-900/60 to-purple-700/40 border border-purple-500/30 rounded-2xl p-8 sm:p-12 text-center shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Ready to start receiving support?</h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
          Join hundreds of creators today. Set up your profile in less than 2 minutes!
        </p>
        <Link
          href="/login"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-xl transition-colors text-base sm:text-lg shadow-lg"
        >
          Get Started Now
        </Link>
      </section>
    </div>
  )
}

export default About
