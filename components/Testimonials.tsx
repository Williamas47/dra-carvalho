import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana S.",
    role: "Reclamante Trabalhista",
    text: "A Dra. Eduarda foi incrível! Me ajudou a recuperar mais de 3 anos de horas extras que não recebi. Atendimento atencioso e sempre me manteve informada sobre tudo.",
    stars: 5,
    city: "Bauru/SP",
  },
  {
    name: "Cristiane L.",
    text: "Estava tendo problemas com o INSS há mais de um ano e ela resolveu em 4 meses. Profissional competente e muito humana. Recomendo de olhos fechados!",
    role: "Beneficiária de Auxílio-Doença",
    stars: 5,
    city: "Lins/SP",
  },
  {
    name: "Fernanda T.",
    text: "Fiz a consulta online e foi muito prática. Ela me explicou todos os meus direitos com clareza e paciência. Me senti segura e acolhida durante todo o processo.",
    role: "Consulta Online",
    stars: 5,
    city: "São Paulo/SP",
  },
  {
    name: "Juliana R.",
    text: "Passei por assédio moral no trabalho e não sabia o que fazer. A Dra. Eduarda me orientou, entrou com a ação e conseguimos uma boa indenização. Muito grata!",
    role: "Ação de Assédio Moral",
    stars: 5,
    city: "Bauru/SP",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" style={{ background: "#F2F2F2" }} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "#C9A96E" }}>
            Depoimentos
          </span>
          <h2
            className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4"
            style={{ fontFamily: "Arial, sans-serif", color: "#555555" }}
          >
            O que dizem nossas clientes
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white rounded-3xl p-7 card-hover ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={16} fill="#C9A96E" style={{ color: "#C9A96E" }} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base leading-relaxed mb-6 italic" style={{ color: "#555555" }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "#F2F2F2" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #555555, #8A8A8A)" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#555555" }}>{t.name}</div>
                  <div className="text-xs" style={{ color: "#8A8A8A" }}>
                    {t.role} · {t.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-sm mb-4" style={{ color: "#666666" }}>
            Seja a próxima a ter seus direitos defendidos.
          </p>
          <a
            href="https://wa.me/5514910149072?text=Olá%2C+Dra.+Eduarda!+Gostaria+de+agendar+uma+consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #555555, #8A8A8A)" }}
          >
            Agendar minha consulta
          </a>
        </div>
      </div>
    </section>
  );
}
