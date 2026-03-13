"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white relative overflow-hidden flex flex-col items-center justify-center">

      {/* Background gradient glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(120,119,198,0.15),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,0,128,0.12),transparent_40%)]"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Hero */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">

        {/* Logo */}
        <img
          src="/logo.png"
          alt="IT Fest"
          className="mx-auto h-28 mb-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        />

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">

          <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            SCPSC
          </span>

          <span className="block mt-2">
            Intra IT Fest
          </span>

          <span className="text-gray-400 text-4xl md:text-5xl">
            2026
          </span>

        </h1>

        {/* Tagline */}
        <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A celebration of innovation, coding, and creativity.  
          Compete with the brightest minds and showcase your tech skills.
        </p>

        {/* Info Card */}
        <div className="mt-12 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">

          <div className="grid md:grid-cols-3 gap-6 text-lg">

            <div>
              <p className="text-gray-400 text-sm">Date</p>
              <p className="font-semibold text-xl mt-1">
                11 April 2026
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Venue</p>
              <p className="font-semibold text-xl mt-1">
                SCPSC School Campus
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Registration</p>
              <p className="font-semibold text-xl mt-1">
                350 BDT
              </p>
            </div>

          </div>

        </div>

        {/* CTA */}
        <a href="/register">
          <button className="mt-12 px-12 py-5 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-all shadow-lg shadow-purple-500/30">
            Register Now
          </button>
        </a>

      </section>

      {/* Footer */}
      <footer className="absolute bottom-6 text-gray-500 text-sm">
        SCPSC Information Technology Club © 2026
      </footer>

    </main>
  );
}