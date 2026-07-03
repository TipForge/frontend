'use client';

import { motion } from 'framer-motion';

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">TipForge</h1>
            <div className="flex gap-4">
              <a href="/login" className="text-sm text-slate-600 hover:text-slate-900">
                Login
              </a>
              <a
                href="/signup"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-slate-900 sm:text-6xl">
            Support Creators Instantly
          </h2>
          <p className="mt-6 text-xl text-slate-600">
            Send USDC tips to creators across platforms with zero friction, powered by Stellar
            blockchain.
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <button className="rounded-lg bg-primary px-8 py-3 font-medium text-white hover:bg-blue-600 transition-colors">
              Send a Tip
            </button>
            <button className="rounded-lg border border-slate-300 bg-white px-8 py-3 font-medium text-slate-900 hover:bg-slate-50 transition-colors">
              Become a Creator
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="border-t border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="mb-12 text-center text-3xl font-bold text-slate-900">Why TipForge?</h3>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Instant Payments',
                description: 'Send USDC tips in seconds with low fees and fast settlement',
              },
              {
                title: 'Multi-Platform',
                description:
                  'Support creators across X, Instagram, TikTok, YouTube, GitHub, Twitch',
              },
              {
                title: 'No Barriers',
                description:
                  'Global payments without geographic restrictions or complex onboarding',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="rounded-lg border border-slate-200 bg-slate-50 p-8"
              >
                <h4 className="mb-3 text-lg font-semibold text-slate-900">{feature.title}</h4>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-900 py-12 text-slate-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center">© 2024 TipForge. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
