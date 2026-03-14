"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  const [adminId, setAdminId] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  const [search, setSearch] = useState("");

  const hardcodedId = "admin";
  const hardcodedPass = "itfest2026";

  useEffect(() => {
    if (!showLogin) {
      fetch("/api/admin/participants")
        .then((res) => res.json())
        .then((data) => {
          setParticipants(data.participants || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [showLogin]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (adminId === hardcodedId && adminPass === hardcodedPass) {
      setAuthorized(true);
      setShowLogin(false);
      setLoading(true);
    } else {
      alert("Invalid ID or Password!");
    }
  };

  const handleCheckIn = async (ticket_id, id) => {
    const res = await fetch("/api/admin/checkin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ticket_id }),
    });
    const data = await res.json();
    if (data.success) {
      setParticipants((prev) =>
        prev.map((p) => (p.id === id ? { ...p, checked_in: true } : p))
      );
    } else {
      alert(data.message);
    }
  };

  const filtered = participants.filter((p) => {
    const searchable = [
      p.name,
      p.phone,
      p.ticket_id,
      p.school,
      p.class_category,
      p.payment_status,
      ...(Array.isArray(p.events) ? p.events : [p.events]),
    ]
      .join(" ")
      .toLowerCase();

    return searchable.includes(search.toLowerCase());
  });

  const total = participants.length;
  const checkedIn = participants.filter((p) => p.checked_in).length;
  const pending = total - checkedIn;

  if (showLogin) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Login</h1>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 w-full max-w-sm"
        >
          <input
            type="text"
            placeholder="Admin ID"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            className="p-3 rounded bg-black border border-gray-700 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={adminPass}
            onChange={(e) => setAdminPass(e.target.value)}
            className="p-3 rounded bg-black border border-gray-700 w-full"
          />
          <button className="p-3 rounded bg-gradient-to-r from-blue-500 to-purple-600 w-full">
            Login
          </button>
        </form>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading participants...
      </main>
    );
  }

  if (!authorized) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        Access Denied
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10 md:px-12 md:py-16">
      {/* HEADER */}
      <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <h1 className="text-3xl md:text-4xl font-bold">IT Fest Admin Dashboard</h1>
        <input
          type="text"
          placeholder="Search by name, phone, ticket, school, class, event..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 bg-black border border-gray-700 rounded w-full md:w-96"
        />
      </div>

      {/* STATS */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 bg-gray-900 rounded-xl border border-gray-700">
          <p className="text-gray-400">Total Participants</p>
          <p className="text-3xl font-bold">{total}</p>
        </div>
        <div className="p-6 bg-gray-900 rounded-xl border border-gray-700">
          <p className="text-gray-400">Checked In</p>
          <p className="text-3xl font-bold text-green-400">{checkedIn}</p>
        </div>
        <div className="p-6 bg-gray-900 rounded-xl border border-gray-700">
          <p className="text-gray-400">Pending</p>
          <p className="text-3xl font-bold text-yellow-400">{pending}</p>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto border border-gray-800 rounded-xl">
        <table className="w-full text-sm min-w-[700px]">
          <thead className="bg-gray-900">
            <tr>
              <th className="p-3 text-left">Ticket</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">School</th>
              <th className="p-3 text-left">Class</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Events</th>
              <th className="p-3 text-left">Payment</th>
              <th className="p-3 text-left">Check-In</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="border-t border-gray-800">
                <td className="p-3 font-mono">{p.ticket_id}</td>
                <td className="p-3">{p.name}</td>
                <td className="p-3">{p.school}</td>
                <td className="p-3">{p.class_category}</td>
                <td className="p-3">{p.phone}</td>
                <td className="p-3">
                  {Array.isArray(p.events) ? p.events.join(", ") : p.events}
                </td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs bg-blue-600 rounded">
                    {p.payment_status}
                  </span>
                </td>
                <td className="p-3">
                  {p.checked_in ? (
                    <span className="text-green-400 font-semibold">✓ Checked</span>
                  ) : (
                    <button
                      onClick={() => handleCheckIn(p.ticket_id, p.id)}
                      className="px-3 py-1 bg-green-600 rounded hover:bg-green-700 w-full md:w-auto"
                    >
                      Check In
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}