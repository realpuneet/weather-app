import React from 'react'
import Navbar from '@/components/Navbar'
import Head from 'next/head'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-100 to-yellow-100">
      <Head>
        <title>Contact | Weather 24x7</title>
        <link rel="icon" href="https://i.pinimg.com/736x/77/0b/80/770b805d5c99c7931366c2e84e88f251.jpg" sizes="any" />
      </Head>
      <Navbar />
      <div className="flex flex-col py-4 items-center justify-center min-h-[80vh] px-4">
        <div className="bg-white/80 rounded-2xl shadow-xl p-8 max-w-xl w-full border border-blue-200 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-blue-700 mb-4 flex items-center gap-2">
            📬 Contact Us
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Have questions, feedback, or suggestions? We'd love to hear from you!
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-100 outline-none bg-white/90"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-100 outline-none bg-white/90"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-100 outline-none bg-white/90 resize-none"
            />
            <button
              type="submit"
              disabled
              className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg shadow transition-all duration-200 flex items-center gap-2 justify-center"
            >
              ✉️ Send Message
            </button>
          </form>
          <div className="flex items-center gap-2 mt-6 justify-center">
            <span className="text-2xl">📧</span>
            <span className="text-2xl">🌦️</span>
            <span className="text-2xl">📱</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact;