'use client';

import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Stethoscope, 
  Heart,
  Smartphone,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Lock,
  Activity
} from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function HealthPathHomepage() {
  

  return (
    <>
      <div className="min-h-screen bg-[#D1DDD1] text-[#015A2B] overflow-x-hidden">
        {/* Hero - More Emotional Impact */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center bg-[#439039]/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Shield className="w-4 h-4 mr-2 text-[#439039]" />
                  Used by 50,000+ people who caught it early
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                  Catch it before<br />
                  <span className="text-[#439039]">it catches you.</span>
                </h1>
                <p className="mt-8 text-2xl text-[#015A2B]/80 leading-relaxed font-light">
                  AI that understands your symptoms. Doctors who act fast.<br />
                  <span className="font-semibold text-[#015A2B]">From worry to clarity — in minutes, not months.</span>
                </p>

                <div className="mt-12 flex flex-col sm:flex-row gap-6">
                  <button className="group bg-[#439039] text-white px-10 py-6 rounded-2xl text-xl font-bold hover:bg-[#015A2B] transition-all shadow-2xl hover:shadow-3xl flex items-center justify-center transform hover:scale-105">
                    Start Your Free Check Now
                    <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-2 transition" />
                  </button>
                  <button className="border-4 border-[#439039] text-[#015A2B] px-10 py-6 rounded-2xl text-xl font-bold hover:bg-[#439039] hover:text-white transition-all">
                    See How It Works
                  </button>
                </div>

                <div className="mt-16 flex flex-wrap gap-8 text-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-7 h-7 text-[#439039]" />
                    <span>No waiting rooms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-7 h-7 text-[#439039]" />
                    <span>Doctor in &lt;4 hours if needed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock className="w-7 h-7 text-[#439039]" />
                    <span>HIPAA & GDPR secure</span>
                  </div>
                </div>
              </motion.div>

              {/* Hero Visual - More Premium Feel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-[#439039]/20 rounded-3xl blur-3xl -z-10"></div>
                <div className="bg-linear-to-br from-white via-[#D1DDD1]/50 to-white rounded-3xl p-10 shadow-2xl border border-[#439039]/10">
                  <div className="text-center mb-8">
                    <Activity className="w-20 h-20 text-[#439039] mx-auto mb-4" />
                    <p className="text-5xl font-black text-[#015A2B]">98.7%</p>
                    <p className="text-xl text-[#015A2B]/80 mt-2">Early detection success rate</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {['Cancer', 'Heart Disease', 'Stroke', 'Sepsis'].map((condition) => (
                      <div key={condition} className="bg-[#439039]/10 rounded-2xl p-6 text-center hover:bg-[#439039]/20 transition">
                        <Heart className="w-12 h-12 text-[#439039] mx-auto mb-3" />
                        <p className="font-bold">{condition}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-white py-12 border-y-4 border-[#439039]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "50K+", label: "Lives protected" },
                { number: "1.2M+", label: "Symptoms analyzed" },
                { number: "4.9★", label: "Patient happiness" },
                { number: "24/7", label: "Doctor roster" }
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-5xl font-black text-[#439039]">{stat.number}</p>
                  <p className="text-[#015A2B]/80 mt-2 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - More Visual */}
        <section id="how-it-works" className="py-24 px-4">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black mb-6">Peace of Mind in 3 Simple Steps</h2>
            <p className="text-2xl text-[#015A2B]/70">Most users finish in under 3 minutes</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: Smartphone,
                title: "Tell us how you feel",
                desc: "Voice, text, or photo. Our AI asks smart follow-ups based on your age, history, and risk factors.",
                color: "from-[#439039] to-[#015A2B]"
              },
              {
                icon: Brain,
                title: "AI triages instantly",
                desc: "Analyzes your symptoms against millions of medical cases and your personal health trends.",
                color: "from-[#015A2B] to-[#439039]"
              },
              {
                icon: Stethoscope,
                title: "Get real care, fast",
                desc: "Green = safe plan<br />Yellow = doctor in hours<br />Red = priority care now + ER handover",
                color: "from-[#439039] to-[#015A2B]"
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-linear-to-br opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition"></div>
                <div className="bg-white rounded-3xl p-10 shadow-2xl border border-[#439039]/10 h-full">
                  <div className={`w-20 h-20 rounded-2xl bg-linear-to-br ${step.color} flex items-center justify-center mb-8`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black mb-4">{step.title}</h3>
                  <p className="text-lg text-[#015A2B]/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: step.desc }} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA - More Urgent & Beautiful */}
        <section className="py-32 px-4 bg-linear-to-br from-[#015A2B] via-[#439039] to-[#015A2B] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-linear(circle_at_center,rgba(209,221,209,0.15)_0%,transparent_70%)]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl sm:text-7xl font-black text-white mb-8">
                Don’t become a statistic.<br />
                <span className="text-[#D1DDD1]">Act early.</span>
              </h2>
              <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
                Thousands already caught cancer, heart disease, and stroke early — because they used HealthPath.
              </p>
              <button className="bg-white text-[#015A2B] px-12 py-8 rounded-3xl text-3xl font-black hover:bg-[#D1DDD1] transition-all shadow-3xl hover:shadow-4xl transform hover:scale-105">
                Start Free Check — Takes 2 Minutes
                <ChevronRight className="inline ml-4 w-10 h-10" />
              </button>
              <p className="mt-8 text-white/80 text-lg">
                No credit card • Instant results • Doctor review if needed
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}