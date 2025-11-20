// app/trust/page.tsx
"use client";

import { motion } from "framer-motion";
import { 
  Shield, Lock, Stethoscope, ChevronRight, Globe, CheckCircle2,
  HeartHandshake, Building2, ScrollText, Users,
  FileLock2
} from "lucide-react";

export default function TrustPage() {
  return (
    <>
      <main className="pt-20 bg-[#D1DDD1] min-h-screen">
        {/* Hero – Immediate Reassurance */}
        <section className="px-6 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 bg-[#439039]/10 px-6 py-3 rounded-full text-[#439039] font-semibold mb-8">
                <Shield className="w-6 h-6" />
                Your health data is sacred to us
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-[#015A2B] leading-tight">
                Trust Is Everything<br />
                <span className="text-[#439039]">And We Earn It Every Day</span>
              </h1>

              <p className="mt-10 text-xl lg:text-2xl text-[#015A2B]/80 max-w-4xl mx-auto leading-relaxed">
                We’re not just another app. We’re the platform doctors themselves recommend 
                when they want their own families protected.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Trust Pillars – Large Cards */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
            {[
              {
                icon: Stethoscope,
                title: "Licensed Doctors Only",
                desc: "Every yellow/red case is reviewed by a board-certified physician. No exceptions. No nurse practitioners pretending to be doctors. No AI-only decisions.",
                badge: "24/7 Global Roster"
              },
              {
                icon: Lock,
                title: "You Own Your Data — Truly",
                desc: "End-to-end encryption. Zero-knowledge architecture where possible. You can export or permanently delete everything with one tap. We never sell or share your data.",
                badge: "GDPR + HIPAA Compliant"
              },
              {
                icon: FileLock2,
                title: "No Final Diagnosis by AI",
                desc: "AI triages risk and suggests possibilities — but only a human doctor can confirm and advise next steps. This is non-negotiable for liability and safety.",
                badge: "Clear Legal Framework"
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-10 lg:p-12 shadow-2xl border-2 border-[#439039]/20 hover:border-[#439039]/50 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="w-20 h-20 bg-[#439039] rounded-2xl flex items-center justify-center mb-8">
                  <pillar.icon className="w-10 h-10 text-white" />
                </div>
                <div className="inline-block bg-[#439039] text-white px-5 py-2 rounded-full text-sm font-bold mb-6">
                  {pillar.badge}
                </div>
                <h3 className="text-3xl font-black text-[#015A2B] mb-6">{pillar.title}</h3>
                <p className="text-lg text-[#015A2B]/80 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Compliance & Certifications */}
        <section className="px-6 py-20 bg-white/70">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-[#015A2B]">
                Regulated Like a Medical Device — Because We Are One
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { name: "HIPAA Compliant", org: "U.S. Department of Health" },
                { name: "GDPR Compliant", org: "European Union" },
                { name: "FDA SaMD Pathway", org: "Class II in progress" },
                { name: "CE Marked (EU)", org: "MDR Annex XVI" },
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-[#439039]/10 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-[#439039] mx-auto mb-4" />
                  <p className="font-bold text-xl text-[#015A2B]">{cert.name}</p>
                  <p className="text-[#015A2B]/70 mt-2">{cert.org}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Doctor & Patient Voices */}
        <section className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black text-center text-[#015A2B] mb-16">
              What Doctors & Families Actually Say
            </h2>

            <div className="grid lg:grid-cols-3 gap-10">
              {[
                {
                  quote: "I caught my breast cancer at stage 0 because HealthPath flagged progressive symptoms over 14 months and forced me to get screened. I now recommend it to all my patients.",
                  author: "Dr. Sarah Chen, MD",
                  role: "Oncologist, London"
                },
                {
                  quote: "As a GP, I sleep better knowing my patients have 24/7 escalation to real colleagues — not just WebMD and panic.",
                  author: "Dr. James Mitchell",
                  role: "Family Physician, Sydney"
                },
                {
                  quote: "My 7-year-old had a rash that looked ‘normal’. HealthPath’s photo AI + pediatric review got us to hospital in time for early Kawasaki diagnosis. Thank you.",
                  author: "Maria R., Mother of 2",
                  role: "California"
                }
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white/80 backdrop-blur rounded-3xl p-10 shadow-xl border border-[#439039]/10"
                >
                  <HeartHandshake className="w-12 h-12 text-[#439039] mb-6" />
                  <p className="text-xl italic text-[#015A2B]/90 mb-8 leading-relaxed">
                    “{testimonial.quote}”
                  </p>
                  <div>
                    <p className="font-bold text-[#015A2B]">{testimonial.author}</p>
                    <p className="text-[#015A2B]/70">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-24 bg-linear-to-b from-[#439039]/10 to-[#439039]/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-black text-[#015A2B] mb-8">
              You Deserve Peace of Mind
            </h2>
            <p className="text-xl lg:text-2xl text-[#015A2B]/80 mb-12">
              Start using the platform trusted by doctors for their own families.
            </p>
            <motion.a
              href="/check"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-[#439039] text-white px-12 py-6 rounded-full text-2xl font-bold shadow-2xl hover:bg-[#015A2B] transition-all"
            >
              Start Free Symptom Check
              <ChevronRight className="ml-3 w-8 h-8" />
            </motion.a>
            <p className="mt-6 text-lg text-[#015A2B]/70">
              No credit card • Takes under 3 minutes • Doctor review if needed
            </p>
          </div>
        </section>
      </main>
    </>
  );
}