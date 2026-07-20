"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Nossos Serviços", href: "#areas" },
  { label: "Atendimento Online", href: "#online" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_NUMBER = "5514910149061";
const WHATSAPP_MSG = encodeURIComponent("Olá, Dra. Eduarda! Gostaria de agendar uma consulta.");

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#inicio")}
          className="flex items-center gap-2 group"
        >
          <span
            className="font-bold text-lg md:text-base leading-tight text-left"
            style={{ color: scrolled ? "#555555" : "#ffffff" }}
          >
            Eduarda Carvalho Advocacia Trabalhista
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm font-medium transition-colors hover:text-gray-300"
              style={{ color: scrolled ? "#555555" : "#ffffff" }}
            >
              {link.label}
            </button>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #555555, #8A8A8A)" }}
          >
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg"
          style={{ color: scrolled ? "#555555" : "#ffffff" }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t mt-3 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm font-medium text-left py-2 border-b border-gray-100"
              style={{ color: "#555555" }}
            >
              {link.label}
            </button>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 py-3 rounded-full text-sm font-semibold text-white text-center"
            style={{ background: "linear-gradient(135deg, #555555, #8A8A8A)" }}
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </header>
  );
}
