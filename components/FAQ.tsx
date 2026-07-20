"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Como funciona o primeiro atendimento?",
    a: "O atendimento inicial é o momento em que ouvimos a sua demanda com calma e atenção. Analisamos os detalhes do seu caso para identificar quais direitos trabalhistas foram violados pela empresa. A partir disso, explicamos de forma simples e transparente o que diz a lei e orientamos você sobre os caminhos mais seguros para buscar a reparação do seu prejuízo na Justiça.",
  },
  {
    q: "O escritório atende clientes fora de Bauru (SP)?",
    a: "Sim. Através do atendimento online por videochamada e do envio digital de documentos, conseguimos acolher e analisar o caso de trabalhadoras que residem em outras localidades e que não possuem a disponibilidade de comparecer ao escritório físico em Bauru (SP).",
  },
  {
    q: "Preciso pagar alguma coisa para a empresa se eu perder o processo?",
    a: "Desde as mudanças na lei trabalhista, o ideal é que a ação judicial seja proposta com base em provas sólidas para evitar riscos. Durante o nosso atendimento, fazemos uma análise criteriosa de todos os seus documentos justamente para ingressar com a ação de forma segura, minimizando riscos e buscando a concessão da Justiça Gratuita para a sua proteção financeira.",
  },
  {
    q: "Fui demitida grávida, mas a empresa alega que não sabia da gestação. Ainda tenho direitos?",
    a: "Sim. A estabilidade da gestante é um direito objetivo da trabalhadora. O desconhecimento do empregador sobre a gravidez no momento da demissão não retira o seu direito à reintegração ou à indenização substitutiva. Essa reparação pode e deve ser exigida por via judicial.",
  },
  {
    q: "Trabalhei anos como empregada doméstica sem registro. Consigo receber meus direitos na Justiça?",
    a: "Com certeza. A ausência de registro na carteira de trabalho é uma grave irregularidade. Por meio da ação judicial trabalhista, apresentamos as provas do seu dia a dia de trabalho para que o juiz reconheça o vínculo de emprego. Uma vez reconhecido, a lei obriga o empregador a pagar todos os valores retroativos, como décimo terceiro, férias, FGTS e as multas devidas.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24" style={{ background: "#FDFAF8" }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-6">
          <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "#C9A96E" }}>
            Perguntas Frequentes
          </span>
          <h2
            className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4"
            style={{ fontFamily: "Arial, sans-serif", color: "#555555" }}
          >
            Tire suas dúvidas
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-base" style={{ color: "#666666" }}>
            Tire suas dúvidas sobre o atendimento e a atuação judicial.
          </p>
        </div>

        <div className="space-y-3 mt-10">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 2px 12px rgba(85,85,85,0.06)" }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium pr-4" style={{ color: "#555555" }}>{faq.q}</span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 transition-transform duration-200"
                  style={{
                    color: "#8A8A8A",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm mb-4" style={{ color: "#666666" }}>
            Não encontrou sua dúvida? Fale diretamente com a Dra. Eduarda.
          </p>
          <a
            href="https://wa.me/5514910149061?text=Olá%2C+Dra.+Eduarda!+Tenho+uma+dúvida."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: "#8A8A8A" }}
          >
            Perguntar pelo WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
