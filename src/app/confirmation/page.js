"use client";

import { useEffect, useState } from "react";

export default function Confirmation() {
  const [status, setStatus] = useState("Checking payment status...");
  const [tranId, setTranId] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tran_id = params.get("tran_id");

    if (!tran_id) {
      setStatus("Payment info not found!");
      return;
    }

    setTranId(tran_id);

    fetch("/api/confirm-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tran_id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus("Payment Successful 🎉");
          setSuccess(true);
        } else {
          setStatus("Payment not verified ❌");
        }
      })
      .catch(() => {
        setStatus("Server error while checking payment ❌");
      });
  }, []);

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center bg-[#050505] text-white px-6 overflow-hidden">

      {/* Background Glow Circles */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Status Card */}
      <div className="relative z-10 bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-2xl max-w-lg w-full text-center space-y-4">
        <h1 className={`text-3xl font-bold ${success ? "text-green-400" : "text-red-400"}`}>
          {status}
        </h1>

        {success && (
          <p className="text-gray-200 text-lg">
            Check your email — your ticket has been sent there ✅
          </p>
        )}

        {tranId && (
          <p className="text-gray-400 break-all">
            Transaction ID: <span className="font-mono">{tranId}</span>
          </p>
        )}

        <a
          href="/"
          className="inline-block mt-4 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition transform shadow-lg shadow-purple-500/30 font-semibold"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}