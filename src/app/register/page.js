"use client";

import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    school: "",
    class_category: "",
    phone: "",
    email: "",
    events: [],
    tshirt_size: "",
  });

  const [loading, setLoading] = useState(false);

  const eventsList = [
    "Olympiad",
    "Tech Quiz",
    "Programming Contest",
    "Hackathon",
    "Multimedia Presentation (Shark Tank)",
    "Treasure Hunt",
    "PUBG Tournament",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEventChange = (eventName) => {
    setForm((prev) => {
      const updatedEvents = prev.events.includes(eventName)
        ? prev.events.filter((e) => e !== eventName)
        : [...prev.events, eventName];
      return { ...prev, events: updatedEvents };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Registration failed");

      const data = await res.json();

      if (!data.success) {
        alert("Registration failed: " + (data.message || ""));
        setLoading(false);
        return;
      }

      const paymentRes = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          participant_id: data.participant_id,
          name: form.name,
          email: form.email,
          phone: form.phone,
        }),
      });

      if (!paymentRes.ok) throw new Error("Payment initiation failed");

      const paymentData = await paymentRes.json();

      if (paymentData.success && paymentData.GatewayPageURL) {
        window.location.href = paymentData.GatewayPageURL;
      } else {
        alert("Payment initiation failed: " + (paymentData.message || ""));
      }
    } catch (err) {
      console.error(err);
      alert(err.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-tr from-purple-900/30 via-black to-blue-900 text-white px-6 py-20 relative overflow-hidden">
      
      {/* Background Glow Circles */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        IT Fest Registration
      </h1>

      <form
        onSubmit={handleSubmit}
        className="relative max-w-2xl mx-auto bg-gray-900/80 backdrop-blur-sm p-10 rounded-3xl border border-gray-700 shadow-2xl shadow-purple-500/20 space-y-6"
      >
        {/* Full Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-gray-400 transition"
        />

        {/* School */}
        <input
          type="text"
          name="school"
          placeholder="School / College"
          required
          value={form.school}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-gray-400 transition"
        />

        {/* Class Category */}
        <select
          name="class_category"
          required
          value={form.class_category}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
        >
          <option value="">Class Category</option>
          <option value="6-8">6-8</option>
          <option value="9-10">9-10</option>
          <option value="11-12">11-12</option>
        </select>

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          required
          value={form.phone}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
        />

        {/* Events */}
        <div>
          <label className="block mb-3 font-semibold text-lg">Select Events</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {eventsList.map((event) => (
              <label key={event} className="flex gap-3 items-center p-3 rounded-lg bg-gray-800 hover:bg-purple-800/50 cursor-pointer transition">
                <input
                  type="checkbox"
                  value={event}
                  checked={form.events.includes(event)}
                  onChange={() => handleEventChange(event)}
                  className="w-5 h-5 accent-purple-500"
                />
                <span className="text-gray-200">{event}</span>
              </label>
            ))}
          </div>
        </div>

        {/* T-Shirt Size */}
        <select
          name="tshirt_size"
          required
          value={form.tshirt_size}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
        >
          <option value="">T-Shirt Size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-2xl font-bold text-lg transition-transform ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-purple-800 hover:scale-105 shadow-lg shadow-purple-500/50"
          }`}
        >
          {loading ? "Processing..." : "Submit Registration"}
        </button>
      </form>
    </main>
  );
}