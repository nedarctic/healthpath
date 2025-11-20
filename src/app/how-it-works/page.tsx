"use client";

import { motion } from "framer-motion";
import { 
  Smartphone, Brain, Stethoscope, Shield, Clock, 
  ChevronRight, CheckCircle2, ArrowRight, Zap 
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Tell us how you feel",
    desc: "Voice or text in natural language · Takes 2–3 minutes · Smart questions adapt to your age, sex, history, and risk factors · Upload photos if needed (rashes, moles, wounds…)"
  },
  {
    number: "02",
    icon: Brain,
    title: "AI triages instantly",
    desc: "Analyzes against millions of cases + your personal trends · Uses latest medical guidelines (USPSTF, NICE, etc.) · Longitudinal tracking across years, not just today"
  },
  {
    number: "03",
    icon: Shield,
    title: "Clear result — never left wondering",
    desc: "<span class='text-green-600 font-bold'>Green →</span> Safe self-care plan + monitoring<br><span class='text-amber-500 font-bold'>Yellow →</span> Doctor review guaranteed in 1–4 hours<br><span class='text-red-600 font-bold'>Red →</span> Priority doctor in <1 hour + ER handover option"
  }
];

export default function HowItWorksPage() {
  return (
    <>
      <main className="pt-20 bg-[#D1DDD1] min-h-screen">
        {/* Hero */}
        <section className="px-6 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-black text-[#015A2B] leading-tight">
                From Worry to Clarity<br />
                <span className="text-[#439039]">in Minutes</span>
              </h1>
              <p className="mt-8 text-xl lg:text-2xl text-[#015A2B]/80 max-w-4xl mx-auto leading-relaxed">
                Most people finish the entire process in under 3 minutes. 
                No forms. No waiting rooms. Just answers — and real care when you need it.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The 3 Core Steps – Large, Beautiful Cards */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-3xl p-10 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4"
                >
                  {/* Step Number Background */}
                  <div className="absolute -top-6 -left-6 text-9xl font-black text-[#439039]/5 select-none">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 w-20 h-20 bg-linear-to-br from-[#439039] to-[#015A2B] rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-black text-[#015A2B] mb-6">
                    {step.title}
                  </h3>

                  <p 
                    className="text-lg lg:text-xl text-[#015A2B]/80 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: step.desc }}
                  />

                  {/* Connecting Arrow (hidden on mobile) */}
                  {i < 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-10 -translate-y-1/2 text-[#439039]/30 group-hover:text-[#439039]/60 transition">
                      <ArrowRight className="w-20 h-20" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Levels Explained Visually */}
        <section className="px-6 py-24 bg-white/70">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-[#015A2B]">
                Three Clear Outcomes — Always Actionable
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  level: "Green",
                  color: "bg-green-500",
                  title: "Low Risk",
                  time: "Instant",
                  desc: "Personalized self-care advice · Monitoring plan · Re-check reminders"
                },
                {
                  level: "Yellow",
                  color: "bg-amber-500",
                  title: "Medium Risk",
                  time: "Within 1–4 hours",
                  desc: "Guaranteed video/audio consult with a licensed doctor · One-click lab/imaging booking"
                },
                {
                  level: "Red",
                  color: "bg-red-600",
                  title: "High Risk",
                  time: "Within 1 hour",
                  desc: "Priority doctor access · Optional direct ER handover with pre-filled clinical summary"
                }
              ].map((outcome, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className={`${outcome.color} w-32 h-32 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl`}>
                    <CheckCircle2 className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-[#015A2B] mb-2">{outcome.level}</h3>
                  <p className="text-5xl font-black text-[#439039] mb-4">{outcome.title}</p>
                  <p className="text-2xl font-bold text-[#015A2B]/80 mb-4">{outcome.time}</p>
                  <p className="text-lg text-[#015A2B]/70 leading-relaxed px-8">
                    {outcome.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-32 bg-linear-to-b from-[#439039]/10 via-[#439039]/5 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-black text-[#015A2B] mb-8">
              Ready When You Are
            </h2>
            <p className="text-xl lg:text-2xl text-[#015A2B]/80 mb-12 max-w-2xl mx-auto">
              It takes less time than brushing your teeth — and can catch something serious months earlier.
            </p>

            <motion.a
              href="/check"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center bg-[#439039] text-white px-12 py-6 rounded-full text-2xl font-bold shadow-2xl hover:bg-[#015A2B] transition-all"
            >
              <Zap className="mr-3 w-8 h-8 group-hover:scale-110 transition" />
              Start Free Symptom Check Now
              <ChevronRight className="ml-3 w-8 h-8 group-hover:translate-x-2 transition" />
            </motion.a>

            <p className="mt-8 text-lg text-[#015A2B]/70">
              No account needed · Takes &lt; 3 minutes · Doctor escalation if required
            </p>
          </div>
        </section>
      </main>
    </>
  );
}