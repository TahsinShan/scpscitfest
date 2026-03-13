"use client";

export default function About() {
  return (
    <main className="min-h-screen bg-[#050505] text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-40 pb-20 text-center">

        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          About The IT Fest
        </h1>

        <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          <span className="font-semibold text-white">
            SCPSC Intra IT Fest 2026
          </span>{" "}
          is a technology competition organized by the
          <span className="text-white font-semibold">
            {" "}SCPSC Information Technology Club
          </span>
          . It brings together students passionate about programming,
          robotics, innovation, and digital creativity.
        </p>

      </section>

      {/* EVENT DETAILS */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg">
          <h3 className="text-xl font-semibold mb-3">📅 Event Date</h3>
          <p className="text-gray-300">
            11 April 2026
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg">
          <h3 className="text-xl font-semibold mb-3">📍 Venue</h3>
          <p className="text-gray-300">
            SCPSC Auditorium & IT Lab
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg">
          <h3 className="text-xl font-semibold mb-3">👨‍💻 Organized By</h3>
          <p className="text-gray-300">
            SCPSC Information Technology Club
          </p>
        </div>

      </section>

      {/* WHAT TO EXPECT */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold text-center mb-14">
          What To Expect
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">💻 Competitions</h3>
            <p className="text-gray-300">
              Participate in exciting IT competitions including coding,
              quiz, and robotics challenges.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">🎓 Workshops</h3>
            <p className="text-gray-300">
              Learn new technologies through both online and
              offline workshops conducted by experts.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">🤖 Robotics Seminar</h3>
            <p className="text-gray-300">
              Discover the future of robotics and AI in a special
              seminar for all participants.
            </p>
          </div>

        </div>

      </section>

      {/* PARTICIPANT CATEGORIES */}
      <section className="max-w-6xl mx-auto px-6 pb-32">

        <h2 className="text-4xl font-bold text-center mb-14">
          Participant Categories
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            Junior <br /> <span className="text-gray-400 text-sm">Class 6-8</span>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            Secondary <br /> <span className="text-gray-400 text-sm">Class 9-10</span>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            Higher Secondary <br /> <span className="text-gray-400 text-sm">Class 11-12</span>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            Combined <br /> <span className="text-gray-400 text-sm">Class 6-12</span>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="text-center pb-28">

        <a href="/register">
          <button className="px-12 py-5 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-all shadow-lg shadow-purple-500/30">
            Register for IT Fest
          </button>
        </a>

      </section>

      {/* Footer */}
      <footer className="text-center pb-10 text-gray-500 text-sm">
        SCPSC Information Technology Club © 2026
      </footer>

    </main>
  );
}