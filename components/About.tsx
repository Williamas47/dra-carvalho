import { Award, CircleCheck, Heart } from "lucide-react";

const highlights = [
  "Especialista em Direito Trabalhista e Previdenciário",
  "Consultas presenciais em Bauru/SP e online para todo o Brasil",
  "Atendimento humanizado com foco na mulher trabalhadora",
  "Comprometimento com resultados e transparência no processo",
];

export default function About() {
  return (
    <section id="sobre" className="py-24" style={{ background: "#FDFAF8" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main image box */}
              <div
                className="w-full h-[420px] rounded-3xl flex flex-col items-center justify-center"
                style={{
                  background: "linear-gradient(145deg, #F5EDF4, #EDD8EA)",
                }}
              >
                <div className="text-7xl mb-4">👩‍⚖️</div>
                <p className="text-sm" style={{ color: "#9B5997" }}>Foto profissional</p>
              </div>

              {/* Decorative square */}
              <div
                className="absolute -bottom-5 -right-5 w-36 h-36 rounded-2xl -z-10"
                style={{ background: "linear-gradient(135deg, #C9A96E, #E8D5A3)" }}
              />
              <div
                className="absolute -top-5 -left-5 w-24 h-24 rounded-2xl -z-10"
                style={{ background: "linear-gradient(135deg, #5E2D5B, #9B5997)" }}
              />

              {/* Experience badge */}
              <div
                className="absolute bottom-8 -right-6 bg-white rounded-2xl px-5 py-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #5E2D5B, #9B5997)" }}>
                    <Award size={20} color="white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: "#5E2D5B" }}>5+</div>
                    <div className="text-xs" style={{ color: "#6B6170" }}>Anos de atuação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-3">
              <Heart size={16} style={{ color: "#C9A96E" }} />
              <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "#C9A96E" }}>
                Sobre a advogada
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "Georgia, serif", color: "#2C1A2E" }}
            >
              Dra. Eduarda Carvalho
            </h2>

            <div className="section-divider mb-6" />

            <p className="text-base leading-relaxed mb-4" style={{ color: "#6B6170" }}>
              Advogada com sólida formação em Direito, especializada em <strong style={{ color: "#5E2D5B" }}>Direito
              Trabalhista</strong> e <strong style={{ color: "#5E2D5B" }}>Previdenciário</strong>, Dra. Eduarda
              Carvalho construiu sua carreira com o firme propósito de defender os trabalhadores e
              garantir seus direitos perante empregadores e o INSS.
            </p>

            <p className="text-base leading-relaxed mb-8" style={{ color: "#6B6170" }}>
              Sediada em <strong style={{ color: "#5E2D5B" }}>Bauru/SP</strong>, atende clientes de
              toda a região e também realiza <strong style={{ color: "#5E2D5B" }}>consultas
              online</strong> para todo o Brasil, oferecendo um atendimento acolhedor, claro e eficiente —
              especialmente voltado ao público feminino.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CircleCheck size={18} style={{ color: "#9B5997", marginTop: 2, flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "#2C1A2E" }}>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/5514999999999?text=Olá%2C+Dra.+Eduarda!+Gostaria+de+agendar+uma+consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #5E2D5B, #9B5997)" }}
            >
              Agendar consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
