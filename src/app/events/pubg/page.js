// app/events/pubg-mobile/page.js
import Link from "next/link";

export default function PUBGMobile() {
  const event = {
    title: "PUBG Mobile – Solo (Gaming Segment)",
    categories: ["Combined (Class 6–12)"],
    image: "/events/pubg_mobile.png",
    eligibility:
      "The competition is open to students of Class 6–12. Each participant will compete individually (Solo).",
    platform: [
      "Matches will be played online using PUBG Mobile.",
      "All participants must join the official Discord server of the event for communication and match instructions."
    ],
    gameFormat: [
      "Matches will be conducted in Solo Battle Royale format.",
      "Players will join custom rooms created by the organizers.",
      "Match schedules and room IDs will be shared through Discord prior to the event."
    ],
    rules: [
      "Participants must join the Discord server before the match starts.",
      "Players must follow all instructions provided by the organizers on Discord.",
      "Use of hacks, cheats, exploits, or third-party applications is strictly prohibited.",
      "Teaming with other players is not allowed in the Solo format.",
      "Participants must join the match on time; late arrivals may not be allowed to participate.",
      "Any unsportsmanlike behavior or violation of rules may result in disqualification."
    ],
    evaluation: [
      "Points will be awarded based on final placement in each match.",
      "Points will also be given for the number of kills.",
      "The participant with the highest total points at the end of all matches will be declared the winner."
    ],
    organizerNotes: [
      "Participants must ensure a stable internet connection for uninterrupted gameplay.",
      "All technical issues or disputes will be addressed by the organizing committee; their decision is final.",
      "Participants are responsible for their own devices and game accounts."
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

      {/* Platform */}
      {event.platform && (
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-3">Platform</h2>
          <ul className="list-disc list-inside text-gray-300">
            {event.platform.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
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