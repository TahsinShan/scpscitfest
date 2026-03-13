"use client";

import Link from "next/link";

export default function Events() {
  const events = [
    {
      slug: "programming-contest",
      title: "Programming Contest",
      category: "Higher Secondary",
      segment: "Coding",
      image: "/events/programming.png",
      desc: "Solve algorithmic problems and compete with the best coders."
    },
    {
      slug: "tech-quiz",
      title: "Tech Quiz",
      category: "Junior, Secondary, Higher Secondary",
      segment: "Tech Quiz",
      image: "/events/quiz.jpg",
      desc: "Test your knowledge of technology, computing history and innovation."
    },
    {
      slug: "shark-jark",
      title: "Multimedia Presentation – Shark Jark",
      category: "Combined (Class 6–12)",
      segment: "Submission Based",
      image: "/events/shark-jark.jpg",
      desc: "Create and submit multimedia presentations showcasing innovative ideas."
    },
    {
      slug: "hackathon",
      title: "Hackathon",
      category: "Junior & Secondary",
      segment: "Coding",
      image: "/events/hackathon.jpg",
      desc: "Collaborate in teams to build working software solutions within time limits."
    },
    {
      slug: "treasure-hunt",
      title: "Treasure Hunt",
      category: "Combined (Class 6–12)",
      segment: "Special Segment",
      image: "/events/treasure-hunt.jpg",
      desc: "Solve riddles and follow clues to find hidden treasures."
    },
    {
      slug: "pubg",
      title: "PUBG Mobile Tournament",
      category: "Combined (Class 6–12)",
      segment: "Gaming",
      image: "/events/programming.png",
      desc: "Compete in solo online matches and show your gaming skills."
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-40 pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          IT Fest Events
        </h1>
        <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto">
          Explore the competitions of SCPSC Intra IT Fest 2026.
        </p>
      </section>

      {/* EVENTS GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-32 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event) => (
          <Link key={event.slug} href={`/events/${event.slug}`}>
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] transition duration-300 cursor-pointer">

              {/* Poster Image */}
              <div
                className="aspect-[9/16] bg-cover bg-center transform group-hover:scale-110 transition duration-700"
                style={{ backgroundImage: `url(${event.image})` }}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

              {/* Event Content */}
              <div className="absolute bottom-0 p-6">
                <span className="text-xs bg-purple-500/30 px-3 py-1 rounded-full text-purple-200">
                  {event.category}
                </span>
                <h3 className="text-2xl font-semibold mt-3 group-hover:text-purple-400 transition">
                  {event.title}
                </h3>
                <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                  {event.desc}
                </p>
              </div>

            </div>
          </Link>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center pb-28">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Compete?
        </h2>
        <Link href="/register">
          <button className="px-12 py-5 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-all shadow-lg shadow-purple-500/30">
            Register Now
          </button>
        </Link>
      </section>

    </main>
  );
}