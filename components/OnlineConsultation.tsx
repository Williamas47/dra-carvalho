import { MessageCircle, Clock, Video, FileCheck } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Primeiro Contato",
    description: "Envie uma mensagem pelo WhatsApp ou E-mail apresentando brevemente o seu caso trabalhista.",
  },
  {
    number: "2",
    icon: Clock,
    title: "Agendamento Técnico",
    description: "Definimos o dia e o horário para o seu atendimento inicial, conforme a disponibilidade de sua rotina.",
  },
  {
    number: "3",
    icon: Video,
    title: "Atendimento por Vídeo",
    description: "Realizamos a conversa por videochamada (Google Meet ou WhatsApp), em um ambiente virtual seguro, sigiloso e focado em compreender a fundo a sua situação.",
  },
  {
    number: "4",
    icon: FileCheck,
    title: "Envio de Documentos e Direcionamento",
    description: "Após o atendimento, você receberá a orientação técnica sobre as verbas e direitos violados, dando início ao envio eletrônico das provas para a estruturação da sua ação judicial.",
  },
];

export default function OnlineConsultation() {
  return (
    <section id="online" className="py-24" style={{ background: "#FDFAF8" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text side */}
          <div>
            <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "#C9A96E" }}>
              Atendimento Online
            </span>
            <h2
              className="font-display text-3xl md:text-4xl font-bold mt-3 mb-2 leading-tight"
              style={{ fontFamily: "Arial, sans-serif", color: "#555555" }}
            >
              Apoio jurídico ao seu alcance
            </h2>
            <div className="section-divider mb-6" />

            <p className="text-base leading-relaxed mb-4" style={{ color: "#666666" }}>
              O atendimento por videochamada e o envio digital de documentos foram estruturados como uma alternativa
              para atender trabalhadoras que não conseguem comparecer ao escritório.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#666666" }}>
              Esse formato inicial à distância oferece um ambiente seguro e sigiloso para que você possa apresentar
              o seu caso com total tranquilidade. Assim, analisamos seus documentos e organizamos a sua defesa com
              o mesmo cuidado e eficácia do formato tradicional, respeitando o seu tempo e a sua realidade.
            </p>

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
          <div>
            <h3 className="font-semibold text-base mb-5" style={{ color: "#555555" }}>
              Como funciona o atendimento online:
            </h3>
            <div className="space-y-4">
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
                        style={{ background: i % 2 === 0 ? "#F2F2F2" : "linear-gradient(135deg, #555555, #8A8A8A)" }}
                      >
                        <Icon size={20} style={{ color: i % 2 === 0 ? "#8A8A8A" : "white" }} />
                      </div>
                      <span
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                        style={{ background: "#C9A96E", color: "white" }}
                      >
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: "#555555" }}>{step.title}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
