// app/events/programming-contest/page.js
import Link from "next/link";

export default function ProgrammingContest() {
  const event = {
    title: "Programming Contest",
    category: "Higher Secondary",
    image: "/events/programming.png",
    eligibility: "Only Class 11–12 students are eligible",
    format: [
      "Solve algorithmic and logical programming problems",
      "Duration: 1 hour",
      "Languages allowed: C, Python",
    ],
    rules: [
      "Use only provided computers or approved devices.",
      "Internet access is not allowed except contest platform if needed.",
      "No sharing or copying of code.",
      "Plagiarism leads to immediate disqualification.",
    ],
    evaluation: ["Number of problems solved", "Accuracy of solutions", "Submission time"],
    organizerNotes: [
      "Winners will receive trophies, certificates, and prizes.",
      "Top participants may be invited for workshops after the event.",
    ],
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
          <h1 className="text-5xl font-extrabold mb-2 text-center bg-gradient-to-r from-white via-blue-100  to-blue-400 text-transparent bg-clip-text">
  {event.title}
</h1>
          <span className="inline-block text-xs bg-purple-900 px-3 py-1 rounded-full text-purple-200">
            {event.category}
          </span>
        </div>
      </div>

      {/* Optional Info */}
      {event.eligibility && (
        <p className="text-gray-300 mb-4">
          <strong>Eligibility:</strong> {event.eligibility}
        </p>
      )}

      {/* Event Details Lists */}
      {event.format && (
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-3">Format</h2>
          <ul className="list-disc list-inside text-gray-300">
            {event.format.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </section>
      )}

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