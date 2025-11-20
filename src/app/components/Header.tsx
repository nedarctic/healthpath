// components/Header.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Zap, Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "How it Works", href: "/how-it-works" },
  { name: "Features", href: "/features" },
  { name: "Trust & Safety", href: "/trust" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop + Fixed Header */}
      <nav className="fixed top-0 left-0 right-0 bg-[#D1DDD1]/95 backdrop-blur-xl z-50 border-b border-[#439039]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <Image
                src="/healthpath-logo.svg"
                alt="HealthPath"
                width={48}
                height={48}
                className="w-12 h-12"
                priority
              />
              <span className="text-3xl font-bold tracking-tight text-[#015A2B]">
                HealthPath
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-[#015A2B]/80 hover:text-[#439039] transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}

              <Link href="/check" className="bg-[#439039] text-white px-8 py-3.5 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-[#015A2B] transition-all duration-300 flex items-center gap-2.5">
                <Zap className="w-5 h-5" />
                Start Free Check
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2"
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7 text-[#015A2B]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-[#D1DDD1] z-50 lg:hidden flex flex-col"
          onClick={(e) => e.target === e.currentTarget && setMobileMenuOpen(false)}
        >
          {/* Top bar with close button */}
          <div className="flex justify-between items-center p-6 border-b border-[#439039]/20">
            <Image
              src="/healthpath-logo.svg"
              alt="HealthPath"
              width={48}
              height={48}
              className="w-12 h-12"
              priority
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <X className="w-8 h-8 text-[#015A2B]" />
            </button>
          </div>

          {/* Centered Navigation Links */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-10 px-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-semibold text-[#015A2B]/80 hover:text-[#439039] transition-colors duration-300"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16"
            >
              <Link
                href="/check"
                className="bg-[#439039] text-white px-16 py-6 rounded-full font-bold text-2xl shadow-2xl hover:shadow-3xl hover:bg-[#015A2B] transition-all duration-300 flex items-center gap-4 group"
              >
                <Zap className="w-8 h-8 group-hover:scale-110 transition" />
                Start Free Check
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </>
  );
}