"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Como funciona a primeira consulta?",
    a: "A primeira consulta é um momento para você apresentar sua situação e a Dra. Eduarda analisar se há base jurídica para ação. Pode ser feita presencialmente em Bauru/SP ou online, via WhatsApp, Google Meet ou Zoom.",
  },
  {
    q: "A consulta online tem o mesmo resultado que a presencial?",
    a: "Sim! A consulta online é tão completa quanto a presencial. Você receberá as mesmas orientações, análise do caso e plano de ação, com total segurança e sigilo.",
  },
  {
    q: "Quanto custa a consulta?",
    a: "Os honorários variam conforme a complexidade do caso. Entre em contato pelo WhatsApp para verificar os valores e as formas de pagamento disponíveis.",
  },
  {
    q: "Posso reclamar mesmo depois de assinar rescisão?",
    a: "Sim. A assinatura de um recibo de quitação não impede necessariamente uma ação trabalhista. Existem situações em que é possível questionar mesmo após a rescisão. O prazo é de 2 anos a partir do fim do contrato.",
  },
  {
    q: "O INSS negou meu benefício — o que fazer?",
    a: "Você pode recorrer administrativamente ou judicialmente. A Dra. Eduarda analisará sua situação e indicará o melhor caminho para reverter a negativa e garantir seu benefício.",
  },
  {
    q: "Atende clientes fora de Bauru?",
    a: "Sim! Por meio das consultas online, atendemos clientes de todo o Brasil. Basta entrar em contato e agendar sua consulta por videochamada.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24" style={{ background: "#FDFAF8" }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "#C9A96E" }}>
            Perguntas Frequentes
          </span>
          <h2
            className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4"
            style={{ fontFamily: "Georgia, serif", color: "#2C1A2E" }}
          >
            Tire suas dúvidas
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 2px 12px rgba(94,45,91,0.06)" }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-purple-50"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium pr-4" style={{ color: "#2C1A2E" }}>{faq.q}</span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 transition-transform duration-200"
                  style={{
                    color: "#9B5997",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#6B6170" }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm mb-4" style={{ color: "#6B6170" }}>
            Não encontrou sua dúvida? Fale diretamente com a Dra. Eduarda.
          </p>
          <a
            href="https://wa.me/5514999999999?text=Olá%2C+Dra.+Eduarda!+Tenho+uma+dúvida."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: "#9B5997" }}
          >
            Perguntar pelo WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
