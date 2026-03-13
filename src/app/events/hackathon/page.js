// app/events/hackathon/page.js
import Link from "next/link";

export default function Hackathon() {
  const event = {
    title: "Hackathon",
    categories: ["Junior", "Secondary"],
    image: "/events/hackathon.png",
    eligibility: "Open to students from the respective categories.",
    challenge: [
      "Participants will be given a technology-related problem or theme.",
      "They must design a solution, concept, or prototype individually."
    ],
    rules: [
      "Participants may use laptops and necessary software tools.",
      "Solutions must be developed during the event time.",
      "Ideas must be original and innovative.",
      "Participants must prepare a short explanation or demonstration of their solution."
    ],
    evaluation: [
      "Creativity and innovation",
      "Problem-solving approach",
      "Feasibility of the solution",
      "Clarity of explanation"
    ]
  };

  return (
    <main className="min-h-screen relative bg-[#050505] text-white px-6 py-20 w-[80%] mx-auto">

      {/* Top Banner */}
      <div className="w-full h-64 relative rounded-xl overflow-hidden mb-8">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-extrabold mb-2 text-center bg-gradient-to-r from-white via-blue-100 to-blue-400 text-transparent bg-clip-text">
            {event.title}
          </h1>
          <span className="inline-block text-xs bg-purple-900 px-3 py-1 rounded-full text-purple-200">
            {event.categories.join(", ")}
          </span>
        </div>
      </div>

      {/* Eligibility */}
      {event.eligibility && (
        <p className="text-gray-300 mb-4">
          <strong>Eligibility:</strong> {event.eligibility}
        </p>
      )}

      {/* Challenge */}
      {event.challenge && (
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-3">Challenge</h2>
          <ul className="list-disc list-inside text-gray-300">
            {event.challenge.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Rules */}
      {event.rules && (
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-3">Rules</h2>
          <ul className="list-disc list-inside text-gray-300">
            {event.rules.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Evaluation */}
      {event.evaluation && (
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-3">Evaluation</h2>
          <ul className="list-disc list-inside text-gray-300">
            {event.evaluation.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Register Button */}
      <div className="text-center mt-12">
        <Link href="/register">
          <button className="px-12 py-4 font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-all shadow-lg shadow-purple-500/30">
            Register for {event.title}
          </button>
        </Link>
      </div>
    </main>
  );
}