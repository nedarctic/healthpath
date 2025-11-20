// app/check/page.tsx   (or app/start-free-check/page.tsx)
"use client";

import { motion } from "framer-motion";
import { Mic, Send, Upload, ChevronRight, Shield, Zap } from "lucide-react";
import { useState } from "react";

export default function StartFreeCheckPage() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);

    // This is where you call your backend API
    try {
      const response = await fetch("/api/symptom-check/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input.trim(),
          // Optional anonymous session ID (you can generate client-side)
          sessionId: localStorage.getItem("hp_session") || crypto.randomUUID(),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Save session token or ID if returned
        if (data.sessionId) localStorage.setItem("hp_session", data.sessionId);
        // Redirect to the full adaptive questionnaire
        window.location.href = `/check/${data.sessionId || "flow"}`;
      }
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  return (
    <>
      <main className="pt-20 bg-[#D1DDD1] min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl w-full">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-7xl font-black text-[#015A2B] leading-tight">
              How are you feeling<br />
              <span className="text-[#439039]">right now?</span>
            </h1>
            <p className="mt-8 text-xl lg:text-2xl text-[#015A2B]/80">
              Tell us in your own words — voice or text. Takes under 3 minutes.
            </p>
          </motion.div>

          {/* Input Card */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border-2 border-[#439039]/20"
          >
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. I’ve had a persistent headache for 4 days, slight fever, and feel unusually tired… (or just tap the mic and speak)"
                rows={6}
                className="w-full px-6 py-6 pr-16 text-lg text-[#015A2B] bg-[#D1DDD1]/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#439039]/30 resize-none placeholder-[#015A2B]/50"
                required
              />

              {/* Voice & Upload Buttons */}
              <div className="absolute bottom-4 right-4 flex gap-3">
                <button
                  type="button"
                  className="p-4 bg-[#439039]/10 rounded-full hover:bg-[#439039]/20 transition"
                  aria-label="Voice input"
                >
                  <Mic className="w-6 h-6 text-[#439039]" />
                </button>
                <button
                  type="button"
                  className="p-4 bg-[#439039]/10 rounded-full hover:bg-[#439039]/20 transition"
                  aria-label="Upload photo"
                >
                  <Upload className="w-6 h-6 text-[#439039]" />
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="mt-8 w-full bg-[#439039] text-white py-6 rounded-2xl font-bold text-xl shadow-xl hover:bg-[#015A2B] disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 group"
            >
              {isLoading ? (
                "Analyzing..."
              ) : (
                <>
                  <Zap className="w-7 h-7 group-hover:scale-110 transition" />
                  Start My Free Check
                  <ChevronRight className="w-7 h-7 group-hover:translate-x-2 transition" />
                </>
              )}
            </button>

            {/* Trust Bar */}
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-[#015A2B]/70 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#439039]" />
                <span>100% private · No account needed</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#439039]" />
                <span>Doctor review in &lt;4h if needed</span>
              </div>
            </div>
          </motion.form>

          {/* Mini Testimonials */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              "Caught my husband’s stroke symptoms early — thank you.",
              "Took 2 minutes. Doctor called me 40 minutes later.",
              "Finally an app that doesn’t leave you hanging.",
            ].map((t, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center italic text-[#015A2B]/70 text-lg"
              >
                “{t}”
              </motion.p>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}