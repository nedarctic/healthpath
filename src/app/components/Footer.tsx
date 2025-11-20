'use client';

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  Product: ["Features", "Pricing", "For Families", "For Employers"],
  Company: ["About Us", "Blog", "Careers", "Press & Media"],
  Legal: ["Privacy Policy", "Terms of Service", "HIPAA Notice", "Medical Disclaimer"],
  Support: ["Help Center", "Contact Us", "Trust & Safety", "Status"],
};

export default function Footer() {
  return (
    <footer className="bg-[#015A2B] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-16">
          {/* Logo + Description */}
          <div className="col-span-2 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <Image
                src="/healthpath-logo.svg"
                alt="HealthPath Logo"
                width={56}
                height={56}
                className="w-14 h-14"
                priority
              />
              <span className="text-2xl font-bold tracking-tight">HealthPath</span>
            </motion.div>
            <p className="text-white/70 text-lg leading-relaxed max-w-sm">
              Your early-warning system for serious health risks. 
              AI-powered triage meets guaranteed human care — before it becomes an emergency.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-6 text-white">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group flex items-center text-white/70 hover:text-white transition-all duration-200 text-base"
                    >
                      <ChevronRight className="w-4 h-4 mr-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      <span className="group-hover:translate-x-2 transition-transform">
                        {link}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/60"
        >
          <p>© {new Date().getFullYear()} HealthPath, Inc. All rights reserved.</p>
          
          <div className="flex items-center gap-8">
            <p className="italic">
              Not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">HIPAA</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Background Accent */}
      <div className="h-2 bg-gradient-to-r from-[#439039] via-[#439039]/70 to-[#439039]" />
    </footer>
  );
}