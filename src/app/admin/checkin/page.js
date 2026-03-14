"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic import for QR scanner
const QrReader = dynamic(
  () => import("react-qr-reader").then((mod) => mod.default),
  { ssr: false }
);

export default function CheckIn() {
  const PRESET_USER = "admin";
  const PRESET_PASS = "itfest2026";

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");
  const [participant, setParticipant] = useState(null);
  const [count, setCount] = useState(0);
  const [scanning, setScanning] = useState(false);
  const [hasCamera, setHasCamera] = useState(false);

  // ===== Camera detection =====
  useEffect(() => {
    const checkCamera = async () => {
      try {
        // Request camera access
        await navigator.mediaDevices.getUserMedia({ video: true });
        setHasCamera(true);
      } catch (err) {
        setHasCamera(false);
      }
    };
    checkCamera();
  }, []);

  const fetchCount = async () => {
    try {
      const res = await fetch("/api/admin/count");
      const data = await res.json();
      setCount(data.count || 0);
    } catch (err) {
      console.error(err);
    }
  };

  const playSound = (type) => {
    const audio = new Audio(
      type === "success" ? "/sounds/success.mp3" : "/sounds/error.mp3"
    );
    audio.play();
  };

  const login = () => {
    if (username === PRESET_USER && password === PRESET_PASS) {
      setLoggedIn(true);
      fetchCount();
    } else {
      alert("Invalid ID or Password");
    }
  };

  const handleCheckIn = async () => {
    if (!input) return;
    const body = input.length > 15 ? { ticket_id: input } : { phone: input };

    try {
      const res = await fetch("/api/admin/checkin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("✅ Checked In");
        setParticipant(data.participant);
        playSound("success");
        setInput("");
        fetchCount();
        setTimeout(() => {
          setStatus("");
          setParticipant(null);
        }, 4000);
      } else {
        setStatus("❌ " + data.message);
        setParticipant(data.participant || null);
        playSound("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Something went wrong");
      playSound("error");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleCheckIn();
  };

  const handleScan = (result) => {
    if (result) {
      setInput(result);
      setScanning(false);
      handleCheckIn();
    }
  };

  const handleError = (err) => {
    console.error(err);
    alert("Camera error. Please check permissions.");
    setScanning(false);
  };

  // ===== Login page =====
  if (!loggedIn) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-6">
        <h1 className="text-4xl font-bold mb-6">Admin Login</h1>
        <input
          placeholder="ID"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-3 mb-4 rounded bg-gray-800 border border-gray-700 w-72"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 mb-4 rounded bg-gray-800 border border-gray-700 w-72"
        />
        <button
          onClick={login}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded font-semibold w-72"
        >
          Login
        </button>
      </main>
    );
  }

  // ===== Check-in page =====
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-gray-900 to-black text-white px-6 pt-12">
      <h1 className="text-4xl font-bold mb-2">IT Fest Check-In Desk</h1>
      <p className="mb-6 text-lg">Checked In: {count}</p>

      <div className="flex flex-col items-center w-full max-w-md mb-6">
        <input
          autoFocus
          type="text"
          placeholder="Scan QR or Enter Phone"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="p-4 rounded bg-gray-800 border border-gray-700 w-full text-center text-lg mb-4"
        />

        <button
          onClick={() => setScanning(!scanning)}
          className="mb-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded font-semibold w-full"
        >
          {scanning ? "Close QR Scanner" : "Scan QR Code"}
        </button>

        {scanning && (
          <div className="w-full mb-4 border border-gray-700 rounded overflow-hidden">
            {hasCamera ? (
              <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: "100%" }}
              />
            ) : (
              <p className="text-red-400 text-center p-4">
                No camera detected or permission denied.
              </p>
            )}
          </div>
        )}

        <button
          onClick={handleCheckIn}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded font-semibold w-full"
        >
          Check In
        </button>
      </div>

      {status && <p className="text-2xl font-bold mb-4">{status}</p>}

      {participant && (
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-left w-full max-w-md space-y-2">
          <p><b>Ticket ID:</b> {participant.ticket_id}</p>
          <p><b>Name:</b> {participant.name}</p>
          <p><b>School:</b> {participant.school}</p>
          <p><b>Class:</b> {participant.class_category || "-"}</p>
          <p><b>Phone:</b> {participant.phone}</p>
          <p><b>Events:</b> {Array.isArray(participant.events) ? participant.events.join(", ") : participant.events || "-"}</p>
          <p><b>T-Shirt Size:</b> {participant.tshirt_size || "-"}</p>
          <p><b>Payment Status:</b> {participant.payment_status || "-"}</p>
          <p className={`font-semibold ${participant.checked_in ? "text-green-400" : "text-red-400"}`}>
            {participant.checked_in ? "✅ Checked In" : "❌ Not Checked In"}
          </p>
        </div>
      )}
    </main>
  );
}