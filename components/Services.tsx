import { Briefcase, Shield, Scale, Users, CircleCheck } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    subtitle: "Defesa dos seus direitos trabalhistas",
    description:
      "Atuação completa em demandas relacionadas ao vínculo empregatício, desde a contratação até eventual rescisão, garantindo que empregadores cumpram todas as obrigações legais.",
    items: [
      "Rescisão indireta e demissão sem justa causa",
      "Horas extras e adicional noturno",
      "Assédio moral e sexual no trabalho",
      "Reconhecimento de vínculo empregatício",
      "Verbas rescisórias não pagas",
      "FGTS e seguro-desemprego",
      "Equiparação salarial e desvio de função",
      "Acidentes de trabalho e doenças ocupacionais",
    ],
    color: "#5E2D5B",
    light: "#F5EDF4",
  },
  {
    icon: Shield,
    title: "Direito Previdenciário",
    subtitle: "Protegendo seu futuro e seus benefícios",
    description:
      "Assessoria especializada em benefícios do INSS e seguridade social, com atuação tanto extrajudicial quanto judicial para garantir que você receba o que é seu por direito.",
    items: [
      "Aposentadoria por tempo de contribuição",
      "Aposentadoria por invalidez e incapacidade",
      "Benefício de Prestação Continuada (BPC/LOAS)",
      "Auxílio-doença e perícia médica no INSS",
      "Pensão por morte",
      "Salário-maternidade",
      "Revisão de benefícios negados ou cortados",
      "Planejamento previdenciário",
    ],
    color: "#C9A96E",
    light: "#FBF6ED",
  },
];

const extras = [
  {
    icon: Scale,
    title: "Negociações e Acordos",
    description: "Mediação para resolução extrajudicial de conflitos trabalhistas, buscando acordos vantajosos sem a necessidade de processo judicial.",
  },
  {
    icon: Users,
    title: "Atendimento Feminino",
    description: "Atenção especial às demandas das mulheres: licença-maternidade, estabilidade gestante, equiparação salarial e proteção contra assédio.",
  },
];

export default function Services() {
  return (
    <section id="areas" style={{ background: "#F5EDF4" }} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "#C9A96E" }}>
            Áreas de Atuação
          </span>
          <h2
            className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4"
            style={{ fontFamily: "Georgia, serif", color: "#2C1A2E" }}
          >
            Especialidades que defendem
            <br />
            quem mais precisa
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Main services */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-8 card-hover"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: service.light }}
                >
                  <Icon size={26} style={{ color: service.color }} />
                </div>

                <h3
                  className="font-display text-xl font-bold mb-1"
                  style={{ fontFamily: "Georgia, serif", color: "#2C1A2E" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: service.color }}>
                  {service.subtitle}
                </p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#6B6170" }}>
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CircleCheck size={15} style={{ color: service.color, marginTop: 3, flexShrink: 0 }} />
                      <span className="text-sm" style={{ color: "#2C1A2E" }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/5514999999999?text=Olá%2C+Dra.+Eduarda!+Tenho+uma+dúvida+sobre+direito+trabalhista%2Fprevidenciário."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: service.color }}
                >
                  Tirar uma dúvida →
                </a>
              </div>
            );
          })}
        </div>

        {/* Extra services */}
        <div className="grid md:grid-cols-2 gap-6">
          {extras.map((extra) => {
            const Icon = extra.icon;
            return (
              <div
                key={extra.title}
                className="bg-white bg-opacity-70 rounded-2xl p-6 flex gap-4 items-start card-hover"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #5E2D5B, #9B5997)" }}
                >
                  <Icon size={20} color="white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: "#2C1A2E" }}>{extra.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B6170" }}>{extra.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
