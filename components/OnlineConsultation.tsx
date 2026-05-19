import { Video, MessageCircle, Clock, CircleCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Entre em contato",
    description: "Envie uma mensagem pelo WhatsApp ou Instagram descrevendo brevemente sua situação.",
  },
  {
    number: "02",
    icon: Clock,
    title: "Agende seu horário",
    description: "Escolha o melhor dia e horário para a sua consulta, com total flexibilidade.",
  },
  {
    number: "03",
    icon: Video,
    title: "Realizamos a consulta",
    description: "A consulta ocorre por videochamada (Google Meet, WhatsApp ou Zoom), com segurança e privacidade.",
  },
  {
    number: "04",
    icon: CircleCheck,
    title: "Receba seu plano de ação",
    description: "Após a consulta, você recebe uma orientação clara sobre seus direitos e os próximos passos.",
  },
];

export default function OnlineConsultation() {
  return (
    <section id="online" className="py-24" style={{ background: "#FDFAF8" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "#C9A96E" }}>
              Consulta Online
            </span>
            <h2
              className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4 leading-tight"
              style={{ fontFamily: "Georgia, serif", color: "#2C1A2E" }}
            >
              Atendimento jurídico
              <br />
              onde você estiver
            </h2>
            <div className="section-divider mb-6" />

            <p className="text-base leading-relaxed mb-4" style={{ color: "#6B6170" }}>
              Não importa onde você mora — Dra. Eduarda Carvalho atende clientes de{" "}
              <strong style={{ color: "#5E2D5B" }}>todo o Brasil</strong> por videochamada.
              Tenha acesso a um atendimento jurídico especializado sem precisar sair de casa.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#6B6170" }}>
              A consulta online é segura, sigilosa e tão eficaz quanto o atendimento presencial.
              Ideal para quem não tem tempo, mora longe ou simplesmente prefere a comodidade do digital.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {["Atendimento ágil", "100% online ou presencial", "Sigilo garantido", "Para todo o Brasil"].map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#F5EDF4" }}>
                    <CircleCheck size={12} style={{ color: "#9B5997" }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#2C1A2E" }}>{b}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5514999999999?text=Olá%2C+Dra.+Eduarda!+Gostaria+de+agendar+uma+consulta+online."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: "#25D366" }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.133.558 4.133 1.535 5.875L0 24l6.336-1.508A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.016-1.378l-.36-.214-3.727.977.996-3.634-.234-.373A9.817 9.817 0 012.182 12C2.182 6.565 6.565 2.182 12 2.182S21.818 6.565 21.818 12 17.435 21.818 12 21.818z"/>
              </svg>
              Agendar Consulta Online
            </a>
          </div>

          {/* Steps side */}
          <div className="space-y-5">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex gap-5 p-5 bg-white rounded-2xl card-hover"
                >
                  <div className="flex-shrink-0 relative">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: i % 2 === 0 ? "#F5EDF4" : "linear-gradient(135deg, #5E2D5B, #9B5997)" }}
                    >
                      <Icon size={20} style={{ color: i % 2 === 0 ? "#9B5997" : "white" }} />
                    </div>
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                      style={{ background: "#C9A96E", color: "white" }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: "#2C1A2E" }}>{step.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "#6B6170" }}>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
