// app/schedule/page.js
export default function Schedule() {
  const schedule = [
    { time: "8:30 AM", activity: "Participant Registration & Breakfast" },
    { time: "9:30 AM", activity: "Opening Ceremony" },
    { time: "10:00 AM", activity: "Olympiad & Programming Contest" },
    { time: "11:30 AM", activity: "Tech Quiz & Treasure Hunt" },
    { time: "1:00 PM", activity: "Lunch Break" },
    { time: "2:00 PM", activity: "Hackathon & Multimedia Presentation (Shark Tank)" },
    { time: "3:30 PM", activity: "PUBG Tournament Finals" },
    { time: "4:30 PM", activity: "Prize Giving Ceremony" }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white relative px-6 py-20">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Fest Schedule
        </h1>
        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
          Follow the day’s events step by step and never miss a moment at SCPSC Intra IT Fest 2026.
        </p>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded"></div>

        {schedule.map((item, index) => (
          <div key={index} className="relative flex items-start mb-12">
            {/* Dot */}
            <div className="z-10 flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"></div>

            {/* Time and Activity */}
            <div className="ml-6">
              <span className="text-blue-400 font-semibold">{item.time}</span>
              <h3 className="text-xl font-semibold mt-1">{item.activity}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-6">
          Don't Miss Out! 
        </h2>
        <a href="/register">
          <button className="px-12 py-5 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-all shadow-lg shadow-purple-500/30">
            Register Now
          </button>
        </a>
      </section>

    </main>
  );
}