// app/features/page.tsx
"use client";

import { motion } from "framer-motion";
import { 
  Shield, Brain, Stethoscope, Users, Smartphone, Lock, 
  Clock, Zap, HeartPulse, FileCheck, Globe, ChevronRight 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Adaptive AI Symptom Checker",
    desc: "Natural language input (voice or text) with smart, personalized follow-up questions based on age, sex, history, and risk factors.",
    highlight: true
  },
  {
    icon: Shield,
    title: "Guaranteed Human Review",
    desc: "Every medium or high-risk case is reviewed by a licensed doctor within 1–4 hours — 24/7 global roster.",
    highlight: true
  },
  {
    icon: Clock,
    title: "Red Alert → Doctor in <1 Hour",
    desc: "High-risk cases get priority video consult + optional direct ER handover with pre-filled summary.",
    highlight: true
  },
  {
    icon: FileCheck,
    title: "Lifetime Health Passport",
    desc: "All symptoms, consults, labs, and imaging in one encrypted, user-owned wallet. AI tracks patterns over years.",
    highlight: false
  },
  {
    icon: HeartPulse,
    title: "Wearables & Continuous Monitoring",
    desc: "Seamless integration with Apple Health, Google Fit, Oura, Whoop — catch sub-clinical trends early.",
    highlight: false
  },
  {
    icon: Smartphone,
    title: "Secure Photo & Visual Analysis",
    desc: "Upload rashes, moles, throat, eyes, wounds — analyzed by FDA/CE-cleared AI tools with privacy-first processing.",
    highlight: true
  },
  {
    icon: Users,
    title: "Family & Pediatric Mode",
    desc: "One account for the whole family. Age-adjusted algorithms and pediatric specialist routing.",
    highlight: false
  },
  {
    icon: Zap,
    title: "One-Click Lab & Imaging Booking",
    desc: "Instant appointment with Quest, LabCorp, Synlab, etc. — results flow straight back into your passport.",
    highlight: false
  },
  {
    icon: Globe,
    title: "Automated Preventive Reminders",
    desc: "Personalized screening schedules based on USPSTF, NICE, family history, genomics, and your ongoing data.",
    highlight: false
  },
  {
    icon: Lock,
    title: "Bank-Grade Security & Ownership",
    desc: "End-to-end encryption · GDPR/HIPAA compliant · You own and can delete all data anytime · No data selling, ever.",
    highlight: true
  }
];

export default function FeaturesPage() {
  return (
    <>
      <main className="pt-20 bg-[#D1DDD1] min-h-screen">
        {/* Hero Section */}
        <section className="px-6 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl lg:text-7xl font-black text-[#015A2B] leading-tight">
                Built for Real Prevention<br />
                <span className="text-[#439039]">From Day One</span>
              </h1>
              <p className="mt-8 text-xl lg:text-2xl text-[#015A2B]/80 max-w-4xl mx-auto leading-relaxed">
                We don’t just check symptoms. We close the loop with human doctors, labs, and lifelong tracking — 
                so serious conditions never catch you off guard.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-6 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative overflow-hidden rounded-3xl p-10 lg:p-12 transition-all duration-500
                    ${feature.highlight 
                      ? "bg-white shadow-2xl border-2 border-[#439039]/30" 
                      : "bg-white/70 backdrop-blur-sm shadow-xl border border-[#439039]/10"
                    } hover:shadow-3xl hover:-translate-y-2`}
                >
                  {/* Highlight Badge */}
                  {feature.highlight && (
                    <div className="absolute top-0 right-0 bg-[#439039] text-white px-6 py-2 rounded-bl-2xl rounded-tr-3xl text-sm font-bold">
                      Core Feature
                    </div>
                  )}

                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl shrink-0 flex items-center justify-center
                      ${feature.highlight ? "bg-[#439039]" : "bg-[#439039]/10"}`}>
                      <feature.icon className={`w-9 h-9 ${feature.highlight ? "text-white" : "text-[#439039]"}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#015A2B] mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-[#015A2B]/80 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-24 bg-linear-to-b from-transparent to-[#439039]/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-black text-[#015A2B] mb-8">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-xl lg:text-2xl text-[#015A2B]/80 mb-12">
              Join thousands who caught it early — because they didn’t wait.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/check"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-[#439039] text-white px-12 py-6 rounded-full text-2xl font-bold shadow-2xl hover:bg-[#015A2B] transition-all"
              >
                Start Free Symptom Check
                <ChevronRight className="ml-3 w-8 h-8" />
              </motion.a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}