"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  const [adminId, setAdminId] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  const hardcodedId = "admin";
  const hardcodedPass = "itfest2026";

  useEffect(() => {
    if (!showLogin) {
      // Fetch participants only if authorized
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
      setLoading(true); // fetch participants
    } else {
      alert("Invalid ID or Password!");
    }
  };

  if (showLogin) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
        <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full max-w-sm">
          <input
            type="text"
            placeholder="Admin ID"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            className="p-3 rounded bg-black border border-gray-700"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={adminPass}
            onChange={(e) => setAdminPass(e.target.value)}
            className="p-3 rounded bg-black border border-gray-700"
            required
          />
          <button
            type="submit"
            className="p-3 rounded bg-gradient-to-r from-blue-500 to-purple-600"
          >
            Login
          </button>
        </form>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Loading participants...</p>
      </main>
    );
  }

  if (!authorized) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
        <h1 className="text-3xl font-bold mb-4">Access Denied ❌</h1>
        <p>You do not have permission to view this page.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <table className="w-full text-left border border-gray-700">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">School</th>
            <th className="px-4 py-2">Class</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Events</th>
            <th className="px-4 py-2">T-Shirt</th>
            <th className="px-4 py-2">Payment</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((p) => (
            <tr key={p.id} className="border-b border-gray-700">
              <td className="px-4 py-2">{p.id}</td>
              <td className="px-4 py-2">{p.name}</td>
              <td className="px-4 py-2">{p.school}</td>
              <td className="px-4 py-2">{p.class_category}</td>
              <td className="px-4 py-2">{p.phone}</td>
              <td className="px-4 py-2">{p.email}</td>
              <td className="px-4 py-2">{p.events.join(", ")}</td>
              <td className="px-4 py-2">{p.tshirt_size}</td>
              <td className="px-4 py-2">{p.payment_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}