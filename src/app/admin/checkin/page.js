"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic import for QR scanner
const QrReader = dynamic(
  () => import("react-qr-reader").then((mod) => mod.default),
  { ssr: false }
);

export default function CheckIn() {
  // Preset admin credentials
  const PRESET_USER = "admin";
  const PRESET_PASS = "itfest2026";

  // Login state
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Check-in state
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");
  const [participant, setParticipant] = useState(null);
  const [count, setCount] = useState(0);
  const [scanning, setScanning] = useState(false);
  const [hasCamera, setHasCamera] = useState(false);

  // On load, detect camera
  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
      navigator.mediaDevices.enumerateDevices().then((devices) => {
        const videoInput = devices.some((d) => d.kind === "videoinput");
        setHasCamera(videoInput);
      });
    }
  }, []);

  // Fetch check-in count
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
    const audio = new Audio(type === "success" ? "/sounds/success.mp3" : "/sounds/error.mp3");
    audio.play();
  };

  // Preset login check
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
        }, 2500);
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

  // ===== Login prompt =====
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
                No camera detected on this device.
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
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center w-full max-w-md">
          <p><b>Name:</b> {participant.name}</p>
          <p><b>School:</b> {participant.school}</p>
          <p><b>Phone:</b> {participant.phone}</p>
          <p><b>Events:</b> {participant.events.join(", ")}</p>
        </div>
      )}
    </main>
  );
}