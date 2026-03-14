"use client";

import { useState } from "react";

export default function About() {
  const [openRule, setOpenRule] = useState(null);

  const rules = [
    {
      title: "1. General Eligibility",
      content: [
        "The fest is open to students of SCPSC only.",
        "Participants must belong to the correct category: Junior (Class 6–8), Secondary (Class 9–10), Higher Secondary (Class 11–12), Combined (Class 6–12).",
        "Each participant must register individually or as a team, depending on the event.",
        "Registration is mandatory, with a fee of 350 BDT per participant.",
      ],
    },
    {
      title: "2. Registration & Participation",
      content: [
        "Participants must submit the registration form before the deadline.",
        "Only registered participants will be allowed to compete.",
        "Each participant will receive: Participation Certificate, T-shirt, Breakfast & Lunch, Pen, Access to online sessions, workshops, and seminars.",
        "Teams must have all members present for the event; substitutions are not allowed unless approved by organizers.",
        "Participants must adhere to category-specific rules for each competition.",
      ],
    },
    {
      title: "3. Competition Guidelines",
      content: [
        "Tech Quiz: Teams of 2 participants per category. No electronic devices allowed. Respect time limits.",
        "Programming Contest & Hackathon: Higher Secondary only for Programming Contest. Hackathon: Teams of 2–3 participants. Original work only.",
        "Multimedia Presentation – Shark Tank: Solo, online submission first; top 5 selected for final presentation. Presentation: 5 min + 2 min Q&A.",
        "Treasure Hunt: Teams of 3–5 participants. Must follow designated campus areas. No tampering with clues.",
        "Gaming – PUBG (Solo): Online via Discord. Solo format only. Cheats or external assistance prohibited. Points awarded based on kills & placement.",
      ],
    },
    {
      title: "4. Conduct & Discipline",
      content: [
        "Respect organizers, judges, and participants.",
        "Unsportsmanlike behavior results in disqualification.",
        "Follow instructions of event staff and judges.",
        "Cheating, manipulation, or plagiarism leads to immediate disqualification.",
      ],
    },
    {
      title: "5. Submissions & Deadlines",
      content: [
        "All submissions must be sent before deadlines.",
        "Late submissions not accepted unless prior approval is obtained.",
        "File formats and submission platforms will be specified by organizers.",
      ],
    },
    {
      title: "6. Judging & Evaluation",
      content: [
        "Each competition will have qualified judges.",
        "Decisions of judges and organizers are final and binding.",
        "Participants may be asked questions related to their work.",
        "Evaluation criteria communicated before competition.",
      ],
    },
    {
      title: "7. Online Participation Rules",
      content: [
        "Join the official Discord server.",
        "Follow all online instructions carefully.",
        "Maintain stable internet connection; disconnections may be handled by organizers.",
        "Recording or streaming online matches is prohibited unless permitted.",
      ],
    },
    {
      title: "8. Safety & Responsibility",
      content: [
        "Participants are responsible for their devices and belongings.",
        "Organizers are not responsible for personal injuries or equipment damage.",
      ],
    },
    {
      title: "9. General Authority",
      content: [
        "Organizing committee may modify rules, schedules, or formats.",
        "Disqualify participants for misconduct.",
        "Decide winners in case of tie or disputes.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-40 pb-20 text-center z-10 relative">
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
          . It brings together students passionate about programming, robotics, innovation, and digital creativity.
        </p>
      </section>

      {/* EVENT DETAILS */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8 z-10 relative">
        {[
          { title: "📅 Event Date", desc: "11 April 2026" },
          { title: "📍 Venue", desc: "SCPSC Auditorium & IT Lab" },
          { title: "👨‍💻 Organized By", desc: "SCPSC Information Technology Club" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg"
          >
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* WHAT TO EXPECT */}
      <section className="max-w-6xl mx-auto px-6 pb-24 z-10 relative">
        <h2 className="text-4xl font-bold text-center mb-14">What To Expect</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "💻 Competitions",
              desc: "Participate in exciting IT competitions including coding, quiz, and robotics challenges.",
            },
            {
              title: "🎓 Workshops",
              desc: "Learn new technologies through both online and offline workshops conducted by experts.",
            },
            {
              title: "🤖 Robotics Seminar",
              desc: "Discover the future of robotics and AI in a special seminar for all participants.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-lg"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTICIPANT CATEGORIES */}
      <section className="max-w-6xl mx-auto px-6 pb-32 z-10 relative">
        <h2 className="text-4xl font-bold text-center mb-14">Participant Categories</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Junior", desc: "Class 6-8" },
            { label: "Secondary", desc: "Class 9-10" },
            { label: "Higher Secondary", desc: "Class 11-12" },
            { label: "Combined", desc: "Class 6-12" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl">
              {item.label} <br />
              <span className="text-gray-400 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* RULES & REGULATIONS */}
      <section className="max-w-6xl mx-auto px-6 pb-24 z-10 relative">
        <h2 className="text-4xl font-bold text-center mb-14">Rules & Regulations</h2>

        <div className="space-y-4">
          {rules.map((rule, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 cursor-pointer transition-all hover:bg-white/10"
              onClick={() => setOpenRule(openRule === idx ? null : idx)}
            >
              <h3 className="text-xl font-semibold flex justify-between items-center">
                {rule.title}
                <span className="ml-2 text-gray-400">
                  {openRule === idx ? "−" : "+"}
                </span>
              </h3>
              {openRule === idx && (
                <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2">
                  {rule.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-28 z-10 relative">
        <a href="/register">
          <button className="px-12 py-5 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-all shadow-lg shadow-purple-500/30">
            Register for IT Fest
          </button>
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center pb-10 text-gray-500 text-sm z-10 relative">
        SCPSC Information Technology Club © 2026
      </footer>
    </main>
  );
}