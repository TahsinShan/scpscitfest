// app/events/treasure-hunt/page.js
import Link from "next/link";

export default function TreasureHunt() {
  const event = {
    title: "Treasure Hunt",
    categories: ["Combined (Class 6–12)"],
    image: "/events/treasure_hunt.png",
    eligibility:
      "Each team must consist of 3–5 participants. Teams may include participants from any category (Class 6–12).",
    gameFormat: [
      "Teams will solve clues and puzzles related to technology, logic, and problem-solving.",
      "Each solved clue will lead to the next location or challenge.",
      "Checkpoints will be placed at key locations; teams must document completion (photo or QR code).",
      "Hints will be provided at the organizer’s discretion to keep teams on track.",
      "The game will be conducted within designated campus areas only.",
      "Teams will have a fixed time limit to complete the hunt (e.g., 2–3 hours depending on schedule)."
    ],
    rules: [
      "Teams must stay within the designated campus/school areas at all times.",
      "Participants must not tamper with clues, props, or materials.",
      "Interfering with other teams is strictly prohibited.",
      "Teams must follow fair play, maintain discipline, and respect safety rules.",
      "All solutions and submissions must be original; plagiarism or cheating will lead to disqualification.",
      "Teams must check-in at all required checkpoints before moving forward."
    ],
    evaluation: [
      "The first team to successfully complete all clues will be declared the winner.",
      "Accuracy and correctness of solutions will be considered for ranking.",
      "Time taken to complete the challenge will be used for tie-breaking.",
      "Organizers may award bonus points for creativity or innovative solutions."
    ],
    organizerNotes: [
      "Teams must register before the event; team composition cannot be changed after registration.",
      "All team members should stay together during the event for safety and scoring.",
      "Organizers will provide a starting point and map if necessary.",
      "The decision of the organizing committee is final in case of disputes or ambiguities."
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

      {/* Game Format */}
      {event.gameFormat && (
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-3">Game Format</h2>
          <ul className="list-disc list-inside text-gray-300">
            {event.gameFormat.map((item, i) => (
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

      {/* Organizer Notes */}
      {event.organizerNotes && (
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-3">Organizer Notes</h2>
          <ul className="list-disc list-inside text-gray-300">
            {event.organizerNotes.map((n, i) => (
              <li key={i}>{n}</li>
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