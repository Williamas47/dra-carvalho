"use client";

const WHATSAPP_NUMBER = "5514910149061";
const WHATSAPP_MSG = encodeURIComponent("Olá, Dra. Eduarda! Gostaria de agendar uma consulta.");

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #2E2E2E 0%, #555555 45%, #757575 100%)" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #C9A96E, transparent)", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #C9A96E, transparent)", transform: "translate(-30%, 30%)" }}
      />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, #C9A96E 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-16 w-full text-center">
        <span className="hidden md:block font-bold text-white mb-3" style={{ fontFamily: "Arial, sans-serif" }}>
          Eduarda Carvalho Advocacia Trabalhista
        </span>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Seja bem-vinda.
        </h1>

        <p className="text-xl md:text-2xl font-medium mb-4" style={{ color: "#C9A96E" }}>
          O apoio que você precisa para garantir os seus direitos trabalhistas.
        </p>

        <p className="text-base leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.85)" }}>
          Escritório de Advocacia especializado em demandas trabalhistas,{" "}
          <strong className="text-white">com atendimento exclusivo para mulheres.</strong>
        </p>

        <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.75)" }}>
          Atendemos online e presencialmente em Bauru (SP).
        </p>

        <div className="flex justify-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 hover:opacity-90"
            style={{ background: "#25D366" }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.133.558 4.133 1.535 5.875L0 24l6.336-1.508A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.016-1.378l-.36-.214-3.727.977.996-3.634-.234-.373A9.817 9.817 0 012.182 12C2.182 6.565 6.565 2.182 12 2.182S21.818 6.565 21.818 12 17.435 21.818 12 21.818z"/>
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#FDFAF8" />
        </svg>
      </div>
    </section>
  );
}
