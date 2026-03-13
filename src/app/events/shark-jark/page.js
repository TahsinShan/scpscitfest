// app/events/shark-tank/page.js
import Link from "next/link";

export default function SharkTank() {
  const event = {
    title: "Multimedia Presentation – Shark Tank",
    categories: ["Combined"],
    image: "/events/shark_tank.png",
    eligibility: "This is a solo competition. Participants from Class 6–12 can participate.",
    submissionRound: [
      "Participants must submit their multimedia presentation online before the deadline.",
      "The presentation must be prepared using PowerPoint or similar presentation software.",
      "All content must be original and related to technology, innovation, or startup ideas.",
      "The organizing team will evaluate all submissions and select the Top 5 participants for the final round."
    ],
    finalRound: [
      "The Top 5 selected participants will present their ideas during the fest.",
      "Each participant will have 5 minutes for presentation and 2 minutes for questions from judges.",
      "Participants must present their own work and explain their idea clearly."
    ],
    rules: [
      "Submitted presentations must be the participant’s original work.",
      "Any form of plagiarism or copied content will lead to disqualification.",
      "Participants must follow the given time limit during the final presentation.",
      "Judges and organizers may ask questions related to the presented idea."
    ],
    evaluation: [
      "Innovation of the idea",
      "Presentation quality",
      "Feasibility of the concept",
      "Impact and usefulness of the idea"
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

      {/* Submission Round */}
      {event.submissionRound && (
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-3">Submission Round (Online)</h2>
          <ul className="list-disc list-inside text-gray-300">
            {event.submissionRound.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Final Round */}
      {event.finalRound && (
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-3">Final Round (Fest Day)</h2>
          <ul className="list-disc list-inside text-gray-300">
            {event.finalRound.map((item, i) => (
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