import React from 'react';
import { ArrowRight, BookOpen, BrainCircuit, Code2, GraduationCap, Layers, Shield, Sparkles, Zap } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              DevCourseHub
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#courses" className="text-gray-700 hover:text-indigo-600 transition">Courses</a>
            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition">Features</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
          </nav>
          <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-xl hover:shadow-lg transition">
            Enroll Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"> DSA, System Design, MERN & More</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build real-world skills with our curated software engineering courses built for developers by developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition flex items-center justify-center">
              Start Learning Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition">
              Explore Courses
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">50k+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-gray-600">Expert Modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What You'll Get</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hands-On Coding</h3>
              <p className="text-gray-600">Code with us in real-time with interactive coding challenges and live practice sessions.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BrainCircuit className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">System Design Mastery</h3>
              <p className="text-gray-600">Learn to design scalable systems used by top tech companies like Google and Amazon.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-pink-50 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Certifications</h3>
              <p className="text-gray-600">Earn certificates and badges recognized by recruiters and hiring managers worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Popular Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition text-center">
              <BookOpen className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">DSA Bootcamp</h4>
              <p className="text-gray-600">Master data structures and algorithms from scratch with real-world coding problems.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition text-center">
              <Layers className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">MERN Stack Projects</h4>
              <p className="text-gray-600">Build dynamic full-stack web apps using MongoDB, Express, React, and Node.js.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition text-center">
              <Shield className="w-10 h-10 text-purple-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Backend System Design</h4>
              <p className="text-gray-600">Design real backend architectures with scalability, caching, and load balancing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Start Your Developer Journey Today</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of learners upgrading their skills with DevCourseHub.</p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition">
            Sign Up for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">DevCourseHub</span>
          </div>
          <p className="text-gray-400">© 2025 DevCourseHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;